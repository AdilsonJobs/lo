import React from 'react';
import NavBar from './NavBar';

const steps = [
  { n: '01', title: 'Abra o Instagram', desc: 'Abra o app do Instagram no seu telemóvel.' },
  { n: '02', title: 'Clique no Botão', desc: 'Carregue no botão "Usar Filtro" abaixo.' },
  { n: '03', title: 'Ative o Filtro', desc: 'Permita o acesso à câmara e ative o filtro.' },
  { n: '04', title: 'Tire Fotos!', desc: 'Capture momentos mágicos do casamento.' },
  { n: '05', title: 'Partilhe', desc: 'Use #LukeneEOsvaldo para que vejamos as suas fotos!' },
];

const features = [
  { emoji: '💍', title: 'Anéis Animados', desc: 'Anéis que giram e brilham na tela' },
  { emoji: '💐', title: 'Flores Flutuantes', desc: 'Pétalas delicadas caindo suavemente' },
  { emoji: '✨', title: 'Efeitos de Luz', desc: 'Brilhos e luzes mágicas ao redor' },
  { emoji: '🎉', title: 'Confetes Dourados', desc: 'Chuva de confetes em ouro e rosa' },
  { emoji: '💕', title: 'Corações', desc: 'Corações dançantes a flutuar' },
  { emoji: '🎊', title: 'Balões', desc: 'Balões elegantes no fundo da cena' },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-10">
    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
    <span style={{ color: 'rgba(201,169,110,0.5)', fontSize: '14px' }}>✦</span>
    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
  </div>
);

const Instagram = ({ currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <NavBar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-lato uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#c9a96e' }}>
            ✦ &nbsp; Filtro Exclusivo &nbsp; ✦
          </p>
          <h1 className="font-playfair text-white font-light" style={{ fontSize: 'clamp(36px, 7vw, 64px)' }}>
            Filtro Instagram
          </h1>
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#c9a96e' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
          </div>
          <p className="font-lato mt-5" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
            Divirta-se com o nosso filtro AR exclusivo do casamento
          </p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-4">
          {/* Steps */}
          <div
            className="rounded-2xl p-8"
            style={{ border: '1px solid var(--border-a08)', backgroundColor: 'var(--card-a06)' }}
          >
            <h2 className="font-playfair text-white mb-7" style={{ fontSize: '22px' }}>Como Usar</h2>
            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-playfair shrink-0" style={{ fontSize: '22px', color: 'rgba(201,169,110,0.3)', minWidth: '32px', lineHeight: '1.2' }}>
                    {step.n}
                  </span>
                  <div>
                    <p className="font-playfair text-white mb-1" style={{ fontSize: '16px' }}>{step.title}</p>
                    <p className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl p-10 text-center flex-1 flex flex-col items-center justify-center"
              style={{ border: '1px solid rgba(201,169,110,0.3)', backgroundColor: 'rgba(201,169,110,0.06)' }}
            >
              <div className="text-6xl mb-5 animate-float">📱</div>
              <h3 className="font-playfair text-white mb-3" style={{ fontSize: '26px' }}>Pronto para começar?</h3>
              <p className="font-lato mb-7" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
                Carregue abaixo para abrir o filtro diretamente no Instagram
              </p>
              <a
                href="https://lovely-memories.com.br/cabine/casamentol&o"
                target="_blank"
                rel="noopener noreferrer"
                className="font-lato font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-block"
                style={{
                  fontSize: '14px',
                  backgroundColor: '#c9a96e',
                  color: 'var(--bg)',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e8c49a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#c9a96e'}
              >
                Abrir Cabine de Fotos
              </a>
            </div>

            {/* QR placeholder */}
            <div
              className="rounded-xl p-6 text-center"
              style={{ border: '1px solid var(--border-a08)', backgroundColor: 'var(--card-a04)' }}
            >
              <p className="font-lato mb-4" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                OU SCANEIE O QR CODE
              </p>
              <div
                className="rounded-lg mx-auto flex items-center justify-center"
                style={{ width: '100px', height: '100px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,169,110,0.15)' }}
              >
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>Em breve</span>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* Filter features */}
        <div className="mb-4">
          <h2 className="font-playfair text-white text-center mb-8" style={{ fontSize: '24px' }}>O Filtro Inclui</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center transition-all duration-300"
                style={{ border: '1px solid var(--border-a08)', backgroundColor: 'var(--card-a06)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-a08)'}
              >
                <div className="text-3xl mb-3">{f.emoji}</div>
                <h4 className="font-playfair text-white mb-1" style={{ fontSize: '15px' }}>{f.title}</h4>
                <p className="font-lato" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.5' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Hashtag */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ border: '1px solid rgba(201,169,110,0.25)', backgroundColor: 'rgba(201,169,110,0.04)' }}
        >
          <p className="font-lato uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'rgba(201,169,110,0.6)' }}>
            Partilhe com todos
          </p>
          <p className="font-playfair text-white mb-3" style={{ fontSize: '30px' }}>#LukeneEOsvaldo</p>
          <p className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            Vamos ver todas as suas fotos e vídeos no nosso álbum especial
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
