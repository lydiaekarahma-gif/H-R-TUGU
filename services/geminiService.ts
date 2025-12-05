import { GoogleGenAI } from "@google/genai";

const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Kamu adalah asisten virtual ramah untuk "H&R TUGU", sebuah usaha layanan jasa.

Informasi Usaha:
- Nama: H&R TUGU
- Alamat: Jalan Raya Tugulilin, sebelah toko jamu
- Nomor HP/WA: 0815-7779-520
- Jam Operasional: Senin - Sabtu: 07.00 - 17.00, Minggu: Libur

Layanan yang tersedia:
1. FOTOCOPY (Hitam putih & Warna)
2. PENGETIKAN (Dokumen, Tugas, Surat)
3. PULSA/KUOTA (Semua operator)
4. LISTRIK/TOKEN (Pembayaran tagihan & token)
5. CETAK FOTO, SCAN, UNDANGAN, DLL.

Jawablah pertanyaan pelanggan dengan sopan, singkat, dan informatif dalam Bahasa Indonesia.
Jika pelanggan bertanya lokasi atau jam buka, gunakan informasi di atas.
Jika pelanggan bertanya harga, berikan estimasi umum (contoh: "Untuk harga pastinya silakan datang langsung ke toko, namun biasanya mulai dari Rp X").
Tujuannya adalah mengajak pelanggan untuk datang ke toko atau menghubungi via WhatsApp.
`;

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    // Construct chat history for context
    // In a real app, we would use chat.sendMessageStream or keep the chat object alive.
    // Here we do a stateless request for simplicity, passing context via system instruction + history.
    
    const contents = [
      {
        role: 'user',
        parts: [{ text: `Context: History percakapan sebelumnya: ${JSON.stringify(history)}` }]
      },
      {
         role: 'user',
         parts: [{ text: newMessage }]
      }
    ];

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Maaf, saya sedang mengalami gangguan. Silakan hubungi kami langsung.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, terjadi kesalahan pada sistem AI kami.";
  }
};