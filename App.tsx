import React from 'react';
import { Header, getIconForLabel } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { Footer } from './components/Footer';
import { LoginPanel } from './components/LoginPanel';
import { NewsSection } from './components/NewsSection';
import { ServiceCard } from './components/ServiceCard';
import { ExchangeTicker } from './components/ExchangeTicker';
import { MessageCircle } from 'lucide-react';

// Define structure for service cards
const SERVICE_SECTIONS = [
  {
    title: 'Corporate Banking',
    links: ['Corporate Financing', 'Trade Services', 'Financial Services', 'RMB Settlement', 'Corporate Savings'],
    hrefPrefix: '/corporate'
  },
  {
    title: 'Personal Banking',
    links: ['Personal Savings', 'Personal Loans', 'Wealth Management', 'Forex Services', 'Cross-Border Finance'],
    hrefPrefix: '/personal'
  },
  {
    title: 'Bank Cards',
    links: ['Credit Cards', 'Debit Cards', 'Card Services', 'Installments', 'Promotions'],
    hrefPrefix: '/cards'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Area */}
        <HeroSlider />

        {/* Main Grid Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Services (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              {SERVICE_SECTIONS.map((section) => (
                <ServiceCard 
                  key={section.title}
                  title={section.title}
                  icon={getIconForLabel(section.title)}
                  links={section.links}
                  linkHrefPrefix={section.hrefPrefix}
                />
              ))}
            </div>

            {/* Center Column: News (6 cols) */}
            <div className="lg:col-span-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[600px]">
                    <NewsSection />
                </div>
            </div>

            {/* Right Column: Login & Tools (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              <LoginPanel />
              <ExchangeTicker />
              
              {/* Quick Promo Card */}
              <div className="bg-gradient-to-br from-boc-red to-boc-darkRed rounded-lg p-4 text-white shadow-md">
                  <h4 className="font-bold mb-2">Sustainability Series Bonds</h4>
                  <p className="text-xs opacity-90 mb-4">Bank of China Limited Sustainability Series Bonds Management Statement.</p>
                  <button className="text-xs bg-white text-boc-red px-3 py-1 rounded font-bold hover:bg-gray-100 transition-colors">
                      Learn More
                  </button>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating Chat Action Button (Visual only) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-boc-red text-white p-4 rounded-full shadow-lg hover:bg-boc-darkRed transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300">
            <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;