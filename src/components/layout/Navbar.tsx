import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  ShoppingBag, 
  Search, 
  User as UserIcon, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Bookmark,
  LogOut,
  LayoutDashboard
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { user, isAuthenticated, quickLogin, logout } = useAuth();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setInvolvedDropdown(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  // Header is transparent ONLY when at the top of the home page over the hero
  const isTransparent = isHome && !isScrolled;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Pre-Header Bar (smoothly collapses and disappears on scroll) */}
      <div 
        className={`transition-all duration-300 text-xs overflow-hidden ${
          isScrolled 
            ? 'max-h-0 opacity-0 py-0 border-none' 
            : isTransparent
              ? 'max-h-12 opacity-100 bg-slate-950/40 backdrop-blur-md border-b border-white/10 text-slate-200 py-2 px-6 sm:px-8 lg:px-12 xl:px-16'
              : 'max-h-12 opacity-100 bg-[#0A192F] text-slate-300 py-2 px-6 sm:px-8 lg:px-12 xl:px-16 border-b border-slate-800'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-amber-400 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Tax Exemption Available under Sec 80G of IT Act
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline-flex items-center text-slate-200">
              <Phone className="w-3 h-3 mr-1 text-amber-400" />
              Toll-Free Helpline: 1800-209-4455
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-slate-300">Quick Persona:</span>
              <button 
                onClick={() => quickLogin('donor')} 
                className="hover:text-amber-300 underline underline-offset-2 transition"
                title="Switch to Donor"
              >
                Donor
              </button>
              <span>•</span>
              <button 
                onClick={() => quickLogin('sponsor')} 
                className="hover:text-amber-300 underline underline-offset-2 transition"
                title="Switch to Sponsor"
              >
                Sponsor
              </button>
              <span>•</span>
              <button 
                onClick={() => quickLogin('admin')} 
                className="text-amber-400 font-semibold hover:text-amber-300 underline underline-offset-2 transition"
                title="Switch to Admin"
              >
                Admin
              </button>
            </div>
            <span className="text-white/30">|</span>
            <Link to="/store" className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              Shop Essentials (Supports Charity)
            </Link>
          </div>
        </div>
      </div>

      {/* Main Luxury Header Navbar */}
      <header
        className={`w-full transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/75 via-black/35 to-transparent backdrop-blur-[2px] border-b border-white/10 py-4 lg:py-5'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 py-3 lg:py-3.5'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-6">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 ${
              isTransparent
                ? 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-amber-500 shadow-emerald-950/40 text-white'
                : 'bg-gradient-to-br from-[#0F3E2E] via-[#155e42] to-[#0A192F] shadow-emerald-950/20'
            }`}>
              <Heart className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center">
                <span className={`font-heading font-extrabold text-xl tracking-tight transition-colors ${
                  isTransparent ? 'text-white' : 'text-[#0F3E2E]'
                }`}>
                  ISMITA
                </span>
                <span className="font-heading font-light text-xl tracking-wider text-amber-400 ml-1.5">
                  CHARITABLE FOUNDATION
                </span>
              </div>
              <p className={`text-[10px] uppercase tracking-widest font-semibold -mt-1 transition-colors ${
                isTransparent ? 'text-slate-300' : 'text-slate-500'
              }`}>
                Education • Elder Care • Social Impact
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Stretched with generous spacing) */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3 text-[14.5px] xl:text-[15px] font-medium">
            <Link
              to="/"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/')
                    ? 'text-white font-bold bg-white/20 shadow-sm'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/about')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/about')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/children"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/children')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/children')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Children
            </Link>
            <Link
              to="/school"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/school')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/school')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              School
            </Link>
            <Link
              to="/old-age-care"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/old-age-care')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/old-age-care')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Old Age Care
            </Link>
            <Link
              to="/projects"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/projects')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/projects')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Our Impact
            </Link>

            {/* Get Involved Dropdown */}
            <div className="relative">
              <button
                onClick={() => setInvolvedDropdown(!involvedDropdown)}
                className={`px-3.5 py-1.5 rounded-xl flex items-center space-x-1 transition-all ${
                  isTransparent
                    ? 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
                }`}
              >
                <span>Get Involved</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {involvedDropdown && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800"
                  onMouseLeave={() => setInvolvedDropdown(false)}
                >
                  <Link
                    to="/sponsor"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
                  >
                    <div className="font-semibold">Sponsor a Life</div>
                    <div className="text-xs text-slate-500">Child, elder, or student care</div>
                  </Link>
                  <Link
                    to="/volunteer"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
                  >
                    <div className="font-semibold">Volunteer With Us</div>
                    <div className="text-xs text-slate-500">Share skills, time & love</div>
                  </Link>
                  <Link
                    to="/donate"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
                  >
                    <div className="font-semibold">Donate Money</div>
                    <div className="text-xs text-slate-500">80G tax deductible donations</div>
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
                  >
                    <div className="font-semibold">Photo & Video Gallery</div>
                    <div className="text-xs text-slate-500">Field moments & stories</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/store"
              className={`px-3.5 py-1.5 rounded-xl font-semibold flex items-center transition-all ${
                isTransparent
                  ? isActive('/store')
                    ? 'text-white bg-amber-400/30'
                    : 'text-amber-300 bg-amber-400/15 hover:bg-amber-400/25'
                  : isActive('/store')
                    ? 'text-emerald-800 bg-emerald-100/80'
                    : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Store
            </Link>
            <Link
              to="/contact"
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/contact')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/contact')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Icons & Donate CTA */}
          <div className="flex items-center space-x-2.5 sm:space-x-4 flex-shrink-0">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className={`p-2.5 rounded-full transition ${
                isTransparent
                  ? 'text-white hover:text-amber-300 hover:bg-white/15'
                  : 'text-slate-600 hover:text-[#0F3E2E] hover:bg-slate-100'
              }`}
              title="Search site & store"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/account?tab=wishlist"
              className={`p-2.5 rounded-full transition relative hidden sm:flex ${
                isTransparent
                  ? 'text-white hover:text-amber-300 hover:bg-white/15'
                  : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
              }`}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Bookmark className="w-5 h-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-amber-400 text-slate-950 rounded-full text-[10px] font-bold flex items-center justify-center shadow">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className={`p-2.5 rounded-full transition relative ${
                isTransparent
                  ? 'text-white hover:text-amber-300 hover:bg-white/15'
                  : 'text-slate-600 hover:text-[#0F3E2E] hover:bg-emerald-50'
              }`}
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className={`absolute top-0 right-0 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse shadow ${
                  isTransparent ? 'bg-amber-400 text-slate-950 font-black' : 'bg-emerald-700 text-white'
                }`}>
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Account / Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`p-2 rounded-full transition flex items-center ${
                  isTransparent
                    ? 'text-white hover:text-amber-300 hover:bg-white/15'
                    : 'text-slate-600 hover:text-[#0F3E2E] hover:bg-slate-100'
                }`}
                title="Account"
                aria-label="Account"
              >
                {isAuthenticated && user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-amber-400"
                  />
                ) : (
                  <UserIcon className="w-5 h-5" />
                )}
              </button>

              {userMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 text-left text-slate-800"
                  onMouseLeave={() => setUserMenuOpen(false)}
                >
                  {isAuthenticated && user ? (
                    <>
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-xs text-slate-400">Signed in as</p>
                        <p className="text-sm font-bold text-[#0F3E2E] truncate">{user.name}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                          {user.role}
                        </span>
                      </div>
                      <div className="py-1">
                        <Link
                          to="/account"
                          className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E]"
                        >
                          <UserIcon className="w-4 h-4 mr-2 text-slate-400" />
                          My Account & Donations
                        </Link>
                        {user.role === 'admin' && (
                          <Link
                            to="/admin"
                            className="flex items-center px-4 py-2 text-sm text-emerald-700 font-semibold hover:bg-emerald-50"
                          >
                            <LayoutDashboard className="w-4 h-4 mr-2 text-emerald-600" />
                            Admin Executive Portal
                          </Link>
                        )}
                        <Link
                          to="/cart"
                          className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50"
                        >
                          <ShoppingBag className="w-4 h-4 mr-2 text-slate-400" />
                          My Shopping Cart ({totalItems})
                        </Link>
                      </div>
                      <div className="pt-2 border-t border-slate-100">
                        <button
                          onClick={() => {
                            logout();
                            setUserMenuOpen(false);
                          }}
                          className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-3">
                      <p className="text-sm font-semibold text-slate-800 mb-1">Welcome to Ismita Foundation</p>
                      <p className="text-xs text-slate-500 mb-3">Sign in to track your donations, sponsorships, and orders.</p>
                      <Link
                        to="/login"
                        className="block w-full py-2 px-4 bg-[#0F3E2E] text-white text-center rounded-xl text-sm font-medium hover:bg-emerald-900 transition mb-2 shadow"
                      >
                        Sign In / Register
                      </Link>
                      <div className="text-center">
                        <span className="text-[11px] text-slate-400">or Quick Demo as:</span>
                        <div className="grid grid-cols-2 gap-1 mt-1.5">
                          <button
                            onClick={() => quickLogin('donor')}
                            className="text-xs py-1 px-2 border rounded-lg hover:bg-slate-50 text-slate-700"
                          >
                            Donor
                          </button>
                          <button
                            onClick={() => quickLogin('admin')}
                            className="text-xs py-1 px-2 border rounded-lg bg-emerald-50 text-emerald-800 font-medium hover:bg-emerald-100"
                          >
                            Admin
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Prominent "Donate Now" CTA Button */}
            <Link
              to="/donate"
              className={`relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:scale-102 ${
                isTransparent
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/25'
                  : 'bg-gradient-to-r from-[#0F3E2E] to-[#175B44] hover:from-emerald-900 text-white shadow-emerald-950/20'
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <Heart className={`w-4 h-4 mr-1.5 ${isTransparent ? 'text-slate-950 fill-slate-950' : 'text-amber-400 fill-amber-400'}`} />
              <span>Donate Now</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-8 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 text-slate-800">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              About Us
            </Link>
            <Link
              to="/children"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Children & Education
            </Link>
            <Link
              to="/school"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Our School
            </Link>
            <Link
              to="/old-age-care"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Old Age Care
            </Link>
            <Link
              to="/sponsor"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-amber-700 bg-amber-50"
            >
              Sponsor a Child or Elder
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Our Impact & Projects
            </Link>
            <Link
              to="/volunteer"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/store"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-emerald-800 bg-emerald-50"
            >
              E-Commerce Store (Shop With Purpose)
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Photo & Video Gallery
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50"
            >
              Contact Us
            </Link>
            <Link
              to="/account"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              My Account & History
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/donate"
                className="w-full py-3.5 bg-[#0F3E2E] text-white text-center rounded-xl font-bold flex items-center justify-center shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2 text-amber-400 fill-amber-400" />
                Donate Now (80G Tax Exemption)
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
