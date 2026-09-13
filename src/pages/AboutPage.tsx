import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { TIMELINE_DATA, TEACHERS_DATA } from '../data/mockData';

export const AboutPage: React.FC = () => {
  const TRUSTEES = [
    {
      name: 'Dr. Alok Verma',
      role: 'Managing Trustee & Founder',
      bio: 'Former senior pediatrician and social reformer who dedicated his post-retirement years to building an inclusive campus for abandoned children and seniors.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Shrimati Meera Kaul',
      role: 'Trustee - Education & Child Development',
      bio: 'Ex-headmistress of Delhi Public Schools with 32 years of academic leadership. Architects our holistic, child-centric curriculum.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Justice (Retd.) R. C. Mathur',
      role: 'Legal Advisor & Advisory Board Member',
      bio: 'Oversees organizational governance, legal auditing, child welfare rights, and statutory compliance under FCRA and Indian Trust law.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Dr. Harshvardhan Joshi',
      role: 'Director of Geriatric Health Services',
      bio: 'Leading geriatrician managing clinical protocols, palliative care, and physical therapy for all 100+ seniors at Ismita Sanctuary.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0A192F] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
            About Ismita Charitable Foundation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Nurturing Humanity. Restoring Dignity.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Founded on the sacred belief that every child deserves a pen and every elderly soul deserves a tender hand. We bridge generations to build a compassionate India.
          </p>
        </div>
      </section>

      {/* Story & Genesis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Our Journey & Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              How a Rented Room Grew Into a Sanctuary of Hope
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              In the winter of 2015, Dr. Alok Verma encountered 8-year-old child ragpickers outside a Delhi railway station. When asked why they weren't in school, one answered, "Nobody buys notebooks for children like us."
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Dr. Verma and three retired colleagues rented a modest garage room, bought blackboards, notebooks, and milk, and began teaching fifteen children every evening. Two years later, they noticed senior citizens in the locality suffering deep loneliness and medical neglect.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Bringing the two generations together was transformative. The seniors found a renewed sense of purpose helping youngsters read, while the children found the grandparents they had never known.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                alt="Early classroom"
                className="rounded-3xl shadow-lg aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Elderly smiling"
                className="rounded-3xl shadow-lg aspect-square object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0F3E2E]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To eliminate illiteracy, child abandonment, and elder destitution by providing world-class free education, holistic healthcare, and dignified assisted housing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                An India where every underprivileged child is equipped to reach their highest potential, and every senior citizen lives their twilight years surrounded by respect and love.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Our Core Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Dignity:</strong> Respecting every individual's worth.<br/>
                <strong>Radical Transparency:</strong> Accountable to the last paisa.<br/>
                <strong>Empathy in Action:</strong> Service without condescension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline 2015-2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Our Journey Through The Years
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Milestones of Compassion (2015 – 2026)
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-700/30 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-5 h-5 rounded-full bg-[#0F3E2E] border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
              <span className="sm:absolute sm:-left-28 sm:top-0 text-sm font-extrabold font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {item.year}
              </span>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-md transition">
                <h4 className="text-lg font-bold text-slate-900 font-heading">{item.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Trustees & Executive Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Governance & Trustees
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Guided by Integrity & Purpose
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Our governing body comprises respected educationists, retired jurists, pediatricians, and public servants who serve pro-bono.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUSTEES.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src={t.image} alt={t.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg font-heading">{t.name}</h3>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">{t.role}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legal & Statutory Registrations Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Statutory Trust Compliance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mt-2">
              Audited by Independent Chartered Accountants
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              All financial records, donor contributions, and vendor payouts are published annually in our public audit reports.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800 text-center">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400">Section 80G</p>
              <p className="text-sm font-bold text-emerald-400 font-mono mt-1">AAATA1234F20214</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400">Section 12A</p>
              <p className="text-sm font-bold text-amber-400 font-mono mt-1">DEL-12A-4021</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400">FCRA Registration</p>
              <p className="text-sm font-bold text-slate-200 font-mono mt-1">231660998</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400">CSR-1 Reg Number</p>
              <p className="text-sm font-bold text-emerald-400 font-mono mt-1">CSR00014285</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
