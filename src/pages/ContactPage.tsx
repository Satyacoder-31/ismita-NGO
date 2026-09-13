import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Heart,
  HelpCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Child Sponsorship Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Reach Out to Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Contact Ismita Charitable Foundation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Have questions about sponsoring a child, admitting an elderly resident, corporate CSR, or visiting our campus? We are here to listen and help.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 font-heading border-b pb-4">
                Headquarters & Campus
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F3E2E] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Campus Address</h3>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                      Ismita Charitable Foundation, Plot No. 14, Mandir Marg Institutional Area, Near Connaught Place, New Delhi - 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Telephone & Helpline</h3>
                    <p className="text-slate-600 text-xs mt-0.5">Toll-Free: 1800-209-4455</p>
                    <p className="text-slate-600 text-xs">Campus Landline: +91 11 2345 6789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Electronic Mail</h3>
                    <p className="text-slate-600 text-xs mt-0.5">General: contact@ismitafoundation.org</p>
                    <p className="text-slate-600 text-xs">Donations & 80G: accounts@ismitafoundation.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Campus Visiting Hours</h3>
                    <p className="text-slate-600 text-xs mt-0.5">Monday to Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="text-slate-600 text-xs">Sunday: Prior Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Our Coordinator on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Campus Map Placeholder */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm aspect-video relative flex items-center justify-center text-slate-400 p-6 text-center">
              <div className="space-y-2">
                <MapPin className="w-8 h-8 text-emerald-800 mx-auto animate-bounce" />
                <p className="text-sm font-bold text-slate-800">Ismita Charitable Foundation Campus</p>
                <p className="text-xs text-slate-500">2.5-Acre Integrated Campus • School, Old Age Home & Community Kitchen</p>
                <p className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                  GPS: 28.6139° N, 77.2090° E
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-100 text-[#0F3E2E] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Ismita Charitable Foundation. A trust coordinator will respond via phone or email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Have a question regarding child sponsorship, elderly admission, CSR or volunteering? Let us know.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Sameer Kulkarni"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sameer@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98200 00000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Subject / Purpose
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none bg-white"
                    >
                      <option>Child Sponsorship Inquiry</option>
                      <option>Elder Admission & Care Inquiry</option>
                      <option>School Admissions & Curriculum</option>
                      <option>CSR Partnership & Grants</option>
                      <option>80G Tax Exemption Query</option>
                      <option>E-Commerce Store Order Inquiry</option>
                      <option>Volunteer Registration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please write your detailed inquiry or question here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-extrabold rounded-2xl text-sm transition shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
