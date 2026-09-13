import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  Play, 
  Calendar, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'all',
    'Children',
    'School',
    'Old Age Care',
    'Events',
    'Volunteers',
    'Community Work',
    'Food Distribution',
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Moments of Humanity & Grace
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Our Multimedia Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Witness firsthand the smiles of our children in classrooms, the serene companionship in our elder sanctuary, and volunteer field drives.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition capitalize ${
                selectedCategory === cat
                  ? 'bg-[#0F3E2E] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Images' : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer aspect-square bg-slate-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center space-x-2 text-[11px] text-amber-300 font-semibold mb-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-base font-heading leading-tight">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-light">{item.description}</p>
                <div className="mt-3 flex items-center text-xs text-amber-400 font-semibold">
                  <ZoomIn className="w-4 h-4 mr-1" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Documentary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl text-white p-8 sm:p-14 overflow-hidden relative shadow-2xl">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Video Documentaries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Voices of Transformation: A 10-Minute Journey
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Step inside the classrooms of Ismita Vidyalaya, the tranquil gardens of our Old Age Sanctuary, and our daily Annakshetra community kitchens.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-video border-2 border-slate-700 max-w-4xl mx-auto group">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
              alt="Video thumbnail"
              className="w-full h-full object-cover brightness-75 group-hover:scale-102 transition duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition transform group-hover:scale-110 cursor-pointer">
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono">
              Duration: 09:42 • 4K Cinematic
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <div 
            className="w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {lightboxItem.category} • {lightboxItem.date}
                </span>
                <h3 className="text-xl font-bold font-heading mt-1">{lightboxItem.title}</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">{lightboxItem.description}</p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
