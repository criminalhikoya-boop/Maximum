import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50 -z-10 hidden lg:block skew-x-[-8deg] translate-x-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <Star size={12} className="fill-brand-accent text-brand-accent" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">№1 в Казани • Лицензия ГАИ</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[900] leading-[0.9] mb-6 tracking-tighter text-brand-dark">
            ТВОЙ <span className="text-gradient">МАКСИМУМ</span> <br />
            В КАЗАНИ
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-snug font-medium">
            Обучение в центре. Вид на Кремль, новые авто и 100% сопровождение до прав. Рассрочка 0%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-brand-accent text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-brand-accent/30 flex items-center justify-center gap-2 group uppercase tracking-tighter">
              Начать обучение
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
              <MapPin size={20} className="text-brand-primary shrink-0" />
              <div className="text-left">
                <div className="font-black text-xs uppercase leading-none">Межлаука, 22</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Центр города</div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="text-2xl font-black text-brand-primary tracking-tighter">0%</div>
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Рассрочка</div>
            </div>
            <div>
              <div className="text-2xl font-black text-brand-primary tracking-tighter">13%</div>
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Вычет</div>
            </div>
            <div>
              <div className="text-2xl font-black text-brand-primary tracking-tighter">ГАИ</div>
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Сопровождение</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=1000" 
              alt="Kazan Kremlin" 
              className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 lg:p-12">
              <div className="text-white">
                <div className="text-2xl lg:text-4xl font-black mb-1">Учись в центре</div>
                <div className="text-xs lg:text-lg font-bold opacity-80 uppercase tracking-widest">Вид на Кремль из окон класса</div>
              </div>
            </div>
          </div>
          
          {/* Floating Badge - Hidden on small mobile */}
          <div className="absolute -top-4 -left-4 bg-white p-3 lg:p-5 rounded-2xl shadow-xl z-20 border border-slate-50 flex items-center gap-3 animate-float hidden sm:flex">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm lg:text-lg font-black leading-none">Лицензия ГАИ</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Официально</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
