"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { siteConfig, phoneHref } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#ffbe0b]/10 bg-[#100d06]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffbe0b] text-[#2a2312]">
            <Sparkles className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-[#fffaf0]">
            Kidus<span className="text-[#ffbe0b]"> Clean</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#e7e2d3] transition-colors hover:text-[#ffbe0b]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={phoneHref(siteConfig.phones[0])}
            className="flex items-center gap-2 text-sm font-semibold text-[#fffaf0]"
          >
            <Phone className="h-4 w-4 text-[#ffbe0b]" />
            {siteConfig.phones[0]}
          </a>
          <a
            href="#contact"
            className="btn-modern-light rounded-full px-5 py-2.5 text-sm font-bold"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#fffaf0]/20 text-[#fffaf0] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#fffaf0]/10 bg-[#100d06] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#fffaf0]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-modern-light mt-2 rounded-full px-5 py-3 text-center text-sm font-bold"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
