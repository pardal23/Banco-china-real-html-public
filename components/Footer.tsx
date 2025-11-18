import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      {/* Contact Strip */}
      <div className="bg-boc-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Customer Service</h4>
              <p className="text-2xl text-boc-red font-bold font-mono">95566</p>
              <p className="text-sm text-gray-500 mt-1">24/7 Global Support Hotline</p>
            </div>
            <div>
               <h4 className="font-bold text-gray-800 mb-2">Quick Links</h4>
               <div className="flex flex-col space-y-1 text-sm text-gray-600">
                 <a href="#" className="hover:text-boc-red">Branch Locator</a>
                 <a href="#" className="hover:text-boc-red">Service Charges</a>
                 <a href="#" className="hover:text-boc-red">Calculators</a>
               </div>
            </div>
            <div>
               <h4 className="font-bold text-gray-800 mb-2">Connect</h4>
               <div className="flex justify-center md:justify-start space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white hover:bg-boc-red cursor-pointer">W</div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white hover:bg-boc-red cursor-pointer">L</div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white hover:bg-boc-red cursor-pointer">F</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 text-gray-400 py-6 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="block md:inline mr-4">Copyright © BANK OF CHINA(BOC) All Rights Reserved.</span>
            <span className="block md:inline mt-2 md:mt-0">京ICP备10052455号</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Site Map</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};