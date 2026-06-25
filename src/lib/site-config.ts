export const siteConfig = {
  name: "Kidus Clean",
  tagline: "Edmonton's Detail-Obsessed Cleaning Crew",
  phones: ["587-713-0909", "587-778-7372"],
  emails: ["info@kidusclean.com", "yekidusabat1@gmail.com"],
  address: {
    line1: "9580, 170th Street NW",
    line2: "Edmonton, AB T5T 5R5, Canada",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export const phoneHref = (phone: string) => `tel:+1${phone.replace(/-/g, "")}`;
export const mailHref = (email: string) => `mailto:${email}`;
