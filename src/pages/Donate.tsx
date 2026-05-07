import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Mail, 
  Phone, 
  Info, 
  Copy,
  ShieldCheck,
  Heart,
  ExternalLink,
  ChevronRight,
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Donate = () => {
  const bankDetails = {
    accountName: 'Hamilton Foundation Global Fund',
    accountNumber: '1234 5678 9012 3456',
    bankName: 'Metropolitan Trust Bank',
    swiftCode: 'MTBUSA22XXX',
    branch: 'Global Operations - New York',
    currency: 'USD / EUR / GBP'
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied!`, {
      description: "You can now paste it into your banking application.",
    });
  };

  const donationLevels = [
    { amount: '$50', impact: 'Provides clean water for a family for a month', icon: '💧' },
    { amount: '$250', impact: 'Equips a student with learning tools for a year', icon: '📚' },
    { amount: '$1,000', impact: 'Funds a mobile health clinic for one week', icon: '🚑' },
  ];

  return (
    <div className="flex flex-col">
      {/* Premium Hero */}
      <section className="bg-slate-950 py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12 transform origin-top-right" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] flex items-center justify-center text-emerald-400 mb-10 backdrop-blur-xl"
          >
            <Heart className="h-10 w-10 fill-current" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight"
          >
            Invest in <span className="text-emerald-500">Humanity.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Your contribution isn't a gift—it's an investment in a sustainable future. 100% of public donations go directly to program funding.
          </motion.p>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationLevels.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] hover:bg-emerald-600 hover:text-white transition-all duration-500 group border border-slate-100 hover:border-emerald-500 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20"
              >
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">{level.icon}</div>
                <h3 className="text-4xl font-black mb-4">{level.amount}</h3>
                <p className="text-slate-500 group-hover:text-emerald-50 font-medium leading-relaxed">{level.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Bank Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <div className="flex items-center space-x-4 mb-12">
                <div className="bg-emerald-50 p-4 rounded-[1.5rem] text-emerald-600 shadow-sm">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 leading-none">Global Transfer</h2>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2">Secure Bank Details</p>
                </div>
              </div>

              <div className="space-y-10">
                {[
                  { label: 'Account Beneficiary', value: bankDetails.accountName },
                  { label: 'Account Number (IBAN)', value: bankDetails.accountNumber },
                  { label: 'Bank Institution', value: bankDetails.bankName },
                  { label: 'SWIFT/BIC Code', value: bankDetails.swiftCode },
                  { label: 'Currencies Accepted', value: bankDetails.currency }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start group border-b border-slate-50 pb-6">
                    <div className="flex-1">
                      <p className="text-[10px] text-slate-400 font-black mb-2 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg text-slate-900 font-black leading-tight break-all">{item.value}</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="p-3 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all ml-4"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-slate-950 rounded-[2rem] text-white">
                <div className="flex items-start space-x-4">
                  <Info className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold mb-2">Important Instructions:</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Please use <span className="text-white font-bold italic">"DONATION - [YOUR NAME]"</span> as the reference. For tax-exempt certificates, email your transfer proof to our finance team.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support Channels */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden group shadow-2xl shadow-slate-950/20"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all duration-700" />
                <h3 className="text-3xl font-bold mb-10 tracking-tight">Direct Support</h3>
                
                <div className="space-y-10">
                  <div className="flex items-center space-x-6 group/item cursor-pointer">
                    <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500 border border-white/10 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Donor Relations</p>
                      <p className="text-xl font-bold">philanthropy@hamilton.org</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 group/item cursor-pointer">
                    <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500 border border-white/10 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">24/7 Global Hotline</p>
                      <p className="text-xl font-bold">+1 (234) 567-890</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/5">
                  <p className="text-slate-500 text-sm font-medium mb-8">Other ways to support:</p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-12 rounded-xl">
                      <Wallet className="h-4 w-4 mr-2" /> Crypto Donation
                    </Button>
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-12 rounded-xl">
                      <ExternalLink className="h-4 w-4 mr-2" /> Corporate Match
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-10 flex items-center justify-between"
              >
                <div className="flex items-center space-x-6">
                  <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Verified & Secure</h4>
                    <p className="text-emerald-700/70 font-medium">PCI DSS Compliant Infrastructure</p>
                  </div>
                </div>
                <div className="hidden sm:flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-emerald-50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-emerald-200" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;