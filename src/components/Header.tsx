import React from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface HeaderProps {
  activeCategory: Category | 'Home';
  onCategoryChange: (category: Category | 'Home') => void;
  onSearch: (query: string) => void;
}

export default function Header({ activeCategory, onCategoryChange, onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Marquee */}
      <div className="bg-tz-black text-tz-yellow py-2 overflow-hidden border-b border-tz-yellow/20">
        <div className="animate-marquee whitespace-nowrap font-medium text-sm">
          "Ninaamini katika zama mpya za maendeleo jumuishi" &nbsp; • &nbsp; 
          "Ninaamini katika zama mpya za maendeleo jumuishi" &nbsp; • &nbsp; 
          "Ninaamini katika zama mpya za maendeleo jumuishi"
        </div>
      </div>

      {/* Main Nav */}
      <nav className="glass-morphism shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => onCategoryChange('Home')}>
              <div className="w-10 h-10 bg-tz-green rounded-lg flex items-center justify-center mr-3 shadow-lg transform rotate-3">
                <span className="text-white font-display font-bold text-xl">MJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tight text-tz-black">
                  Maendeleo <span className="text-tz-green">Jumuishi</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-tz-blue">
                  Zama Mpya za Uongozi
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => onCategoryChange('Home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === 'Home' ? 'text-tz-green bg-tz-green/5' : 'text-neutral-600 hover:text-tz-green hover:bg-neutral-50'
                }`}
              >
                Home
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === cat ? 'text-tz-green bg-tz-green/5' : 'text-neutral-600 hover:text-tz-green hover:bg-neutral-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button 
                onClick={() => onCategoryChange('Home')} // Placeholder for Contact
                className="ml-4 px-4 py-2 bg-tz-black text-white rounded-lg text-sm font-bold hover:bg-neutral-800 transition-all shadow-md active:scale-95"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="text-neutral-600">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-tz-green transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 py-4 px-4 space-y-1 animate-in slide-in-from-top duration-300">
            <button
              onClick={() => { onCategoryChange('Home'); setIsMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Home
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { onCategoryChange(cat); setIsMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-neutral-50"
              >
                {cat}
              </button>
            ))}
            <div className="pt-4 px-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Tafuta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-100 border-none rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-tz-green"
                />
                <Search className="absolute left-3 top-3.5 text-neutral-400" size={18} />
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
