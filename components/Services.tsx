import React from 'react';
import { Copy, Keyboard, Smartphone, Zap, Printer } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'FOTOCOPY',
    description: 'Layanan fotocopy cepat hitam putih dan warna. Kualitas kertas terbaik.',
    iconName: 'copy',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 hover:bg-orange-200',
  },
  {
    id: '2',
    title: 'PENGETIKAN',
    description: 'Jasa pengetikan dokumen, tugas sekolah, surat menyurat, dan makalah.',
    iconName: 'keyboard',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 hover:bg-blue-200',
  },
  {
    id: '3',
    title: 'PULSA & KUOTA',
    description: 'Isi ulang pulsa semua operator dan paket data internet harga bersaing.',
    iconName: 'smartphone',
    color: 'text-red-600',
    bgColor: 'bg-red-100 hover:bg-red-200',
  },
  {
    id: '4',
    title: 'LISTRIK / TOKEN',
    description: 'Pembayaran tagihan listrik pascabayar dan pembelian token listrik prabayar.',
    iconName: 'zap',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 hover:bg-yellow-200',
  },
  {
    id: '5',
    title: 'CETAK & SCAN',
    description: 'Cetak foto berbagai ukuran, scan dokumen ke PDF, cetak undangan, dll.',
    iconName: 'printer',
    color: 'text-green-600',
    bgColor: 'bg-green-100 hover:bg-green-200',
  },
];

const IconMap = {
  copy: Copy,
  keyboard: Keyboard,
  smartphone: Smartphone,
  zap: Zap,
  printer: Printer,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai solusi untuk kebutuhan dokumen dan digital Anda dalam satu tempat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div 
                key={service.id}
                className={`${service.bgColor} rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group`}
              >
                <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};