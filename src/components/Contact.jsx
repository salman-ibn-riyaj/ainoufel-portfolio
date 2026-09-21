'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiLinkedin,
  FiFacebook,
  FiPhone,
  FiAlertCircle,
} from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const formCardRef = useRef(null);

  // Formspree Integration Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Replace YOUR_FORMSPREE_FORM_ID with your Formspree endpoint key
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnpnpvbw';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(
          data?.errors?.[0]?.message || 'Something went wrong. Please try again.'
        );
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // GSAP Entrance Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        leftColRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out' }
      ).fromTo(
        formCardRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Radial Blur */}
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        
        {/* Top Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-5 bg-orange-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              CONTACT
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Let's Build Something That <span className="text-orange-500">Grows</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Have a business opportunity, sales challenge or growth project in mind? I'd
            love to hear about it. Let's discuss how I can help your business grow.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards & Social Links */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Get in touch
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I respond to every serious inquiry — partnerships, sales
                opportunities and growth projects welcome.
              </p>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-4 backdrop-blur-xl shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                <FiMail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  EMAIL
                </p>
                <a
                  href="mailto:azmainiktidernoufel@gmail.com"
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                >
                  azmainiktidernoufel@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-4 backdrop-blur-xl shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                <FiMapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  LOCATION
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Bangladesh · Working Remotely Worldwide
                </p>
              </div>
            </div>

            {/* Availability Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-4 backdrop-blur-xl shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                <FiClock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  AVAILABILITY
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Available for new opportunities
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/azmain-iktider-noufel', external: true },
                { icon: FiFacebook, href: 'https://www.facebook.com/azmain.iktider.noufel', external: true },
                { icon: FaInstagram, href: 'https://www.instagram.com/_azmain.iktider.noufel_', external: false },
                { icon: FiMail, href: 'mailto:azmainiktidernoufel@gmail.com', external: false },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-slate-600 dark:text-slate-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div ref={formCardRef} className="lg:col-span-7">
            <div className="rounded-3xl border border-white/80 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-6 sm:p-10 backdrop-blur-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890 (optional)"
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Project / Service Type Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Project / Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="Sales Development">Sales Development</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Client Acquisition">Client Acquisition</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Partnership Development">Partnership Development</option>
                    <option value="Sales Strategy & Consulting">
                      Sales Strategy & Consulting
                    </option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                  />
                </div>

                {/* Success Feedback Banner */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/60 p-4 text-emerald-900 dark:text-emerald-200 backdrop-blur-md"
                    >
                      <FiCheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                          Message sent!
                        </p>
                        <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                          Thanks for reaching out — I'll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Feedback Banner */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 rounded-2xl border border-red-500/40 bg-red-50 dark:bg-red-950/60 p-4 text-red-900 dark:text-red-200 backdrop-blur-md"
                    >
                      <FiAlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />
                      <p className="text-xs font-medium text-red-800 dark:text-red-200">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}