
import React, { useEffect, useRef } from 'react';
import { Trophy, Award, Gift, DollarSign, Calendar, Info, ChevronRight, Users, Heart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
      breakdown: [
        { place: '1st Place', amount: '$500,000' }
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: 'Runners Up',
      amount: '$250,000',
      description: 'Split between outstanding projects that demonstrate excellence and creativity.',
      color: 'from-blue-600 to-sky-400',
      breakdown: [
        { place: '2nd Place', amount: '$150,000' },
        { place: '3rd Place', amount: '$100,000' }
      ]
    },
    {
      icon: <Gift className="h-8 w-8 text-green-400" />,
      title: 'Category Prizes',
      amount: '$250,000+',
      description: 'Specialized awards for best projects in specific technology categories.',
      color: 'from-green-600 to-emerald-400',
      breakdown: [
        { place: 'Best Web3 Project', amount: '$50,000' },
        { place: 'Best AI Implementation', amount: '$50,000' },
        { place: 'Best Developer Tool', amount: '$50,000' },
        { place: 'Best Mobile App', amount: '$50,000' },
        { place: 'Community Choice', amount: '$50,000' }
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: 'Community Prize',
      amount: '$100,000',
      description: 'Voted by the community for the most impactful and beloved project.',
      color: 'from-purple-600 to-violet-400',
      breakdown: [
        { place: 'Community Favorite', amount: '$50,000' },
        { place: 'Most Innovative by Vote', amount: '$30,000' },
        { place: 'Best Social Impact', amount: '$20,000' }
      ]
    },
  ];
  
  const timelineEvents = [
    { date: 'March 19, 2025', title: 'Registration Opens', description: 'Sign up early to secure your spot in the world\'s largest hackathon.' },
    { date: 'April 30, 2025', title: 'Registration Closes', description: 'Last day to register for the event. Don\'t miss your chance!' },
    { date: 'May 1, 2025', title: 'Kickoff & Opening Ceremony', description: 'Join us for the virtual opening ceremony with special guests and announcements.' },
    { date: 'May 1-8, 2025', title: 'Hackathon Week', description: 'Seven days of intensive hacking, workshops, and mentor sessions.' },
    { date: 'May 8, 2025', title: 'Submissions Due', description: 'All projects must be submitted by 11:59 PM UTC.' },
    { date: 'May 10-15, 2025', title: 'Judging Period', description: 'Our panel of judges will review all submitted projects.' },
    { date: 'May 20, 2025', title: 'Winners Announcement', description: 'Join the live ceremony to find out who won the $1,000,000+ in prizes!' },
  ];
  
  const faqs = [
    {
      question: 'Who can participate in the hackathon?',
      answer: 'Anyone over the age of 18 can participate, regardless of experience level. We welcome developers, designers, and creators from all backgrounds.'
    },
    {
      question: 'Is this hackathon completely virtual?',
      answer: 'Yes, this is a fully virtual event. You can participate from anywhere in the world with an internet connection.'
    },
    {
      question: 'How are teams formed?',
      answer: 'You can participate individually or in teams of up to 5 people. We\'ll also have team-matching events before the hackathon starts.'
    },
    {
      question: 'What kinds of projects are eligible?',
      answer: 'Any tech project that falls within our guidelines is eligible. We encourage innovation across web, mobile, AI, blockchain, and more.'
    },
    {
      question: 'How are the winners selected?',
      answer: 'Projects will be judged based on innovation, technical implementation, design, and impact. Our panel of industry experts will review all submissions.'
    },
    {
      question: 'When will prizes be distributed?',
      answer: 'Prize money will be distributed within 30 days of the winners announcement, after verification of eligibility.'
    },
  ];

  const totalPrizePool = "$1,100,000";

  return (
    <section id="prizes" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
            Unprecedented Rewards
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6" data-animate="fade-up" data-index="1">
            <span className="relative">
              <span className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-amber-600 text-white text-xs rounded-full px-2 py-1 rotate-12 animate-pulse">
                BIGGEST EVER
              </span>
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-amber-500">{totalPrizePool}</span> 
              <span> Prize Pool</span>
            </span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6" data-animate="fade-up" data-index="2">
            <DollarSign className="h-6 w-6 text-yellow-500" />
            <span className="text-lg text-yellow-100">
              <span className="font-bold text-white">One Million One Hundred Thousand Dollars</span> in Prizes
            </span>
            <DollarSign className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-lg text-white/70" data-animate="fade-up" data-index="2">
            We've secured the largest prize pool in hackathon history, distributed across multiple categories and special awards.
          </p>
          
          {/* Prize counter summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-12">
            {prizes.map((prize, index) => (
              <div key={index} className="glass p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  {prize.icon}
                </div>
                <h4 className="text-sm font-medium mb-1">{prize.title}</h4>
                <div className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                  style={{backgroundImage: `linear-gradient(to right, ${prize.color.split(' ')[1]}, ${prize.color.split(' ')[3]})`}}>
                  {prize.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <Badge className="mb-1 bg-white/10 text-white/80">Prize</Badge>
                    <span className="text-3xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent animate-pulse-slow"
                      style={{backgroundImage: `linear-gradient(to right, ${prize.color.split(' ')[1]}, ${prize.color.split(' ')[3]})`}}>
                      {prize.amount}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{prize.title}</h4>
                <p className="text-white/70 mb-6">{prize.description}</p>
                
                {/* Prize breakdown */}
                <div className="mt-2 mb-6 bg-white/5 rounded-lg p-3">
                  <h5 className="text-sm font-medium mb-2 text-white/80">Prize Breakdown:</h5>
                  <ul className="space-y-2">
                    {prize.breakdown.map((item, i) => (
                      <li key={i} className="flex justify-between items-center text-sm">
                        <span className="font-medium">{item.place}</span>
                        <span className="font-bold text-lg text-white">{item.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
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
        
        {/* Event Timeline */}
        <div className="mt-24" data-animate="fade-up" data-index="7">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Event Timeline</h2>
            <p className="text-white/70">Mark your calendar for these important dates</p>
          </div>
          
          <div className="relative pb-12">
            {/* Timeline vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-violet-600"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, i) => (
              <div 
                key={i} 
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                data-animate="fade-up"
                data-index={8 + i}
              >
                {/* Event dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-background z-10"></div>
                
                {/* Event content */}
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-4 glass rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                    <span className="text-sm text-blue-400 font-medium">{event.date}</span>
                    <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                    <p className="text-white/70 text-sm">{event.description}</p>
                  </div>
                </div>
                
                {/* Invisible spacer for alternate layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mt-24" data-animate="fade-up" data-index="15">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-full mb-4">
              <Info className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70">Everything you need to know about the hackathon</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-lg hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="mt-16 text-center" data-animate="fade-up" data-index="16">
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
