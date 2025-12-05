import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl mix-blend-multiply filter animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl mix-blend-multiply filter animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-blue-500 rounded-full blur-3xl mix-blend-multiply filter animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium tracking-wide">Solusi Dokumen & Digital Terlengkap</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-red-500 drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">H</span>
              <span className="text-green-500 mx-1">&</span>
              <span className="text-red-500 drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">R</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                TUGU
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto md:mx-0">
              Melayani segala kebutuhan administrasi Anda mulai dari fotocopy, pengetikan, hingga kebutuhan digital seperti pulsa dan token listrik. Cepat, Murah, Berkualitas.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-red-500/30 flex items-center gap-2"
              >
                Lihat Layanan <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://wa.me/628157779520', '_blank')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm border border-white/10"
              >
                Hubungi Kami
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-orange-500 p-6 rounded-2xl text-white flex flex-col items-center justify-center h-32 shadow-lg">
                    <span className="font-bold text-xl">FOTOCOPY</span>
                 </div>
                 <div className="bg-blue-600 p-6 rounded-2xl text-white flex flex-col items-center justify-center h-32 shadow-lg mt-8">
                    <span className="font-bold text-xl">PENGETIKAN</span>
                 </div>
                 <div className="bg-red-600 p-6 rounded-2xl text-white flex flex-col items-center justify-center h-32 shadow-lg -mt-8">
                    <span className="font-bold text-xl">PULSA</span>
                 </div>
                 <div className="bg-green-600 p-6 rounded-2xl text-white flex flex-col items-center justify-center h-32 shadow-lg">
                    <span className="font-bold text-xl">CETAK</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};