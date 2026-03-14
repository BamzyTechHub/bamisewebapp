import { motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import LeadForm from './LeadForm';

interface PopupProps {
  onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-2 text-emerald-600 mb-4">
            <Sparkles size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Limited Availability</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold mb-4 leading-tight">
            Ready to scale your business with a <span className="text-emerald-600">high-converting</span> website?
          </h2>
          
          <p className="text-neutral-600 mb-8">
            Get a free consultation and project roadmap. I only take on 2 new clients per month to ensure maximum quality and results.
          </p>

          <LeadForm source="popup" onSuccess={onClose} compact />
        </div>
      </motion.div>
    </div>
  );
}
