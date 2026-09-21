'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiGlobe,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const keyPoints = [
    'Facebook & Instagram Ad Campaign Setup',
    'Laser-Targeted Audience Research & Segmentation',
    'High-Converting Ad Copy & Creative Strategy',
    'A/B Testing & Data-Driven Campaign Optimization',
    'Pixel, CAPI & Conversion Tracking Implementation',
  ];

  const featureCards = [
    {
      icon: FiTarget,
      title: 'Precision Targeting',
      description:
        'Reaching the right custom and lookalike audiences on Facebook & Instagram to maximize high-intent customer acquisition.',
    },
    {
      icon: FiTrendingUp,
      title: 'ROAS & Conversion Optimization',
      description:
        'Continuous ad scaling and A/B testing designed to lower customer acquisition costs (CAC) and increase return on ad spend.',
    },
    {
      icon: FiGlobe,
      title: 'Global Campaign Reach',
      description:
        'Managing high-performing paid social ad accounts for e-commerce and lead-gen brands across the US, Europe, and global markets.',
    },
  ];

  // GSAP Scroll Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        leftColRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out' }
      ).fromTo(
        rightColRef.current.children,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 -z-10 h-72 w-72 rounded-full bg-orange-400/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Text Content */}
        <div ref={leftColRef} className="lg:col-span-7 space-y-6">
          
          {/* Section Header Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-5 bg-orange-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              About Me
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
            Turning Ad Spend Into High-Return{' '}
            <span className="text-orange-500">Revenue Stream</span>
          </h2>

          {/* Paragraphs */}
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm <strong className="font-semibold text-slate-900 dark:text-white">Azmain Iktider Noufel</strong>, a Meta Ads Specialist dedicated to driving measurable growth through Facebook and Instagram advertising. I help e-commerce stores, B2B brands, and service businesses acquire loyal customers and scale revenue predictably.
          </p>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Having managed ad budgets for clients across the US, Europe, and internationally, my strategy centers on data-led targeting, compelling ad creative execution, and relentless funnel optimization to deliver maximum return on ad spend (ROAS).
          </p>

          {/* Key Checklist Points */}
          <div className="pt-4 space-y-3">
            {keyPoints.map((point) => (
              <motion.div
                key={point}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 shrink-0">
                  <FiCheckCircle className="h-4 w-4 text-orange-500" />
                </div>
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Glassmorphic Feature Cards */}
        <div ref={rightColRef} className="lg:col-span-5 flex flex-col gap-5">
          {featureCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}