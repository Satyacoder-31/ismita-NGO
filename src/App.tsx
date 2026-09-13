import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Contexts
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { DonationProvider } from './context/DonationContext';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickContactSpeedDial } from './components/layout/QuickContactSpeedDial';
import { SearchModal } from './components/layout/SearchModal';
import { TaxReceiptModal } from './components/layout/TaxReceiptModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SchoolPage } from './pages/SchoolPage';
import { ChildrenPage } from './pages/ChildrenPage';
import { OldAgeCarePage } from './pages/OldAgeCarePage';
import { SponsorshipPage } from './pages/SponsorshipPage';
import { DonationPage } from './pages/DonationPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { StorePage } from './pages/StorePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { UserAccountPage } from './pages/UserAccountPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA] text-[#1E293B]">
      {/* Global Fixed Luxury Navbar */}
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Main Content Area: Home is pt-0 for full-bleed hero stretch under header; inner pages have comfortable top spacing */}
      <main className={`flex-1 ${isHome ? '' : 'pt-20 sm:pt-24 lg:pt-28'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/old-age-care" element={<OldAgeCarePage />} />
          <Route path="/sponsor" element={<SponsorshipPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<UserAccountPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </main>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Floating Quick Action Speed Dial */}
      <QuickContactSpeedDial />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
      <TaxReceiptModal />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <DonationProvider>
              <ScrollToTop />
              <MainLayout />
            </DonationProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
