import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram, Facebook, Twitter, Globe, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/bamise', color: 'bg-blue-600' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/bamziu7', color: 'bg-pink-600' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/p/1K7SijY9Bm/', color: 'bg-blue-800' },
  { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/2349037390365', color: 'bg-emerald-500' },
];

const platforms = [
  { name: 'Fiverr', url: 'https://www.fiverr.com/ezekiel_go', desc: 'Order directly on Fiverr' },
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~012d236243d24ac743?mp_source=share', desc: 'Hire me on Upwork' },
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Contact</h1>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Let's build your <span className="text-emerald-600">growth engine</span>.
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Ready to scale? Fill out the form below or reach out through my freelance platforms. I'm excited to hear about your project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold mb-8">Direct Channels</h3>
                <div className="space-y-6">
                  <a href="mailto:oloyedebamise8@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Email Me</p>
                      <p className="text-lg font-bold">oloyedebamise8@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/2349037390365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">WhatsApp Chat</p>
                      <p className="text-lg font-bold">+234 903 739 0365</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold mb-8">Freelance Platforms</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {platforms.map(platform => (
                    <a 
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all text-center"
                    >
                      <p className="text-xl font-bold mb-2">{platform.name}</p>
                      <p className="text-sm text-neutral-500 mb-4">{platform.desc}</p>
                      <span className="text-emerald-600 font-bold text-sm flex items-center justify-center gap-2">
                        Visit Profile <ArrowRight size={16} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold mb-8">Follow My Work</h3>
                <div className="flex gap-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${social.color} hover:scale-110 transition-transform shadow-md`}
                      title={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-10 md:p-12 shadow-2xl border-neutral-100">
              <h3 className="text-3xl font-display font-bold mb-4">Start a Project</h3>
              <p className="text-neutral-600 mb-8">
                Tell me about your business goals and I'll get back to you with a custom proposal within 24 hours.
              </p>
              <LeadForm source="contact_page" />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
            <Globe size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Global Service</span>
          </div>
          <h3 className="text-3xl font-display font-bold mb-6">Based in Lagos, Nigeria. Serving the World.</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            I work with clients across different time zones, from the US and UK to Europe and Asia. Distance is never a barrier to high-quality execution.
          </p>
        </div>
      </section>
    </div>
  );
}
