import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, Layout, Smartphone, ShoppingCart, Globe } from 'lucide-react';
import ProjectCard, { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    title: 'KAFE Store — K54 Global',
    description: 'A comprehensive e-commerce experience built for global reach. Focused on business-driven design, seamless checkout, and premium brand presentation.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    tags: ['E-commerce', 'UI/UX', 'Business Strategy'],
    link: 'https://k54global.com/',
    caseStudy: true,
  },
  {
    title: 'SaaS Growth Landing Page',
    description: 'A conversion-optimized landing page for a tech startup that resulted in a 35% increase in demo signups.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Landing Page', 'Lead Gen', 'Optimization'],
    caseStudy: true,
  },
  {
    title: 'Real Estate Portfolio',
    description: 'A premium property showcase website with integrated lead capture and virtual tour functionality.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    tags: ['Business Website', 'Lead Gen', 'Real Estate'],
    caseStudy: false,
  },
  {
    title: 'Fitness Coaching Platform',
    description: 'A membership-based platform for a fitness coach with automated booking and payment systems.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    tags: ['Web App', 'E-commerce', 'Membership'],
    caseStudy: false,
  }
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Portfolio</h1>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Proof of <span className="text-emerald-600">execution</span> and results.
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              I don't just build websites; I build business assets. Explore my recent projects and see how I've helped clients achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study: KAFE Store */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-neutral-900 rounded-[3rem] overflow-hidden text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-20 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest">
                  Featured Case Study
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold">KAFE Store — K54 Global</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  A high-end e-commerce platform designed to showcase premium products to a global audience. The project focused on creating a seamless user journey from discovery to checkout.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-bold">Business Goal</p>
                      <p className="text-sm text-neutral-500">Global reach & seamless sales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-bold">Design Approach</p>
                      <p className="text-sm text-neutral-500">Minimalist, premium UI/UX</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="https://k54global.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live Project <ExternalLink className="ml-2" size={18} />
                  </a>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
                  alt="KAFE Store" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.title}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Why Work With Me</h2>
            <h3 className="text-4xl font-display font-bold">Results-Driven Development</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: 'Conversion Focused', desc: 'Every design choice is made to guide the user toward your goal.' },
              { icon: Smartphone, title: 'Mobile First', desc: 'Your site will look and function perfectly on every screen size.' },
              { icon: Globe, title: 'Global Standards', desc: 'I follow international best practices for speed, security, and SEO.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-neutral-100 bg-neutral-50 text-center">
                <div className="w-16 h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
