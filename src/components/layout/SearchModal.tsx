import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen, Heart, ShoppingBag, FolderKanban } from 'lucide-react';
import { PRODUCTS_DATA, PROJECTS_DATA, CHILDREN_DATA, ELDERS_DATA } from '../../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingProducts = cleanQuery
    ? PRODUCTS_DATA.filter((p) => p.name.toLowerCase().includes(cleanQuery) || p.category.toLowerCase().includes(cleanQuery))
    : [];

  const matchingProjects = cleanQuery
    ? PROJECTS_DATA.filter((p) => p.title.toLowerCase().includes(cleanQuery) || p.shortDescription.toLowerCase().includes(cleanQuery))
    : [];

  const matchingChildren = cleanQuery
    ? CHILDREN_DATA.filter((c) => c.name.toLowerCase().includes(cleanQuery) || c.dream.toLowerCase().includes(cleanQuery))
    : [];

  const matchingElders = cleanQuery
    ? ELDERS_DATA.filter((e) => e.name.toLowerCase().includes(cleanQuery) || e.background.toLowerCase().includes(cleanQuery))
    : [];

  const handleNavigate = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-20 px-3 sm:px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center space-x-3">
          <Search className="w-6 h-6 text-emerald-800 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, products, children, elder care, projects..."
            className="w-full text-base sm:text-lg text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {!query ? (
            <div className="text-center py-8">
              <p className="text-sm text-slate-500 mb-4">Quick search suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Sponsor a Child', 'Old Age Care', 'Wheat Flour', 'Basmati Rice', '80G Tax Exemption', 'Volunteer', 'STEM School'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {matchingProducts.length === 0 && matchingProjects.length === 0 && matchingChildren.length === 0 && matchingElders.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-base font-semibold text-slate-700">No direct matches for "{query}"</p>
                  <p className="text-xs text-slate-400 mt-1">Try searching for "Rice", "School", "Elder", or "Donation".</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Products Matches */}
                  {matchingProducts.length > 0 && (
                    <div>
                      <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        <ShoppingBag className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                        Store Products ({matchingProducts.length})
                      </div>
                      <div className="space-y-2">
                        {matchingProducts.slice(0, 4).map((p) => (
                          <div
                            key={p.id}
                            onClick={() => handleNavigate(`/store/${p.id}`)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/60 cursor-pointer border border-transparent hover:border-emerald-100 transition"
                          >
                            <div className="flex items-center space-x-3">
                              <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{p.name}</p>
                                <p className="text-xs text-slate-500">{p.category} • ₹{p.price}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-emerald-600" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Children Matches */}
                  {matchingChildren.length > 0 && (
                    <div>
                      <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        <Heart className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
                        Children Profiles ({matchingChildren.length})
                      </div>
                      <div className="space-y-2">
                        {matchingChildren.map((c) => (
                          <div
                            key={c.id}
                            onClick={() => handleNavigate('/children')}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/60 cursor-pointer border border-transparent hover:border-amber-100 transition"
                          >
                            <div className="flex items-center space-x-3">
                              <img src={c.image} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{c.name} ({c.grade})</p>
                                <p className="text-xs text-slate-500">{c.dream}</p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-amber-700">Sponsor ₹{c.monthlyCost}/mo</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects Matches */}
                  {matchingProjects.length > 0 && (
                    <div>
                      <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        <FolderKanban className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                        Impact Projects ({matchingProjects.length})
                      </div>
                      <div className="space-y-2">
                        {matchingProjects.map((prj) => (
                          <div
                            key={prj.id}
                            onClick={() => handleNavigate('/projects')}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50/60 cursor-pointer border border-transparent hover:border-blue-100 transition"
                          >
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{prj.title}</p>
                              <p className="text-xs text-slate-500">{prj.location} • {prj.category}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info in Modal */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-400">
          Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-600">ESC</kbd> to close
        </div>
      </div>
    </div>
  );
};
