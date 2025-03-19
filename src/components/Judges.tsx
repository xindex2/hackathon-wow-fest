
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Judges = () => {
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

  const judges = [
    {
      name: "Sara Normous",
      title: "Startup Advisor & Investor",
      image: "https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg",
      twitter: "saranormous",
      bio: "Entrepreneur and tech investor with a passion for early-stage startups and innovative tech solutions."
    },
    {
      name: "Theo",
      title: "Founder, t3.gg",
      image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
      twitter: "theo",
      bio: "Creator of t3.gg, educator, and developer advocate focusing on modern web development technologies."
    },
    {
      name: "Evan You",
      title: "Creator of Vue.js",
      image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg",
      twitter: "youyuxi",
      bio: "Creator of Vue.js, JavaScript framework developer, and open source advocate with a focus on developer experience."
    },
    {
      name: "KP",
      title: "Tech Entrepreneur",
      image: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg",
      twitter: "thisiskp_",
      bio: "Serial entrepreneur and tech strategist with expertise in scaling products and building developer-focused communities."
    }
  ];

  return (
    <section id="judges" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-500 font-semibold mb-3" data-animate="fade-up" data-index="0">
            Expert Evaluation
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" data-animate="fade-up" data-index="1">
            Meet Our Judges
          </h3>
          <p className="text-lg text-white/70" data-animate="fade-up" data-index="2">
            Industry leaders and tech innovators who will evaluate submissions and select winners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <div
              key={judge.name}
              className="relative group"
              data-animate="fade-up"
              data-index={index + 3}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl blur opacity-20 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative glass rounded-xl h-full overflow-hidden transition-all duration-300 group-hover:bg-white/10">
                <div className="p-6 flex flex-col h-full">
                  <div className="relative w-24 h-24 mb-4 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all">
                    <img 
                      src={judge.image} 
                      alt={judge.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-center">{judge.name}</h4>
                  <p className="text-white/70 text-center text-sm mb-4">{judge.title}</p>
                  
                  <p className="text-white/70 text-sm mb-6">{judge.bio}</p>
                  
                  <div className="mt-auto flex justify-center gap-3">
                    <a
                      href={`https://twitter.com/${judge.twitter}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label={`${judge.name}'s Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label={`${judge.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label={`${judge.name}'s Website`}
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-animate="fade-up" data-index="7">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <span className="text-white/70 text-sm">More judges to be announced</span>
            <span className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
