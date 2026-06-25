"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, CalendarCheck2, Sparkles, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Tell Us What You Need",
    description: "Share your space, schedule, and priorities through a quick form or call.",
  },
  {
    icon: CalendarCheck2,
    title: "2. Book Your Visit",
    description: "We confirm a time that works for you — no long contracts, no surprises.",
  },
  {
    icon: Sparkles,
    title: "3. We Clean, You Relax",
    description: "Our vetted, insured crew handles every detail with eco-friendly products.",
  },
  {
    icon: ThumbsUp,
    title: "4. Love It, Guaranteed",
    description: "Not happy with a spot? We'll come back and make it right, free of charge.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#100d06] py-20 text-[#fffaf0] lg:py-28"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1800&auto=format&fit=crop"
          alt="Modern, spotless kitchen interior"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#100d06] via-[#100d06]/90 to-[#100d06]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#ffbe0b]">
              The Problem We Solve
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Cleaning takes hours you don&apos;t have &mdash; and DIY never
              looks <span className="text-gold-matte italic">quite</span>{" "}
              professional.
            </h2>
            <p className="mt-4 max-w-lg text-[#c9c0a4]">
              Between work, family, and everything else, cleaning is the
              first thing to slide. Kidus Clean gives Edmonton homes and
              businesses back their time with a crew that&apos;s thorough,
              reliable, and easy to book &mdash; every single visit.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Vetted & background-checked staff",
                "Same crew, every visit",
                "Flexible rescheduling",
                "Transparent, upfront pricing",
              ].map((item) => (
                <div
                  key={item}
                  className="widget-depth rounded-xl p-4 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="widget-depth rounded-2xl p-6"
              >
                <step.icon className="h-7 w-7 text-[#ffbe0b]" />
                <h3 className="mt-4 font-display text-base font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#c9c0a4]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
