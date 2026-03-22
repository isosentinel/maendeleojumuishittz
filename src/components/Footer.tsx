import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-tz-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-tz-green rounded-lg flex items-center justify-center mr-3 shadow-lg transform rotate-3">
                <span className="text-white font-display font-bold text-xl">MJ</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Maendeleo <span className="text-tz-green">Jumuishi</span>
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Jukwaa la kimkakati la uongozi na maendeleo jumuishi kwa ajili ya Tanzania ya kesho. Tunaamini katika nguvu ya mawazo na uongozi bora.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tz-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tz-green transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tz-yellow hover:text-tz-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tz-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 relative">
              Viungo vya Haraka
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-tz-green rounded-full" />
            </h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#" className="hover:text-tz-green transition-colors">Sera na Miongozo</a></li>
              <li><a href="#" className="hover:text-tz-green transition-colors">Hotuba za Kiongozi</a></li>
              <li><a href="#" className="hover:text-tz-green transition-colors">Mikakati ya Maendeleo</a></li>
              <li><a href="#" className="hover:text-tz-green transition-colors">Ziara na Matukio</a></li>
              <li><a href="#" className="hover:text-tz-green transition-colors">Vision 2050</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 relative">
              Jamii (Categories)
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-tz-blue rounded-full" />
            </h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#" className="hover:text-tz-blue transition-colors">Uchumi na Biashara</a></li>
              <li><a href="#" className="hover:text-tz-blue transition-colors">Elimu na Teknolojia</a></li>
              <li><a href="#" className="hover:text-tz-blue transition-colors">Afya na Jamii</a></li>
              <li><a href="#" className="hover:text-tz-blue transition-colors">Miundombinu</a></li>
              <li><a href="#" className="hover:text-tz-blue transition-colors">Utawala Bora</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 relative">
              Wasiliana Nasi
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-tz-yellow rounded-full" />
            </h4>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-tz-yellow flex-shrink-0" />
                <span>Dodoma, Tanzania</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-tz-yellow flex-shrink-0" />
                <span>+255 700 000 000</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-tz-yellow flex-shrink-0" />
                <span>info@maendeleojumuishi.go.tz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Maendeleo Jumuishi - All Rights Reserved
          </p>
          <div className="flex space-x-8 text-neutral-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
