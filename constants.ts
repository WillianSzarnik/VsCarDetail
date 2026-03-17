import { ServicePackage, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "(41) 99856-6102",
  whatsappRaw: "5541998566102",
  address: "Rua Ouro Verde, 766",
  neighborhood: "Capão Raso",
  instagramRaw: "vscar.detaill"
};

export const DETAILING_PACKAGES: ServicePackage[] = [
  {
    id: 'lav-simples',
    title: 'LAVAGEM SIMPLES',
    tier: 'bronze',
    price: '90,00',
    features: [
      'Pré-lavagem (Limpeza sem toque)',
      'Lavagem externa técnica',
      'Limpeza interna (Superficial)',
      'Limpeza de rodas (Superficial)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'lav-detalhada',
    title: 'LAVAGEM DETALHADA',
    tier: 'gold',
    price: '150,00',
    features: [
      'Pré-lavagem (Limpeza sem toque)',
      'Detalhamento externo (Completo)',
      'Detalhamento interno (Completo - com pincel)',
      'Limpeza de rodas e caixas',
      'Aplicação de cera PREMIUM',
      'Selante nos pneus'
    ]
  },
  {
    id: 'det-platinum',
    title: 'PLATINUM',
    tier: 'platinum',
    price: '389,99',
    features: [
      'Pré-lavagem (Limpeza sem toque)',
      'Detalhamento externo (Completo)',
      'Detalhamento interno (Completo - com pincel)',
      'Limpeza Roéks (Caixa de rodas)',
      'Cristalização de para-brisa',
      'Limpeza de motor',
      'Descontaminação de vidros',
      'Aplicação de cera PREMIUM',
      'Selante nos pneus'
    ]
  }
];

export const TREATMENT_PACKAGES: ServicePackage[] = [
  {
    id: 'hig-interna',
    title: 'HIGIENIZAÇÃO INTERNA',
    tier: 'bronze',
    price: '350,00',
    features: [
      'Detalhamento Externo (Completo)',
      'Detalhamento Interno (Completo - com pincel)',
      'Higienização Interna Profunda',
      'Descontaminação de Pintura',
      'Limpeza de Motor (Aplicação de proteção)',
      'Descontaminação de vidros',
      'Cristalização de para-brisa',
      'Aplicação de cera pastosa (6 meses)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'pol-completo',
    title: 'POLIMENTO COMPLETO',
    tier: 'gold',
    price: '350,00',
    features: [
      'Detalhamento Externo (Completo)',
      'Detalhamento Interno (Completo - com pincel)',
      'Descontaminação de Pintura',
      'Polimento Técnico (Correção de pintura)',
      'Limpeza de Motor (Aplicação de proteção)',
      'Descontaminação de vidros',
      'Cristalização de para-brisa',
      'Aplicação de cera pastosa (6 meses)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'trat-completo',
    title: 'TRATAMENTO COMPLETO',
    tier: 'platinum',
    price: '899,99',
    features: [
      'Detalhamento PREMIUM (Interno/Externo)',
      'Detalhamento Interno (A vapor)',
      'Higienização profunda de bancos',
      'Higienização interna',
      'Polimento Técnico (Correção de pintura)',
      'Higienização de Ar-condicionado',
      'Revitalização de plásticos',
      'Hidratação de couro',
      'Aplicação de proteção (1 Ano)',
      'Selante nos pneus (Melhor do mercado)'
    ]
  }
];

export const VITRIFICATION_PACKAGES: ServicePackage[] = [
  {
    id: 'vit-bronze',
    title: 'VITRIFICAÇÃO BRONZE',
    tier: 'bronze',
    price: '800,00',
    features: [
      'Detalhamento Externo (Completo)',
      'Detalhamento Interno (Completo - Com pincel)',
      'Cristalização de Para-brisa',
      'Descontaminação de Pintura',
      'Polimento Técnico (Correção de pintura)',
      'Aplicação de Vitrificador (1 Ano)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'vit-gold',
    title: 'VITRIFICAÇÃO GOLD',
    tier: 'gold',
    price: '1499,99',
    features: [
      'Detalhamento Externo (Completo)',
      'Detalhamento Interno (Completo - Com pincel)',
      'Cristalização de Para-brisa',
      'Descontaminação de Pintura',
      'Polimento Técnico (Correção de pintura)',
      'Aplicação de Vitrificador (2 Anos)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'vit-platinum',
    title: 'VITRIFICAÇÃO PLATINUM',
    tier: 'platinum',
    price: '1899,99',
    features: [
      'Detalhamento Externo (Completo)',
      'Detalhamento Interno (Completo - Com pincel)',
      'Cristalização de Para-brisa',
      'Descontaminação de Pintura',
      'Polimento Técnico (Correção de pintura)',
      'Aplicação de Vitrificador (3 Anos - Melhor do mercado)',
      'Selante nos pneus'
    ]
  }
];

export const EXTRA_SERVICES: ServicePackage[] = [
  {
    id: 'farois-pol',
    title: 'POLIMENTO FARÓIS',
    tier: 'bronze',
    price: '20,00',
    features: [
      'Remoção de amarelado',
      'Melhora na visibilidade noturna',
      'Valor por unidade'
    ]
  },
  {
    id: 'farois-rest',
    title: 'RESTAURAÇÃO FARÓIS',
    tier: 'gold',
    price: '65,00',
    features: [
      'Lixamento técnico profundo',
      'Aplicação de verniz protetor',
      'Acabamento original',
      'Valor por unidade'
    ]
  },
  {
    id: 'motor-lav',
    title: 'LAVAGEM MOTOR',
    tier: 'bronze',
    price: '80,00',
    features: [
      'Limpeza técnica do cofre',
      'Remoção de óleos e graxas',
      'Verniz de motor (Proteção)'
    ]
  },
  {
    id: 'motor-sujo',
    title: 'MOTOR MUITO SUJO',
    tier: 'gold',
    price: '120,00',
    features: [
      'Limpeza profunda (Resíduos pesados)',
      'Desengraxante técnico especial',
      'Verniz de motor (Proteção)'
    ]
  }
];
