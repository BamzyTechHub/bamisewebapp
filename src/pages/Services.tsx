import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layout, MousePointer2, Smartphone, Search, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';

const services = [
  {
    icon: Globe,
    title: 'Full Business Websites',
    description: 'Complete digital presence for established businesses. Includes multi-page structure, service showcases, and custom integrations.',
    features: ['Custom UI/UX Design', 'Responsive Development', 'CMS Integration', 'Basic SEO Setup']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'High-performance online stores built to sell. Focused on smooth checkout, product management, and payment security.',
    features: ['Inventory Management', 'Secure Checkout', 'Product Filtering', 'Order Tracking']
  },
  {
    icon: Layout,
    title: 'High-Converting Landing Pages',
    description: 'Strategic one-page sites designed for maximum ROI. Perfect for ad campaigns and product launches.',
    features: ['A/B Testing Ready', 'Fast Load Times', 'Strong CTA Strategy', 'Lead Capture Integration']
  },
  {
    icon: MousePointer2,
    title: 'Lead Generation Systems',
    description: 'Automated systems that capture and manage leads. Includes popups, multi-step forms, and email integration.',
    features: ['Custom Form Logic', 'CRM Integration', 'Automated Follow-ups', 'Conversion Tracking']
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensuring your website works perfectly on every device. I fix broken mobile experiences and improve performance.',
    features: ['Touch-Friendly UI', 'Adaptive Layouts', 'Speed Optimization', 'Cross-Browser Testing']
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Technical optimization to help you rank higher and load faster. Better speed = Better conversions.',
    features: ['Core Web Vitals', 'Schema Markup', 'Keyword Strategy', 'Performance Audits']
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Services</h1>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Solutions built for <span className="text-emerald-600">conversion</span> and scale.
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              I don't just build websites; I build business tools. Every service I offer is designed to solve a specific problem and drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-500">
                      <Zap size={14} className="text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">The Process</h2>
            <h3 className="text-4xl font-display font-bold">How we build your growth engine</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy', desc: 'We define your goals, audience, and conversion paths.' },
              { step: '02', title: 'Design', desc: 'I create a premium UI/UX that builds trust and guides users.' },
              { step: '03', title: 'Develop', desc: 'I build a fast, functional, and secure custom website.' },
              { step: '04', title: 'Launch', desc: 'We go live and monitor performance for maximum ROI.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-display font-bold text-emerald-900/30 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-10 -right-4 text-emerald-800"><ArrowRight size={24} /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-emerald-50 p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display font-bold mb-6 leading-tight">Not sure which service you need?</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Let's have a quick chat. I'll analyze your current business state and recommend the best digital strategy for your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-700 font-medium">
                  <ShieldCheck className="text-emerald-600" /> No-obligation consultation
                </div>
                <div className="flex items-center gap-3 text-neutral-700 font-medium">
                  <ShieldCheck className="text-emerald-600" /> Custom project roadmap
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-white p-8 rounded-3xl shadow-xl">
              <LeadForm source="services_cta" compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
