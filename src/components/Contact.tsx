import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Instagram, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Ждем вас в <span className="text-brand-primary">Максимум</span></h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Адреса в Казани</h4>
                  <p className="text-slate-600">ул. Мартына Межлаука, 22 (офис 505)</p>
                  <p className="text-slate-600">ул. Лево-Булачная, 24/1 (офис 204)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Контакты</h4>
                  <p className="text-slate-600 font-bold text-xl">+7 (987) 422-51-11</p>
                  <div className="flex gap-4 mt-3">
                    <a href="https://wa.me/79874225111" className="flex items-center gap-2 text-sm font-bold text-green-600 hover:opacity-80 transition-opacity">
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                    <a href="https://vk.com/maximum_avto" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:opacity-80 transition-opacity">
                      <Send size={18} /> ВКонтакте
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Режим работы</h4>
                  <p className="text-slate-600">Пн — Пт: 09:00 – 21:00</p>
                  <p className="text-slate-600">Сб — Вс: 10:00 – 16:00</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold z-10 bg-black/30 p-8 text-center">
                Находимся в самом центре Казани — рядом с Кремлем и Булаком
              </div>
              <img 
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover"
                alt="Kazan Street View"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-2">Записаться на обучение</h3>
            <p className="text-slate-500 mb-8">Оставьте заявку, и мы перезвоним вам в течение 15 минут для консультации.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  placeholder="Иван Иванов" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Номер телефона</label>
                <input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Интересующая группа</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none">
                  <option>Классическая группа</option>
                  <option>Женская группа</option>
                  <option>Доп. вождение</option>
                </select>
              </div>
              
              <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-brand-primary/20">
                Отправить заявку
              </button>
              
              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
