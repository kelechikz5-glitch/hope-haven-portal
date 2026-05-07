import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Users, 
  Globe,
  CheckCircle2,
  ArrowDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Premium Hero Header */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1600" 
            alt="Hamilton Foundation" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <span>ESTABLISHED 2012</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Our Story. <br /><span className="text-emerald-500">Their Future.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Hamilton Foundation is more than an organization—it's a global movement of empathy, dedicated to solving the world's most pressing challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <div className="animate-bounce h-12 w-12 rounded-full border border-slate-700 flex items-center justify-center mx-auto text-slate-500">
              <ArrowDown className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* History & Impact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                <span>SINCE THE BEGINNING</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Born from a Vision of <span className="text-emerald-600 italic">Equity.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  A decade ago, John Hamilton witnessed the profound disparity in rural educational access during a trip to East Africa. What started as a shipment of 500 books soon evolved into the construction of a permanent community library.
                </p>
                <p className="font-bold text-slate-900">
                  Today, we operate in 18 countries, managing over 40 large-scale projects ranging from surgical centers to solar-powered schools.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                {[
                  { label: 'Transparency Score', value: '100%' },
                  { label: 'Efficiency Ratio', value: '92%' },
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-emerald-500 pl-6">
                    <p className="text-4xl font-black text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000" 
                  alt="Our Work" 
                  className="w-full h-[650px] object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 p-10 rounded-3xl text-white shadow-2xl z-20 max-w-[280px]">
                <Heart className="h-10 w-10 text-emerald-500 mb-6 fill-current" />
                <p className="text-2xl font-bold leading-tight">Join 2,500+ Change Makers worldwide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values (3-Column) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tighter">Our Core Framework</h2>
            <p className="text-slate-500 text-lg font-medium italic">Guided by radical empathy and data-driven impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Target, 
                title: 'Our Mission', 
                desc: 'To mobilize global resources and foster sustainable solutions that break the cycle of systemic poverty.',
                color: 'emerald'
              },
              { 
                icon: Eye, 
                title: 'Our Vision', 
                desc: 'A world where zip codes do not define destinies, and fundamental human rights are universal realities.',
                color: 'blue'
              },
              { 
                icon: ShieldCheck, 
                title: 'Our Integrity', 
                desc: '100% financial transparency. Every donor knows exactly where their contribution lands.',
                color: 'slate'
              }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
              >
                <div className={`h-16 w-16 rounded-2xl bg-${box.color}-50 flex items-center justify-center text-${box.color}-600 mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500`}>
                  <box.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{box.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20 uppercase tracking-tighter">The Visionaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: 'John Hamilton', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
              { name: 'Sarah Chen', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400' },
              { name: 'Marcus Brooks', role: 'Field Lead', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
              { name: 'Elena Rodriguez', role: 'Medical Advisor', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400' },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 mx-auto w-full aspect-square overflow-hidden rounded-[2.5rem]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-emerald-600 text-xs font-black uppercase tracking-widest mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Map CTA */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-emerald-500 mx-auto mb-10 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Our Reach is Global, <br />Our Heart is <span className="text-emerald-500">Local.</span></h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            We operate in regions that others overlook. From the high Andes to the plains of the Serengeti, our team is on the ground, making a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-16 px-12 rounded-2xl text-lg font-bold">
              <Link to="/get-involved">Get Involved Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 h-16 px-12 rounded-2xl text-lg font-bold">
              <Link to="/donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;