
import React, { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

const Register = () => {
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

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background opacity-60"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto glass rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 opacity-30"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <div className="mb-8 inline-flex" data-animate="fade-up" data-index="0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-70 animate-pulse-slow"></div>
                <div className="relative bg-background rounded-full p-3 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-animate="fade-up" data-index="1">
              Ready to participate in the World's<br />Largest Hackathon?
            </h2>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto" data-animate="fade-up" data-index="2">
              Join thousands of developers from around the world. Showcase your skills, win amazing prizes, and connect with industry leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-animate="fade-up" data-index="3">
              <a 
                href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-3 rounded-md text-lg font-medium transition-all w-full sm:w-auto text-center"
              >
                Register Now
              </a>
              <a
                href="mailto:info@hackathon.dev"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-md text-lg font-medium transition-all w-full sm:w-auto text-center"
              >
                Contact Us
              </a>
            </div>
            
            <div className="mt-8 text-white/50 text-sm" data-animate="fade-up" data-index="4">
              Registration closes soon • Limited spots available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
