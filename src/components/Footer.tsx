
import React from 'react';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-semibold tracking-tight">
                hackathon.dev
              </span>
            </div>
            <p className="text-white/70 max-w-sm mb-6">
              The World's Largest Hackathon with over $1M in prizes, 
              world-class judges, and incredible opportunities for developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#prizes" className="text-white/70 hover:text-white transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#sponsors" className="text-white/70 hover:text-white transition-colors">Sponsors</a>
              </li>
              <li>
                <a href="#judges" className="text-white/70 hover:text-white transition-colors">Judges</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@hackathon.dev" className="text-white/70 hover:text-white transition-colors">info@hackathon.dev</a>
              </li>
              <li>
                <a href="mailto:sponsors@hackathon.dev" className="text-white/70 hover:text-white transition-colors">sponsors@hackathon.dev</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} hackathon.dev. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
