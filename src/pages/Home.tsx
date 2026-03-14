import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, TrendingUp, Globe, ShoppingCart, Layout, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard, { Project } from '../components/ProjectCard';
import LeadForm from '../components/LeadForm';

// Image URLs (Placeholders for now, instructions will be provided to replace with user images)
const HERO_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; // Replace with user's headshot
const FOUNDER_IMAGE = "https://images.unsplash.com/photo-1519085184581-9db5b11625f7?q=80&w=1000&auto=format&fit=crop"; // Replace with user's full body shot

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Conversion Lift', value: '40%+' },
  { label: 'Years Experience', value: '4+' },
];

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Premium, custom-built websites that establish authority and build trust with your audience.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Scalable online stores designed for seamless user journeys and maximum sales conversion.',
  },
  {
    icon: Layout,
    title: 'High-Converting Landing Pages',
    description: 'Strategic one-page sites optimized for a single goal: turning visitors into leads or customers.',
  },
  {
    icon: MousePointer2,
    title: 'Lead Capture Systems',
    description: 'Integrated funnels, popups, and automated forms that work 24/7 to grow your client list.',
  },
];

const featuredProjects: Project[] = [
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
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} /> Available for New Projects
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                I build websites that <span className="text-emerald-600">convert</span> visitors into customers.
              </h1>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
                Hi, I'm <span className="font-bold text-neutral-900">Ezekiel Bamise Oloyede</span>. I help businesses scale through premium, functional web experiences and high-performing lead generation systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/portfolio" className="btn-secondary px-8 py-4 text-lg">
                  View Portfolio
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-neutral-500 font-medium">Trusted by 50+ business owners</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                <img 
                  src={HERO_IMAGE} 
                  alt="Ezekiel Bamise Oloyede" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                
                {/* Floating Trust Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 flex items-center gap-4 animate-bounce-subtle">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Recent Result</p>
                    <p className="text-lg font-bold text-neutral-900">+124% Conversion Increase</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-50 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-neutral-100 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
            <span className="text-xl font-bold tracking-tighter">FIVERR PRO</span>
            <span className="text-xl font-bold tracking-tighter">UPWORK TOP RATED</span>
            <span className="text-xl font-bold tracking-tighter">LINKEDIN EXPERT</span>
            <span className="text-xl font-bold tracking-tighter">BAMZY TECH HUB</span>
            <span className="text-xl font-bold tracking-tighter">K54 GLOBAL</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">What I Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              I build functional systems, not just pretty pages.
            </h3>
            <p className="text-lg text-neutral-600">
              Every pixel is placed with a purpose: to guide your visitors toward a specific action and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Selected Work</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">
                Real proof of skill and execution.
              </h3>
            </div>
            <Link to="/portfolio" className="btn-secondary">
              View All Projects <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.title}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility / Founder Section */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden aspect-square">
                <img 
                  src={FOUNDER_IMAGE} 
                  alt="Ezekiel Bamise Oloyede" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl" />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">The Mind Behind The Code</h2>
                <h3 className="text-4xl font-display font-bold mb-6">Built by Ezekiel Bamise Oloyede (BiG Bamzy)</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  As the founder of <span className="text-white font-bold">BamzyTechHub</span>, I don't just write code. I design user journeys that lead to sales. My background in UI/UX and conversion strategy means your website will be your hardest-working employee.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map(stat => (
                  <div key={stat.label}>
                    <p className="text-3xl font-display font-bold text-emerald-500 mb-1">{stat.value}</p>
                    <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link to="/about" className="text-emerald-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Read My Full Story <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto glass-card bg-white p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-neutral-900">
              Ready to build something <span className="text-emerald-600">extraordinary</span>?
            </h2>
            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
              Stop settling for a website that just sits there. Let's build a functional asset that drives real business growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-emerald-600" /> Why work with me?
                </h4>
                <ul className="space-y-4">
                  {[
                    'Direct access to the expert (No agency fluff)',
                    'Conversion-first design methodology',
                    'Fully functional, custom-coded solutions',
                    'Post-launch support and optimization'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-neutral-600 text-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Send a quick inquiry</h4>
                <LeadForm source="home_cta" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Got Questions?</h2>
            <h3 className="text-4xl font-display font-bold">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does a typical project take?", a: "Most business websites take 2-4 weeks, while complex e-commerce or custom systems can take 6-8 weeks depending on requirements." },
              { q: "Do you handle website maintenance?", a: "Yes, I offer monthly maintenance packages to ensure your site stays secure, updated, and optimized for performance." },
              { q: "Will my website be mobile-friendly?", a: "Absolutely. I follow a mobile-first design approach, ensuring your site looks and functions perfectly on all devices." },
              { q: "Can you help with SEO?", a: "Every site I build includes fundamental SEO best practices (meta tags, fast loading, clean structure) to help you rank better from day one." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50">
                <h4 className="text-lg font-bold mb-3">{faq.q}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
