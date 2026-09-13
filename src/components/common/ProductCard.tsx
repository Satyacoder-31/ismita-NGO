import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Star, Heart, Check, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    navigate('/cart');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const isFavorited = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Top Badges & Wishlist */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Link to={`/store/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Discount Badge */}
        {product.discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
            {product.discountPercent}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-red-500 hover:bg-white shadow-md transition"
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Weight / Quantity Tag */}
        <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-lg">
          {product.weight}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-semibold text-emerald-800 uppercase tracking-wider">{product.brand}</span>
            <span>{product.category}</span>
          </div>

          {/* Title */}
          <Link to={`/store/${product.id}`} className="block">
            <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base line-clamp-2 hover:text-[#0F3E2E] transition leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center space-x-1.5 mt-1.5 sm:mt-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="ml-1 text-xs font-bold text-slate-700">{product.rating}</span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-400">({product.reviewsCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="mt-2.5 sm:mt-3 flex items-baseline space-x-2">
            <span className="text-lg sm:text-xl font-extrabold text-[#0F3E2E]">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
            )}
            <span className="text-[10.5px] sm:text-[11px] text-emerald-600 font-bold">
              Save ₹{product.mrp - product.price}
            </span>
          </div>

          {/* Social Impact Note */}
          <div className="mt-2.5 sm:mt-3 bg-emerald-50/70 border border-emerald-100 rounded-xl p-2 sm:p-2.5 text-[11px] sm:text-[11.5px] text-emerald-900 flex items-start space-x-2">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2 leading-tight font-medium">{product.impactNote}</span>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-2 mt-3.5 sm:mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`py-2.5 px-2 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 transition shadow-sm ${
              added
                ? 'bg-emerald-800 text-white'
                : 'bg-emerald-50 hover:bg-emerald-100 text-[#0F3E2E] border border-emerald-200'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          <button
            onClick={handleBuyNow}
            disabled={!product.inStock}
            className="py-2.5 px-2 sm:px-3 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow text-center"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
