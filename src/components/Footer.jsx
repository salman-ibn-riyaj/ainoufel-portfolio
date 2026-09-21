'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiLinkedin, FiFacebook, FiPhone, FiMail } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/in/nasim-islam-7a776b332', label: 'LinkedIn' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiPhone, href: 'tel:+8801781581895', label: 'Phone' },
    { icon: FiMail, href: 'mailto:nasimislamspsc@gmail.com', label: 'Email' },
  ];

  // GSAP Scroll Animations
  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full border-t border-slate-200/60 dark:border-white/10 bg-slate-50/50 dark:bg-neutral-950/50 pt-16 pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden backdrop-blur-xl"
    >
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-64 w-full max-w-4xl rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12"
        >
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Monogram Badge */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-xs font-black text-white shadow-md shadow-orange-500/20"
              >
                MNI
              </motion.div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Md Nasim Islam
              </h3>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
              Sales & Business Development Expert
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Building relationships, opening opportunities and driving sustainable revenue growth.
            </p>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              NAVIGATE
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section (4 Cols) */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              CONNECT
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 mb-5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 text-slate-600 dark:text-slate-400 hover:border-orange-500/40 hover:text-orange-500 shadow-sm transition-all duration-200"
                  >
                    <IconComponent className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>

            {/* Email Contact Link */}
            <a
              href="mailto:nasimislam.business@gmail.com"
              className="inline-block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200"
            >
              nasimislamspsc@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Copyright Divider */}
        <div className="border-t border-slate-200/60 dark:border-neutral-800/80 pt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
            © {new Date().getFullYear()} Md Nasim Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}