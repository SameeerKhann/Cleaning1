"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { Phone, CalendarCheck2, ShieldCheck, Star } from "lucide-react";
import { siteConfig, phoneHref } from "@/lib/site-config";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop";

function useCount(target: number, active: boolean) {
  const spring = useSpring(0, { stiffness: 60, damping: 20, mass: 1 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (active) spring.set(target);
  }, [active, target, spring]);

  useMotionValueEvent(spring, "change", (v) => setValue(Math.round(v)));
  return value;
}

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage breakpoints across the pinned scroll journey
  const textOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.12]);
  const textBlur = useTransform(scrollYProgress, [0, 0.12], [0, 14]);
  const textBlurFilter = useTransform(textBlur, (v) => `blur(${v}px)`);

  const cardY = useTransform(scrollYProgress, [0, 0.22], ["38vh", "0vh"]);
  const cardWidth = useTransform(scrollYProgress, [0.22, 0.34], ["88vw", "100vw"]);
  const cardHeight = useTransform(scrollYProgress, [0.22, 0.34], ["86vh", "100vh"]);
  const cardRadius = useTransform(scrollYProgress, [0.22, 0.34], [32, 0]);

  const innerOpacity = useTransform(scrollYProgress, [0.3, 0.42], [0, 1]);
  const innerY = useTransform(scrollYProgress, [0.3, 0.46], [40, 0]);

  const badgeOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const badgeY = useTransform(scrollYProgress, [0.4, 0.55], [30, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.72, 0.86], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.72, 0.86], [0.9, 1]);
  const ctaBlur = useTransform(scrollYProgress, [0.72, 0.86], [20, 0]);
  const ctaBlurFilter = useTransform(ctaBlur, (v) => `blur(${v}px)`);

  const heroTextVisible = useTransform(scrollYProgress, [0.6, 0.62], [1, 0]);

  const [statsActive, setStatsActive] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.4 && !statsActive) setStatsActive(true);
  });

  const homesCleaned = useCount(500, statsActive);
  const rating = useCount(49, statsActive);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[320vh] w-full bg-[#100d06]"
      id="top"
    >
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        <div className="film-grain" aria-hidden="true" />
        <div
          className="bg-grid-theme absolute inset-0 z-0 opacity-60"
          aria-hidden="true"
        />

        {/* STAGE 0 — Opening statement */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
            filter: textBlurFilter,
          }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ffbe0b]/10 px-4 py-1.5 ring-1 ring-[#ffbe0b]/30">
            <Star className="h-3.5 w-3.5 fill-[#ffbe0b] text-[#ffbe0b]" />
            <span className="text-xs font-semibold tracking-wide text-[#ffbe0b]">
              Edmonton, Alberta
            </span>
          </span>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#fffaf0] sm:text-7xl lg:text-8xl">
            Your space,
          </h1>
          <h1 className="text-gold-matte font-display text-5xl font-extrabold italic leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            immaculate.
          </h1>
          <p className="mt-6 max-w-md text-sm text-[#c9c0a4]">
            Scroll to see how Kidus Clean transforms Edmonton homes &amp;
            offices
          </p>
        </motion.div>

        {/* STAGE FINAL — CTA */}
        <motion.div
          style={{
            opacity: ctaOpacity,
            scale: ctaScale,
            filter: ctaBlurFilter,
          }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <h2 className="text-gold-matte font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ready for spotless?
          </h2>
          <p className="mt-5 max-w-xl text-base text-[#e7e2d3] sm:text-lg">
            Get a free, no-obligation quote in minutes. Bonded, insured, and
            trusted by 500+ Edmonton homes and businesses.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-modern-light flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold"
            >
              <CalendarCheck2 className="h-5 w-5" />
              Get a Free Quote
            </a>
            <a
              href={phoneHref(siteConfig.phones[0])}
              className="btn-modern-dark flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phones[0]}
            </a>
          </div>
        </motion.div>

        {/* THE PHYSICAL CARD */}
        <motion.div
          style={{ opacity: heroTextVisible }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <motion.div
            ref={cardRef}
            style={{
              y: cardY,
              width: cardWidth,
              height: cardHeight,
              borderRadius: cardRadius,
            }}
            className="premium-depth-card relative flex items-center justify-center overflow-hidden"
          >
            <div className="card-sheen" aria-hidden="true" />
            <Image
              src={HERO_IMAGE}
              alt="Sparkling clean kitchen counter being wiped down"
              fill
              priority
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100d06] via-[#100d06]/60 to-[#100d06]/10" />

            <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-3 lg:gap-8 lg:px-12">
              {/* LEFT: copy */}
              <motion.div
                style={{ opacity: innerOpacity, y: innerY }}
                className="order-2 text-center lg:order-1 lg:text-left"
              >
                <h3 className="text-card-silver-matte font-display text-2xl font-bold sm:text-3xl">
                  Detail-obsessed cleaning,
                  <br /> every single visit.
                </h3>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[#c9c0a4] lg:mx-0">
                  <span className="font-semibold text-[#fffaf0]">
                    Kidus Clean
                  </span>{" "}
                  brings vetted, insured crews and eco-friendly products to
                  homes and offices across Edmonton — on your schedule, every
                  time.
                </p>
              </motion.div>

              {/* CENTER: brand */}
              <motion.div
                style={{ opacity: innerOpacity }}
                className="order-1 flex justify-center lg:order-2"
              >
                <h2 className="text-card-silver-matte font-display text-5xl font-black uppercase tracking-tighter sm:text-6xl lg:text-7xl">
                  Kidus
                  <br />
                  <span className="text-gold-matte">Clean</span>
                </h2>
              </motion.div>

              {/* RIGHT: live booking widget */}
              <motion.div
                style={{ opacity: badgeOpacity, y: badgeY }}
                className="order-3 flex justify-center lg:justify-end"
              >
                <div className="widget-depth w-full max-w-xs rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3966f]">
                      Today&apos;s Job
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </div>
                  <p className="mt-1 text-sm font-bold text-[#fffaf0]">
                    Standard Home Clean
                  </p>

                  <div className="mt-4 space-y-2.5">
                    {["Kitchen & counters", "Bathrooms", "Floors & vacuum"].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffbe0b]/20 text-[#ffbe0b]">
                            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-xs text-[#e7e2d3]">{item}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#fffaf0]/10 pt-4">
                    <span className="text-[11px] text-[#a3966f]">Progress</span>
                    <span className="text-sm font-bold text-[#ffbe0b]">92%</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FLOATING GLASS BADGES */}
            <motion.div
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="floating-ui-badge absolute left-3 top-8 z-30 flex items-center gap-3 rounded-2xl p-3.5 sm:left-8 sm:top-12"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffbe0b]/20 text-[#ffbe0b] ring-1 ring-[#ffbe0b]/30">
                <Star className="h-4 w-4 fill-[#ffbe0b]" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#fffaf0]">
                  {(rating / 10).toFixed(1)} / 5.0
                </p>
                <p className="text-[10px] text-[#a3966f]">Average rating</p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="floating-ui-badge absolute bottom-10 right-3 z-30 flex items-center gap-3 rounded-2xl p-3.5 sm:bottom-16 sm:right-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#fffaf0]">
                  {homesCleaned}+ Homes
                </p>
                <p className="text-[10px] text-[#a3966f]">Cleaned & counting</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
