'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    {
      period: '2024 – PRESENT',
      role: 'Senior Meta Ads Specialist',
      company: 'Digital Growth Agency / Freelance',
      description:
        'Managing high-budget Meta Ad campaigns across Facebook & Instagram for US & European e-commerce and lead generation brands. Focusing on custom audience scaling, ROAS optimization, and CAPI tracking.',
    },
    {
      period: '2023 – 2024',
      role: 'Paid Social Media Strategist',
      company: 'Global Performance Marketing Co.',
      description:
        'Designed high-converting ad copy and visual creative frameworks, ran continuous A/B testing, and lowered customer acquisition costs (CAC) for international client accounts.',
    },
    {
      period: '2022 – 2023',
      role: 'Facebook & Instagram Ads Campaign Manager',
      company: 'E-commerce Scale Lab',
      description:
        'Handled end-to-end ad account setups, Pixel integrations, funnel retargeting, and audience segmentation to scale ROAS across diverse global target markets.',
    },
  ];

  // GSAP Scroll Animations
  useGSAP(
    () => {
      // Animate vertical orange timeline drawing down on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );

      // Stagger experience cards entrance
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-14 sm:mb-20 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-5 bg-orange-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              EXPERIENCE
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Paid Social <span className="text-orange-500">Track Record</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-12">
          
          {/* Base Background Timeline Line */}
          <div className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-neutral-800" />

          {/* Animated GSAP Timeline Fill Line */}
          <div
            ref={lineRef}
            className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-[2px] bg-orange-500 origin-top"
          />

          {/* Timeline Experience Cards */}
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="relative group"
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[24px] sm:-left-[42px] top-6 h-4 w-4 rounded-full border-2 border-orange-500 bg-white dark:bg-neutral-950 shadow-md shadow-orange-500/50 group-hover:bg-orange-500 transition-colors duration-300" />

                {/* Glassmorphic Card */}
                <motion.div
                  whileHover={{ x: 8, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle Top Right Card Glow */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl group-hover:bg-orange-500/20 transition-all duration-500" />

                  {/* Period Badge */}
                  <span className="inline-block rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-500 mb-3">
                    {exp.period}
                  </span>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>

                  {/* Company Name */}
                  <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500 mb-4">
                    {exp.company}
                  </p>

                  {/* Role Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}