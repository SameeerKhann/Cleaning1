"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Sparkles,
  PackageOpen,
  Sofa,
  CalendarClock,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Recurring or one-time cleans for houses, condos, and apartments.",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Offices and retail spaces kept spotless around your business hours.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "A top-to-bottom reset — baseboards, vents, grout, and the spots regular cleaning skips.",
    image:
      "https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: PackageOpen,
    title: "Move In / Move Out",
    description:
      "Hand over or take over a space that's spotless and inspection-ready.",
    image:
      "https://images.unsplash.com/photo-1713110824336-f78c320dcf8e?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: Sofa,
    title: "Post-Construction",
    description:
      "Dust, debris, and residue cleared after renovations are complete.",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: CalendarClock,
    title: "Custom Schedules",
    description:
      "Weekly, bi-weekly, or monthly visits built around your routine.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#fffaf0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#db9d00]">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#2a2312] sm:text-4xl">
            Cleaning services for every space
          </h2>
          <p className="mt-4 text-[#50461f]">
            Whatever needs cleaning, we&apos;ve got a service for it — and a
            crew that treats your space like their own.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1c170c] shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100d06] via-[#100d06]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffbe0b] text-[#2a2312] shadow-lg">
                  <service.icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-[#fffaf0]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#c9c0a4]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
