import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Target, Rocket } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const FOUNDER_IMAGE = "https://images.unsplash.com/photo-1519085184581-9db5b11625f7?q=80&w=1000&auto=format&fit=crop"; // Replace with user's full body shot

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">My Story</h1>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              More than just code. I build <span className="text-emerald-600">growth engines</span>.
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              I'm Ezekiel Bamise Oloyede, a conversion-focused web developer and the founder of BamzyTechHub. My mission is to bridge the gap between beautiful design and real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div className="prose prose-lg text-neutral-600">
                <p>
                  My journey started with a simple realization: most websites are just digital brochures. They look nice, but they don't actually do anything for the business owner. They don't capture leads, they don't drive sales, and they don't build trust.
                </p>
                <p>
                  I decided to change that. I spent years mastering not just the technical side of web development, but the psychological side of user experience and conversion optimization.
                </p>
                <p>
                  Today, through <strong>BamzyTechHub</strong>, I help freelancers, startups, and established businesses turn their web presence into their most valuable asset. Whether it's a high-converting landing page or a complex e-commerce system, my focus is always on the bottom line: <strong>Your Growth.</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: 'Strategy First', desc: 'We define goals before we write a single line of code.' },
                  { icon: Award, title: 'Premium Quality', desc: 'No templates. No shortcuts. Just high-end custom work.' },
                  { icon: Users, title: 'Client Centric', desc: 'Your success is the only metric that matters to me.' },
                  { icon: Rocket, title: 'Built for Scale', desc: 'Websites that grow as your business grows.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <div className="text-emerald-600 mb-4"><item.icon size={24} /></div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-32">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                <img 
                  src={FOUNDER_IMAGE} 
                  alt="Ezekiel Bamise Oloyede" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-display font-bold text-2xl">Ezekiel Bamise Oloyede</p>
                  <p className="text-emerald-400 font-medium">Founder, BamzyTechHub</p>
                </div>
              </div>
              
              <div className="glass-card p-8 bg-emerald-50 border-emerald-100">
                <h4 className="text-lg font-bold mb-4">Ready to work together?</h4>
                <p className="text-neutral-600 text-sm mb-6">
                  Let's discuss how we can transform your website into a lead-generating machine.
                </p>
                <LeadForm source="about_sidebar" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">My Philosophy</h2>
            <h3 className="text-4xl font-display font-bold">The BamzyTechHub Standard</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Function Over Fluff', desc: 'I prioritize features that drive results over unnecessary animations or visual clutter.' },
              { title: 'Trust is Currency', desc: 'I build elements into every site that immediately establish your authority and credibility.' },
              { title: 'Data-Driven Design', desc: 'Every layout choice is backed by proven conversion principles and user behavior data.' }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="text-5xl font-display font-bold text-emerald-900/50">0{i+1}</div>
                <h4 className="text-xl font-bold">{value.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
