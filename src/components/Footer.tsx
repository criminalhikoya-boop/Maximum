import React from 'react';
import { Logo } from './Logo';
import { Instagram, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Logo invert className="h-20 mb-8" />
            <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
              Профессиональная подготовка водителей категории «В» в самом сердце Казани. 
              Современный подход, комфортные условия и гарантированный результат.
            </p>
            <div className="flex gap-6">
              <a href="https://vk.com/maximum_avto" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                <Send size={22} />
              </a>
              <a href="https://instagram.com/avtoshkola.kazan" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                <Instagram size={22} />
              </a>
              <a href="https://wa.me/79874225111" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-8 uppercase tracking-tighter">Обучение</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Категория B</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Женские группы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Теория онлайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доп. вождение</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-8 uppercase tracking-tighter">Полезное</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Цены и акции</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Рассрочка 0%</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Налоговый вычет</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-8 uppercase tracking-tighter">Контакты</h4>
            <ul className="space-y-6 text-slate-400 text-sm font-bold">
              <li className="flex items-start gap-4">
                <span className="text-brand-primary font-black text-lg">A:</span>
                <span>г. Казань, ул. Мартына Межлаука, 22 (офис 505)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-primary font-black text-lg">T:</span>
                <a href="tel:+79874225111" className="hover:text-white transition-colors text-lg">+7 (987) 422-51-11</a>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-primary font-black text-lg">W:</span>
                <span>Пн-Пт: 09:00 – 21:00<br/>Сб-Вс: 10:00 – 16:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[11px] uppercase tracking-[0.2em] font-black">
          <div>© 2024 Автошкола «Максимум». Все права защищены.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
