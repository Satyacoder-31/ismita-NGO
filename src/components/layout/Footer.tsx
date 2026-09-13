import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Newsletter & Emotional Mission Statement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-slate-800">
        <div className="bg-gradient-to-r from-[#0F3E2E] to-[#124232] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/40">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
                Stay Connected With Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Receive Monthly Impact Reports & Inspiring Stories
              </h3>
              <p className="mt-2 text-slate-300 text-sm max-w-xl">
                Get firsthand updates on the children graduating our school, medical milestones in our old age home, and community relief initiatives. Zero spam.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-4 text-emerald-300 flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Thank you! You are now subscribed to our monthly impact digest.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Organization & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-amber-500 flex items-center justify-center text-white shadow-lg">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  ISMITA
                </span>
                <span className="font-heading font-light text-base md:text-xl text-amber-400 ml-1">
                  CHARITABLE FOUNDATION
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              A registered Indian social welfare trust dedicated to the holistic education and foster care of orphaned and underprivileged children, dignified shelter for the elderly, and ethical community commerce.
            </p>

            {/* Official Registration Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-300 font-mono">
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded-lg">
                Reg No: 4021/IV/2015
              </span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-emerald-400 font-semibold">
                80G / 12A Certified
              </span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-amber-400">
                CSR-1 Approved
              </span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded-lg">
                FCRA Registered
              </span>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-4 space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Ismita Charitable Foundation Campus, Mandir Marg, Institutional Area, New Delhi - 110001</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 11 2345 6789 / 1800-209-4455</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>contact@ismitafoundation.org / care@ismitafoundation.org</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Programs */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Programs & Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/school" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Our School (Vidyalaya)
                </Link>
              </li>
              <li>
                <Link to="/children" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Children Foster Care
                </Link>
              </li>
              <li>
                <Link to="/old-age-care" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Old Age Assisted Living
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Community Food Kitchen
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Mobile Health Clinics
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Foundation Story & Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/sponsor" className="text-amber-300 hover:text-amber-200 font-semibold transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  Sponsor a Child
                </Link>
              </li>
              <li>
                <Link to="/sponsor" className="text-amber-300 hover:text-amber-200 font-semibold transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  Sponsor an Elder
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Make an 80G Donation
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Impact Gallery
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-emerald-400 hover:text-emerald-300 transition flex items-center text-xs pt-2">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Admin Executive Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Purpose-Driven Store */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Impact Grocery Store
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/store" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/store?cat=Rice" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Aged Basmati Rice
                </Link>
              </li>
              <li>
                <Link to="/store?cat=Flour%20%2F%20Atta" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Stone Ground Sharbati Atta
                </Link>
              </li>
              <li>
                <Link to="/store?cat=Cooking%20Oil" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Cold Pressed Oils
                </Link>
              </li>
              <li>
                <Link to="/store?cat=Pulses%20%2F%20Dal" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  Unpolished Dals
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-emerald-300 font-semibold hover:text-emerald-200 transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                  View Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust, Tax Exemption & Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>
            Donations are 50% tax exempt under Section 80G of the Indian Income Tax Act. URN: AAATA1234F20214.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/contact" className="hover:text-slate-300">Privacy Policy</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-slate-300">Terms & Conditions</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-slate-300">Refund & Cancellation</Link>
          <span>•</span>
          <span>© 2026 Ismita Charitable Foundation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
