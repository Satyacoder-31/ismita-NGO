import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Heart, 
  ArrowUpDown, 
  Filter,
  Check
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';
import { ProductCard } from '../components/common/ProductCard';

export const StorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const categories = [
    'all',
    'Rice',
    'Flour / Atta',
    'Cooking Oil',
    'Pulses / Dal',
    'Sugar',
    'Salt',
    'Spices',
    'Tea',
    'Cleaning Products',
    'Stationery',
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches = product.name.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q);
        if (!matches) return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, maxPrice, inStockOnly]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Top Hero Banner */}
      <section className="bg-gradient-to-r from-[#0F3E2E] via-[#144f3b] to-[#0A192F] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 sm:space-y-4 text-center md:text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 inline-block">
              Shop With Purpose • 100% Social Impact
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Every Purchase Supports a Purpose.
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Stock your kitchen with 100% pure, stone-ground flours, authentic Himalayan Basmati, unpolished dals, and cold-pressed oils. Every single order directly provides meals and schoolbooks for children and seniors.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/20 text-center max-w-xs w-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-2.5 sm:mb-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-xs text-amber-200 uppercase font-bold tracking-wider">Social Impact</p>
            <p className="text-xl sm:text-2xl font-black text-white mt-0.5">₹150 Order =</p>
            <p className="text-xs text-slate-200 mt-1">1 Nutritious Mid-Day School Meal for a Child</p>
          </div>
        </div>
      </section>

      {/* Main Store Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Sort Toolbar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <Search className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rice, atta, oils, dal, tea..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            />
          </div>

          {/* Quick Filters: In Stock & Sorting */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto gap-4">
            <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-slate-300 text-emerald-800 focus:ring-emerald-800"
              />
              <span>In Stock Only</span>
            </label>

            <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="p-2 border border-slate-200 rounded-xl bg-white text-slate-800 focus:outline-none text-xs font-semibold"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs font-bold whitespace-nowrap transition capitalize ${
                selectedCategory === cat
                  ? 'bg-[#0F3E2E] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Essentials' : cat}
            </button>
          ))}
        </div>

        {/* Results Counter & Product Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Showing <strong>{filteredProducts.length}</strong> pantry & household essentials</span>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => handleCategoryChange('all')}
                className="text-emerald-800 font-bold hover:underline"
              >
                Clear Category Filter
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
              <p className="text-xs text-slate-500 mt-1">Try changing your search keywords or resetting category filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setInStockOnly(false);
                }}
                className="mt-4 px-5 py-2 bg-[#0F3E2E] text-white text-xs font-bold rounded-xl"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
