import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  label,
  description,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = value;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasAnimated, value, duration]);

  return (
    <div ref={ref} className="text-center p-3.5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F3E2E] tracking-tight font-heading flex items-center justify-center flex-wrap">
        <span>{prefix}</span>
        <span>{count.toLocaleString('en-IN')}</span>
        <span className="text-amber-500 ml-0.5">{suffix}</span>
      </div>
      <div className="mt-1.5 sm:mt-2 text-xs sm:text-base font-bold text-slate-800 font-heading">
        {label}
      </div>
      {description && (
        <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-500 max-w-[200px] mx-auto line-clamp-2 sm:line-clamp-none">
          {description}
        </div>
      )}
    </div>
  );
};
