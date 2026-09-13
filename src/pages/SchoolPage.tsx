import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Laptop, 
  Library, 
  Trophy, 
  Palette, 
  Microscope, 
  Sun, 
  CheckCircle2, 
  Heart, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { TEACHERS_DATA } from '../data/mockData';

export const SchoolPage: React.FC = () => {
  const FACILITIES = [
    {
      title: 'Smart Multimedia Classrooms',
      description: 'Airy, sunlit classrooms equipped with interactive smart boards, audiovisual projectors, and ergonomic student seating.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
      icon: BookOpen,
    },
    {
      title: 'Digital Computer & AI Lab',
      description: '45 high-speed computers providing foundational digital literacy, Scratch block coding, Python, and internet research skills.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      icon: Laptop,
    },
    {
      title: 'Vatsalya Open Library',
      description: 'Over 4,500 curated books spanning science, history, Indian literature, bilingual storybooks, and encyclopedias.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
      icon: Library,
    },
    {
      title: 'Hands-on Science & STEM Lab',
      description: 'Practical apparatus for physics, biology models, basic chemistry demonstrations, and hands-on robotics kits.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
      icon: Microscope,
    },
    {
      title: 'Fine Arts & Creativity Studio',
      description: 'Dedicated studio for watercolour, traditional clay pottery, Indian folk music, classical tabla, and drama.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
      icon: Palette,
    },
    {
      title: 'Sports & Martial Arts Arena',
      description: 'Full-sized playground with running track, cricket pitches, basketball ring, and dedicated self-defense martial arts training.',
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop',
      icon: Trophy,
    },
  ];

  const WHY_DIFFERENT = [
    {
      title: 'Accredited Quality Education',
      desc: 'Recognized state syllabus enriched with Singapore math and conceptual science learning.',
      color: 'border-emerald-200 bg-emerald-50/50',
    },
    {
      title: 'Safe & Trauma-Informed Environment',
      desc: 'Trained child psychologists and pastoral caregivers providing safety, dignity, and warmth.',
      color: 'border-blue-200 bg-blue-50/50',
    },
    {
      title: '1:15 Personal Attention',
      desc: 'Low student-to-teacher ratio ensuring no struggling child is left behind in reading or math.',
      color: 'border-purple-200 bg-purple-50/50',
    },
    {
      title: 'Clinical Nutrition Support',
      desc: 'Hot balanced mid-day meals designed by pediatric nutritionists: dal, vegetables, eggs/paneer, and fortified milk.',
      color: 'border-amber-200 bg-amber-50/50',
    },
    {
      title: 'Digital Learning for All',
      desc: 'Every child from Grade 3 onwards gets individual computer time and coding exposure.',
      color: 'border-cyan-200 bg-cyan-50/50',
    },
    {
      title: 'Life Skills & Moral Ethics',
      desc: 'Value-based education, public speaking, empathy, financial literacy, and community civics.',
      color: 'border-rose-200 bg-rose-50/50',
    },
    {
      title: 'Career Mentorship & Scholarships',
      desc: 'Longitudinal mentoring guiding students through Grade 10 board exams into higher vocational or college degrees.',
      color: 'border-emerald-200 bg-emerald-50/50',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Ismita Vidyalaya (Model English School)
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Building Brighter Futures Through Education
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Where first-generation learners discover their voice, hone their intellect, and break the generational chains of poverty with dignity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/sponsor"
              className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg flex items-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Sponsor a Student’s Education</span>
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition backdrop-blur-sm border border-white/20"
            >
              Visit Our Campus
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Our Educational Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Education as an Engine of Freedom and Self-Reliance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We reject rote memorization. At Ismita Vidyalaya, learning is experiential, inquiry-based, and human-centered. Our students are encouraged to ask difficult questions, design scientific experiments, read voraciously, and articulate their thoughts with confidence.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Every child receives free textbooks, 3 sets of bespoke school uniforms, complete geometry and art kits, daily multi-vitamin and iron supplements, and hot mid-day lunch cooked on campus.
            </p>
            <div className="pt-2 flex items-center space-x-6 text-sm font-semibold text-slate-800">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>250+ Enrolled Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>100% Board Pass Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Zero Tuition Fees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop"
              alt="Students in library"
              className="rounded-3xl shadow-xl aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Classroom Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Classroom & Campus Facilities
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Designed to match the standards of premier private institutions for children who deserve every equal opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#0F3E2E] mb-2">
                      <Icon className="w-5 h-5" />
                      <h3 className="font-bold text-slate-900 text-lg font-heading">{fac.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{fac.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Our School Is Different */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              The Ismita Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              Why Our School Is Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_DIFFERENT.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border shadow-sm ${item.color} space-y-2`}
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <h3 className="font-bold text-slate-900 text-base font-heading">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers & Mentors Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Dedicated Educators
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
            Teachers Who Teach With Heart
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Our educators possess postgraduate qualifications and undergo quarterly child pedagogy and trauma-healing certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS_DATA.map((t) => (
            <div key={t.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src={t.image} alt={t.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg font-heading">{t.name}</h3>
                  <p className="text-xs font-semibold text-emerald-800">{t.role}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.qualification} • {t.experience}</p>
                  <p className="text-xs italic text-slate-600 mt-3 pt-3 border-t border-slate-100">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
