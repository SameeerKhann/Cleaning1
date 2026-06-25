import { Sparkles } from "lucide-react";
import { siteConfig, phoneHref, mailHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#1c170c] py-12 text-[#e7e2d3]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffbe0b] text-[#2a2312]">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-[#fffaf0]">
                Kidus Clean
              </span>
            </div>
            <p className="mt-4 text-sm text-[#a3966f]">
              Edmonton&apos;s trusted residential and commercial cleaning
              service. Insured, reliable, and detail-obsessed.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#fffaf0]">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[#a3966f] hover:text-[#ffbe0b]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#fffaf0]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-[#a3966f]">
              <li>{siteConfig.address.line1}</li>
              <li>{siteConfig.address.line2}</li>
              {siteConfig.phones.map((p) => (
                <li key={p}>
                  <a href={phoneHref(p)} className="hover:text-[#ffbe0b]">
                    {p}
                  </a>
                </li>
              ))}
              {siteConfig.emails.map((e) => (
                <li key={e}>
                  <a href={mailHref(e)} className="hover:text-[#ffbe0b]">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#fffaf0]/10 pt-6 text-center text-xs text-[#756a47]">
          &copy; {new Date().getFullYear()} Kidus Clean. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
