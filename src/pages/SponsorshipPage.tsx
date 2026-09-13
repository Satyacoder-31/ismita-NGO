import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, UserCheck, BookOpen, Utensils, Activity, Gift } from 'lucide-react';
import { useDonation } from '../context/DonationContext';
import confetti from 'canvas-confetti';

export const SponsorshipPage: React.FC = () => {
  const { addSponsorship } = useDonation();
  const [activeCategory, setActiveCategory] = useState<'all' | 'child' | 'elder' | 'education' | 'nutrition'>('all');
  const [pledged, setPledged] = useState<string | null>(null);

  const SPONSOR_PLANS = [
    {
      id: 'sp-1',
      type: 'child' as const,
      category: 'child',
      title: 'Sponsor an Orphaned Child',
      monthlyAmount: 1500,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
      description: 'Provide foster shelter, personal attention, English school education, pediatric healthcare, and 4 meals daily.',
      includes: ['Full academic schooling', 'School uniform & bag', 'Daily nutrition & milk', 'Pediatric medical cover'],
      icon: UserCheck,
    },
    {
      id: 'sp-2',
      type: 'elder' as const,
      category: 'elder',
      title: 'Sponsor a Destitute Elder',
      monthlyAmount: 3500,
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop',
      description: 'Ensure a senior citizen lives with unconditional dignity, personal assisted room care, daily medicines, and loving fellowship.',
      includes: ['Assisted living room', '24/7 geriatric doctor & nurse', 'Custom low-sodium meals', 'Physiotherapy & mobility aid'],
      icon: Heart,
    },
    {
      id: 'sp-3',
      type: 'education' as const,
      category: 'education',
      title: 'Sponsor Academic Education',
      monthlyAmount: 1000,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
      description: 'Fund classroom smart learning, NCERT textbooks, computer coding classes, and school supplies for one student.',
      includes: ['Certified curriculum', 'Smart lab computer time', 'Textbooks & geometry kit', 'Exam fee coverage'],
      icon: BookOpen,
    },
    {
      id: 'sp-4',
      type: 'food' as const,
      category: 'nutrition',
      title: 'Sponsor Daily Wholesome Nutrition',
      monthlyAmount: 800,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      description: 'Provide 30 days of protein-rich breakfast, mid-day school meals, and seasonal fruits to eliminate childhood malnutrition.',
      includes: ['Fresh milk & boiled egg/paneer', 'Seasonal green vegetables', 'Fortified grains & pulses', 'Clean filtered RO water'],
      icon: Utensils,
    },
    {
      id: 'sp-5',
      type: 'healthcare' as const,
      category: 'elder',
      title: 'Sponsor Chronic Geriatric Healthcare',
      monthlyAmount: 1200,
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
      description: 'Cover essential prescription medicines for hypertension, diabetes, arthritis, and weekly physiotherapist sessions.',
      includes: ['Daily prescription drugs', 'Weekly physiotherapy sessions', 'Eye checkups & spectacles', 'Dental care maintenance'],
      icon: Activity,
    },
    {
      id: 'sp-6',
      type: 'supplies' as const,
      category: 'education',
      title: 'Sponsor Student School Stationery',
      monthlyAmount: 500,
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
      description: 'Ensure a child never runs out of notebooks, pencils, sketch pens, and geometry instruments for their schoolwork.',
      includes: ['6 long exercise books/mo', 'Art sketch pad & watercolours', 'Writing instrument set', 'Mathematical instrument box'],
      icon: Gift,
    },
  ];

  const filteredPlans = activeCategory === 'all'
    ? SPONSOR_PLANS
    : SPONSOR_PLANS.filter((p) => p.category === activeCategory);

  const handlePledge = (plan: typeof SPONSOR_PLANS[0]) => {
    addSponsorship({
      type: plan.type,
      targetName: plan.title,
      monthlyAmount: plan.monthlyAmount,
      beneficiaryImage: plan.image,
    });
    setPledged(plan.title);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0F3E2E', '#D4AF37', '#10B981'],
      });
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => setPledged(null), 4000);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Sponsorship Matrix
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Sponsor a Life. Change a Destiny.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Choose to sponsor an individual child, an elder, or a core survival need. You receive quarterly handwritten letters, progress cards, and photo updates.
          </p>
        </div>
      </section>

      {/* Success Notification Alert */}
      {pledged && (
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-emerald-950 border border-emerald-500/50 text-white p-5 rounded-2xl shadow-2xl flex items-center space-x-3 animate-in fade-in">
            <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-sm">
              Thank you! You have pledged monthly sponsorship for <strong>{pledged}</strong>. You can manage your recurring sponsorship in your account.
            </p>
          </div>
        </div>
      )}

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Sponsorships' },
            { id: 'child', label: 'Children Care' },
            { id: 'elder', label: 'Old Age Care' },
            { id: 'education', label: 'Education & School' },
            { id: 'nutrition', label: 'Food & Nutrition' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition ${
                activeCategory === tab.id
                  ? 'bg-[#0F3E2E] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sponsorship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={plan.image} alt={plan.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1.5 rounded-full shadow">
                      ₹{plan.monthlyAmount.toLocaleString('en-IN')}/month
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#0F3E2E] mb-2">
                      <Icon className="w-5 h-5" />
                      <h3 className="font-bold text-slate-900 text-xl font-heading">{plan.title}</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        What This Includes:
                      </p>
                      {plan.includes.map((item, i) => (
                        <div key={i} className="flex items-center text-xs text-slate-700 space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Monthly Contribution</span>
                    <p className="text-lg font-extrabold text-[#0F3E2E]">₹{plan.monthlyAmount}/mo</p>
                  </div>
                  <button
                    onClick={() => handlePledge(plan)}
                    className="px-5 py-2.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow flex items-center space-x-1.5"
                  >
                    <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>Sponsor Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
