import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { 
  Heart, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Admin from './pages/Admin';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Donate', href: '/donate' },
  ];

  if (isAdminPath) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-100">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">Hamilton</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mt-0.5">Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-all hover:text-emerald-600 relative py-1 ${
                  location.pathname === link.href 
                  ? 'text-emerald-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:rounded-full' 
                  : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-100 px-6 rounded-full font-bold">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-emerald-600 p-2 transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    location.pathname === link.href
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-emerald-600 h-14 rounded-2xl text-lg font-bold">
                  <Link to="/donate" onClick={() => setIsOpen(false)}>Support Our Mission</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-900/20">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">Hamilton</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mt-0.5">Foundation</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering communities and building sustainable futures through dedicated action and global partnerships.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-600 rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About Foundation', 'Get Involved', 'Donate Now', 'Admin Portal'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-600 rounded-full" />
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-4 group">
                <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Email Us</span>
                  <span className="text-slate-300">info@hamiltonfoundation.org</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Call Us</span>
                  <span className="text-slate-300">+1 (234) 567-890</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Address</span>
                  <span className="text-slate-300">123 Humanity Avenue, NY</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">Stay updated with our latest activities and impact around the world.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 rounded-xl font-bold shadow-lg shadow-emerald-900/20">Subscribe Now</Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} Hamilton Foundation. Registered Non-Profit Organization.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;