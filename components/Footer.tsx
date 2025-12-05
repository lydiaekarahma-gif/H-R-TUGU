import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">H&R TUGU</h3>
            <p className="mb-4">Mitra terpercaya untuk solusi dokumen dan pembayaran digital Anda.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Jalan Raya Tugulilin, sebelah toko jamu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>0815-7779-520</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-semibold text-white mb-4">Jam Operasional</h4>
             <ul className="space-y-3">
               <li className="flex items-center gap-3">
                 <Clock className="w-5 h-5 text-blue-500" />
                 <span>Senin - Sabtu: 07.00 - 17.00</span>
               </li>
               <li className="flex items-center gap-3 ml-8">
                 <span>Minggu: Libur</span>
               </li>
             </ul>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} H&R TUGU. All rights reserved.
        </div>
      </div>
    </footer>
  );
};