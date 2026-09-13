import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  Check, 
  Truck, 
  ShieldCheck, 
  ArrowLeft, 
  Share2,
  Plus,
  Minus
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/common/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS_DATA.find((p) => p.id === id) || PRODUCTS_DATA[0];

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingredients' | 'benefits' | 'delivery' | 'reviews'>('desc');
  const [added, setAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const relatedProducts = PRODUCTS_DATA.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Back Link */}
      <div>
        <Link
          to="/store"
          className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-[#0F3E2E] transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Back to Grocery & Essentials Store</span>
        </Link>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Product Images Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-200">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.discountPercent > 0 && (
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {product.discountPercent}% OFF
              </div>
            )}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/90 text-slate-500 hover:text-red-500 shadow-md transition"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          </div>

          {/* Additional Thumbnails */}
          <div className="flex space-x-3 overflow-x-auto">
            {[product.image, 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop'].map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition ${
                  selectedImage === img ? 'border-[#0F3E2E] ring-2 ring-emerald-800/30' : 'border-slate-200 opacity-70'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {product.brand} • {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading mt-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-sm font-mono font-medium text-slate-500 mt-1">Pack Size / Weight: {product.weight}</p>

            {/* Ratings Bar */}
            <div className="flex items-center space-x-2 mt-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">{product.rating}</span>
              <span className="text-xs text-slate-400">({product.reviewsCount} customer reviews)</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-baseline space-x-3">
            <span className="text-3xl font-extrabold text-[#0F3E2E]">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-base text-slate-400 line-through">MRP ₹{product.mrp}</span>
            )}
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
              Save ₹{product.mrp - product.price} ({product.discountPercent}% OFF)
            </span>
          </div>

          {/* Social Impact Pledge Callout */}
          <div className="p-5 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl border border-emerald-200 flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                You Are Supporting Our Mission With This Purchase
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-snug">
                {product.impactNote}
              </p>
            </div>
          </div>

          {/* Quantity Selector & Stock Status */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-4">
              <span className="text-xs font-bold uppercase text-slate-500">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-slate-100 text-slate-600 transition"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-1 text-sm font-bold text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-slate-100 text-slate-600 transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                In Stock ({product.stockCount} packs available)
              </span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleAddToCart}
              className={`py-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition shadow-lg ${
                added
                  ? 'bg-emerald-800 text-white'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-[#0F3E2E] border border-emerald-300'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart ({quantity})</span>
                </>
              )}
            </button>

            <button
              onClick={handleBuyNow}
              className="py-4 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-extrabold rounded-2xl text-sm transition shadow-xl text-center"
            >
              Buy Now (Proceed to Checkout)
            </button>
          </div>

          {/* Shipping Perks Badges */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-emerald-700" />
              <span>Free Delivery on orders above ₹499</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>100% Quality & Hygiene Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex space-x-6 border-b border-slate-200 pb-4 overflow-x-auto">
          {[
            { id: 'desc', label: 'Description' },
            { id: 'ingredients', label: 'Ingredients & Sourcing' },
            { id: 'benefits', label: 'Health Benefits' },
            { id: 'delivery', label: 'Delivery & Returns' },
            { id: 'reviews', label: `Verified Reviews (${product.reviewsCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-sm font-bold pb-2 transition whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#0F3E2E] text-[#0F3E2E]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6 text-sm text-slate-700 leading-relaxed">
          {activeTab === 'desc' && (
            <div className="space-y-4 max-w-3xl">
              <p>{product.description}</p>
              <p>
                Sourced in partnership with smallholder organic cooperatives across Madhya Pradesh, Punjab, and Uttarakhand. By eliminating exploitative middlemen, we pay fair procurement prices to farmers while funding essential nutrition programs for our resident children.
              </p>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-3 max-w-2xl">
              <p><strong>Ingredients:</strong> {product.ingredients || '100% Natural Whole Foods'}</p>
              <p><strong>Processing:</strong> Traditional cold-pressed or stone-milled under clinical hygiene standards.</p>
              <p><strong>Certifications:</strong> FSSAI Approved, 100% Pesticide residue tested.</p>
            </div>
          )}

          {activeTab === 'benefits' && (
            <ul className="space-y-2 max-w-2xl">
              {product.benefits?.map((b, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{b}</span>
                </li>
              )) || <li>100% natural, unadulterated nutritious pantry staple.</li>}
            </ul>
          )}

          {activeTab === 'delivery' && (
            <div className="space-y-2 max-w-2xl">
              <p>{product.deliveryInfo}</p>
              <p>Standard delivery takes 2 to 4 business days. Moisture-sealed recyclable packaging.</p>
              <p>Hassle-free replacement if damaged during transit.</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4 max-w-3xl">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Dr. Sunita Rao</span>
                  <span className="text-xs text-slate-400">Verified Buyer • 2 weeks ago</span>
                </div>
                <div className="flex text-amber-400 my-1">★★★★★</div>
                <p className="text-xs text-slate-600">
                  Exceptional quality! The fragrance and freshness are noticeable immediately. It feels so wonderful knowing my family's monthly grocery spend is directly supporting children's schooling.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            More From {product.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
