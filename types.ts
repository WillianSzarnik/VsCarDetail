export type Tier = 'bronze' | 'gold' | 'platinum';

export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  features: string[];
  tier: Tier;
}

export interface ContactInfo {
  phone: string;
  whatsappRaw: string; // Just numbers for the link
  address: string;
  neighborhood: string;
  instagramRaw: string;
}
