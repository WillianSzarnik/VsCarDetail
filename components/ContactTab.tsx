import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Instagram } from 'lucide-react';

const ContactTab: React.FC = () => {
  return (
    <div className="pb-24 pt-4 px-6 max-w-lg mx-auto w-full animate-fade-in flex flex-col items-center">
      
      {/* Logo removed here to avoid duplication with App header */}

      <h2 className="font-display text-3xl font-bold uppercase text-white mb-8 text-center border-b-2 border-purple-600 pb-2 px-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
        Fale Conosco
      </h2>

      {/* Main WhatsApp CTA */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Olá, gostaria de agendar um serviço.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_0_20px_rgba(22,163,74,0.4)] mb-4 group animate-slide-up"
        style={{ animationDelay: '200ms' }}
      >
        <MessageCircle size={28} className="group-hover:animate-bounce" />
        <span className="text-lg uppercase tracking-wide">Agendar via WhatsApp</span>
      </a>

      {/* Instagram CTA */}
      <a 
        href={`https://instagram.com/${CONTACT_INFO.instagramRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_0_20px_rgba(192,38,211,0.4)] mb-10 animate-slide-up"
        style={{ animationDelay: '300ms' }}
      >
        <Instagram size={28} />
        <span className="text-lg uppercase tracking-wide">@vscar.detaill</span>
      </a>

      {/* Details Card */}
      <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
        
        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Telefone</p>
            <p className="text-xl font-medium text-white">{CONTACT_INFO.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Endereço</p>
            <p className="text-lg font-medium text-white leading-tight">{CONTACT_INFO.address}</p>
            <p className="text-purple-300 font-semibold">{CONTACT_INFO.neighborhood}</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Horário</p>
            <p className="text-base text-gray-200">Seg - Sex: 08:00 - 18:00</p>
            <p className="text-base text-gray-200">Sáb: 08:00 - 12:00</p>
          </div>
        </div>

      </div>

      <div className="mt-10 flex flex-col items-center gap-2 text-center animate-slide-up" style={{ animationDelay: '500ms' }}>
        <ShieldCheck size={48} className="text-gray-600 mb-2" />
        <p className="text-gray-500 text-sm max-w-xs">
          Garantia de qualidade e uso dos melhores produtos do mercado automotivo.
        </p>
      </div>

    </div>
  );
};

export default ContactTab;