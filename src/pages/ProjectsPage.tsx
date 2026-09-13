import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderKanban, 
  MapPin, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Heart,
  TrendingUp
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['all', 'Education', 'Old Age Care', 'Nutrition', 'Healthcare'];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            Field Impact & Initiatives
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Our Social Impact Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Transparent milestones, verifiable impact, and audited budgets across rural and urban community development programs.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition capitalize ${
                selectedCategory === cat
                  ? 'bg-[#0F3E2E] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const percentRaised = Math.min(100, Math.round((project.raisedAmount / project.goalAmount) * 100));
            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center text-xs text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-amber-600" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-xl font-heading mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Funding Progress Meter */}
                    <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-500">Raised: ₹{project.raisedAmount.toLocaleString('en-IN')}</span>
                        <span className="text-emerald-800">{percentRaised}% of ₹{project.goalAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full transition-all duration-1000"
                          style={{ width: `${percentRaised}%` }}
                        />
                      </div>
                      <div className="flex items-center text-[11px] text-slate-500 pt-1">
                        <Users className="w-3.5 h-3.5 mr-1 text-slate-400" />
                        <span>Direct Beneficiaries: <strong>{project.beneficiariesCount}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-bold text-[#0F3E2E] hover:text-emerald-700 flex items-center"
                  >
                    <span>View Project Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                  <Link
                    to="/donate"
                    className="px-4 py-2 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow"
                  >
                    Fund This Project
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Project Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div 
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={activeProjectModal.image} alt={activeProjectModal.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 text-white hover:bg-black/80 rounded-full transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mt-2">
                  {activeProjectModal.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-600" />
                  {activeProjectModal.location} • Beneficiaries: {activeProjectModal.beneficiariesCount}
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeProjectModal.fullDescription}
              </p>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">
                  Verified Project Milestones
                </h4>
                <div className="space-y-2">
                  {activeProjectModal.milestones.map((m, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Total Goal</span>
                  <p className="text-lg font-bold text-slate-900">₹{activeProjectModal.goalAmount.toLocaleString('en-IN')}</p>
                </div>
                <Link
                  to="/donate"
                  className="px-6 py-2.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow"
                >
                  Contribute to This Initiative
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
