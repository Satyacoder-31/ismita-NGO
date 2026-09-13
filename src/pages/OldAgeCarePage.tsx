import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Smile, 
  Activity, 
  Utensils, 
  Coffee, 
  Sun, 
  CheckCircle2, 
  PhoneCall, 
  Building,
  Sparkles
} from 'lucide-react';
import { ELDERS_DATA } from '../data/mockData';
import { useDonation } from '../context/DonationContext';

export const OldAgeCarePage: React.FC = () => {
  const { addSponsorship } = useDonation();
  const [sponsoredElder, setSponsoredElder] = useState<string | null>(null);

  const CARE_SERVICES = [
    {
      title: 'Comfortable Accommodation',
      desc: 'Wheelchair-accessible rooms with orthopaedic beds, attached barrier-free bathrooms, and panic emergency call buttons.',
      icon: Building,
    },
    {
      title: 'Nutritious Customized Meals',
      desc: 'Diabetic-friendly, low-sodium wholesome vegetarian meals freshly prepared and served four times daily.',
      icon: Utensils,
    },
    {
      title: '24/7 Geriatric Healthcare',
      desc: 'Round-the-clock resident nursing staff, weekly consultant geriatricians, blood pressure monitoring, and physiotherapy.',
      icon: Activity,
    },
    {
      title: 'Companionship & Fellowship',
      desc: 'Daily group newspaper discussions, board games, community terrace gardening, and gentle evening strolls.',
      icon: Heart,
    },
    {
      title: 'Spiritual & Cultural Gatherings',
      desc: 'Weekly morning bhajans, festival celebrations, meditation hours, and sacred pilgrimages for willing residents.',
      icon: Sun,
    },
    {
      title: 'Intergenerational Mentorship',
      desc: 'Reciprocal joy: Seniors mentor school children in reading and storytelling, creating a heartwarming family atmosphere.',
      icon: Smile,
    },
    {
      title: '24/7 Emergency ICU Transport',
      desc: 'On-campus dedicated ambulance with oxygen life-support and tie-ups with apex tertiary medical hospitals.',
      icon: PhoneCall,
    },
  ];

  const handleSponsorElder = (elderName: string, amount: number, image: string) => {
    addSponsorship({
      type: 'elder',
      targetName: elderName,
      monthlyAmount: amount,
      beneficiaryImage: image,
    });
    setSponsoredElder(elderName);
    setTimeout(() => setSponsoredElder(null), 3500);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0A192F] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
            Ismita Old Age Care Sanctuary
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight leading-tight">
            Care With Dignity. Companionship With Heart.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Our twilight sanctuary is built to ensure that no senior citizen ever experiences abandonment, hunger, or loneliness. Here, elders live as revered family members.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/sponsor"
              className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg flex items-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Support an Elder Today</span>
            </Link>
            <Link
              to="/donate"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition backdrop-blur-sm border border-white/20"
            >
              Donate for Elderly Medical Care
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsor Success Feedback Alert */}
      {sponsoredElder && (
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-emerald-900 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 animate-in fade-in">
            <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-sm">
              Thank you! You have sponsored monthly care for <strong>{sponsoredElder}</strong>. Your sponsorship provides medicine, food, and assisted housing.
            </p>
          </div>
        </div>
      )}

      {/* Seven Pillars of Dignified Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Assisted Living Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Comprehensive Senior Care Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARE_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg font-heading">{srv.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "Every Elder Has a Story" Showcase */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full">
              Respectful Narratives
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              Every Elder Has a Story
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our residents are not charity cases; they are mothers, teachers, workers, and storytellers deserving of honor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ELDERS_DATA.map((elder) => (
              <div
                key={elder.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition grid grid-cols-1 sm:grid-cols-12"
              >
                <div className="sm:col-span-5 relative aspect-square sm:aspect-auto">
                  <img src={elder.image} alt={elder.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Age {elder.age}
                  </div>
                </div>

                <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{elder.name}</h3>
                    <p className="text-xs text-amber-700 font-medium mt-0.5">{elder.roomType}</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">{elder.background}</p>

                    <div className="mt-3 text-xs text-slate-500 space-y-1">
                      <p><strong>Medical Needs:</strong> {elder.medicalNeeds.join(', ')}</p>
                      <p><strong>Hobbies:</strong> {elder.hobbies.join(', ')}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400">Monthly Care</span>
                      <p className="text-sm font-extrabold text-[#0F3E2E]">₹{elder.monthlyCareCost}/mo</p>
                    </div>
                    <button
                      onClick={() => handleSponsorElder(elder.name, elder.monthlyCareCost, elder.image)}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition shadow"
                    >
                      Support {elder.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
