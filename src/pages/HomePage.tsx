import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Smile, 
  Coffee, 
  Home as HomeIcon,
  ChevronRight,
  TrendingUp,
  PieChart,
  ShoppingBag
} from 'lucide-react';
import { HeroSlider } from '../components/common/HeroSlider';
import { StatsCounter } from '../components/common/StatsCounter';
import { ProductCard } from '../components/common/ProductCard';
import { DonationWidget } from '../components/common/DonationWidget';
import { 
  IMPACT_STATS, 
  CHILDREN_DATA, 
  ELDERS_DATA, 
  PRODUCTS_DATA, 
  PROJECTS_DATA, 
  TESTIMONIALS_DATA 
} from '../data/mockData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. Hero Cinematic Slideshow */}
      <HeroSlider />

      {/* 2. Impact Statistics Section */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 -mt-8 sm:-mt-20 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {IMPACT_STATS.map((stat, idx) => (
            <StatsCounter
              key={idx}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </section>

      {/* 3. The Three Pillars of Impact */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Our Triad of Compassion
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 sm:mt-4 font-heading tracking-tight">
            One Foundation. Three Lifelines of Hope.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-600 text-sm sm:text-lg">
            A comprehensive social ecosystem restoring opportunity for youth, companionship for elders, and sustainable funding through purpose-driven everyday goods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1: Educate Children */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#0F3E2E] mb-5 sm:mb-6 group-hover:bg-[#0F3E2E] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Pillar 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-heading">
                Educate & Nurture Children
              </h3>
              <p className="mt-2.5 sm:mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Certified English-medium education, mid-day nutrition, smart computer labs, and trauma-informed shelter for orphaned and impoverished youngsters.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <Link
                to="/children"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-[#0F3E2E] hover:text-emerald-700 group-hover:translate-x-1 transition-transform"
              >
                <span>Discover Child Care & School</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Dignity for Elders */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 mb-5 sm:mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Pillar 02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-heading">
                Dignity & Care for the Elderly
              </h3>
              <p className="mt-2.5 sm:mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Safe assisted housing, round-the-clock geriatric healthcare, nutritious tailored diets, and warm multi-generational companionship for senior citizens.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <Link
                to="/old-age-care"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-700 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Old Age Sanctuary</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Purpose-Driven Commerce */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800 mb-5 sm:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Pillar 03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-heading">
                Shop Essentials With Purpose
              </h3>
              <p className="mt-2.5 sm:mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Purchase your regular household groceries—atta, aged rice, cold-pressed oils, and spices. All profits fund nutritious meals and student scholarships.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <Link
                to="/store"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-blue-800 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
              >
                <span>Browse Impact Store</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Story & Mission Spotlight */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-12 lg:p-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Why We Exist
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Where No Child Is Forgotten, and No Elder Lives in Solitude.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in 2015, Ismita Charitable Foundation was born from a simple yet radical conviction: that society’s most vulnerable members—its youngest and oldest—share a profound bond of reciprocal healing.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our campus brings together an accredited English-medium school for 250+ underprivileged children alongside a state-of-the-art 60-bed assisted elder sanctuary. Seniors impart storytelling and moral heritage; children bring unconditional laughter and warmth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">100% Free Child Education</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">24/7 Geriatric Doctors</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">80G Tax Deductible</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Direct Rupee Auditing</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/about"
                className="w-full sm:w-auto text-center justify-center px-6 py-3.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition shadow-md"
              >
                Read Our Complete Story
              </Link>
              <Link
                to="/sponsor"
                className="w-full sm:w-auto text-center justify-center px-6 py-3.5 bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 font-bold rounded-xl text-sm transition"
              >
                Sponsor a Life Today
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                alt="Elder and child learning together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5 sm:p-8">
                <p className="text-white text-xs sm:text-base font-serif italic">
                  "Grandpa Ramakant teaching chess to Aarav in the sunlit central quadrangle."
                </p>
              </div>
            </div>

            {/* Overlapping Floating Metric Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 max-w-[200px] sm:max-w-[240px] hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                  11+
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Years of Dedicated</p>
                  <p className="text-sm font-bold text-slate-800 font-heading">Grassroots Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Children & School Showcase */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Children & Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              Nurturing Dreams. Building Tomorrow.
            </h2>
          </div>
          <Link
            to="/children"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#0F3E2E] hover:text-emerald-700"
          >
            <span>View All Children Profiles</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHILDREN_DATA.slice(0, 3).map((child) => (
            <div
              key={child.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {child.grade}
                  </div>
                  {child.sponsored ? (
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                      Sponsored
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                      Needs Sponsor
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">{child.name}, Age {child.age}</h3>
                  <p className="text-xs text-amber-700 font-semibold mt-1">Dream: {child.dream}</p>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {child.story}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {child.interests.map((interest) => (
                      <span key={interest} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] rounded-md font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-slate-400">Monthly Support</span>
                  <p className="text-base font-extrabold text-[#0F3E2E]">₹{child.monthlyCost}/mo</p>
                </div>
                <Link
                  to="/sponsor"
                  className="px-4 py-2 bg-emerald-50 hover:bg-[#0F3E2E] text-[#0F3E2E] hover:text-white rounded-xl text-xs font-bold transition border border-emerald-200"
                >
                  Sponsor {child.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Elderly Care Dignity Showcase */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                Old Age Assisted Living
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2.5 sm:mt-3 font-heading">
                Every Elder Deserves Dignity & Love.
              </h2>
            </div>
            <Link
              to="/old-age-care"
              className="mt-2 sm:mt-0 inline-flex items-center text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300"
            >
              <span>Explore Senior Care Program</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ELDERS_DATA.slice(0, 3).map((elder) => (
              <div
                key={elder.id}
                className="bg-slate-800/80 rounded-3xl border border-slate-700/80 overflow-hidden backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={elder.image}
                      alt={elder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                      Age {elder.age}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white font-heading">{elder.name}</h3>
                    <p className="text-xs text-amber-300 font-mono mt-1">{elder.roomType}</p>
                    <p className="text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                      {elder.background}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-700">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase">Hobbies & Activities:</p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {elder.hobbies.map((h) => (
                          <span key={h} className="px-2 py-0.5 bg-slate-700 text-slate-300 text-[11px] rounded-md">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-700 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs text-slate-400">Monthly Care</span>
                    <p className="text-base font-extrabold text-amber-400">₹{elder.monthlyCareCost}/mo</p>
                  </div>
                  <Link
                    to="/sponsor"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition"
                  >
                    Support {elder.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. E-Commerce "Shop With Purpose" Highlight */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 rounded-3xl border border-emerald-200/80 p-5 sm:p-12 shadow-lg mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-100 px-3.5 py-1.5 rounded-full">
                Commerce With Purpose
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2.5 sm:mt-3 font-heading">
                Every Purchase Supports a Purpose.
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Shop 100% natural, farm-fresh flour, aged Himalayan rice, cold-pressed oils, and spices. All proceeds directly fund meals and stationery for students and seniors.
              </p>
            </div>
            <Link
              to="/store"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-bold rounded-2xl text-sm transition shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore All Essentials</span>
            </Link>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_DATA.filter((p) => p.featured).slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 8. Full Donation Section */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Tax Deductible Giving
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Your Support Can Change a Life.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every single rupee contributed to Ismita Charitable Foundation is stewarded with clinical financial transparency. Your donation qualifies for 50% tax exemption under Section 80G.
            </p>

            {/* Financial Transparency Pillars */}
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                    84%
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct Programs & Care</h4>
                    <p className="text-xs text-slate-500">Classrooms, food, healthcare, and medicine</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                    09%
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Facilities & Sanitation</h4>
                    <p className="text-xs text-slate-500">Solar power, clean water, campus maintenance</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 font-bold">
                    07%
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Administration & Auditing</h4>
                    <p className="text-xs text-slate-500">Chartered accountants, legal & statutory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <DonationWidget defaultCategory="Education" />
          </div>
        </div>
      </section>

      {/* 9. Testimonials Carousel Section */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0F3E2E] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Voices of Trust
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2.5 sm:mt-3 font-heading">
            Stories of Hope & Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 mt-5 sm:mt-6 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-700/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-emerald-800 font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Grand Closing Emotional CTA */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[440px] sm:min-h-[500px] flex items-center justify-center text-center p-6 sm:p-14">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95" />

          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6 text-white w-full">
            <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest border border-amber-400/30 inline-block">
              Make a Lasting Difference
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
              Be Part of Someone’s Tomorrow.
            </h2>
            <p className="text-sm sm:text-xl text-slate-200 leading-relaxed font-light">
              Whether you teach, donate, volunteer, sponsor or simply shop with us, your contribution can help create a better future for a child and restore peace to an elder.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-3.5 pt-3 sm:pt-4 w-full sm:w-auto">
              <Link
                to="/donate"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-extrabold rounded-2xl shadow-xl transition flex items-center space-x-2 text-sm sm:text-base text-center"
              >
                <Heart className="w-5 h-5 fill-slate-950" />
                <span>Donate Now</span>
              </Link>
              <Link
                to="/sponsor"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white font-bold rounded-2xl border border-emerald-600/40 transition text-sm sm:text-base text-center"
              >
                Sponsor a Child
              </Link>
              <Link
                to="/old-age-care"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 transition text-sm sm:text-base text-center"
              >
                Support an Elder
              </Link>
              <Link
                to="/store"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition text-sm sm:text-base flex items-center space-x-1.5 text-center"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop With Purpose</span>
              </Link>
              <Link
                to="/volunteer"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 bg-transparent hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-2xl transition text-sm sm:text-base text-center"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
