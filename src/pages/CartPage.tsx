import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Tag, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    subtotal, 
    deliveryFee, 
    discount, 
    couponCode, 
    applyCoupon, 
    removeCoupon, 
    total, 
    mealsFunded 
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; message?: string } | null>(null);
  const navigate = useNavigate();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-50 text-[#0F3E2E] rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 font-heading">Your Shopping Cart is Empty</h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          You haven't added any grocery or household essentials yet. Every purchase directly powers educational and healthcare meals.
        </p>
        <div>
          <Link
            to="/store"
            className="px-8 py-3.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-2xl font-bold text-sm transition shadow-lg inline-flex items-center space-x-2"
          >
            <span>Explore Essentials Store</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 font-heading">Shopping Cart</h1>
          <p className="text-xs text-slate-500 mt-1">Review your purpose-driven essentials before checkout.</p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-red-600 hover:text-red-800 font-semibold self-start sm:self-auto"
        >
          Clear Entire Cart
        </button>
      </div>

      {/* Social Impact Banner */}
      <div className="p-4 bg-gradient-to-r from-emerald-800 to-[#0F3E2E] text-white rounded-2xl flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs uppercase font-bold tracking-wider text-amber-300">Social Impact Contribution</p>
            <p className="text-sm font-semibold">
              This order will fund approximately <span className="text-amber-300 font-extrabold text-base">{mealsFunded} nutritious meals</span> for students!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-slate-100 flex-shrink-0"
                />
                <div>
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{product.weight} • ₹{product.price} each</p>
                </div>
              </div>

              {/* Quantity Controls & Price */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="p-2 hover:bg-slate-200 text-slate-600 transition"
                    aria-label="Decrease"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="p-2 hover:bg-slate-200 text-slate-600 transition"
                    aria-label="Increase"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right min-w-[70px]">
                  <p className="text-base font-extrabold text-[#0F3E2E]">
                    ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                  title="Remove item"
                  aria-label="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Link
              to="/store"
              className="inline-flex items-center text-xs font-bold text-[#0F3E2E] hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Continue Shopping for More Essentials</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-xl font-bold text-slate-900 font-heading border-b pb-4">Order Summary</h2>

          {/* Pricing breakdown */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Delivery Charges</span>
              <span>
                {deliveryFee === 0 ? (
                  <strong className="text-emerald-700 font-bold">FREE</strong>
                ) : (
                  `₹${deliveryFee}`
                )}
              </span>
            </div>

            {subtotal < 499 && (
              <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg font-medium">
                Add ₹{499 - subtotal} more to qualify for FREE delivery!
              </p>
            )}

            {discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>Coupon Discount ({couponCode})</span>
                <span>- ₹{discount}</span>
              </div>
            )}

            <div className="pt-4 border-t flex justify-between items-baseline">
              <span className="text-base font-bold text-slate-900">Total Payable</span>
              <span className="text-2xl font-black text-[#0F3E2E]">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Coupon Code Input */}
          <div className="pt-2">
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon (e.g. SEVA10)"
                value={inputCoupon}
                onChange={(e) => setInputCoupon(e.target.value)}
                className="flex-1 px-3 py-2 text-xs uppercase font-mono rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition"
              >
                Apply
              </button>
            </form>

            {couponFeedback && (
              <p className={`text-[11px] mt-2 ${couponFeedback.success ? 'text-emerald-700 font-semibold' : 'text-red-600'}`}>
                {couponFeedback.message}
              </p>
            )}
          </div>

          {/* Checkout CTA */}
          <button
            onClick={() => navigate('/checkout')}
            className="w-full py-4 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-extrabold rounded-2xl text-sm transition shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center space-x-1 text-slate-400 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Secure 256-Bit SSL Checkout • Direct Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
};
