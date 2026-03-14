import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/bamise' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/bamziu7' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/p/1K7SijY9Bm/' },
  { name: 'Fiverr', icon: () => <span className="font-bold text-xs">Fi</span>, url: 'https://www.fiverr.com/ezekiel_go' },
  { name: 'Upwork', icon: () => <span className="font-bold text-xs">Up</span>, url: 'https://www.upwork.com/freelancers/~012d236243d24ac743?mp_source=share' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold leading-none">BiG Bamzy</span>
                <span className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase">BamzyTechHub</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Building high-converting, premium digital experiences that help businesses grow, scale, and capture more leads.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-emerald-600 hover:text-white transition-all"
                  title={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-neutral-400 hover:text-emerald-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Business Websites',
                'E-commerce Solutions',
                'Landing Pages',
                'Lead Gen Systems',
                'UI/UX Optimization'
              ].map((item) => (
                <li key={item} className="text-neutral-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <a href="mailto:oloyedebamise8@gmail.com" className="hover:text-emerald-500 transition-colors">
                  oloyedebamise8@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <a href="https://wa.me/2349037390365" className="hover:text-emerald-500 transition-colors">
                  +234 903 739 0365
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>Lagos, Nigeria (Available Globally)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Ezekiel Bamise Oloyede (BiG Bamzy). All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-neutral-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
