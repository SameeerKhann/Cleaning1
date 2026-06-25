"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner, Glenora",
    quote:
      "Kidus Clean has been cleaning our house every other week for almost a year. They're always on time, thorough, and trustworthy. I never worry about leaving them the key.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "David T.",
    role: "Office Manager, Downtown Edmonton",
    quote:
      "We switched our office cleaning to Kidus Clean and the difference was immediate. Consistent quality, great communication, and fair pricing.",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Amara B.",
    role: "Tenant, Move-Out Clean",
    quote:
      "Needed a full move-out clean on short notice and they delivered. Got my full deposit back thanks to how spotless the place looked.",
    avatar:
      "https://images.unsplash.com/photo-1562337404-3044c84ac061?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#fff1c2]/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#db9d00]">
            Client Stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#2a2312] sm:text-4xl">
            Trusted by homes &amp; businesses across Edmonton
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#2a2312]/5"
            >
              <Quote className="h-6 w-6 text-[#ffbe0b]" />
              <div className="mt-4 flex gap-1 text-[#ffbe0b]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#ffbe0b]" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#3c3318]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[#2a2312]/10 pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2a2312]">{t.name}</p>
                  <p className="text-xs text-[#756a47]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
