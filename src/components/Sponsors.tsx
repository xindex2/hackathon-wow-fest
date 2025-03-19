
import React, { useEffect, useRef } from 'react';
import { HeartHandshake } from 'lucide-react';

const Sponsors = () => {
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

  const sponsors = [
    {
      name: "Supabase",
      logo: "https://pbs.twimg.com/profile_images/1822981431586439168/7xkKXRGQ_400x400.jpg",
      tier: "platinum",
    },
    {
      name: "Netlify",
      logo: "https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png",
      tier: "platinum",
    },
    {
      name: "Cloudflare Developers",
      logo: "https://pbs.twimg.com/profile_images/991779658147377152/ESp67BNN_400x400.jpg",
      tier: "platinum",
    },
    {
      name: "Sentry",
      logo: "https://pbs.twimg.com/profile_images/1778495572238086150/qDkInWXX_400x400.png",
      tier: "gold",
    },
    {
      name: "Loops",
      logo: "https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg",
      tier: "gold",
    },
    {
      name: "Algorand",
      logo: "https://pbs.twimg.com/profile_images/1805829136381861889/0fI5Zrbv_400x400.jpg",
      tier: "gold",
    },
  ];

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-50"></div>
              <div className="relative bg-background rounded-full p-3 flex items-center justify-center">
                <img 
                  src="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg" 
                  alt="Blot" 
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          </div>
          <h2 className="text-sm uppercase tracking-wider text-blue-500 font-semibold mb-3" data-animate="fade-up" data-index="0">
            Backed by the Best
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" data-animate="fade-up" data-index="1">
            Our Sponsors
          </h3>
          <p className="text-lg text-white/70" data-animate="fade-up" data-index="2">
            Leading technology companies supporting the world's largest hackathon
          </p>
        </div>
        
        <div className="mb-16" data-animate="fade-up" data-index="3">
          <h4 className="text-center text-white/50 text-sm uppercase tracking-wider mb-8">Platinum Sponsors</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors
              .filter(sponsor => sponsor.tier === "platinum")
              .map((sponsor, index) => (
                <div key={sponsor.name} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative glass flex items-center justify-center p-8 rounded-lg h-full transition-all duration-300 group-hover:bg-white/10">
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 relative mb-4 overflow-hidden rounded-full bg-white/5 p-2">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-contain rounded-full"
                          loading="lazy"
                        />
                      </div>
                      <h5 className="text-lg font-medium">{sponsor.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div data-animate="fade-up" data-index="4">
          <h4 className="text-center text-white/50 text-sm uppercase tracking-wider mb-8">Gold Sponsors</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors
              .filter(sponsor => sponsor.tier === "gold")
              .map((sponsor, index) => (
                <div key={sponsor.name} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative glass flex items-center justify-center p-6 rounded-lg h-full transition-all duration-300 group-hover:bg-white/10">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 relative mb-3 overflow-hidden rounded-full bg-white/5 p-2">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-contain rounded-full"
                          loading="lazy"
                        />
                      </div>
                      <h5 className="text-lg font-medium">{sponsor.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="mt-20 text-center max-w-xl mx-auto" data-animate="fade-up" data-index="5">
          <h4 className="text-2xl font-bold mb-4">Want to Sponsor?</h4>
          <p className="text-white/70 mb-6">
            Join leading tech companies in supporting the world's largest hackathon and gain visibility with thousands of developers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:sponsors@hackathon.dev"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-md px-6 py-3 text-lg font-medium transition-all"
            >
              <HeartHandshake className="h-5 w-5" />
              <span>Become a Sponsor</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
