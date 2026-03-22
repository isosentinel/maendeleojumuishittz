import { BlogPost } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

export default function Hero({ post, onReadMore }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tz-black/60 to-transparent md:bg-gradient-to-r" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-tz-yellow text-tz-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center space-x-4 mb-6 text-sm text-neutral-500 font-medium">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-tz-blue" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2 text-tz-blue" />
                  {post.author}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-tz-black mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-neutral-600 mb-8 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onReadMore(post)}
                  className="px-8 py-4 bg-tz-green text-white rounded-xl font-bold flex items-center group transition-all hover:bg-tz-green/90 shadow-lg shadow-tz-green/20"
                >
                  Soma Zaidi
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 border-2 border-neutral-100 text-neutral-700 rounded-xl font-bold hover:bg-neutral-50 transition-all">
                  Shiriki
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#00A3DD" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.4,41.9C63.6,54.8,51.7,66.1,38.2,73.1C24.7,80.1,9.6,82.8,-5.1,81.6C-19.8,80.4,-34.1,75.3,-46.8,67.3C-59.5,59.3,-70.6,48.4,-77.4,35.4C-84.2,22.4,-86.7,7.3,-84.8,-7.1C-82.9,-21.5,-76.6,-35.2,-67.2,-46.8C-57.8,-58.4,-45.3,-67.9,-32.1,-75.6C-18.9,-83.3,-5,-89.2,9.3,-90.8C23.6,-92.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
