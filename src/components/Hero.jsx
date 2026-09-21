'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
    FiArrowRight,
    FiTrendingUp,
    FiUsers,
    FiTarget,
    FiGlobe,
} from 'react-icons/fi';

export default function Hero() {
    const containerRef = useRef(null);
    const textContentRef = useRef(null);
    const visualContentRef = useRef(null);

    // GSAP Entrance Animations
    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

            tl.fromTo(
                textContentRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, delay: 0.2 }
            ).fromTo(
                visualContentRef.current,
                { scale: 0.85, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' },
                '-=0.8'
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative min-h-[calc(100vh-100px)] w-full overflow-hidden py-12 lg:py-20 flex items-center justify-center px-4 sm:px-8 lg:px-12"
        >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Radial Glass Glow */}
            <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-orange-400/20 blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Text Content */}
                <div ref={textContentRef} className="lg:col-span-6 flex flex-col items-start space-y-6">

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available for new campaigns
                    </div>

                    {/* Subheading / Category */}
                    <div className="flex items-center gap-2">
                        <span className="h-[2px] w-6 bg-orange-500" />
                        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                            Meta Ads & Paid Social Specialist
                        </p>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                        Scaling Brands <br />
                        With High-ROAS <br />
                        Facebook & Insta <br />
                        <span className="text-orange-500">Ad Campaigns.</span>
                    </h1>

                    {/* Bio Text */}
                    <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        I'm <strong className="font-semibold text-slate-900 dark:text-white">Azmain Iktider Noufel</strong>, a Meta Ads Specialist dedicated to driving revenue through targeted Facebook and Instagram advertising. I've managed successful campaigns for brands across the US, Europe, and worldwide.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Link
                                href="#experience"
                                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/40"
                            >
                                View Campaign Results
                                <FiArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300/60 dark:border-neutral-700/60 bg-white/40 dark:bg-neutral-800/40 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 backdrop-blur-md shadow-sm transition-all hover:bg-white/80 dark:hover:bg-neutral-800/80"
                            >
                                Scale Your Brand
                            </Link>
                        </motion.div>
                    </div>

                    {/* Keywords / Tags */}
                    <div className="pt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <span>Meta Ads</span> • <span>Facebook Advertising</span> • <span>Instagram Campaigns</span> • <span>Global Scaling</span>
                    </div>
                </div>

                {/* Right Visual Dashboard Container */}
                <div
                    ref={visualContentRef}
                    className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[550px]"
                >
                    {/* Subtle Background Orbit Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full border border-slate-200/60 dark:border-neutral-800/60" />
                        <div className="absolute h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] rounded-full border border-dashed border-orange-500/30 animate-spin-slow" />
                    </div>

                    {/* Floating Card 1: REACH (Top Left) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-4 left-2 sm:top-8 sm:left-4 z-20 flex items-center gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                            <FiUsers className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AD IMPRESSIONS</p>
                            <div className="flex items-center gap-2">
                                <span className="text-base font-bold text-slate-800 dark:text-white">2.4M+</span>
                                <span className="text-[10px] font-semibold text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded-full">
                                    +32%
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card 2: AVG ROAS (Top Right) */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        className="absolute top-12 right-2 sm:top-16 sm:right-6 z-20 flex items-center gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                            <FiTarget className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AVG ROAS</p>
                            <div className="flex items-center gap-2">
                                <span className="text-base font-bold text-slate-800 dark:text-white">4.8x</span>
                                <span className="text-[10px] font-semibold text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded-full">
                                    +1.2x
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Main Dashboard Card */}
                    <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-3xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-6 backdrop-blur-2xl shadow-2xl">
                        <div className="flex items-center justify-between pb-2">
                            <div>
                                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Campaign ROAS Growth</h3>
                                <p className="text-xs text-slate-400">Meta Ads Manager - US & EU Markets</p>
                            </div>
                            <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Active
                            </span>
                        </div>

                        <div className="flex items-baseline gap-2 my-2">
                            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">+142%</span>
                            <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md flex items-center gap-0.5">
                                ▲ 4.2x ROI
                            </span>
                        </div>

                        {/* Simulated Chart Wave */}
                        <div className="relative h-16 w-full my-3 overflow-hidden rounded-xl bg-gradient-to-t from-orange-500/10 to-transparent flex items-end">
                            <svg className="w-full h-12 text-orange-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                                <path
                                    d="M0 25 Q 25 5, 50 18 T 100 5 L 100 30 L 0 30 Z"
                                    fill="currentColor"
                                    fillOpacity="0.2"
                                />
                                <path
                                    d="M0 25 Q 25 5, 50 18 T 100 5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                />
                            </svg>
                        </div>

                        {/* Profile Focus Area inside Chart Card */}
                        <div className="relative mt-4 overflow-hidden rounded-2xl border-2 border-orange-500/80 bg-slate-100 dark:bg-neutral-800">
                            <Image
                                src="/profile_1.png"
                                alt="Azmain Iktider Noufel - Meta Ads Specialist"
                                width={400}
                                height={400}
                                className="w-full h-auto max-h-[450px] object-contain object-center transition-transform duration-500 ease-out hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Floating Card 3: AD REVENUE (Bottom Left) */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute bottom-4 left-0 sm:bottom-8 sm:left-2 z-20 flex items-center gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                            <FiTrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AD SPEND RETURN</p>
                            <div className="flex items-center gap-2">
                                <span className="text-base font-bold text-slate-800 dark:text-white">$350K+</span>
                                <span className="text-[10px] font-semibold text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded-full">
                                    Generated
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card 4: GLOBAL REACH (Bottom Right) */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="absolute bottom-8 right-0 sm:bottom-12 sm:right-2 z-20 flex items-center gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                            <FiGlobe className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">MARKETS</p>
                            <div className="flex items-center gap-2">
                                <span className="text-base font-bold text-slate-800 dark:text-white">US & EU</span>
                                <span className="text-[10px] font-semibold text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded-full">
                                    Global
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}