import React from 'react';
import NavBar from './NavBar';

const events = [
  { time: '15:00', title: 'Chegada dos Convidados', description: 'Bem-vindos! Por favor, chegue com antecedência para encontrar o seu lugar com calma.', location: 'Local da Cerimónia', emoji: '👥' },
  { time: '16:00', title: 'Cerimónia', description: 'O grande momento do "Sim"! A cerimónia religiosa que une as nossas vidas para sempre.', location: 'Igreja / Capela', emoji: '💍' },
  { time: '17:30', title: 'Coquetel', description: 'Aperitivos e bebidas enquanto os noivos tiram as fotos. Aproveite para conviver!', location: 'Jardim Externo', emoji: '🥂' },
  { time: '19:00', title: 'Recepção', description: 'Boas-vindas oficiais e discursos emocionantes dos padrinhos e madrinhas.', location: 'Salão Principal', emoji: '🎤' },
  { time: '19:30', title: 'Jantar', description: 'Entrada e primeiro prato servidos. Bom apetite e boa conversa!', location: 'Salão de Jantar', emoji: '🍽️' },
  { time: '21:00', title: 'Primeira Dança', description: 'O momento mais aguardado — a dança dos noivos, seguida da abertura da festa.', location: 'Pista de Dança', emoji: '💃' },
  { time: '23:30', title: 'Buquê & Gravata', description: 'Tradição especial com muita alegria. Quem será o próximo?', location: 'Pista de Dança', emoji: '🎊' },
  { time: '05:00', title: 'Corda de Sobrevivência', description: 'Caldo & Gelados para recuperar energias e continuar a festa!', location: 'Salão Principal', emoji: '🍜' },
  { time: '07:00', title: 'Encerramento da Festa', description: 'Uma noite inesquecível chega ao fim. Obrigado por celebrarem connosco!', location: 'Salão Principal', emoji: '🌅' },
];

const infoCards = [
  { label: 'Dress Code', value: 'Social Elegante' },
  { label: 'Chegada', value: '14h45 (antecipado)' },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
    <span style={{ color: 'rgba(201,169,110,0.5)', fontSize: '14px' }}>✦</span>
    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
  </div>
);

const Program = ({ currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <NavBar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-lato uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#c9a96e' }}>
            ✦ &nbsp; 27 de Junho de 2026 &nbsp; ✦
          </p>
          <h1 className="font-playfair text-white font-light" style={{ fontSize: 'clamp(36px, 7vw, 64px)' }}>
            Programa do Dia
          </h1>
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#c9a96e' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
          </div>
        </div>

        {/* Info cards */}
        <div className="flex justify-center gap-3 mb-12">
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.18)' }}
            >
              <p className="font-lato uppercase mb-2" style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(232,196,154,0.6)' }}>{card.label}</p>
              <p className="font-playfair text-white" style={{ fontSize: '15px' }}>{card.value}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* Timeline */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex gap-5 group">
              {/* Left: time + line */}
              <div className="flex flex-col items-center" style={{ minWidth: '52px' }}>
                <div className="font-playfair text-right w-full" style={{ fontSize: '14px', color: '#c9a96e', lineHeight: '48px' }}>
                  {event.time}
                </div>
                {index < events.length - 1 && (
                  <div className="flex-1 w-px mt-1" style={{ backgroundColor: 'rgba(201,169,110,0.15)', minHeight: '24px' }}></div>
                )}
              </div>

              {/* Dot */}
              <div className="flex flex-col items-center" style={{ paddingTop: '12px' }}>
                <div
                  className="rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    width: '44px',
                    height: '44px',
                    fontSize: '20px',
                    border: '1px solid rgba(201,169,110,0.3)',
                    backgroundColor: 'rgba(201,169,110,0.06)',
                  }}
                >
                  {event.emoji}
                </div>
                {index < events.length - 1 && (
                  <div className="flex-1 w-px mt-2" style={{ backgroundColor: 'rgba(201,169,110,0.1)', minHeight: '16px' }}></div>
                )}
              </div>

              {/* Content card */}
              <div
                className="flex-1 rounded-xl p-4 mb-2 transition-all duration-300"
                style={{ border: '1px solid var(--border-a08)', backgroundColor: 'var(--card-a08)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-a08)'}
              >
                <h3 className="font-playfair text-white mb-1" style={{ fontSize: '17px' }}>{event.title}</h3>
                <p className="font-lato mb-2" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>{event.description}</p>
                <p className="font-lato" style={{ fontSize: '11px', color: 'rgba(201,169,110,0.6)', letterSpacing: '0.05em' }}>📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Important notes */}
        <div
          className="rounded-2xl p-7 mt-4"
          style={{ border: '1px solid rgba(201,169,110,0.18)', backgroundColor: 'rgba(201,169,110,0.04)' }}
        >
          <h3 className="font-playfair text-white mb-5" style={{ fontSize: '20px' }}>Informações Importantes</h3>
          <ul className="space-y-3 font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
            {[
              'Crianças menores de 3 anos não recomendadas para a festa à noite',
              'Salão aberto, agasalhe-se',
              'Partilhe os seus momentos usando #LukeneEOsvaldo',
            ].map((note, i) => (
              <li key={i} className="flex gap-3">
                <span style={{ color: '#c9a96e', flexShrink: 0 }}>✦</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Program;
