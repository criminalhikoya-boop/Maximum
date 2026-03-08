import React from 'react';
import { motion } from 'motion/react';
import { Users, Stethoscope, GraduationCap, BookOpen, Baby, Heart } from 'lucide-react';

const features = [
  {
    icon: <Users />,
    title: "Гибкие группы",
    description: "Смешанные или женские группы на выбор."
  },
  {
    icon: <Stethoscope />,
    title: "Медосмотр",
    description: "Проходите комиссию прямо в автошколе."
  },
  {
    icon: <GraduationCap />,
    title: "Сопровождение",
    description: "Мы с вами до получения прав в ГАИ."
  },
  {
    icon: <BookOpen />,
    title: "Учебники",
    description: "Бесплатный доступ к литературе."
  },
  {
    icon: <Baby />,
    title: "С детьми",
    description: "Можно приходить на занятия с ребенком."
  },
  {
    icon: <Heart />,
    title: "Намаз",
    description: "Оборудованное место для молитвы."
  }
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">ПОЧЕМУ <span className="text-brand-primary">МЫ</span></h2>
          <p className="text-slate-500 text-sm font-medium">Максимальный комфорт для каждого ученика.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-5 lg:p-8 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-lg transition-all group bg-slate-50/50"
            >
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-primary/10 transition-colors">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  size: 20, 
                  className: feature.title === "Намаз" ? "text-brand-accent" : "text-brand-primary" 
                })}
              </div>
              <h3 className="text-sm lg:text-xl font-black mb-1 lg:mb-3 uppercase tracking-tight text-brand-dark">{feature.title}</h3>
              <p className="text-[10px] lg:text-base text-slate-500 leading-tight lg:leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
