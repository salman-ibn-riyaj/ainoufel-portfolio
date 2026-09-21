'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiTarget,
  FiTrendingUp,
  FiDollarSign,
  FiLayers,
  FiPieChart,
} from 'react-icons/fi';
import { FaMeta } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: 'Meta Ads Campaign Setup',
      description:
        'End-to-end strategy, campaign structure, custom audience creation, and pixel/CAPI tracking integration.',
      icon: FaMeta,
    },
    {
      title: 'Precision Audience Targeting',
      description:
        'In-depth market research, custom lookalikes, retargeting funnels, and high-intent customer segmentation.',
      icon: FiTarget,
    },
    {
      title: 'A/B Testing & Optimization',
      description:
        'Continuous testing of ad creatives, copies, headlines, and angles to lower acquisition costs (CAC).',
      icon: FiLayers,
    },
    {
      title: 'ROAS & Revenue Scaling',
      description:
        'Data-backed budget allocation and campaign scaling for e-commerce & lead generation across US & EU markets.',
      icon: FiTrendingUp,
    },
    {
      title: 'Ad Creative Strategy',
      description:
        'Developing high-converting video and image ad frameworks tailored specifically for Facebook & Instagram feeds and Reels.',
      icon: FiPieChart,
    },
    {
      title: 'Ad Account Audit & Consulting',
      description:
        'In-depth analysis of past campaign data to fix performance bottlenecks and rebuild profitable ad funnels.',
      icon: FiDollarSign,
    },
  ];

  // GSAP Scroll Animations
  useGSAP(
    () => {
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-5 bg-orange-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              SERVICES
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            High-Performance <span className="text-orange-500">Meta Ad Services</span>
          </h2>
        </div>

        {/* 3x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                ref={(el) => (cardsRef.current[idx] = el)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300"
              >
                <div>
                  {/* Icon Header */}
                  {IconComponent && (
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  )}

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Border Accent Line on Hover */}
                <span className="mt-6 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}