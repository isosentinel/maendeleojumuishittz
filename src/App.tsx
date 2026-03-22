import React from 'react';
import { BlogPost, Category } from './types';
import { DUMMY_POSTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import Sidebar from './components/Sidebar';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = React.useState<Category | 'Home'>('Home');
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Scroll to top when changing views
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory, selectedPost]);

  const filteredPosts = DUMMY_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'Home' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = DUMMY_POSTS[0];
  const latestPosts = filteredPosts.filter(p => p.id !== featuredPost.id || activeCategory !== 'Home');

  const handleCategoryChange = (category: Category | 'Home') => {
    setActiveCategory(category);
    setSelectedPost(null);
    setSearchQuery('');
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveCategory('Home');
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PostDetail 
                post={selectedPost} 
                onBack={() => setSelectedPost(null)} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section - Only on Home */}
              {activeCategory === 'Home' && !searchQuery && (
                <Hero post={featuredPost} onReadMore={handlePostClick} />
              )}

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Main Content Area */}
                  <div className="lg:col-span-8">
                    {searchQuery && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-display font-bold text-tz-black">
                          Matokeo ya utafutaji kwa: <span className="text-tz-blue">"{searchQuery}"</span>
                        </h2>
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="text-sm text-neutral-500 hover:text-tz-green underline mt-2"
                        >
                          Futa utafutaji
                        </button>
                      </div>
                    )}
                    
                    {activeCategory !== 'Home' && !searchQuery && (
                      <div className="mb-12 p-8 rounded-3xl tz-gradient text-white shadow-xl">
                        <h1 className="text-4xl font-display font-bold mb-4">{activeCategory}</h1>
                        <p className="text-white/80 text-lg">
                          Gundua makala, sera na mikakati yote inayohusu {activeCategory.toLowerCase()} katika zama hizi mpya.
                        </p>
                      </div>
                    )}

                    {filteredPosts.length > 0 ? (
                      <BlogGrid 
                        posts={latestPosts} 
                        onReadMore={handlePostClick} 
                        title={activeCategory === 'Home' ? "Makala za Hivi Karibuni" : `Makala za ${activeCategory}`}
                      />
                    ) : (
                      <div className="py-20 text-center">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-display font-bold text-neutral-400">
                          Samahani, hakuna makala yaliyopatikana.
                        </h3>
                        <button 
                          onClick={() => handleCategoryChange('Home')}
                          className="mt-6 px-6 py-3 bg-tz-green text-white rounded-xl font-bold"
                        >
                          Rudi Nyumbani
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-4">
                    <Sidebar 
                      onCategoryChange={handleCategoryChange} 
                      onPostClick={handlePostClick}
                    />
                  </div>
                </div>
              </div>

              {/* Vision Section - Only on Home */}
              {activeCategory === 'Home' && !searchQuery && (
                <section className="py-24 bg-tz-black text-white relative overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-tz-yellow font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                        Dira Yetu (Vision)
                      </span>
                      <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight max-w-4xl mx-auto">
                        "Tanzania Inayostawi Kupitia Uongozi wa Pamoja na Ubunifu"
                      </h2>
                      <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Tunajenga jukwaa ambalo kila sauti inasikika, kila wazo linathaminiwa, na kila mwananchi anapata fursa ya kushiriki katika ujenzi wa taifa letu.
                      </p>
                      <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-10 py-4 bg-tz-green text-white rounded-xl font-bold shadow-lg shadow-tz-green/20 hover:scale-105 transition-all">
                          Soma Dira Kamili
                        </button>
                        <button className="px-10 py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all">
                          Jiunge Nasi
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Abstract shapes */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tz-blue rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tz-green rounded-full blur-[150px]" />
                  </div>
                </section>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
