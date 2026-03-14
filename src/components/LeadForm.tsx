import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { LeadService, LeadData } from '../services/leadService';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  source: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function LeadForm({ source, onSuccess, compact = false }: LeadFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadData>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: LeadData) => {
    setStatus('loading');
    try {
      await LeadService.submitLead({ ...data, source });
      setStatus('success');
      reset();
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-neutral-600 max-w-xs">
          Thank you for reaching out. Ezekiel will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1 text-neutral-700">Full Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-neutral-200 focus:ring-emerald-200'} focus:outline-none focus:ring-4 transition-all`}
          />
          {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-1 text-neutral-700">Email Address</label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
            })}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-neutral-200 focus:ring-emerald-200'} focus:outline-none focus:ring-4 transition-all`}
          />
          {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
        </div>

        {!compact && (
          <div>
            <label className="block text-sm font-semibold mb-1 text-neutral-700">Phone (Optional)</label>
            <input
              {...register('phone')}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-emerald-200 focus:outline-none focus:ring-4 transition-all"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold mb-1 text-neutral-700">How can I help you?</label>
          <textarea
            {...register('message', { required: 'Please tell me about your project' })}
            placeholder="I need a high-converting landing page for my business..."
            rows={compact ? 3 : 4}
            className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-neutral-200 focus:ring-emerald-200'} focus:outline-none focus:ring-4 transition-all resize-none`}
          />
          {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
          <AlertCircle size={18} />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full py-4 text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
      
      <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest font-bold">
        Secure & Confidential Submission
      </p>
    </form>
  );
}
