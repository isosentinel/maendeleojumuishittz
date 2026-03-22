import { BlogPost } from '../types';
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export default function PostDetail({ post, onBack }: PostDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <button
        onClick={onBack}
        className="flex items-center text-tz-blue font-bold mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft size={20} className="mr-2" />
        Rudi Nyuma
      </button>

      <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
        {/* Hero Image */}
        <div className="relative h-[400px]">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tz-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-4 py-1.5 bg-tz-green text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Meta Info */}
        <div className="px-8 md:px-12 py-6 border-b border-neutral-100 flex flex-wrap items-center justify-between gap-4 bg-neutral-50/50">
          <div className="flex items-center space-x-6 text-sm text-neutral-500 font-medium">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-tz-blue" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User size={18} className="mr-2 text-tz-blue" />
              {post.author}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-400 hover:text-tz-blue transition-colors">
              <Share2 size={20} />
            </button>
            <button className="p-2 text-neutral-400 hover:text-tz-green transition-colors">
              <MessageSquare size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 md:px-12 py-12">
          <div 
            className="markdown-body text-lg text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags Placeholder */}
          <div className="mt-12 pt-8 border-t border-neutral-100">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest mr-2">Tags:</span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">#Tanzania</span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">#Maendeleo</span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">#Uongozi</span>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio Placeholder */}
      <div className="mt-12 bg-tz-black rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="w-24 h-24 rounded-full bg-tz-green flex-shrink-0 flex items-center justify-center text-3xl font-bold">
          MJ
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold mb-2">Kuhusu Maendeleo Jumuishi</h3>
          <p className="text-white/70 leading-relaxed">
            Huu ni mfumo wa kimkakati unaolenga kutoa elimu, sera, na dira ya uongozi kwa ajili ya kizazi kijacho cha viongozi wa Tanzania. Tunaamini katika uwazi, ubunifu, na maendeleo yanayomgusa kila mwananchi.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
