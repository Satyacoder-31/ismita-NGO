import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { 
  User as UserIcon, 
  Heart, 
  ShoppingBag, 
  Bookmark, 
  FileText, 
  MapPin, 
  Settings, 
  LogOut, 
  ShieldCheck, 
  Download, 
  ExternalLink,
  Printer
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useDonation } from '../context/DonationContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { INITIAL_ORDERS, PRODUCTS_DATA } from '../data/mockData';
import { ProductCard } from '../components/common/ProductCard';

export const UserAccountPage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { donations, sponsorships, openReceiptModal } = useDonation();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = (searchParams.get('tab') as any) || 'donations';
  const [activeTab, setActiveTab] = useState<'profile' | 'donations' | 'sponsorships' | 'orders' | 'wishlist' | 'settings'>(defaultTab);

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <UserIcon className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 font-heading">Please Sign In</h2>
        <p className="text-xs text-slate-500">Sign in to view your donation receipts and active sponsorships.</p>
        <Link
          to="/login"
          className="inline-block px-6 py-2.5 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold shadow"
        >
          Go to Sign In
        </Link>
      </div>
    );
  }

  const wishlistedProducts = PRODUCTS_DATA.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Account Overview Header */}
      <div className="bg-gradient-to-r from-[#0F3E2E] to-[#0A192F] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop'}
            alt={user.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400/50 shadow-md"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl sm:text-3xl font-bold font-heading">{user.name}</h1>
              <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase rounded-full">
                {user.role}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 font-mono">{user.email} • {user.phone}</p>
            <p className="text-xs text-emerald-300 mt-0.5 flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              PAN on file: {user.panNumber || 'Declared'} (80G Tax Exemption Ready)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/donate"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition shadow"
          >
            New 80G Donation
          </Link>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Account Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Tabs */}
        <div className="lg:col-span-3 bg-white p-3 rounded-3xl border border-slate-200/80 shadow-sm space-y-1">
          {[
            { id: 'donations', label: `My Donations (${donations.length})`, icon: Heart },
            { id: 'sponsorships', label: `My Sponsorships (${sponsorships.length})`, icon: ShieldCheck },
            { id: 'orders', label: 'My Store Orders (2)', icon: ShoppingBag },
            { id: 'wishlist', label: `Saved Wishlist (${wishlist.length})`, icon: Bookmark },
            { id: 'profile', label: 'Profile & Tax Info', icon: UserIcon },
            { id: 'settings', label: 'Account Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-bold transition text-left ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-[#0F3E2E] shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-9 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm min-h-[450px]">
          {/* 1. My Donations Tab */}
          {activeTab === 'donations' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">My Donations History</h3>
                  <p className="text-xs text-slate-500">Download official 80G tax exemption certificates anytime.</p>
                </div>
                <Link
                  to="/donate"
                  className="px-4 py-2 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold hover:bg-emerald-900"
                >
                  + Make a Contribution
                </Link>
              </div>

              <div className="space-y-3">
                {donations.map((don) => (
                  <div
                    key={don.id}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-700/30 transition bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                          {don.receiptNumber}
                        </span>
                        <span className="text-xs text-slate-400">• {don.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mt-1">{don.category} Support</h4>
                      <p className="text-xs text-slate-500">
                        Method: {don.paymentMethod} • Frequency: {don.frequency}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 self-end sm:self-center">
                      <span className="text-xl font-extrabold text-[#0F3E2E]">
                        ₹{don.amount.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => openReceiptModal(don)}
                        className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm flex items-center space-x-1"
                        title="Download 80G Tax Exemption Receipt"
                      >
                        <Printer className="w-3.5 h-3.5 text-emerald-700" />
                        <span>80G Receipt</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. My Sponsorships Tab */}
          {activeTab === 'sponsorships' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Active Recurring Sponsorships</h3>
                  <p className="text-xs text-slate-500">Children and seniors you are directly supporting.</p>
                </div>
                <Link
                  to="/sponsor"
                  className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold hover:bg-amber-400"
                >
                  + Sponsor Another Life
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sponsorships.map((spon) => (
                  <div
                    key={spon.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start space-x-4"
                  >
                    <img
                      src={spon.beneficiaryImage || 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop'}
                      alt={spon.targetName}
                      className="w-16 h-16 rounded-xl object-cover border"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">{spon.targetName}</h4>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full uppercase">
                          {spon.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Since: {spon.startDate}</p>
                      <p className="text-sm font-extrabold text-[#0F3E2E] mt-2">
                        ₹{spon.monthlyAmount}/month
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. My Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading">Order History</h3>
                <p className="text-xs text-slate-500">Your everyday essentials grocery purchases.</p>
              </div>

              <div className="space-y-4">
                {INITIAL_ORDERS.map((order) => (
                  <div key={order.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex justify-between items-center text-xs border-b pb-2">
                      <div>
                        <span className="font-bold text-slate-900 font-mono">{order.orderNumber}</span>
                        <span className="text-slate-400 ml-2">• Placed on {order.date}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800">
                        {order.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs">
                          <span>{it.quantity} × {it.product.name} ({it.product.weight})</span>
                          <span className="font-mono font-bold">₹{it.product.price * it.quantity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t text-xs font-bold">
                      <span className="text-slate-500">Total Billed:</span>
                      <span className="text-sm font-extrabold text-[#0F3E2E]">₹{order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading">Saved Wishlist Items</h3>
                <p className="text-xs text-slate-500">Essential products saved for future delivery.</p>
              </div>

              {wishlistedProducts.length === 0 ? (
                <p className="text-sm text-slate-500 py-8 text-center">No saved items in your wishlist.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {wishlistedProducts.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 5. Profile & Settings */}
          {(activeTab === 'profile' || activeTab === 'settings') && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading">Profile & Compliance Details</h3>
                <p className="text-xs text-slate-500">Used automatically on Section 80G tax certificates.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border space-y-1">
                  <span className="text-slate-400 font-bold uppercase">Legal Name</span>
                  <p className="text-sm font-bold text-slate-900">{user.name}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border space-y-1">
                  <span className="text-slate-400 font-bold uppercase">Email Address</span>
                  <p className="text-sm font-bold text-slate-900">{user.email}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border space-y-1">
                  <span className="text-slate-400 font-bold uppercase">Phone Number</span>
                  <p className="text-sm font-bold text-slate-900">{user.phone}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border space-y-1">
                  <span className="text-slate-400 font-bold uppercase">Income Tax PAN</span>
                  <p className="text-sm font-mono font-bold text-emerald-800">{user.panNumber}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border text-xs space-y-1">
                <span className="text-slate-400 font-bold uppercase">Saved Delivery Address</span>
                <p className="text-slate-800 font-medium">
                  {user.address?.street}, {user.address?.city}, {user.address?.state} - {user.address?.pincode}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
