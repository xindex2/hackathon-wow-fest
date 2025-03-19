
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Prizes from '../components/Prizes';
import Sponsors from '../components/Sponsors';
import Judges from '../components/Judges';
import Register from '../components/Register';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
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

  // Update document title
  useEffect(() => {
    document.title = "The World's Largest Hackathon | $1M+ in Prizes";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Prizes />
      <Sponsors />
      <Judges />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
