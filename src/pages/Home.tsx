import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Users, 
  Target, 
  Globe, 
  ArrowRight,
  Play,
  ArrowUpRight,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a936a150-31f4-46ca-b176-347af2de7ec7/education-impact-9fccef6c-1778145033512.webp',
    title: 'Nurturing Minds, Building Futures',
    subtitle: 'EDUCATION INITIATIVE',
    description: 'Providing quality education and life-changing resources to children in underserved communities across the globe.'
  },
  {
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a936a150-31f4-46ca-b176-347af2de7ec7/water-project-3821ccbc-1778145033248.webp',
    title: 'Clean Water, Sustainable Life',
    subtitle: 'HEALTH & HYGIENE',
    description: 'Developing sustainable water solutions that transform daily lives and eliminate water-borne diseases.'
  },
  {
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a936a150-31f4-46ca-b176-347af2de7ec7/healthcare-aid-9c309538-1778145032459.webp',
    title: 'Healthcare for Every Village',
    subtitle: 'MEDICAL OUTREACH',
    description: 'Bringing professional medical care, vaccinations, and maternal support to the most remote corners of the world.'
  }
];

const stats = [
  { label: 'Lives Impacted', value: '120K+', icon: Users, color: 'emerald' },
  { label: 'Countries Served', value: '18', icon: Globe, color: 'blue' },
  { label: 'Schools Built', value: '42', icon: Target, color: 'amber' },
  { label: 'Volunteers', value: '2.5K', icon: Heart, color: 'rose' },
];

const activities = [
  {
    title: 'Village School Empowerment',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800',
    impact: '800 Students',
    status: 'Ongoing'
  },
  {
    title: 'Rural Clean Water Project',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808891447?q=80&w=800',
    impact: '12 Villages',
    status: 'Completed'
  },
  {
    title: 'Emergency Medical Drive',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800',
    impact: '2.4K Families',
    status: 'Ongoing'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col">
      {/* Hero Slideshow Section */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-2 mb-6"
                >
                  <span className="w-12 h-[2px] bg-emerald-500 rounded-full" />
                  <span className="text-emerald-500 font-bold tracking-[0.2em] text-xs uppercase">{slides[currentSlide].subtitle}</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-wrap gap-5"
                >
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-14 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-900/40 group">
                    <Link to="/donate">
                      Support Now 
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/5 text-white border-white/20 hover:bg-white/10 px-10 h-14 rounded-2xl text-lg font-bold backdrop-blur-md transition-all">
                    <Link to="/about">Our Story</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Navigation Controls */}
        <div className="absolute bottom-12 right-12 flex items-center space-x-4 z-20">
          <div className="flex space-x-2 mr-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === currentSlide ? 'bg-emerald-500 w-12' : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={prevSlide}
            className="p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-${stat.color}-100 text-${stat.color}-600 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a936a150-31f4-46ca-b176-347af2de7ec7/volunteers-working-d9b48ac4-1778145032552.webp" 
                  alt="Our Mission" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-12 rounded-[2.5rem] shadow-2xl text-white max-w-xs hidden md:block z-20">
                <Quote className="h-10 w-10 mb-6 text-emerald-300 opacity-50" />
                <p className="font-bold text-xl leading-relaxed mb-6 italic">"Small acts, when multiplied by millions of people, can transform the world."</p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-bold">John Hamilton</p>
                    <p className="text-xs text-emerald-200 uppercase tracking-widest font-bold">Founder</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                <span>Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
                Empowering the Unseen, Building the <span className="text-emerald-600">Possible.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Hamilton Foundation is a global non-profit dedicated to bridging the gap between privilege and need. We operate with radical transparency and community-first principles to ensure every dollar creates measurable impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: 'Community Led', desc: 'Local problems need local solutions.' },
                  { title: 'Radical Transparency', desc: 'Track every cent of your donation.' },
                  { title: 'Sustainable Growth', desc: 'Creating independence, not just aid.' },
                  { title: 'Global Network', desc: 'Over 2,500 partners worldwide.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <Button asChild size="lg" className="rounded-2xl h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <span>Recent Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Making Waves of <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">Change</span></h2>
            </div>
            <Link to="/about" className="group flex items-center space-x-3 text-slate-900 font-bold hover:text-emerald-600 transition-all">
              <span>View All Activities</span>
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-200 mb-8 h-80">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                      {activity.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-emerald-900/90 to-transparent flex items-end">
                    <Button variant="outline" className="w-full bg-white/20 text-white border-white/20 backdrop-blur-md rounded-xl font-bold">
                      View Project Details
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{activity.title}</h3>
                  <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Impact</span>
                    <span className="font-bold text-slate-700">{activity.impact}</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-100" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Status</span>
                    <span className="font-bold text-emerald-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 animate-pulse" />
                      {activity.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-12">Trusted by Global Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all">
            {['UNESCO', 'World Bank', 'Red Cross', 'UNICEF', 'Peace Corps'].map((partner) => (
              <span key={partner} className="text-2xl font-black text-slate-900 tracking-tighter cursor-default">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative p-12 md:p-24 text-center">
            <div className="absolute inset-0 bg-emerald-600 mix-blend-overlay opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -mr-48 -mt-48" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Your Support is the Bridge to Someone's <span className="text-emerald-500">Dream.</span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                We believe in a world where zip codes don't define destinies. Join us today and be the catalyst for lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 h-16 rounded-2xl text-xl font-bold shadow-2xl shadow-emerald-900/40">
                  <Link to="/donate">Donate Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/5 text-white border-white/20 hover:bg-white/10 px-12 h-16 rounded-2xl text-xl font-bold backdrop-blur-md">
                  <Link to="/get-involved">Join as Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;