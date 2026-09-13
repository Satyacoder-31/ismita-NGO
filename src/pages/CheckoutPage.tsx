import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Building, 
  Banknote, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  Printer
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, deliveryFee, discount, total, mealsFunded, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Form State
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [street, setStreet] = useState(user?.address?.street || '');
  const [city, setCity] = useState(user?.address?.city || '');
  const [state, setState] = useState(user?.address?.state || '');
  const [pincode, setPincode] = useState(user?.address?.pincode || '');
  const [paymentMethod, setPaymentMethod] = useState<Order['paymentMethod']>('UPI');

  // Simulation State
  const [processing, setProcessing] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cart.length) {
      navigate('/store');
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      const randomOrderNo = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

      const newOrder: Order = {
        id: `ord-${Date.now()}`,
        orderNumber: randomOrderNo,
        date: today,
        items: [...cart],
        subtotal,
        deliveryFee,
        discount,
        total,
        status: 'Processing',
        paymentMethod,
        customerName: fullName,
        email,
        phone,
        shippingAddress: `${street}, ${city}, ${state} - ${pincode}`,
      };

      setPlacedOrder(newOrder);
      clearCart();

      // Confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#0F3E2E', '#D4AF37', '#10B981'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 1500);
  };

  // Order Complete Confirmation Screen
  if (placedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-slate-800 space-y-8 animate-in zoom-in-95">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#0F3E2E]">
            <CheckCircle2 className="w-10 h-10 text-emerald-700" />
          </div>

          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full">
              Order Confirmed & Impact Recorded
            </span>
            <h1 className="text-3xl font-extrabold text-[#0F3E2E] font-heading mt-3">
              Thank You for Shopping With Purpose!
            </h1>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
              Your order <strong className="text-slate-900 font-mono">{placedOrder.orderNumber}</strong> has been received. Your purchase is helping us fund <strong>{mealsFunded} meals</strong> for students.
            </p>
          </div>

          {/* Invoice Summary Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-4 font-mono text-xs">
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-500">Order Number:</span>
              <span className="font-bold text-slate-900">{placedOrder.orderNumber}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-500">Shipping Address:</span>
              <span className="text-right text-slate-800 max-w-xs">{placedOrder.shippingAddress}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-500">Payment Mode:</span>
              <span className="font-bold text-emerald-800">{placedOrder.paymentMethod} (Test Simulation)</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="font-bold text-slate-700">Total Paid:</span>
              <span className="font-black text-base text-[#0F3E2E]">₹{placedOrder.total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print Order Receipt</span>
            </button>
            <Link
              to="/store"
              className="px-6 py-3 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div>
        <Link
          to="/cart"
          className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-[#0F3E2E]"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Return to Shopping Cart</span>
        </Link>
        <h1 className="text-3xl font-extrabold text-slate-900 font-heading mt-3">Secure Checkout</h1>
      </div>

      <form onSubmit={handleSubmitOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Customer & Address Information */}
          <div className="lg:col-span-7 space-y-8">
            {/* Customer Details */}
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 font-heading border-b pb-3">
                1. Customer Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikramaditya Sengupta"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Phone Number (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Email Address (For Order Tracking & Invoice) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vikram@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 font-heading border-b pb-3">
                2. Delivery Address
              </h2>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Street Address & Flat / Building *
                </label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="e.g. 42, Ashoka Enclave, Vasant Vihar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="New Delhi"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">State *</label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Delhi"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">PIN Code *</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="110057"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h2 className="text-lg font-bold text-slate-900 font-heading">
                  3. Payment Method
                </h2>
                <span className="text-[11px] text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full font-bold">
                  Test Sandbox Simulation
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {[
                  { id: 'UPI', label: 'UPI / QR', icon: Smartphone },
                  { id: 'Card', label: 'Credit / Debit', icon: CreditCard },
                  { id: 'NetBanking', label: 'Net Banking', icon: Building },
                  { id: 'COD', label: 'Cash On Delivery', icon: Banknote },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPaymentMethod(item.id as any)}
                      className={`p-3 sm:p-3.5 rounded-2xl border text-center text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 ${
                        paymentMethod === item.id
                          ? 'border-[#0F3E2E] bg-emerald-50 text-[#0F3E2E] ring-2 ring-emerald-800/20'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border">
                *This is a development sandbox mock payment gateway for testing complete order fulfillment. No actual bank transfer will be processed.
              </p>
            </div>
          </div>

          {/* Right: Order Review & Checkout Confirmation */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-5 sm:space-y-6">
            <h2 className="text-xl font-bold text-slate-900 font-heading border-b pb-4">
              Your Order ({cart.length} items)
            </h2>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-slate-800 line-clamp-1">{product.name}</p>
                      <p className="text-slate-400 font-medium">{quantity} × ₹{product.price}</p>
                    </div>
                  </div>
                  <span className="font-extrabold text-slate-900 font-mono">
                    ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            {/* Financial Totals */}
            <div className="border-t pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Items Subtotal</span>
                <span className="font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="text-emerald-700 font-bold">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Discount Applied</span>
                  <span>- ₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-slate-900 border-t pt-3">
                <span>Total Amount</span>
                <span className="text-2xl font-black text-[#0F3E2E]">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              disabled={processing || cart.length === 0}
              className="w-full py-3.5 sm:py-4 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-extrabold rounded-2xl text-xs sm:text-sm transition shadow-xl flex items-center justify-center space-x-2 text-center"
            >
              {processing ? (
                <span>Confirming Order...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Place Order (₹{total.toLocaleString('en-IN')})</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified 100% Social Purpose Purchase</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
