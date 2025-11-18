import React, { useState } from 'react';
import { Search, Menu, X, Globe, Briefcase, User, CreditCard, Info, TrendingUp } from 'lucide-react';
import { MAIN_NAV } from '../constants';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
      {/* Top Utility Bar */}
      <div className="bg-boc-gray border-b border-gray-200 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex justify-between items-center">
          <div className="hidden md:flex space-x-4">
            <span>Global Portal</span>
            <span>Investor Relations</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-boc-red transition-colors flex items-center gap-1">
              <Globe size={12} /> 简体中文
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-boc-red transition-colors font-bold text-boc-red">
              ENGLISH
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-boc-red transition-colors">
              Accessible Browse
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Approximated BOC Logo using Text/Icon for demo purposes if no image */}
            <div className="w-10 h-10 rounded-full border-4 border-boc-red flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-boc-red"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-black tracking-wide leading-none">BANK OF CHINA</span>
              <span className="text-xs tracking-[0.2em] text-gray-500 font-serif">ALWAYS WITH YOU</span>
            </div>
          </div>

          {/* Desktop Navigation - Primary */}
          <div className="hidden lg:flex space-x-1">
             <div className="relative group">
                <div className="flex items-center">
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400 mr-3" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="block w-48 pl-2 pr-10 py-1.5 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-boc-red focus:border-boc-red sm:text-sm transition duration-150 ease-in-out"
                    />
                </div>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-boc-red"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Red Strip) */}
      <div className="hidden lg:block bg-boc-red text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center">
                {MAIN_NAV.map((item) => (
                    <a 
                        key={item.label} 
                        href={item.href} 
                        className="text-sm font-medium hover:bg-boc-darkRed px-3 py-4 h-full flex items-center transition-colors duration-200"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {MAIN_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-boc-red hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export const getIconForLabel = (label: string) => {
    switch(label) {
        case 'Corporate Banking': return <Briefcase className="w-5 h-5 mb-2 text-boc-red" />;
        case 'Personal Banking': return <User className="w-5 h-5 mb-2 text-boc-red" />;
        case 'Bank Cards': return <CreditCard className="w-5 h-5 mb-2 text-boc-red" />;
        case 'Information': return <Info className="w-5 h-5 mb-2 text-boc-red" />;
        case 'Investor Relations': return <TrendingUp className="w-5 h-5 mb-2 text-boc-red" />;
        default: return <Globe className="w-5 h-5 mb-2 text-boc-red" />;
    }
}