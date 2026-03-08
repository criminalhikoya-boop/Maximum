import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Алина Сафина",
    text: "Лучшая автошкола в Казани! Теория дается очень легко, а практика с инструктором — одно удовольствие. Сдала в ГАИ с первого раза!",
    rating: 5,
    date: "Март 2024"
  },
  {
    name: "Гузель Хайруллина",
    text: "Записалась в женскую группу к инструктору Алия. Это было лучшее решение! Очень спокойная атмосфера, всё объясняют доходчиво и без нервов. Рекомендую всем девушкам!",
    rating: 5,
    date: "Февраль 2024"
  },
  {
    name: "Булат Мансуров",
    text: "Удобное расположение в центре, прямо на Межлаука. Машины новые, инструкторы профессионалы. Рассрочка очень выручила.",
    rating: 5,
    date: "Январь 2024"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">ОТЗЫВЫ <span className="text-brand-primary">УЧЕНИКОВ</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Более 1000 довольных водителей уже получили права в нашей школе.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] relative border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <Quote className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-primary text-brand-primary" />
                ))}
              </div>
              
              <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                <div className="font-black text-slate-900">{review.name}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
