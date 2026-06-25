"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop",
    alt: "Bright, freshly cleaned modern living room",
    span: "lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    alt: "Clean, modern office hallway with glass panels",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=1200&auto=format&fit=crop",
    alt: "Cleaner sweeping a tidy kitchen floor",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    alt: "Gloved hand wiping down a kitchen counter",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1200&auto=format&fit=crop",
    alt: "Cleaning spray bottles and supplies",
    span: "",
  },
];

export function Gallery() {
  return (
    <section className="bg-[#fffaf0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#db9d00]">
              Our Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-[#2a2312] sm:text-4xl">
              See the Kidus Clean difference
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#50461f]">
            A glimpse of the spaces we transform every week across Edmonton —
            from condos to commercial offices.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl bg-[#1c170c] ${photo.span} ${
                i === 0 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-56 w-full lg:h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100d06]/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
