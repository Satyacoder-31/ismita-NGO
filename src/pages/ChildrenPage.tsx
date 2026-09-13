import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Sun, 
  BookOpen, 
  Utensils, 
  Sparkles, 
  Trophy, 
  Smile, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { CHILDREN_DATA } from '../data/mockData';
import { useDonation } from '../context/DonationContext';

export const ChildrenPage: React.FC = () => {
  const { addSponsorship } = useDonation();
  const [sponsoredChild, setSponsoredChild] = useState<string | null>(null);

  const DAY_IN_LIFE = [
    {
      time: '6:30 AM',
      title: 'Dawn Rise & Morning Yoga',
      desc: 'Awakening with gentle pranayama, sunlight stretching, hygiene routine, and a fresh glass of warm fortified milk.',
      icon: Sun,
    },
    {
      time: '8:30 AM',
      title: 'School Assembly & Academics',
      desc: 'National anthem, thought-of-the-day presentation, followed by interactive STEM, literature, and mathematics classes.',
      icon: BookOpen,
    },
    {
      time: '1:00 PM',
      title: 'Wholesome Community Mid-Day Lunch',
      desc: 'Steaming hot dal, seasonal greens, fresh rotis, rice, and curd eaten together in the open dining pavilion.',
      icon: Utensils,
    },
    {
      time: '3:00 PM',
      title: 'Robotics, Coding & Fine Arts',
      desc: 'Afternoon rotation through our digital computer lab, classical music chamber, or watercolour painting studio.',
      icon: Sparkles,
    },
    {
      time: '5:00 PM',
      title: 'Intergenerational Mentorship with Elders',
      desc: 'Children join senior residents for homework assistance, grandfatherly riddles, and storytelling.',
      icon: Heart,
    },
    {
      time: '6:00 PM',
      title: 'Playground Sports & Martial Arts',
      desc: 'Energetic football, cricket matches, running drills, and self-defense martial arts practice.',
      icon: Trophy,
    },
    {
      time: '7:30 PM',
      title: 'Quiet Study & Library Reading',
      desc: 'Dedicated self-study period guided by resident tutors to clarify doubts and complete school assignments.',
      icon: Clock,
    },
    {
      time: '8:30 PM',
      title: 'Community Dinner & Peaceful Slumber',
      desc: 'Nutritious dinner, evening reflection prayer with house parents, and restful sleep in warm, secure dormitories.',
      icon: Smile,
    },
  ];

  const handleSponsorClick = (childName: string, amount: number, image: string) => {
    addSponsorship({
      type: 'child',
      targetName: childName,
      monthlyAmount: amount,
      beneficiaryImage: image,
    });
    setSponsoredChild(childName);
    setTimeout(() => setSponsoredChild(null), 3500);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?q=80&w=2000&auto=format&fit=crop)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Child Care, Welfare & Development
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight leading-tight">
            Giving Children More Than Education — Giving Them Possibility.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Every child in our foster care facility is treated with immense love, psychological safety, and individual dignity. We do not raise inmates; we nurture confident future leaders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/sponsor"
              className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg flex items-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Sponsor a Child Now</span>
            </Link>
            <Link
              to="/donate"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition backdrop-blur-sm border border-white/20"
            >
              Support Children’s Healthcare Fund
            </Link>
          </div>
        </div>
      </section>

      {/* Success Notification Alert */}
      {sponsoredChild && (
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-emerald-900 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 animate-in fade-in">
            <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-sm">
              Wonderful! You have initiated monthly sponsorship for <strong>{sponsoredChild}</strong>. You can view updates in your account dashboard.
            </p>
          </div>
        </div>
      )}

      {/* Pillars of Child Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Comprehensive Child Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Eight Pillars of Holistic Well-Being
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Loving Child Foster Care', desc: 'Secure, clean residential homes with 24/7 caring house parents.', icon: Heart },
            { title: 'Certified Education', desc: 'English medium schooling with zero fee burden on families.', icon: BookOpen },
            { title: 'Clinical Pediatric Nutrition', desc: '4 freshly cooked meals a day formulated to reverse childhood stunting.', icon: Utensils },
            { title: 'Geriatric & Pediatric Care', desc: 'Quarterly blood panels, dental camps, and round-the-clock infirmary.', icon: ShieldCheck },
            { title: 'Trauma & Emotional Support', desc: 'Licensed child counselors to overcome early trauma and neglect.', icon: Smile },
            { title: 'Extracurricular Creativity', desc: 'Classical dance, pottery, martial arts, debate, and music.', icon: Sparkles },
            { title: 'Digital Skill Development', desc: 'Coding, typing, robotics, and generative AI research literacy.', icon: Award },
            { title: 'Career Guidance & College', desc: 'Long-term support into college degrees or certified polytechnics.', icon: Trophy },
          ].map((col, idx) => {
            const Icon = col.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0F3E2E] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">{col.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{col.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* "A Day in Their Life" Timeline */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Daily Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              A Day in Their Life
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Structured with discipline, joyful activities, play, wholesome nutrition, and loving mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAY_IN_LIFE.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-900 font-mono font-bold text-xs rounded-full">
                        {step.time}
                      </span>
                      <Icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base font-heading">{step.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Children Directory & Sponsorship Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Meet the Children
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Children Waiting for a Benefactor
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Your monthly sponsorship covers school tuition, uniforms, textbooks, healthcare, and daily nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHILDREN_DATA.map((child) => (
            <div
              key={child.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={child.image} alt={child.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {child.grade}
                  </div>
                  <div className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full shadow ${
                    child.sponsored ? 'bg-emerald-600 text-white' : 'bg-amber-400 text-slate-950'
                  }`}>
                    {child.sponsored ? 'Sponsored' : 'Waiting for Sponsor'}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl font-heading">{child.name}, Age {child.age}</h3>
                  <p className="text-xs text-amber-700 font-semibold mt-1">Dream: {child.dream}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{child.story}</p>
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-500 space-y-1">
                    <p><strong>Interests:</strong> {child.interests.join(', ')}</p>
                    <p><strong>Health:</strong> {child.healthStatus}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-slate-400">Monthly Pledge</span>
                  <p className="text-base font-extrabold text-[#0F3E2E]">₹{child.monthlyCost}/mo</p>
                </div>
                <button
                  onClick={() => handleSponsorClick(child.name, child.monthlyCost, child.image)}
                  className="px-4 py-2 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow"
                >
                  Sponsor {child.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
