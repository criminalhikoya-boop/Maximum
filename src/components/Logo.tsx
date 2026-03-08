import React from 'react';

export const Logo = ({ className = "h-16 w-auto", invert = false }: { className?: string, invert?: boolean }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src="/img/logo.png" 
      alt="Автошкола Максимум" 
      className={`h-full w-auto object-contain ${invert ? 'brightness-0 invert' : ''}`}
      style={{ mixBlendMode: 'multiply' }} // This helps make white background transparent on white surfaces
      referrerPolicy="no-referrer"
    />
  </div>
);
