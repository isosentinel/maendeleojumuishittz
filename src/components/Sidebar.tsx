import { Search, TrendingUp, Tag } from 'lucide-react';
import { CATEGORIES, DUMMY_POSTS } from '../constants';
import { BlogPost, Category } from '../types';

interface SidebarProps {
  onCategoryChange: (category: Category) => void;
  onPostClick: (post: BlogPost) => void;
}

export default function Sidebar({ onCategoryChange, onPostClick }: SidebarProps) {
  const trendingPosts = DUMMY_POSTS.slice(0, 3);

  return (
    <aside className="space-y-10">
      {/* Search */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
        <h3 className="text-lg font-display font-bold text-tz-black mb-4 flex items-center">
          <Search size={20} className="mr-2 text-tz-blue" />
          Tafuta
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Andika hapa..."
            className="w-full bg-neutral-50 border-none rounded-xl py-3 pl-4 pr-10 focus:ring-2 focus:ring-tz-green transition-all"
          />
          <Search className="absolute right-3 top-3 text-neutral-400" size={18} />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
        <h3 className="text-lg font-display font-bold text-tz-black mb-4 flex items-center">
          <Tag size={20} className="mr-2 text-tz-green" />
          Jamii (Categories)
        </h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="px-3 py-1.5 bg-neutral-50 text-neutral-600 text-sm font-medium rounded-lg hover:bg-tz-green hover:text-white transition-all border border-neutral-100"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
        <h3 className="text-lg font-display font-bold text-tz-black mb-6 flex items-center">
          <TrendingUp size={20} className="mr-2 text-tz-yellow" />
          Zinazovuma
        </h3>
        <div className="space-y-6">
          {trendingPosts.map((post) => (
            <div 
              key={post.id} 
              className="flex items-start space-x-4 cursor-pointer group"
              onClick={() => onPostClick(post)}
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-tz-black line-clamp-2 group-hover:text-tz-blue transition-colors">
                  {post.title}
                </h4>
                <span className="text-[10px] text-neutral-400 font-medium uppercase mt-1 block">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Placeholder */}
      <div className="tz-gradient p-8 rounded-2xl shadow-xl text-white">
        <h3 className="text-xl font-display font-bold mb-3">Jiunge na Jarida</h3>
        <p className="text-white/80 text-sm mb-6">
          Pata habari na mikakati mipya moja kwa moja kwenye barua pepe yako.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Barua Pepe"
            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-tz-yellow"
          />
          <button className="w-full bg-tz-yellow text-tz-black font-bold py-3 rounded-xl hover:bg-white transition-all shadow-lg">
            Jiunge Sasa
          </button>
        </div>
      </div>
    </aside>
  );
}
