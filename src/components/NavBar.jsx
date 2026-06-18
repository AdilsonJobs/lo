import React from 'react';

const navLinks = [
  { id: 'home',      label: 'Início' },
  { id: 'program',   label: 'Programa' },
  { id: 'gallery',   label: 'Fotos' },
  { id: 'instagram', label: 'Filtro' },
  { id: 'locations', label: 'Localização' },
];

const NavBar = ({ currentPage, onNavigate }) => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 pt-6 pb-2 shrink-0">
      {/* Brand */}
      <button
        onClick={() => onNavigate('home')}
        className="font-playfair font-light text-white transition-colors"
        style={{ fontSize: '18px', letterSpacing: '0.05em' }}
        onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
        onMouseLeave={e => e.currentTarget.style.color = 'white'}
      >
        L &amp; O
      </button>

      {/* Links */}
      <div className="flex items-center gap-4 md:gap-6">
        {navLinks.map((link, i) => {
          const isActive = currentPage === link.id;
          return (
            <React.Fragment key={link.id}>
              <button
                onClick={() => onNavigate(link.id)}
                className="font-lato uppercase transition-colors duration-200"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  color: isActive ? '#c9a96e' : 'rgba(255,255,255,0.38)',
                  borderBottom: isActive ? '1px solid rgba(201,169,110,0.5)' : '1px solid transparent',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
                onMouseLeave={e => e.currentTarget.style.color = isActive ? '#c9a96e' : 'rgba(255,255,255,0.38)'}
              >
                {link.label}
              </button>
              {i < navLinks.length - 1 && (
                <span style={{ color: 'rgba(201,169,110,0.18)', fontSize: '10px' }}>·</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
