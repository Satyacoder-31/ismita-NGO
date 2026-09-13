import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Activity, 
  Utensils, 
  Laptop, 
  Calendar, 
  Smile, 
  CheckCircle2, 
  Send,
  ShoppingBag
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const VolunteerPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('Teaching & Tutoring');
  const [skills, setSkills] = useState('');
  const [availability, setAvailability] = useState('Weekends (Saturday & Sunday)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const OPPORTUNITIES = [
    { title: 'Teaching & Tutoring', desc: 'Coach primary and middle school students in Math, Science, English, or Hindi.', icon: BookOpen },
    { title: 'STEM & Digital Skills', desc: 'Conduct weekend workshops in Python, Scratch coding, robotics, or typing.', icon: Laptop },
    { title: 'Elder Companionship', desc: 'Spend peaceful afternoons reading books, chatting, and playing chess with seniors.', icon: Heart },
    { title: 'Healthcare & Physiotherapy', desc: 'Medical practitioners and nurses conducting vital checkups and posture therapy.', icon: Activity },
    { title: 'Food Distribution & Cooking', desc: 'Help prepare and package daily nutritious mid-day meals in our hygiene kitchen.', icon: Utensils },
    { title: 'E-commerce & Store Ops', desc: 'Assist in sourcing, packaging, inventory tracking, and dispatch for our purpose store.', icon: ShoppingBag },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0F3E2E', '#D4AF37', '#10B981'],
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2000&auto=format&fit=crop)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Join Our Humanitarian Fellowship
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Your Time Can Make a Difference.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Give a few hours on a weekend to mentor a child, bring a smile to an elder, or assist our community kitchen. The joy you give will return ten-fold.
          </p>
        </div>
      </section>

      {/* Volunteer Domains Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Ways to Contribute
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Volunteer Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPPORTUNITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0F3E2E] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg font-heading">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-[#0F3E2E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Thank You, {name}!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your volunteer application has been received. Our volunteer coordinator will reach out to you within 48 hours to schedule your orientation tour.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
                  Volunteer Registration Form
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill in your details below to become a recognized volunteer mentor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sen"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul.sen@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={areaOfInterest}
                    onChange={(e) => setAreaOfInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none bg-white"
                  >
                    <option>Teaching & Tutoring</option>
                    <option>STEM & Coding Mentor</option>
                    <option>Elder Companionship</option>
                    <option>Food Kitchen & Nutrition</option>
                    <option>Medical & Healthcare Camps</option>
                    <option>E-Commerce Store & Packaging</option>
                    <option>Event Management & Photography</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Special Skills / Profession
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. Software Engineer, Doctor, Artist..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Availability
                  </label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none bg-white"
                  >
                    <option>Weekends (Saturday & Sunday)</option>
                    <option>Weekday Mornings</option>
                    <option>Weekday Evenings</option>
                    <option>Remote Mentorship Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Why would you like to volunteer with us?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a short note on what inspires you to join Ismita Charitable Foundation..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-extrabold rounded-2xl shadow-xl transition flex items-center justify-center space-x-2 text-base"
              >
                <span>Become a Volunteer</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
