export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category?: string;
  url: string;
}

export interface ExchangeRate {
  currency: string;
  buy: number;
  sell: number;
  flag: string;
}

export enum LoginType {
  PERSONAL = 'Personal Banking',
  VIP = 'Personal Banking (VIP)',
  CORPORATE = 'Corporate Banking',
  IGTB = 'iGTB Corporate',
}