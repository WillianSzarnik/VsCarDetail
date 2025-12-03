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
    id: 'det-bronze',
    title: 'BRONZE',
    tier: 'bronze',
    price: '129,99',
    features: [
      'Pré-lavagem (Limpeza sem toque)',
      'Lavagem externa (Shampoo neutro e esfregação)',
      'Limpeza interna (Superficial)',
      'Limpeza de rodas (Superficial)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'det-gold',
    title: 'GOLD',
    tier: 'gold',
    price: '239,99',
    features: [
      'Pré-lavagem (Limpeza sem toque)',
      'Detalhamento externo (Completo)',
      'Detalhamento interno (Completo - com pincel)',
      'Limpeza Roéks (Caixa de rodas)',
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
    id: 'trat-interno',
    title: 'TRATAMENTO INTERNO',
    tier: 'bronze',
    price: '499,99',
    features: [
      'Detalhamento Externo (Completo)',
      'Detalhamento Interno (Completo - com pincel)',
      'Higienização Interna',
      'Descontaminação de Pintura',
      'Limpeza de Motor (Aplicação de proteção)',
      'Descontaminação de vidros',
      'Cristalização de para-brisa',
      'Aplicação de cera pastosa (6 meses)',
      'Selante nos pneus'
    ]
  },
  {
    id: 'trat-pintura',
    title: 'TRATAMENTO DE PINTURA',
    tier: 'gold',
    price: '599,99',
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
    price: '999,99',
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