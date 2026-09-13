import React, { useState } from 'react';
import { MessageCircle, Phone, Heart, X, MessageSquare, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuickContactSpeedDial: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-3 mb-2 animate-in fade-in slide-in-from-bottom-5">
          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-slate-800 text-white px-3.5 py-2 rounded-full shadow-lg hover:bg-slate-700 transition text-xs font-medium"
            title="Scroll to Top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>

          {/* Quick Donate */}
          <Link
            to="/donate"
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-2.5 rounded-full shadow-xl hover:shadow-emerald-900/40 hover:scale-105 transition text-xs font-bold"
          >
            <span>Quick 80G Donate</span>
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
          </Link>

          {/* Direct Phone Call */}
          <a
            href="tel:18002094455"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition text-xs font-semibold"
          >
            <span>Toll-Free Helpline</span>
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Ismita%20Charitable%20Foundation,%20I%20would%20like%20to%20know%20more%20about%20supporting%20a%20child%20or%20elder."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-xl hover:bg-[#1EBE5D] hover:scale-105 transition text-xs font-semibold"
          >
            <span>Chat on WhatsApp</span>
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Primary Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-105 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-[#0F3E2E] ring-4 ring-emerald-600/30'
        }`}
        aria-label="Toggle Quick Contact Speed Dial"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 text-amber-400" />}
      </button>
    </div>
  );
};
