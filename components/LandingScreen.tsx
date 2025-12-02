import React from 'react';
import { Logo } from './Logo';
import { LayoutList, MessageCircle, ChevronRight } from 'lucide-react';

interface Props {
  onEnter: (tab: 'services' | 'contact') => void;
}

const LandingScreen: React.FC<Props> = ({ onEnter }) => {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-center relative z-20 px-6">
      
      {/* Centered Logo - Scaled Up */}
      <div className="mb-16 transform scale-125 md:scale-150 animate-fade-in">
        <Logo />
      </div>

      {/* Menu Buttons */}
      <div className="w-full max-w-sm space-y-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
        
        {/* Services Button */}
        <button
          onClick={() => onEnter('services')}
          className="group relative w-full bg-gradient-to-r from-purple-900/80 to-purple-800/80 hover:from-purple-800 hover:to-purple-700 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-200">
              <LayoutList size={24} />
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-xl text-white tracking-wide uppercase">
                Serviços
              </span>
              <span className="text-xs text-purple-200/70 font-medium">
                Tabela de Preços e Detalhes
              </span>
            </div>
          </div>
          <ChevronRight className="text-purple-400 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Contact Button */}
        <button
          onClick={() => onEnter('contact')}
          className="group relative w-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 hover:from-gray-800 hover:to-gray-700 border border-gray-700 hover:border-gray-500 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 active:scale-95 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-900/20 text-green-400">
              <MessageCircle size={24} />
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-xl text-white tracking-wide uppercase">
                Contato
              </span>
              <span className="text-xs text-gray-400 font-medium">
                WhatsApp e Localização
              </span>
            </div>
          </div>
          <ChevronRight className="text-gray-500 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      <div className="absolute bottom-8 text-center animate-fade-in opacity-50 flex flex-col items-center gap-1" style={{ animationDelay: '800ms' }}>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
          Estética Automotiva Premium
        </p>
        <a 
          href="https://CrieMeuSite.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.2em] uppercase text-gray-600 hover:text-gray-400 transition-colors"
        >
          powered by Crie Meu Site
        </a>
      </div>
    </div>
  );
};

export default LandingScreen;