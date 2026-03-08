import React from 'react';
import { motion } from 'motion/react';
import { Check, Gift, Percent, Users2, CreditCard } from 'lucide-react';

const offers = [
  {
    icon: <Percent className="text-cyan-500" />,
    title: "Рассрочка 0%",
    description: "На 4 месяца без переплат."
  },
  {
    icon: <Users2 className="text-blue-500" />,
    title: "Приведи друга",
    description: "Скидка 1000₽ каждому."
  },
  {
    icon: <CreditCard className="text-green-500" />,
    title: "Вычет 13%",
    description: "Вернем налог официально."
  },
  {
    icon: <Gift className="text-purple-500" />,
    title: "Студентам",
    description: "Скидка 1000₽ по билету."
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">ЦЕНЫ И <span className="text-brand-primary">АКЦИИ</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
          >
            <h3 className="text-xl font-black mb-1 uppercase tracking-widest">Категория «В»</h3>
            <p className="text-slate-400 text-xs mb-6 uppercase">Полный курс обучения</p>
            
            <div className="mb-8">
              <div className="text-4xl font-black mb-1 text-brand-accent">от 25 000 ₽</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Всё включено</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Теория (очно/онлайн)",
                "Автодром и город",
                "Документы для ГАИ",
                "Сопровождение"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-brand-primary" />
                  <span className="text-xs font-bold">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-black hover:bg-red-700 transition-all uppercase tracking-tighter">
              Записаться
            </button>
          </motion.div>

          {/* Offers Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 p-4 lg:p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                  {React.cloneElement(offer.icon as React.ReactElement, { size: 18 })}
                </div>
                <h4 className="text-xs lg:text-lg font-black mb-1 uppercase tracking-tight">{offer.title}</h4>
                <p className="text-[10px] lg:text-sm text-slate-500 font-medium leading-tight">
                  {offer.description}
                </p>
              </motion.div>
            ))}
            
            <div className="col-span-2 bg-cyan-50 p-5 rounded-2xl border border-cyan-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs lg:text-lg font-black uppercase tracking-tight">Доп. вождение</h4>
                <p className="text-[10px] lg:text-sm text-slate-500 font-medium">Для восстановления навыков.</p>
              </div>
              <div className="text-right">
                <div className="text-xl lg:text-2xl font-black text-brand-accent">600 ₽</div>
                <div className="text-[8px] font-bold uppercase text-slate-400 tracking-widest">за урок</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
