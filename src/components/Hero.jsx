import React from 'react';
import Countdown from './Countdown';

const Ornament = () => (
  <div className="flex items-center justify-center gap-4">
    <div className="h-px opacity-30" style={{ width: '40px', backgroundColor: '#c9a96e' }} />
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 0.5 L8.2 5 L13 4.5 L9.2 7.8 L10.8 12.5 L7 10 L3.2 12.5 L4.8 7.8 L1 4.5 L5.8 5 Z"
        stroke="#c9a96e" strokeWidth="0.7" fill="#c9a96e" fillOpacity="0.2" />
    </svg>
    <div className="h-px opacity-30" style={{ width: '40px', backgroundColor: '#c9a96e' }} />
  </div>
);

const navLinks = [
  { id: 'home',      label: 'Início' },
  { id: 'program',   label: 'Programa' },
  { id: 'gallery',   label: 'Fotos' },
  { id: 'instagram', label: 'Filtro' },
  { id: 'locations', label: 'Localização' },
];

const Hero = ({ onNavigate }) => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col md:flex-row" style={{ backgroundColor: 'var(--bg)' }}>

      {/* ── PHOTO — left on desktop, top on mobile ── */}
      <div className="relative shrink-0 w-full md:w-[55%] h-[38vh] md:h-full">
        <img
          src="/couple.jpg"
          alt="Lukene e Osvaldo"
          className="w-full h-full object-cover object-top"
        />
        {/* Fade to dark — bottom edge (mobile) */}
        <div className="absolute inset-x-0 bottom-0 md:hidden"
          style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, var(--bg))' }} />
        {/* Fade to dark — right edge (desktop) */}
        <div className="absolute inset-y-0 right-0 hidden md:block"
          style={{ width: '160px', background: 'linear-gradient(to right, transparent, var(--bg))' }} />
      </div>

      {/* ── CONTENT PANEL — right on desktop, below on mobile ── */}
      <div className="relative flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>

        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full"
            style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
            }} />
        </div>

        {/* Corner brackets (desktop only) */}
        <div className="absolute top-5 right-5 w-8 h-8 border-t border-r hidden md:block"
          style={{ borderColor: 'rgba(201,169,110,0.2)' }} />
        <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r hidden md:block"
          style={{ borderColor: 'rgba(201,169,110,0.2)' }} />

        {/* ── NAV — top right ── */}
        <div className="relative z-10 flex items-center justify-center md:justify-end gap-5 md:gap-7 px-6 md:px-10 pt-5 md:pt-7 pb-1 shrink-0">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.id}>
              <button
                onClick={() => onNavigate(link.id)}
                className="font-lato uppercase transition-colors duration-200"
                style={{ fontSize: '10px', letterSpacing: '0.18em', color: link.id === 'home' ? '#c9a96e' : 'rgba(255,255,255,0.38)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
                onMouseLeave={e => e.currentTarget.style.color = link.id === 'home' ? '#c9a96e' : 'rgba(255,255,255,0.38)'}
              >
                {link.label}
              </button>
              {i < navLinks.length - 1 && (
                <span style={{ color: 'rgba(201,169,110,0.2)', fontSize: '10px' }}>·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── MAIN CONTENT — vertically centered ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 gap-3 md:gap-4">

          {/* Tagline */}
          <p className="font-lato font-light uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.5em', color: 'rgba(201,169,110,0.65)' }}>
            ✦ &nbsp; Vamos Casar &nbsp; ✦
          </p>

          {/* Names */}
          <div>
            <h1 className="font-playfair text-white font-light leading-none"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '0.03em' }}>
              Lukene
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="h-px flex-1 max-w-12 opacity-35"
                style={{ background: 'linear-gradient(to right, transparent, #c9a96e)' }} />
              <span className="font-playfair italic font-light"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#c9a96e' }}>&</span>
              <div className="h-px flex-1 max-w-12 opacity-35"
                style={{ background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
            </div>
            <h1 className="font-playfair text-white font-light leading-none"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '0.03em' }}>
              Osvaldo
            </h1>
          </div>

          {/* Date */}
          <p className="font-lato uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.38em', color: '#e8c49a' }}>
            27 · Junho · 2026
          </p>

          <Ornament />

          {/* Countdown */}
          <Countdown targetDate="2026-06-27" />

          <Ornament />

          {/* Heart */}
          <p className="animate-pulse" style={{ color: 'rgba(201,169,110,0.6)', fontSize: '16px' }}>♡</p>
        </div>

        {/* ── FOOTER STRIP ── */}
        <div className="relative z-10 shrink-0 pb-4 md:pb-5 text-center">
          <p className="font-lato" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.15)' }}>
            © 2026 Adilson Camenha - Feito com amor para o grande dia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
