"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { siteConfig, phoneHref, mailHref } from "@/lib/site-config";

const SERVICE_OPTIONS = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Move In / Move Out",
  "Post-Construction",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Quote Request — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.emails[0]}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#fff1c2]/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#db9d00]">
              Get In Touch
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-[#2a2312] sm:text-4xl">
              Get your free quote today
            </h2>
            <p className="mt-4 max-w-md text-[#50461f]">
              Tell us a bit about your space and we&apos;ll get back to you
              within one business day with a free, no-obligation quote.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffbe0b]/20 text-[#db9d00]">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <div>
                  {siteConfig.phones.map((p) => (
                    <a key={p} href={phoneHref(p)} className="block text-sm font-semibold text-[#2a2312]">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffbe0b]/20 text-[#db9d00]">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <div>
                  {siteConfig.emails.map((e) => (
                    <a key={e} href={mailHref(e)} className="block text-sm font-semibold text-[#2a2312]">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffbe0b]/20 text-[#db9d00]">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <div className="text-sm font-semibold text-[#2a2312]">
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.line2}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#2a2312]/10 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-semibold text-[#2a2312]">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-[#2a2312]/15 px-4 py-2.5 text-sm outline-none focus:border-[#ffbe0b] focus:ring-2 focus:ring-[#ffbe0b]/30"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-semibold text-[#2a2312]">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-[#2a2312]/15 px-4 py-2.5 text-sm outline-none focus:border-[#ffbe0b] focus:ring-2 focus:ring-[#ffbe0b]/30"
                  placeholder="(780) 555-0123"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-[#2a2312]">
                  Service Needed
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg border border-[#2a2312]/15 px-4 py-2.5 text-sm outline-none focus:border-[#ffbe0b] focus:ring-2 focus:ring-[#ffbe0b]/30"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-[#2a2312]">
                  Tell us about your space
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-lg border border-[#2a2312]/15 px-4 py-2.5 text-sm outline-none focus:border-[#ffbe0b] focus:ring-2 focus:ring-[#ffbe0b]/30"
                  placeholder="Size of space, frequency, any special requests..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#2a2312] px-6 py-3.5 text-sm font-bold text-[#ffbe0b] transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Request My Free Quote
            </button>
            <p className="mt-3 text-center text-xs text-[#756a47]">
              This opens your email app with the details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
