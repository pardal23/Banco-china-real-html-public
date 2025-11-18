import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  links: string[];
  linkHrefPrefix: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, links, linkHrefPrefix }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <div className="text-boc-red">{icon}</div>
        <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">{title}</h3>
      </div>
      <div className="p-4">
        <ul className="grid grid-cols-1 gap-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a 
                href={`${linkHrefPrefix}/${idx}`} 
                className="flex items-center text-sm text-gray-600 hover:text-boc-red hover:translate-x-1 transition-all duration-200 group"
              >
                <ChevronRight size={14} className="text-gray-300 mr-2 group-hover:text-boc-red" />
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};