import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Handshake, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const GetInvolved = () => {
  const [formType, setFormType] = useState<'volunteer' | 'partner'>('volunteer');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Welcome to the team! Your ${formType} application has been received.`, {
        description: "We'll review your details and contact you within 48 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Dynamic Header */}
      <section className="bg-emerald-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-12 transform origin-top-right translate-x-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <Sparkles className="h-3 w-3" />
              <span>Join the Movement</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Be the Hands that <span className="text-emerald-500">Heal.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-100/70 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
            >
              We believe that every individual has a unique gift to offer. Whether you're a student, a professional, or a corporation, there's a place for your heart here.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Info Section */}
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="inline-flex p-4 rounded-3xl bg-emerald-100 text-emerald-600 shadow-sm">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight uppercase">Volunteers Network</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Our volunteers are the lifeblood of Hamilton Foundation. Join a community of 2,500+ passionate individuals across 18 countries making a real difference.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: Globe, title: 'Global Remote', desc: 'Digital aid & support' },
                      { icon: Clock, title: 'Flexible Time', desc: 'Even 2 hours matter' },
                      { icon: ShieldCheck, title: 'Full Training', desc: 'We prepare you well' },
                      { icon: Sparkles, title: 'Skill Matching', desc: 'Do what you love' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-3 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                        <item.icon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm leading-none mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl -mr-24 -mt-24" />
                <Handshake className="h-10 w-10 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Corporate Synergy</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                  We partner with innovative companies to build sustainable CSR programs that align with global development goals.
                </p>
                <div className="space-y-4">
                  {['Program Sponsorship', 'Employee Match', 'Strategic Consulting'].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 sticky top-32"
            >
              <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-12">
                <button
                  onClick={() => setFormType('volunteer')}
                  className={`flex-1 py-4 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                    formType === 'volunteer' ? 'bg-white text-emerald-600 shadow-xl' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Volunteer Sign Up
                </button>
                <button
                  onClick={() => setFormType('partner')}
                  className={`flex-1 py-4 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                    formType === 'partner' ? 'bg-white text-emerald-600 shadow-xl' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Partner Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-slate-400">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="h-14 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-600 transition-all rounded-xl" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required className="h-14 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-600 transition-all rounded-xl" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-14 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-600 transition-all rounded-xl" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" required className="h-14 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-600 transition-all rounded-xl" />
                </div>

                {formType === 'partner' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization Name</Label>
                    <Input id="company" placeholder="Global Impact Inc." required className="h-14 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-600 transition-all rounded-xl" />
                  </motion.div>
                )}

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Motivation Letter</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us why you want to join Hamilton Foundation..." 
                    className="min-h-[140px] bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-600 transition-all rounded-2xl resize-none p-6"
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 h-16 text-lg font-bold rounded-2xl shadow-2xl shadow-emerald-900/20 group"
                >
                  {isSubmitting ? (
                    'Processing Application...'
                  ) : (
                    <>
                      Submit Application 
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-xs text-slate-400 font-medium">
                  By joining, you agree to our Code of Conduct and Impact Guidelines.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;