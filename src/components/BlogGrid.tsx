import { BlogPost } from '../types';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogGridProps {
  posts: BlogPost[];
  onReadMore: (post: BlogPost) => void;
  title?: string;
}

export default function BlogGrid({ posts, onReadMore, title = "Makala za Hivi Karibuni" }: BlogGridProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-display font-bold text-tz-black relative">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-tz-yellow rounded-full" />
          </h2>
          <button className="text-tz-blue font-bold flex items-center hover:underline">
            Ona Zote <ArrowRight size={18} className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-tz-green text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-neutral-400 mb-3 font-medium">
                  <Calendar size={14} className="mr-1.5" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-display font-bold text-tz-black mb-3 group-hover:text-tz-blue transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-neutral-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <button
                    onClick={() => onReadMore(post)}
                    className="text-tz-green font-bold text-sm flex items-center group/btn"
                  >
                    Soma Zaidi
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
