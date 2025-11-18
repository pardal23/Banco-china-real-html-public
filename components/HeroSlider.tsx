import React, { useEffect, useState } from 'react';
import { BANNER_SLIDES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrentSlide((curr) => (curr === 0 ? BANNER_SLIDES.length - 1 : curr - 1));
  const next = () => setCurrentSlide((curr) => (curr + 1) % BANNER_SLIDES.length);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-900 group">
      {BANNER_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif shadow-sm">{slide.title}</h2>
            <p className="text-lg md:text-xl font-light text-gray-200">{slide.subtitle}</p>
            <button className="mt-6 px-6 py-2 bg-boc-red hover:bg-boc-darkRed text-white rounded-sm transition-all font-medium text-sm uppercase tracking-wider">
                Read More
            </button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-boc-red text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-boc-red text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 right-8 flex space-x-2">
        {BANNER_SLIDES.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-boc-red w-6' : 'bg-white/50 hover:bg-white'
                }`}
            />
        ))}
      </div>
    </div>
  );
};