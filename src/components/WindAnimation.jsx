import { useEffect, useState } from 'react';

const WindAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      startY: `${Math.random() * 100}vh`,
      endY: `${Math.random() * 100}vh`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 20}s`,
      size: `${10 + Math.random() * 20}px`,
      emoji: ['🍃', '🌿', '🌱', '✨'][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="wind-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="wind-particle animate-wind"
          style={{
            '--start-y': p.startY,
            '--end-y': p.endY,
            '--duration': p.duration,
            fontSize: p.size,
            animationDelay: p.delay,
            top: p.startY,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};

export default WindAnimation;
