
import React, { useEffect, useRef } from 'react';
import { Award, Star, UserPlus } from 'lucide-react';

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
      name: "Theo",
      title: "Creator of t3.gg",
      image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
      twitter: "https://twitter.com/theo",
    },
    {
      name: "Evan You",
      title: "Creator of Vue.js",
      image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg",
      twitter: "https://twitter.com/youyuxi",
    },
    {
      name: "KP",
      title: "Product Designer",
      image: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg",
      twitter: "https://twitter.com/thisiskp_",
    },
    {
      name: "Sara Soueidan",
      title: "Web Developer & Accessibility Expert",
      image: "https://avatars.githubusercontent.com/u/3712343?v=4",
      twitter: "https://twitter.com/saranormous",
    },
  ];

  return (
    <section id="judges" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            Industry Leaders
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" data-animate="fade-up" data-index="1">
            World-Class Judges
          </h3>
          <p className="text-lg text-white/70" data-animate="fade-up" data-index="2">
            Meet our panel of distinguished judges who will be evaluating submissions
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative glass rounded-xl overflow-hidden transition-transform duration-300 group-hover:translate-y-[-5px]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={judge.image} 
                    alt={judge.name} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <a 
                      href={judge.twitter} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={`${judge.name}'s Twitter`}
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{judge.name}</h4>
                  <p className="text-white/60 mb-4">{judge.title}</p>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-animate="fade-up" data-index="7">
          <div className="max-w-xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Want to be a Judge?</h4>
            <p className="text-white/70 mb-6">
              We're looking for industry leaders to join our panel of judges. Help us discover the next generation of tech innovators.
            </p>
            <a 
              href="mailto:judges@hackathon.dev" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium transition-all"
            >
              <UserPlus className="h-5 w-5" />
              <span>Apply to be a Judge</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
