import React from 'react';
import { Lock, User, Briefcase, Star } from 'lucide-react';

export const LoginPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-boc-red">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <Lock className="w-5 h-5 mr-2 text-boc-red" />
        Secure Login
      </h3>
      
      <div className="space-y-3">
        <button className="w-full group relative flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-boc-red hover:bg-red-50 transition-all duration-200">
            <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-full mr-3 group-hover:bg-boc-red group-hover:text-white transition-colors">
                    <User size={16} className="text-boc-red group-hover:text-white" />
                </div>
                <div className="text-left">
                    <div className="text-sm font-bold text-gray-800">Personal Banking</div>
                    <div className="text-xs text-gray-500">Standard Service</div>
                </div>
            </div>
        </button>

        <button className="w-full group relative flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-all duration-200">
            <div className="flex items-center">
                <div className="bg-amber-100 p-2 rounded-full mr-3 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Star size={16} className="text-amber-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                    <div className="text-sm font-bold text-gray-800">VIP Banking</div>
                    <div className="text-xs text-gray-500">Exclusive Access</div>
                </div>
            </div>
        </button>

        <button className="w-full group relative flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-200">
            <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Briefcase size={16} className="text-blue-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                    <div className="text-sm font-bold text-gray-800">Corporate Banking</div>
                    <div className="text-xs text-gray-500">Enterprise Solutions</div>
                </div>
            </div>
        </button>

        <div className="pt-2 border-t border-gray-100 mt-2">
            <a href="#" className="block text-xs text-center text-gray-500 hover:text-boc-red">
                iGTB Corporate Banking Login &rarr;
            </a>
        </div>
      </div>
    </div>
  );
};