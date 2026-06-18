import React from 'react';
import NavBar from './NavBar';

const locations = [
  {
    title: 'Cerimónia',
    address: 'Igreja Nossa Senhora da Arrábida',
    street: '',
    city: '',
    time: '16:00',
    notes: 'Chegue com 30 minutos de antecedência',
    emoji: '⛪',
    mapUrl: 'https://maps.app.goo.gl/sqWq5dfWq1aqh6r3A',
  },
  {
    title: 'Recepção',
    address: 'Salão de Festas',
    street: '',
    city: '',
    time: '17:30 — Coquetel',
    notes: 'Acesso por Uber recomendado. Sem estacionamento.',
    emoji: '🎉',
    mapUrl: 'https://maps.app.goo.gl/gVvCRy3XgFTRp7Xz9',
  },
  {
    title: 'Hospedagem',
    address: 'Hotel Recomendado',
    street: 'A confirmar',
    city: 'A confirmar',
    time: null,
    notes: 'Código de desconto para convidados: LUKENEOVALDO',
    emoji: '🏨',
    mapUrl: 'https://maps.google.com',
  },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-10">
    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
    <span style={{ color: 'rgba(201,169,110,0.5)', fontSize: '14px' }}>✦</span>
    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: '#c9a96e' }}></div>
  </div>
);

const Locations = ({ currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <NavBar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-lato uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#c9a96e' }}>
            ✦ &nbsp; Como Chegar &nbsp; ✦
          </p>
          <h1 className="font-playfair text-white font-light" style={{ fontSize: 'clamp(36px, 7vw, 64px)' }}>
            Localizações
          </h1>
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#c9a96e' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#e8c49a' }}></div>
          </div>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-4">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: '1px solid var(--border-a08)', backgroundColor: 'var(--card-a06)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-a08)'}
            >
              {/* Card header */}
              <div className="p-6" style={{ borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
                <div className="text-3xl mb-3">{loc.emoji}</div>
                <p className="font-lato uppercase mb-1" style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(201,169,110,0.7)' }}>
                  {loc.title}
                </p>
                <h3 className="font-playfair text-white" style={{ fontSize: '20px' }}>{loc.address}</h3>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-3">
                <div>
                  <p className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{loc.street}</p>
                  <p className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{loc.city}</p>
                </div>

                {loc.time && (
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#c9a96e', fontSize: '12px' }}>🕐</span>
                    <span className="font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{loc.time}</span>
                  </div>
                )}

                <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '12px' }}>
                  <p className="font-lato italic" style={{ fontSize: '12px', color: 'rgba(201,169,110,0.7)', lineHeight: '1.5' }}>{loc.notes}</p>
                </div>

                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-lato rounded-lg py-2 mt-2 transition-all duration-300"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    border: '1px solid rgba(201,169,110,0.3)',
                    color: '#c9a96e',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Transport tips */}
        <div
          className="rounded-2xl p-8"
          style={{ border: '1px solid rgba(201,169,110,0.18)', backgroundColor: 'rgba(201,169,110,0.04)' }}
        >
          <h2 className="font-playfair text-white mb-8" style={{ fontSize: '24px' }}>Dicas de Transporte</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Chegando de Avião',
                items: [
                  'Aeroporto a aproximadamente 45 minutos da cerimónia',
                  'Uber e 99 disponíveis na saída do aeroporto',
                  'Aluguer de carro recomendado para estadias mais longas',
                  'Estacionamento no hotel: gratuito para hóspedes',
                ],
              },
              {
                title: 'Chegando de Carro',
                items: [
                  'Estacionamento interno disponível no salão de festas',
                  'Na cerimónia não há estacionamento próprio',
                  'Use o Google Maps com antecedência para planear a rota',
                  'Evite os horários de maior tráfego',
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-playfair text-white mb-4" style={{ fontSize: '17px' }}>{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 font-lato" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                      <span style={{ color: '#c9a96e', flexShrink: 0 }}>✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
