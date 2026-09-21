'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiTarget,
  FiTrendingUp,
  FiSliders,
  FiPieChart,
  FiLayers,
  FiEye,
  FiActivity,
  FiDollarSign,
  FiRefreshCw,
} from 'react-icons/fi';
import { FaMeta } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const progressBarsRef = useRef([]);
  const cardsRef = useRef([]);

  const skillsData = [
    { name: 'Meta Ads Manager', percentage: 98, icon: FaMeta },
    { name: 'Audience Targeting & Lookalikes', percentage: 95, icon: FiTarget },
    { name: 'ROAS & Conversion Scaling', percentage: 94, icon: FiTrendingUp },
    { name: 'Creative Strategy & Testing', percentage: 92, icon: FiPieChart },
    { name: 'Pixel & CAPI Tracking', percentage: 90, icon: FiActivity },
    { name: 'Retargeting Funnels', percentage: 92, icon: FiRefreshCw },
    { name: 'Ad Copy & Creative Angles', percentage: 88, icon: FiLayers },
    { name: 'Budget Optimization (CBO/ABO)', percentage: 95, icon: FiSliders },
    { name: 'Ad Account Auditing', percentage: 86, icon: FiEye },
  ];

  // GSAP ScrollTrigger Animations
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

      // Header reveal
      tl.fromTo(
        headerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      )
        // Cards reveal
        .fromTo(
          cardsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );

      // Animate Progress Bars filling up on scroll
      progressBarsRef.current.forEach((bar, idx) => {
        const targetWidth = `${skillsData[idx].percentage}%`;
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: targetWidth,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div ref={headerRef} className="mb-12 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-5 bg-orange-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              SKILLS & EXPERTISE
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Meta Advertising & Paid Social <br />
            <span className="text-orange-500">Core Competencies</span>
          </h2>
        </div>

        {/* Skills 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillsData.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                ref={(el) => (cardsRef.current[idx] = el)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-5 sm:p-6 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Top Row: Icon, Skill Name & Percentage */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Percentage Indicator */}
                  <span className="text-base sm:text-lg font-extrabold text-orange-500">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-2 w-full rounded-full bg-slate-200/70 dark:bg-neutral-800 overflow-hidden">
                  <div
                    ref={(el) => (progressBarsRef.current[idx] = el)}
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500/50"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}