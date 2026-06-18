import React from 'react';

const Footer = ({ onNavigate }) => {
  const links = [
    { label: 'Início', page: 'home' },
    { label: 'Programa', page: 'program' },
    { label: 'Fotos', page: 'gallery' },
    { label: 'Localizações', page: 'locations' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--bg-deeper)', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Brand */}
        <div className="text-center mb-10">
          <p className="font-lato uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '0.45em', color: 'rgba(201,169,110,0.5)' }}>
            ✦ &nbsp; 27 de Junho de 2026 &nbsp; ✦
          </p>
          <h3 className="font-playfair text-white font-light" style={{ fontSize: '28px' }}>Lukene & Osvaldo</h3>
        </div>

        {/* Nav links */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {links.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate && onNavigate(link.page)}
              className="font-lato transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-32 opacity-10" style={{ backgroundColor: '#c9a96e' }}></div>
          <span style={{ color: 'rgba(201,169,110,0.3)', fontSize: '12px' }}>♡</span>
          <div className="h-px flex-1 max-w-32 opacity-10" style={{ backgroundColor: '#c9a96e' }}></div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-lato" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Adilson Camenha - Feito com amor para o grande dia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
