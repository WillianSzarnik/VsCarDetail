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
    price: '149,99',
    features: [
      'Pré-lavagem (limpeza sem toque)',
      'Lavagem com shampoo neutro e esfregação',
      'Limpeza interna',
      'Limpeza de rodas',
      'Aplicação de cera líquida',
      'Selante nos pneus'
    ]
  },
  {
    id: 'det-gold',
    title: 'GOLD',
    tier: 'gold',
    price: '249,99',
    features: [
      'Detalhamento externo completo',
      'Detalhamento interno completo (com pincel)',
      'Limpeza caixas de rodas',
      'Aplicação de cera premium',
      'Selante nos pneus'
    ]
  },
  {
    id: 'det-platinum',
    title: 'PLATINUM',
    tier: 'platinum',
    price: '399,99',
    features: [
      'Detalhamento externo completo',
      'Detalhamento interno completo (com pincel)',
      'Cristalização de para-brisa',
      'Limpeza de motor',
      'Descontaminação de vidros',
      'Selante nos pneus',
      'Aplicação de cera premium'
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
