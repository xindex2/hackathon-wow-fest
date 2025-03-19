
import React, { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize and animate particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.max(window.innerWidth / 10, 50), 150);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Connect particles with lines if they're close
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0f0f13 0%, #171722 100%)' }}
      />
      
      <div className="absolute inset-0 z-10 bg-background/40 backdrop-blur-[2px]" />
      
      <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-70 animate-pulse-slow"></div>
            <div className="relative bg-background rounded-full p-3 flex items-center justify-center">
              <Zap className="h-10 w-10 text-blue-500" />
            </div>
          </div>
        </div>
        
        <h1 className="mt-10 text-5xl md:text-7xl font-bold tracking-tight leading-tight md:leading-tight max-w-4xl animate-fade-in">
          <span className="block">The World's Largest</span>
          <span className="text-gradient bg-gradient-to-r from-blue-500 to-violet-500">Hackathon</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-2xl mx-auto animate-slide-up">
          $1M+ in prizes, world-class judges, and a virtual experience like no other
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a 
            href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co" 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium transition-all group relative overflow-hidden"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 translate-y-full bg-gradient-to-tr from-blue-700 to-blue-500 transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
          </a>
          <a 
            href="#prizes" 
            className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-md text-lg font-medium transition-all backdrop-blur-sm bg-white/5 hover:bg-white/10"
          >
            View Prizes
          </a>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#prizes" aria-label="Scroll down">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
