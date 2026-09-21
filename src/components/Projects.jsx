'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiTarget, FiCompass, FiUserPlus, FiGrid } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Sales & Business Development');
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const categories = ['Sales & Business Development', 'Digital Projects'];

  const projectData = [
    {
      id: 1,
      category: 'Sales & Business Development',
      title: 'Lead Generation Campaign',
      description:
        'Designed and managed a targeted lead-generation process to identify and engage qualified prospects.',
      icon: FiTarget,
      tags: ['Lead Generation', 'Sales', 'Outreach', 'CRM'],
    },
    {
      id: 2,
      category: 'Sales & Business Development',
      title: 'Business Development Strategy',
      description:
        'Developed a structured business development strategy focused on identifying new opportunities and partnerships.',
      icon: FiCompass,
      tags: ['Business Development', 'Strategy', 'Partnerships', 'Growth'],
    },
    {
      id: 3,
      category: 'Sales & Business Development',
      title: 'Client Acquisition System',
      description:
        'Created a streamlined client acquisition process designed to improve prospect management and conversion.',
      icon: FiUserPlus,
      tags: ['Client Acquisition', 'Sales Funnel', 'CRM', 'Conversion'],
    },
    {
      id: 4,
      category: 'Digital Projects',
      title: 'Digital Funnel Optimization',
      description:
        'Built automated outreach workflows and landing page funnels to optimize digital client onboarding.',
      icon: FiGrid,
      tags: ['Digital Strategy', 'Automation', 'Funnel', 'Optimization'],
    },
  ];

  const filteredProjects = projectData.filter(
    (project) => project.category === activeCategory
  );

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
        headerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        
        {/* Header Section with Line-Height Overlap Fix */}
        <div ref={headerRef} className="mb-10 text-left">
          
          {/* Headline - Fixed with leading-[1.15] and separate blocks */}
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.15]">
            Selected Business & <span className="text-orange-500">Growth</span>
            <span className="block text-orange-500 mt-1">Projects</span>
          </h2>
        </div>

        {/* Glassmorphic Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-slate-900 dark:text-white font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {/* Active Tab Glow Pill (Framer Motion Animated) */}
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-full border border-orange-500/30 bg-orange-500/10 dark:bg-orange-500/20 shadow-md shadow-orange-500/10 backdrop-blur-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Filterable Project Cards Grid */}
        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Icon Box */}
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 dark:bg-neutral-800/80 border border-slate-200/60 dark:border-neutral-700/60 px-3 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 transition-colors group-hover:border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}