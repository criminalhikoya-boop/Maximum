import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Heart } from 'lucide-react';

export default function FemaleGroups() {
  return (
    <section id="female-groups" className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full mb-6 font-black text-[10px] uppercase tracking-widest">
            <Heart size={14} fill="currentColor" />
            С заботой о традициях
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-slate-900">
            ЖЕНСКИЕ <br />
            <span className="text-pink-500">ГРУППЫ</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-snug font-medium max-w-lg mx-auto lg:mx-0">
            Комфортная среда для мусульманок и всех девушек Казани. Обучение в атмосфере поддержки и уважения.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
            {[
              "Только женщины",
              "Инструкторы-женщины",
              "Комната для намаза",
              "Бережный подход",
              "Гибкий график",
              "Без стресса"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-pink-500 shrink-0" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <button className="bg-brand-accent text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-brand-accent/30 uppercase tracking-tighter">
            Записаться
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative z-10 rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 lg:border-[12px] border-white -rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Muslim woman driving student" 
              className="w-full h-auto object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Review Card */}
          <div className="absolute -bottom-8 -right-4 lg:-right-6 bg-white p-5 lg:p-8 rounded-2xl lg:rounded-[2.5rem] shadow-2xl z-20 max-w-[240px] lg:max-w-sm border border-pink-50">
            <div className="flex items-center gap-1 mb-2 lg:mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Sparkles key={i} size={12} className="text-pink-400 fill-pink-400" />
              ))}
            </div>
            <p className="text-xs lg:text-lg italic text-slate-700 font-medium leading-tight lg:leading-relaxed mb-4 lg:mb-6">
              "В женской группе с инструктором <span className="font-black text-pink-500">Алия</span> всё прошло идеально. Спокойно и комфортно!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-black text-xs">Л</div>
              <div>
                <div className="font-black text-slate-900 text-[10px] lg:text-sm leading-none">Лейсан</div>
                <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Выпускница</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
