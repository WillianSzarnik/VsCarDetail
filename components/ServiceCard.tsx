import React from 'react';
import { ServicePackage } from '../types';
import { Check } from 'lucide-react';

interface Props {
  pkg: ServicePackage;
}

const ServiceCard: React.FC<Props> = ({ pkg }) => {
  // Styles based on Tier
  const getStyles = () => {
    switch (pkg.tier) {
      case 'bronze':
        return {
          border: 'border-orange-700/50',
          titleGradient: 'from-orange-300 via-orange-500 to-orange-800',
          shadow: 'shadow-orange-900/20',
          bgGradient: 'bg-gradient-to-b from-orange-950/20 to-black',
          glow: 'group-hover:shadow-[0_0_20px_rgba(194,65,12,0.4)]'
        };
      case 'gold':
        return {
          border: 'border-yellow-600/50',
          titleGradient: 'from-yellow-200 via-yellow-400 to-yellow-700',
          shadow: 'shadow-yellow-900/20',
          bgGradient: 'bg-gradient-to-b from-yellow-950/20 to-black',
          glow: 'group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]'
        };
      case 'platinum':
        return {
          border: 'border-slate-400/50',
          titleGradient: 'from-white via-slate-300 to-slate-500',
          shadow: 'shadow-slate-700/30',
          bgGradient: 'bg-gradient-to-b from-slate-800/30 to-black',
          glow: 'group-hover:shadow-[0_0_25px_rgba(203,213,225,0.4)]'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`group relative rounded-2xl border ${styles.border} ${styles.bgGradient} p-6 flex flex-col items-center transition-all duration-500 hover:scale-[1.02] ${styles.shadow} ${styles.glow}`}>
      
      {/* Title */}
      <h3 className={`font-display text-4xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b ${styles.titleGradient} mb-6 drop-shadow-sm`}>
        {pkg.title}
      </h3>

      {/* Features List */}
      <ul className="w-full space-y-3 mb-8 flex-grow">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm md:text-base font-medium">
            <span className="mt-1 min-w-[16px]">
              <Check size={14} className="text-white/70" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="w-full pt-4 border-t border-white/10 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-sm font-light text-gray-400">R$</span>
          <span className="font-display text-5xl font-bold text-white">{pkg.price.split(',')[0]}</span>
          <span className="text-xl font-bold text-gray-400">,{pkg.price.split(',')[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;