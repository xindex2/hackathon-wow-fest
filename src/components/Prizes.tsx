
import React, { useEffect, useRef } from 'react';
import { Trophy, Award, Gift } from 'lucide-react';

const Prizes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const prizes = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: 'Grand Prize',
      amount: '$500,000',
      description: 'Awarded to the most innovative project with exceptional execution and impact.',
      color: 'from-amber-600 to-yellow-500',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: 'Runners Up',
      amount: '$250,000',
      description: 'Split between outstanding projects that demonstrate excellence and creativity.',
      color: 'from-blue-600 to-sky-400',
    },
    {
      icon: <Gift className="h-8 w-8 text-green-400" />,
      title: 'Category Prizes',
      amount: '$250,000+',
      description: 'Specialized awards for best projects in specific technology categories.',
      color: 'from-green-600 to-emerald-400',
    },
  ];

  return (
    <section id="prizes" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-500 font-semibold mb-3" data-animate="fade-up" data-index="0">
            Unprecedented Rewards
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" data-animate="fade-up" data-index="1">
            $1M+ Prize Pool
          </h3>
          <p className="text-lg text-white/70" data-animate="fade-up" data-index="2">
            We've secured the largest prize pool in hackathon history, distributed across multiple categories and special awards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div 
              key={prize.title}
              className="relative group"
              data-animate="fade-up"
              data-index={index + 3}
            >
              <div className="absolute -inset-1 bg-gradient-to-r opacity-70 blur-lg transition-all group-hover:opacity-100" 
                style={{backgroundImage: `linear-gradient(to right, ${prize.color.split(' ')[1]}, ${prize.color.split(' ')[3]})`}}></div>
              <div className="relative glass rounded-xl p-8 h-full flex flex-col transition-transform duration-300 group-hover:translate-y-[-5px]">
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-white/5 rounded-full p-3">
                    {prize.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-white/60 block">Prize</span>
                    <span className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                      style={{backgroundImage: `linear-gradient(to right, ${prize.color.split(' ')[1]}, ${prize.color.split(' ')[3]})`}}>
                      {prize.amount}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{prize.title}</h4>
                <p className="text-white/70 mb-6">{prize.description}</p>
                <div className="mt-auto">
                  <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full shimmer" 
                      style={{
                        width: '100%', 
                        backgroundImage: `linear-gradient(to right, ${prize.color.split(' ')[1]}, ${prize.color.split(' ')[3]})`
                      }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-animate="fade-up" data-index="6">
          <a 
            href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md px-6 py-3 text-lg font-medium transition-all"
          >
            <span>Ready to win?</span>
            <Trophy className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
