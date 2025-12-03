import React from 'react';
import { DETAILING_PACKAGES, VITRIFICATION_PACKAGES, TREATMENT_PACKAGES } from '../constants';
import ServiceCard from './ServiceCard';

const ServicesTab: React.FC = () => {
  const sortedDetailing = [...DETAILING_PACKAGES].sort((a, b) => {
    const order = { bronze: 1, gold: 2, platinum: 3 };
    return order[a.tier] - order[b.tier];
  });

  const sortedTreatments = [...TREATMENT_PACKAGES].sort((a, b) => {
    const order = { bronze: 1, gold: 2, platinum: 3 };
    return order[a.tier] - order[b.tier];
  });

  const sortedVitrification = [...VITRIFICATION_PACKAGES].sort((a, b) => {
    const order = { bronze: 1, gold: 2, platinum: 3 };
    return order[a.tier] - order[b.tier];
  });

  return (
    <div className="pb-24 pt-2 px-4 max-w-5xl mx-auto w-full animate-fade-in">
      
      {/* Header Line and Title */}
      <div className="flex flex-col items-center mb-10 animate-slide-up">
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4"></div>
        <h1 className="font-display text-2xl tracking-[0.3em] font-bold text-white uppercase">
          Serviços
        </h1>
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4"></div>
      </div>

      {/* SECTION 1: Detalhamento */}
      <div className="mb-16">
        <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="font-display text-3xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white drop-shadow-md inline-block border-b-4 border-purple-600 pb-1 px-4 transform -skew-x-6">
            Detalhamento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 align-stretch">
          {sortedDetailing.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${200 + (index * 100)}ms` }}
            >
              <ServiceCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Tratamentos */}
      <div className="mb-16">
        <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h2 className="font-display text-3xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white drop-shadow-md inline-block border-b-4 border-pink-600 pb-1 px-4 transform -skew-x-6">
            Tratamentos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 align-stretch">
          {sortedTreatments.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${500 + (index * 100)}ms` }}
            >
              <ServiceCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Vitrificação */}
      <div>
        <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <h2 className="font-display text-3xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white drop-shadow-md inline-block border-b-4 border-blue-600 pb-1 px-4 transform -skew-x-6">
            Vitrificação
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 align-stretch">
          {sortedVitrification.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className={`animate-slide-up ${pkg.tier === 'platinum' ? 'relative z-10' : ''}`}
              style={{ animationDelay: `${900 + (index * 100)}ms` }}
            >
               <ServiceCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ServicesTab;