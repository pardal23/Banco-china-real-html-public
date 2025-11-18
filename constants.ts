import { NavItem, NewsItem, ExchangeRate } from './types';

export const MAIN_NAV: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Corporate Banking', href: '/corporate' },
  { label: 'Personal Banking', href: '/personal' },
  { label: 'Bank Cards', href: '/cards' },
  { label: 'Information', href: '/info' },
  { label: 'Investor Relations', href: '/investor' },
];

export const HEADLINE_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Chairman Ge Haijiao Meets with Prof. Joachim Nagel, President of the Deutsche Bundesbank',
    date: '2025-11-17',
    url: '#',
    category: 'Management'
  },
  {
    id: '2',
    title: 'BOC Research Institute Releases 2025Q4 Economic and Financial Outlook',
    date: '2025-11-04',
    url: '#',
    category: 'Research'
  },
  {
    id: '3',
    title: 'Chairman Ge Haijiao Meets with Her Excellency Dr. Leila Benali, Minister of Energy Transition',
    date: '2025-10-13',
    url: '#',
    category: 'Management'
  },
  {
    id: '4',
    title: 'Chairman Ge Haijiao Meets with H.E. Khalid Al-Falih, Minister of Investment of Saudi Arabia',
    date: '2025-08-27',
    url: '#',
    category: 'Management'
  }
];

export const ANNOUNCEMENTS: NewsItem[] = [
  {
    id: 'a1',
    title: 'Announcement on Temporary Suspension of Corporate Online Financial Services (10.19)',
    date: '2025-10-16',
    url: '#'
  },
  {
    id: 'a2',
    title: 'Announcement on Temporary Suspension of Personal E-banking Services (10.19)',
    date: '2025-10-15',
    url: '#'
  },
  {
    id: 'a3',
    title: 'Announcement on the Migration of "Corporate Account Inquiry" Function on Telephone Banking',
    date: '2025-09-25',
    url: '#'
  }
];

export const MOCK_RATES: ExchangeRate[] = [
  { currency: 'USD', buy: 718.23, sell: 721.15, flag: '🇺🇸' },
  { currency: 'EUR', buy: 765.42, sell: 770.89, flag: '🇪🇺' },
  { currency: 'GBP', buy: 890.12, sell: 896.55, flag: '🇬🇧' },
  { currency: 'JPY', buy: 4.85, sell: 4.91, flag: '🇯🇵' },
];

export const BANNER_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1533237264847-74f8514b36de?q=80&w=2000&auto=format&fit=crop', // Marathon/Running abstract
    title: 'Bank of China Welcomes Global Runners to 2025 Guangzhou Marathon',
    subtitle: 'Supporting health and excellence'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop', // Business/Coffee
    title: 'Global Services for a Connected World',
    subtitle: 'Your trusted partner in international finance'
  }
];