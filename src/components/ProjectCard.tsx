import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  caseStudy?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/0 transition-colors" />
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-emerald-600 transition-colors"
            >
              View Live <ExternalLink size={16} />
            </a>
          )}
          {project.caseStudy && (
            <button className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
              Case Study <ArrowUpRight size={16} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
