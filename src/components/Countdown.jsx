import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex items-center justify-center rounded-lg"
        style={{
          width: '54px', height: '54px',
          border: '1px solid rgba(201,169,110,0.3)',
          backgroundColor: 'rgba(201,169,110,0.05)',
        }}>
        <span className="font-playfair font-light text-white" style={{ fontSize: '22px' }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-lato uppercase" style={{ fontSize: '8px', letterSpacing: '0.25em', color: '#c9a96e' }}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full">
      <p className="font-lato uppercase mb-4" style={{ fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.35)' }}>
        Faltam apenas
      </p>
      <div className="flex justify-center items-end gap-2">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <span className="pb-6 font-playfair" style={{ fontSize: '18px', color: 'rgba(201,169,110,0.3)' }}>:</span>
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <span className="pb-6 font-playfair" style={{ fontSize: '18px', color: 'rgba(201,169,110,0.3)' }}>:</span>
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <span className="pb-6 font-playfair" style={{ fontSize: '18px', color: 'rgba(201,169,110,0.3)' }}>:</span>
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
};

export default Countdown;
