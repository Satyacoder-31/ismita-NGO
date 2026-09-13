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
  LayoutDashboard,
  Home,
  GraduationCap,
  Users,
  HandHeart,
  FileText,
  ChevronRight
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
  const [avatarError, setAvatarError] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
    <>
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
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 ${
              isTransparent
                ? 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-amber-500 shadow-emerald-950/40 text-white'
                : 'bg-gradient-to-br from-[#0F3E2E] via-[#155e42] to-[#0A192F] shadow-emerald-950/20'
            }`}>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center">
                <span className={`font-heading font-extrabold text-base sm:text-xl tracking-tight transition-colors ${
                  isTransparent ? 'text-white' : 'text-[#0F3E2E]'
                }`}>
                  ISMITA
                </span>
                <span className="font-heading font-light text-xs sm:text-base xl:text-xl tracking-wider text-amber-400 ml-1 sm:ml-1.5">
                  <span className="hidden sm:inline">CHARITABLE </span>FOUNDATION
                </span>
              </div>
              <p className={`hidden md:block text-[10px] uppercase tracking-widest font-semibold -mt-1 transition-colors ${
                isTransparent ? 'text-slate-300' : 'text-slate-500'
              }`}>
                Education • Elder Care • Social Impact
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2.5 text-[13.5px] xl:text-[14.5px] font-medium">
            <Link
              to="/"
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
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
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
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
              to="/school"
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/school') || isActive('/children')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/school') || isActive('/children')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              School & Care
            </Link>
            <Link
              to="/old-age-care"
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/old-age-care')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/old-age-care')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Elder Care
            </Link>
            <Link
              to="/projects"
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
                isTransparent
                  ? isActive('/projects')
                    ? 'text-white font-bold bg-white/20'
                    : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  : isActive('/projects')
                    ? 'text-[#0F3E2E] font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-slate-50'
              }`}
            >
              Impact
            </Link>

            {/* Get Involved Dropdown */}
            <div className="relative">
              <button
                onClick={() => setInvolvedDropdown(!involvedDropdown)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-xl flex items-center space-x-1 transition-all ${
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
                    to="/children"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
                  >
                    <div className="font-semibold">Children Home & Foster Care</div>
                    <div className="text-xs text-slate-500">Safe shelter & education</div>
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
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl font-semibold flex items-center transition-all ${
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
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
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
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 lg:space-x-3.5 flex-shrink-0">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className={`p-2 sm:p-2.5 rounded-full transition ${
                isTransparent
                  ? 'text-white hover:text-amber-300 hover:bg-white/15'
                  : 'text-slate-600 hover:text-[#0F3E2E] hover:bg-slate-100'
              }`}
              title="Search site & store"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/account?tab=wishlist"
              className={`p-2 sm:p-2.5 rounded-full transition relative hidden md:flex ${
                isTransparent
                  ? 'text-white hover:text-amber-300 hover:bg-white/15'
                  : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
              }`}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-amber-400 text-slate-950 rounded-full text-[10px] font-bold flex items-center justify-center shadow">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className={`p-2 sm:p-2.5 rounded-full transition relative ${
                isTransparent
                  ? 'text-white hover:text-amber-300 hover:bg-white/15'
                  : 'text-slate-600 hover:text-[#0F3E2E] hover:bg-emerald-50'
              }`}
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {totalItems > 0 && (
                <span className={`absolute top-0.5 right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse shadow ${
                  isTransparent ? 'bg-amber-400 text-slate-950 font-black' : 'bg-emerald-700 text-white'
                }`}>
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Account / Profile Dropdown - Prominently Styled and Always Visible */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`p-1.5 sm:p-2 rounded-full transition flex items-center justify-center border shadow-xs ${
                  isTransparent
                    ? 'text-white hover:text-amber-300 hover:bg-white/20 bg-white/10 border-white/25'
                    : 'text-slate-700 hover:text-[#0F3E2E] hover:bg-emerald-50 bg-slate-100/90 border-slate-200'
                }`}
                title={isAuthenticated && user ? `Profile: ${user.name}` : "Account / Sign In"}
                aria-label="Account Profile"
              >
                {isAuthenticated && user ? (
                  <div className="relative flex items-center">
                    {!avatarError && user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        onError={() => setAvatarError(true)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-amber-400 shadow-xs"
                      />
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0F3E2E] text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-400">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                    )}
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 border border-white rounded-full"></span>
                  </div>
                ) : (
                  <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-current" />
                )}
              </button>

              {userMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 sm:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 text-left text-slate-800 max-w-[calc(100vw-32px)]"
                  onMouseLeave={() => setUserMenuOpen(false)}
                >
                  {isAuthenticated && user ? (
                    <>
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-xs text-slate-400">Signed in as</p>
                        <p className="text-sm font-bold text-[#0F3E2E] truncate">{user.name}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                            {user.role}
                          </span>
                          <span className="text-[11px] text-slate-400 truncate">{user.email}</span>
                        </div>
                      </div>
                      <div className="py-1">
                        <Link
                          to="/account"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E]"
                        >
                          <UserIcon className="w-4 h-4 mr-2.5 text-slate-400" />
                          <span>My Account & Tax Receipts</span>
                        </Link>
                        {user.role === 'admin' && (
                          <Link
                            to="/admin"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex items-center px-4 py-2.5 text-sm text-emerald-700 font-semibold hover:bg-emerald-50"
                          >
                            <LayoutDashboard className="w-4 h-4 mr-2.5 text-emerald-600" />
                            <span>Admin Executive Portal</span>
                          </Link>
                        )}
                        <Link
                          to="/account?tab=wishlist"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50"
                        >
                          <Bookmark className="w-4 h-4 mr-2.5 text-slate-400" />
                          <span>Saved Wishlist ({totalWishlistItems})</span>
                        </Link>
                        <Link
                          to="/cart"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50"
                        >
                          <ShoppingBag className="w-4 h-4 mr-2.5 text-slate-400" />
                          <span>Shopping Cart ({totalItems})</span>
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
                        onClick={() => setUserMenuOpen(false)}
                        className="block w-full py-2 px-4 bg-[#0F3E2E] text-white text-center rounded-xl text-sm font-medium hover:bg-emerald-900 transition mb-2 shadow"
                      >
                        Sign In / Register
                      </Link>
                      <div className="text-center">
                        <span className="text-[11px] text-slate-400">or Quick Demo as:</span>
                        <div className="grid grid-cols-2 gap-1 mt-1.5">
                          <button
                            onClick={() => {
                              quickLogin('donor');
                              setUserMenuOpen(false);
                            }}
                            className="text-xs py-1 px-2 border rounded-lg hover:bg-slate-50 text-slate-700"
                          >
                            Donor
                          </button>
                          <button
                            onClick={() => {
                              quickLogin('admin');
                              setUserMenuOpen(false);
                            }}
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

            {/* Donate CTA Button (Desktop/Tablet) */}
            <Link
              to="/donate"
              className={`hidden sm:inline-flex relative items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:scale-102 ${
                isTransparent && !mobileMenuOpen
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/25'
                  : 'bg-gradient-to-r from-[#0F3E2E] to-[#175B44] hover:from-emerald-900 text-white shadow-emerald-950/20'
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 ${isTransparent && !mobileMenuOpen ? 'text-slate-950 fill-slate-950' : 'text-amber-400 fill-amber-400'}`} />
              <span>Donate</span>
            </Link>

            {/* Mobile Menu Toggle Button: Prominently Labeled & Styled */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border shadow-xs flex-shrink-0 ${
                isTransparent && !mobileMenuOpen
                  ? 'text-white bg-white/15 border-white/25 hover:bg-white/25'
                  : 'text-[#0F3E2E] bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-red-500 stroke-[2.5]" />
                  <span className="font-bold">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-amber-500 stroke-[2.5]" />
                  <span className="font-bold tracking-wide">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Full Slide-Over Drawer Menu */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 w-[88vw] max-w-[390px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Top Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-[#0A192F] text-white">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-amber-500 flex items-center justify-center">
              <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-sm tracking-tight leading-none text-white">
                ISMITA <span className="font-light text-amber-400">FOUNDATION</span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase tracking-wider">Social Welfare & Care</span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-800">
          {/* Search Bar Action in Drawer */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full py-2.5 px-3.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-left text-xs text-slate-600 flex items-center justify-between transition border border-slate-200/60"
          >
            <span className="flex items-center">
              <Search className="w-4 h-4 mr-2 text-slate-400" />
              Search causes, programs, store...
            </span>
            <span className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-500">Find</span>
          </button>

          {/* Mobile Profile Card */}
          <div className="p-3.5 bg-gradient-to-r from-emerald-50 to-amber-50/70 rounded-2xl border border-emerald-200/70 shadow-xs">
            {isAuthenticated && user ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#0F3E2E] text-white font-bold flex items-center justify-center border-2 border-amber-400 overflow-hidden shadow-xs">
                      {!avatarError && user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-amber-300">{user.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] text-slate-500 font-medium">Signed In</p>
                      <p className="text-sm font-bold text-[#0F3E2E] truncate max-w-[150px]">{user.name}</p>
                      <span className="inline-block text-[10px] font-semibold text-emerald-800 uppercase bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        {user.role}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-1.5 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold shadow hover:bg-emerald-900 transition"
                  >
                    My Profile
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-200/60 text-xs">
                  <Link
                    to="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2.5 bg-white rounded-lg border border-slate-200 text-center font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Tax Receipts
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="py-1.5 px-2.5 bg-red-50 text-red-700 rounded-lg border border-red-200 text-center font-semibold hover:bg-red-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center border border-slate-300">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Welcome, Guest</p>
                    <p className="text-[11px] text-slate-500">Sign in to track donations & orders</p>
                  </div>
                </div>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold shadow hover:bg-emerald-900 transition"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>

          {/* Quick Persona Demo Switcher */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Quick Persona Switch</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded font-medium">1-Click Demo</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <button 
                onClick={() => quickLogin('donor')}
                className="py-1 px-2 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
              >
                Donor
              </button>
              <button 
                onClick={() => quickLogin('sponsor')}
                className="py-1 px-2 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0F3E2E] transition"
              >
                Sponsor
              </button>
              <button 
                onClick={() => quickLogin('admin')}
                className="py-1 px-2 rounded-lg bg-emerald-100 border border-emerald-200 font-bold text-emerald-900 hover:bg-emerald-200 transition"
              >
                Admin
              </button>
            </div>
          </div>

          {/* Navigation Group 1: Main */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Main Navigation</p>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/') ? 'text-[#0F3E2E] bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><Home className="w-4 h-4 mr-2.5 text-[#0F3E2E]" />Home</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/about') ? 'text-[#0F3E2E] bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><Heart className="w-4 h-4 mr-2.5 text-[#0F3E2E]" />About Us</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/projects') ? 'text-[#0F3E2E] bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><Sparkles className="w-4 h-4 mr-2.5 text-[#0F3E2E]" />Our Impact & Projects</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/gallery') ? 'text-[#0F3E2E] bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><FileText className="w-4 h-4 mr-2.5 text-[#0F3E2E]" />Photo & Video Gallery</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Navigation Group 2: Care & Sanctuaries */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Care & Sanctuaries</p>
            <Link to="/children" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/children') ? 'text-emerald-800 bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><Users className="w-4 h-4 mr-2.5 text-emerald-600" />Children & Foster Care</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link to="/school" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/school') ? 'text-emerald-800 bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><GraduationCap className="w-4 h-4 mr-2.5 text-emerald-600" />Ismita Vidyalaya (Our School)</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link to="/old-age-care" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/old-age-care') ? 'text-emerald-800 bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><HandHeart className="w-4 h-4 mr-2.5 text-emerald-600" />Old Age Care Sanctuary</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Navigation Group 3: Get Involved */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Get Involved</p>
            <Link to="/sponsor" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-amber-900 bg-amber-50/80 border border-amber-200/60 hover:bg-amber-100/70 transition">
              <span className="flex items-center"><Heart className="w-4 h-4 mr-2.5 text-amber-600 fill-amber-500" />Sponsor a Child or Elder</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </Link>
            <Link to="/volunteer" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/volunteer') ? 'text-[#0F3E2E] bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><Users className="w-4 h-4 mr-2.5 text-[#0F3E2E]" />Volunteer With Us</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition ${isActive('/contact') ? 'text-[#0F3E2E] bg-emerald-50' : 'text-slate-800 hover:bg-slate-50'}`}>
              <span className="flex items-center"><Phone className="w-4 h-4 mr-2.5 text-[#0F3E2E]" />Contact & Campus Visit</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Navigation Group 4: Social Commerce */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Social Commerce</p>
            <Link to="/store" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-emerald-900 bg-emerald-50/80 border border-emerald-200/60 hover:bg-emerald-100/70 transition">
              <span className="flex items-center"><Sparkles className="w-4 h-4 mr-2.5 text-amber-500" />Shop Essentials (100% Profits to Charity)</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </Link>
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50">
              <span className="flex items-center"><ShoppingBag className="w-4 h-4 mr-2.5 text-slate-600" />Shopping Cart ({totalItems})</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Statutory Tax Exemption */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800">80G Tax Exemption Certified</p>
              <p className="text-[11px] text-slate-500 mt-0.5">50% tax deduction on all donations under Sec 80G of Income Tax Act.</p>
              <Link to="/account" onClick={() => setMobileMenuOpen(false)} className="text-emerald-700 font-bold underline mt-1 inline-block">
                Generate Instant 80G Tax Receipt →
              </Link>
            </div>
          </div>

          {/* Helpline contact */}
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/70 text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-amber-600" />
              <span className="font-semibold text-amber-900">Toll-Free Helpline</span>
            </div>
            <a href="tel:18002094455" className="font-bold text-[#0F3E2E] hover:underline">1800-209-4455</a>
          </div>
        </div>

        {/* Drawer Bottom Sticky Action */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <Link
            to="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-extrabold text-sm rounded-xl flex items-center justify-center shadow-lg hover:brightness-105 transition"
          >
            <Heart className="w-4 h-4 mr-2 fill-slate-950 text-slate-950" />
            Donate Now (80G Tax Exemption)
          </Link>
        </div>
      </aside>

      {/* Mobile Floating Sticky Bottom Navigation Bar */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] py-1.5 px-3 flex items-center justify-around"
        aria-label="Mobile Bottom Navigation"
      >
        {/* 1. Home */}
        <Link 
          to="/" 
          className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition ${
            isActive('/') ? 'text-[#0F3E2E] font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Home className={`w-5 h-5 ${isActive('/') ? 'stroke-[2.5] text-[#0F3E2E]' : ''}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
        </Link>

        {/* 2. Programs */}
        <Link 
          to="/school" 
          className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition ${
            isActive('/school') || isActive('/children') || isActive('/old-age-care') 
              ? 'text-[#0F3E2E] font-bold' 
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <GraduationCap className={`w-5 h-5 ${isActive('/school') || isActive('/children') ? 'stroke-[2.5] text-[#0F3E2E]' : ''}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Programs</span>
        </Link>

        {/* 3. Center Elevated Donate Button */}
        <Link 
          to="/donate" 
          className="flex flex-col items-center -mt-5 group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-amber-600 to-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 group-active:scale-95 transition-transform border-2 border-white">
            <Heart className="w-6 h-6 fill-slate-950 text-slate-950" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold text-amber-700">Donate</span>
        </Link>

        {/* 4. Store */}
        <Link 
          to="/store" 
          className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition relative ${
            isActive('/store') ? 'text-emerald-800 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <ShoppingBag className={`w-5 h-5 ${isActive('/store') ? 'stroke-[2.5] text-emerald-800' : ''}`} />
          {totalItems > 0 && (
            <span className="absolute top-0.5 right-2 w-4 h-4 bg-emerald-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="text-[10px] mt-0.5 tracking-tight">Store</span>
        </Link>

        {/* 5. Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition ${
            mobileMenuOpen ? 'text-[#0F3E2E] font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-red-500 stroke-[2.5]" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
          <span className="text-[10px] mt-0.5 tracking-tight">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>
    </>
  );
};
