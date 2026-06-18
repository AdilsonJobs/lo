import React from 'react';
import NavBar from './NavBar';

const ALBUM_URL = 'https://photos.app.goo.gl/quFrUQy8iuRmWAGj9';

const steps = [
  { n: '01', title: 'Abrir o Álbum', desc: 'Clique no botão abaixo para aceder ao álbum partilhado.', emoji: '📲' },
  { n: '02', title: 'Iniciar Sessão', desc: 'Entre com a sua conta Google (já está ligado na maioria dos telemóveis).', emoji: '✅' },
  { n: '03', title: 'Adicionar Fotos', desc: 'Toque em "+" e selecione as fotos e vídeos que quer partilhar.', emoji: '📸' },
  { n: '04', title: 'Toda a gente vê!', desc: 'As suas fotos ficam visíveis para todos os convidados no álbum.', emoji: '🎉' },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-8">
    <div className="h-px flex-1 max-w-16 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
    <span style={{ color: 'rgba(201,169,110,0.5)', fontSize: '14px' }}>✦</span>
    <div className="h-px flex-1 max-w-16 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
  </div>
);

const Gallery = ({ currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <NavBar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-lato uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#c9a96e' }}>
            ✦ &nbsp; Momentos Especiais &nbsp; ✦
          </p>
          <h1 className="font-playfair text-white font-light" style={{ fontSize: 'clamp(36px, 7vw, 64px)' }}>
            Álbum de Fotos
          </h1>
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#c9a96e' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
          </div>
          <p className="font-lato mt-5" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}>
            Partilhe os seus momentos connosco — ficam guardados para sempre
          </p>
        </div>

        {/* Main CTA */}
        <a
          href={ALBUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 rounded-2xl p-8 mb-10 transition-all duration-300 group"
          style={{ border: '1px solid rgba(201,169,110,0.35)', backgroundColor: 'rgba(201,169,110,0.06)' }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(201,169,110,0.75)';
            e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)';
            e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.06)';
          }}
        >
          <span className="text-4xl group-hover:scale-110 transition-transform duration-300">📷</span>
          <div className="text-left">
            <p className="font-playfair text-white" style={{ fontSize: '22px' }}>Ver & Adicionar Fotos</p>
            <p className="font-lato" style={{ fontSize: '12px', color: 'rgba(201,169,110,0.7)', letterSpacing: '0.08em' }}>
              Abrir álbum partilhado no Google Photos →
            </p>
          </div>
        </a>

        {/* How to add photos */}
        <div
          className="rounded-2xl p-8 mb-4"
          style={{ border: '1px solid var(--border-a08)', backgroundColor: 'var(--card-a06)' }}
        >
          <h2 className="font-playfair text-white mb-7" style={{ fontSize: '20px' }}>Como Adicionar Fotos</h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-5 items-start">
                <span className="font-playfair shrink-0" style={{ fontSize: '28px', color: 'rgba(201,169,110,0.25)', minWidth: '36px', lineHeight: '1.1' }}>
                  {step.n}
                </span>
                <div className="text-2xl shrink-0 mt-0.5">{step.emoji}</div>
                <div>
                  <p className="font-playfair text-white mb-1" style={{ fontSize: '16px' }}>{step.title}</p>
                  <p className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Hashtag */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ border: '1px solid rgba(201,169,110,0.2)', backgroundColor: 'rgba(201,169,110,0.04)' }}
        >
          <p className="font-lato uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'rgba(201,169,110,0.6)' }}>
            E nas redes sociais
          </p>
          <p className="font-playfair text-white mb-3" style={{ fontSize: '28px' }}>#LukeneEOsvaldo</p>
          <p className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            Partilhe as suas fotos no Instagram e Facebook com esta hashtag
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
