import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Lock, Mail, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, quickLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email, 'donor');
      navigate('/account');
    }
  };

  const handleQuick = (role: 'donor' | 'sponsor' | 'volunteer' | 'admin') => {
    quickLogin(role);
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/account');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#0F3E2E] flex items-center justify-center text-amber-400 mx-auto shadow-md">
            <Heart className="w-6 h-6 fill-amber-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Welcome to Ismita Foundation
          </h1>
          <p className="text-xs text-slate-500">
            Sign in to track your donations, child sponsorships, and store orders.
          </p>
        </div>

        {/* 1-Click Demo Persona Switcher */}
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
            Fast Preview: 1-Click Demo Login
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleQuick('donor')}
              className="py-1.5 px-2.5 bg-white border border-emerald-300 rounded-xl text-xs font-bold text-slate-800 hover:bg-emerald-100 transition shadow-sm"
            >
              Log in as Donor
            </button>
            <button
              onClick={() => handleQuick('sponsor')}
              className="py-1.5 px-2.5 bg-white border border-emerald-300 rounded-xl text-xs font-bold text-slate-800 hover:bg-emerald-100 transition shadow-sm"
            >
              Log in as Sponsor
            </button>
            <button
              onClick={() => handleQuick('volunteer')}
              className="py-1.5 px-2.5 bg-white border border-emerald-300 rounded-xl text-xs font-bold text-slate-800 hover:bg-emerald-100 transition shadow-sm"
            >
              Log in as Volunteer
            </button>
            <button
              onClick={() => handleQuick('admin')}
              className="py-1.5 px-2.5 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition shadow-sm"
            >
              Log in as Admin
            </button>
          </div>
        </div>

        {/* Standard Email Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold uppercase text-slate-600">Password</label>
              <button type="button" className="text-[11px] text-emerald-800 hover:underline">
                Forgot?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Sign In to Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-[#0F3E2E] font-bold hover:underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};
