import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight, Heart, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../../data/mockData';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<any>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000); // 3 seconds interval as requested
  };

  useEffect(() => {
    if (isPlaying) {
      startTimer();
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    if (isPlaying) startTimer();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    if (isPlaying) startTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (isPlaying) startTimer();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[680px] max-h-[1050px] overflow-hidden bg-slate-950 select-none group"
    >
      {/* Background Slides stretching all the way to the top under header */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Slow Smooth Zoom Animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out transform ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Cinematic Multi-layered Dark Vignette Overlay for Crisp Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/50" />

            {/* Slide Content Overlay (Wide & Generously Spaced) */}
            <div className="relative z-20 max-w-[1720px] w-full mx-auto h-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center pt-24 sm:pt-40 pb-24 sm:pb-20">
              <div className="max-w-3xl space-y-4 sm:space-y-6 w-full">
                {/* Tagline Pill */}
                <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] sm:text-sm font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>{slide.tagline}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-heading tracking-tight leading-[1.12] sm:leading-[1.06]">
                  {slide.headline}
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none">
                  {slide.subheading}
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
                  <Link
                    to={slide.primaryBtn.link}
                    className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold rounded-2xl shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 text-sm sm:text-base text-center"
                  >
                    <Heart className="w-5 h-5 fill-slate-950" />
                    <span>{slide.primaryBtn.text}</span>
                  </Link>

                  <Link
                    to={slide.secondaryBtn.link}
                    className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-2xl backdrop-blur-md border border-white/30 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 text-sm sm:text-base text-center"
                  >
                    <span>{slide.secondaryBtn.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Left/Right Arrow Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls Bar: Indicators & Play/Pause (Wide Container) */}
      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-30 max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Indicators */}
        <div className="flex items-center space-x-2 sm:space-x-3.5">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className="group/ind py-2 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'w-8 sm:w-16 bg-amber-400 shadow-lg shadow-amber-400/50'
                    : 'w-3 sm:w-7 bg-white/40 group-hover/ind:bg-white/80'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Slide Counter & Play/Pause Button */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 bg-black/50 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-white text-[11px] sm:text-xs font-medium">
          <span className="font-mono">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
          <span className="text-white/30">|</span>
          <button
            onClick={togglePlayPause}
            className="text-white/80 hover:text-white transition"
            title={isPlaying ? 'Pause slideshow' : 'Resume slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
