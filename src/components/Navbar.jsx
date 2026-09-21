'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ThemeSwitch } from './ThemeSwitch';
// Make sure the import path matches your project structure

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const navItemsRef = useRef([]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    // GSAP Entrance & Scroll Stagger Animations
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });

        // Header Slide Down
        tl.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1 }
        )
            // Logo Pop
            .fromTo(
                logoRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6 },
                '-=0.6'
            )
            // Links Stagger In
            .fromTo(
                navItemsRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.05, duration: 0.5 },
                '-=0.4'
            );
    }, []);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-12 py-4">
            {/* Glassmorphic Shell */}
            <nav className="mx-auto max-w-7xl rounded-2xl border border-white/30 dark:border-white/10 bg-white/30 dark:bg-neutral-900/40 backdrop-blur-xl shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between px-6 py-3">

                    {/* Animated Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            ref={logoRef}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 p-[2px] shadow-lg shadow-orange-500/40 overflow-hidden"
                        >
                            <Image
                                src="/profile_1.png"
                                alt="Azmain Iktider Noufel"
                                width={300}
                                height={300}
                                className="h-full w-full rounded-[10px] object-cover"
                                priority
                            />
                        </motion.div>
                        <span className="text-lg font-bold text-slate-800 dark:text-white tracking-wide">
                            Azmain Iktider Noufel
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link, idx) => {
                            const isActive = activeTab === link.name;
                            return (
                                <li
                                    key={link.name}
                                    ref={(el) => (navItemsRef.current[idx] = el)}
                                    className="relative py-1"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setActiveTab(link.name)}
                                        className={`transition-colors duration-200 ${isActive
                                            ? 'text-orange-500 font-semibold'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-orange-500'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>

                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-orange-500"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Controls */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Let's Talk CTA */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#contact"
                                className="inline-block rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/50"
                            >
                                Let's Talk
                            </Link>
                        </motion.div>

                        {/* HeroUI ThemeSwitch Component */}
                        <ThemeSwitch />
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="flex items-center gap-3 lg:hidden">
                        {/* HeroUI ThemeSwitch Component for Mobile */}
                        <ThemeSwitch />

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-700 dark:text-slate-200 hover:text-orange-500"
                        >
                            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Animated Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden lg:hidden border-t border-slate-200/30 dark:border-neutral-800/30 px-6 py-4"
                        >
                            <ul className="flex flex-col gap-4 text-sm font-medium">
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link.name}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => {
                                                setActiveTab(link.name);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className={`block transition-colors ${activeTab === link.name
                                                ? 'text-orange-500 font-semibold'
                                                : 'text-slate-600 dark:text-slate-300 hover:text-orange-500'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-5 pt-4 border-t border-slate-200/30 dark:border-neutral-800/30">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full rounded-xl bg-orange-500 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-orange-500/30 active:scale-95"
                                >
                                    Let's Talk
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}