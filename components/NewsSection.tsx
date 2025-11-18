import React from 'react';
import { HEADLINE_NEWS, ANNOUNCEMENTS } from '../constants';
import { Calendar, ArrowRight, Megaphone } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Headlines */}
      <section>
        <div className="flex items-center justify-between mb-4 border-b-2 border-boc-red pb-2">
          <h2 className="text-xl font-serif font-bold text-gray-800">Latest News</h2>
          <a href="#" className="text-xs text-gray-500 hover:text-boc-red flex items-center">
            More <ArrowRight size={12} className="ml-1" />
          </a>
        </div>
        <div className="space-y-4">
          {HEADLINE_NEWS.map((news, idx) => (
            <div key={news.id} className="group cursor-pointer">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-baseline">
                <span className="text-xs font-bold text-boc-red bg-red-50 px-2 py-0.5 rounded whitespace-nowrap">
                    {news.category || 'News'}
                </span>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-boc-red transition-colors leading-snug">
                  {news.title}
                </h3>
              </div>
              <div className="flex items-center text-xs text-gray-400 mt-1 ml-0 sm:ml-[4.5rem]">
                <Calendar size={12} className="mr-1" />
                {news.date}
              </div>
              {idx < HEADLINE_NEWS.length - 1 && (
                <div className="h-px bg-gray-100 mt-3" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
            <Megaphone className="text-boc-red" size={18} />
            <h3 className="font-bold text-gray-800">Important Announcements</h3>
        </div>
        <ul className="space-y-3">
            {ANNOUNCEMENTS.map((item) => (
                <li key={item.id} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                    <div>
                        <a href={item.url} className="text-sm text-gray-600 hover:text-boc-red transition-colors block">
                            {item.title}
                        </a>
                        <span className="text-xs text-gray-400 block mt-0.5">{item.date}</span>
                    </div>
                </li>
            ))}
        </ul>
      </section>
    </div>
  );
};