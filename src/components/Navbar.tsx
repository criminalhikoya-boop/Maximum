import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Instagram, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Logo } from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Обучение', href: '#features' },
    { name: 'Женские группы', href: '#female-groups' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="h-12 sm:h-16" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black hover:text-brand-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+79874225111"
            className="flex items-center gap-2 text-xs font-black hover:text-brand-primary transition-colors"
          >
            <Phone size={14} className="text-brand-primary" />
            +7 (987) 422-51-11
          </a>
          <a
            href="https://wa.me/79874225111"
            className="bg-brand-accent text-white px-5 py-2 rounded-full text-xs font-black hover:bg-red-700 transition-all shadow-lg shadow-brand-accent/30 uppercase tracking-tighter"
          >
            Записаться
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 lg:hidden border-t"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-black uppercase tracking-tight border-b border-slate-50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-2">
              <a href="tel:+79874225111" className="flex items-center gap-3 font-black text-xl text-brand-primary">
                <Phone size={20} />
                +7 (987) 422-51-11
              </a>
              <div className="flex gap-4">
                <a href="https://wa.me/79874225111" className="bg-green-500 text-white p-3 rounded-xl flex-1 flex justify-center">
                  <MessageCircle size={20} />
                </a>
                <a href="https://instagram.com/avtoshkola.kazan" className="bg-pink-500 text-white p-3 rounded-xl flex-1 flex justify-center">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
