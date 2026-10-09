import type { SiteConfigInput } from "./site.schema";
import {
  defaultNavigation,
  defaultLeadFormFields,
  defaultLeadFormOptions,
  defaultFeatures,
} from "./defaults";

/**
 * Green World Innovations. To launch this company, copy the four files in this
 * folder over the active ones (see README: "Switching companies").
 * Anything in [square brackets] is a placeholder to replace before launch.
 */
const config: SiteConfigInput = {
  company: {
    name: "Green World Innovations",
    legalName: "Green World Innovations", // [Replace with registered legal name]
    tagline: "Dependable rooftop solar for homes and businesses across central Kerala.",
    description:
      "Green World Innovations designs, installs and services rooftop solar for homes, businesses and institutions in Kottayam and across central Kerala, with KSEB net-metering support.",
    foundedYear: 2020,
    registrationNumber: "GSTIN: 32ABEFG9671Q1ZP",
    logo: { light: "/brand/logo.svg", alt: "Green World Innovations logo", width: 213, height: 48 },
    favicon: "/brand/favicon.svg",
    ogImage: "/brand/og-default.jpg",
  },

  seo: {
    siteUrl: "https://greenworldinnovations.com",
    titleTemplate: "%s | {{companyName}}",
    defaultTitle: "Rooftop Solar in Kottayam, Kerala | {{companyName}}",
    locale: "en_IN",
    priceRange: "₹₹",
  },

  theme: {
    colors: {
      // From the logo: dark green (white text 5.3:1) and leaf green (dark text 8.6:1)
      primary: "#327A3B",
      primaryForeground: "#FFFFFF",
      secondary: "#9AC63C",
      secondaryForeground: "#1B1B1B",
    },
    fonts: { heading: "Plus Jakarta Sans", body: "DM Sans" },
    radius: "xl",
    buttonStyle: "pill",
    darkMode: "off",
  },

  contact: {
    phone: "+91 75610 02770",
    phoneHref: "tel:+917561002770",
    whatsappNumber: "917561002770",
    whatsappMessageTemplate:
      "Hi {{companyName}}, I'm interested in {{service}} in {{city}}. Please share more details.",
    email: "greenworld.niram@gmail.com",
    address: {
      line1: "Door No. 9/354D, 1st Floor, Puthankalayel Building",
      line2: "South Kallara P.O, Kalambukad",
      city: "Kottayam",
      state: "Kerala",
      postalCode: "686611",
      country: "IN",
    },
    googleMaps: {
      embedUrl:
        "https://www.google.com/maps?q=Puthankalayel+Building,+South+Kallara+P.O,+Kalambukad,+Kottayam+686611&output=embed",
      linkUrl:
        "https://www.google.com/maps/search/?api=1&query=Puthankalayel+Building,+South+Kallara+P.O,+Kalambukad,+Kottayam+686611",
    },
    businessHours: [{ days: "Monday – Saturday", hours: "9:00 AM – 6:00 PM IST" }],
  },

  serviceAreas: {
    headline: "Rooftop solar across central Kerala",
    states: ["Kerala"],
    primaryCities: ["Kottayam", "Ernakulam", "Alappuzha", "Idukki", "Pathanamthitta"],
  },

  regional: {
    utilityName: "KSEB",
    regulatorName: "KSERC",
    netMeteringTerm: "net metering",
    subsidyScheme: "PM Surya Ghar: Muft Bijli Yojana",
    subsidyNote:
      "Subsidy amounts, eligibility and the application process are set by the central and state governments and change from time to time. We confirm the current rules for your property at the site survey.",
  },

  social: {},
  analytics: {},
  navigation: defaultNavigation,

  home: {
    hero: {
      headline: "Rooftop solar in Kottayam, built for Kerala roofs.",
      subheadline:
        "Cut your KSEB bill with a system sized to your home or business. Survey, design, installation and KSEB net-metering paperwork from a Kottayam-based team that stays around for service.",
      primaryCta: { label: "Book a free site survey", href: "/contact/" },
      whatsappCtaLabel: "Chat on WhatsApp",
      image: { src: "/images/hero.webp", alt: "Two-storey home with rooftop solar panels among palm trees beside a river, in evening sun" },
      highlights: ["Homes, businesses & institutions", "On-grid & hybrid with battery backup", "KSEB net metering", "PM Surya Ghar subsidy help"],
      areas: ["Kottayam", "Vaikom", "Kallara", "Cherthala", "Ernakulam", "Alappuzha"],
    },
    trustStats: [
      { value: "[000]+", label: "Installations completed" },
      { value: "[0]+ years", label: "Years of experience" },
      { value: "[0.0]/5", label: "Average customer rating" },
      { value: "[00] years", label: "Panel performance warranty" },
      { value: "[00]", label: "Certified installers" },
      { value: "[00]+", label: "Towns and localities served" },
    ],
    whyChooseUs: [
      { icon: "Gauge", title: "Sized from your KSEB bills", body: "We work from a year of your bills and your actual roof, not a standard package." },
      { icon: "Home", title: "Every Kerala roof type", body: "Clay tiles, concrete terraces and sheet roofs over terraces, each with the right mounting to keep the rain out." },
      { icon: "ShieldCheck", title: "Built for monsoon and lightning", body: "Rust-resistant structures, sealed connections, proper earthing and surge protection." },
      { icon: "FileCheck2", title: "KSEB file handled", body: "We prepare the net-metering application and follow it up with your section office through to the new meter." },
      { icon: "MapPin", title: "Based in Kottayam district", body: "Our office is at Kalambukad, near Kallara, so surveys and service visits across central Kerala are easy to arrange." },
      { icon: "CalendarCheck", title: "Care through the seasons", body: "Pre-monsoon checks, post-monsoon cleaning and repairs, including for systems other companies installed." },
    ],
    savings: {
      headline: "See what solar could save you",
      costPerUnit: 6.5,
      unitsPerKwPerMonth: 110,
      benefits: [
        { title: "Smaller KSEB bills", body: "Every unit your roof generates is a unit you don't buy from the grid." },
        { title: "Strong output before the monsoon", body: "The sunny months from January to May, when fans and ACs run hardest, are when solar generates most." },
        { title: "Less exposure to tariff revisions", body: "When tariffs are revised, the power you make yourself doesn't get dearer." },
        { title: "Easy to watch from anywhere", body: "A monitoring app shows generation on your phone, even for family members living abroad." },
      ],
    },
    subsidy: {
      headline: "{{subsidyScheme}} subsidy for home solar",
      intro:
        "Kerala homes installing rooftop solar can get central financial assistance, paid into your bank account once the system is installed, KSEB has fitted the new meter and the inspection is done. We take you through each step.",
      tiers: [
        { amount: "₹30,000", label: "per kW, for the first 2 kW" },
        { amount: "₹18,000", label: "for the 3rd kW" },
        { amount: "₹78,000", label: "maximum, for systems of 3 kW and above" },
      ],
      footnote:
        "For individual homes. Housing societies and RWAs can get ₹18,000 per kW for common facilities such as lifts, pumps and EV charging.",
      checkedOn: "checked October 2026", // [Re-check the amounts on the portal before launch and every few months]
      sourceUrl: "https://pmsuryaghar.gov.in/",
      helpHeadline: "How we help with the subsidy",
      helpItems: [
        "A roof survey and the right size for your KSEB bills",
        "Registration on the national rooftop solar portal",
        "KSEB feasibility approval and net-metering paperwork",
        "Installation, new meter and inspection",
        "Guidance on the subsidy claim and documents",
      ],
      ctaLabel: "Check my subsidy eligibility",
      bands: [
        { uptoKw: 2, perKw: 30000 },
        { uptoKw: 3, perKw: 18000 },
      ],
    },
    packages: {
      headline: "Popular rooftop solar systems",
      intro: "Typical sizes for homes and institutions in central Kerala. We confirm the right size from your bills and roof at the survey.",
      items: [
        {
          name: "3 kW",
          kw: 3,
          tagline: "For homes with moderate KSEB bills",
          points: ["About 300 sq ft of shade-free roof", "Tile, terrace or sheet-roof mounting", "KSEB net-metering file included", "Help with the full home subsidy"],
          ctaLabel: "Get a 3 kW quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "5 kW",
          kw: 5,
          tagline: "For larger homes with ACs and a pump",
          points: ["About 500 sq ft of shade-free roof", "Room to add an EV charger later", "KSEB load and phase check included", "Help with the home subsidy"],
          ctaLabel: "Get a 5 kW quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "6 kW and above",
          tagline: "For large homes, shops and institutions",
          points: ["Designed around your load and roof", "Three-phase systems where KSEB requires them", "Schools, hospitals and factories on request"],
          ctaLabel: "Get a custom quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "Hybrid + battery",
          tagline: "For monsoon power cuts",
          points: ["Hybrid inverter and lithium battery", "Keeps the lights, fridge and well pump running", "Surplus still exported to KSEB"],
          ctaLabel: "Get a hybrid quote",
          service: "hybrid-solar-battery-backup",
        },
      ],
      footnote: "No fixed prices: cost depends on your roof type, the structure it needs and the brands you choose. Every quote is itemised.",
    },
    brands: {
      headline: "Brands we install",
      intro: "Equipment from established makers, chosen for your roof, budget and backup needs. Your quote names the exact models.",
      groups: [
        {
          label: "Solar, inverters and electrical",
          items: [{ name: "TATA" }, { name: "Crompton" }, { name: "Panasonic" }, { name: "Deye" }, { name: "Growatt" }, { name: "GoodWe" }, { name: "L&T" }, { name: "Havells" }, { name: "Anchor" }, { name: "Polycab" }],
        },
      ],
    },
  },

  landing: {
    headline: "Get a free rooftop solar quote in Kottayam",
    subheadline:
      "Tell us about your home or institution. We size the system from your KSEB bill and roof, and show what the {{subsidyScheme}} subsidy covers.",
    bullets: [
      "Free site survey, with mounting for tiled, terrace and sheet roofs",
      "KSEB net-metering and subsidy paperwork handled",
      "On-grid and hybrid systems with battery backup",
      "Itemised, written quote from a Kottayam-based team",
    ],
  },

  about: {
    story: [
      "Green World Innovations is a rooftop solar company based in Kalambukad, Kottayam, serving homes, businesses and institutions across central Kerala.",
      "We design each system from the customer's own bills and roof, handle the KSEB paperwork ourselves, and stay available after commissioning.",
      "Green World Innovations was established as a sister concern of Niram Agencies, with a vision to provide reliable and sustainable energy solutions.",
      "We specialise in high-quality rooftop solar systems, home automation products and EV charging solutions, with professional installation and dependable after-sales service. Our commitment is to deliver innovative, customer-focused solutions that help homes and businesses embrace clean energy, smart living and a more sustainable future.",
    ],
    mission: "To make dependable solar power practical for every Kerala rooftop we work on.",
    values: [
      { title: "Honest sizing", body: "We recommend the system you need, not the biggest one we can sell." },
      { title: "Built for Kerala", body: "Tile, RCC and sheet roofs, heavy rain and humid air all shape our designs." },
      { title: "Clear paperwork", body: "Written quotes, warranty cards and approval status you can follow." },
      { title: "Long-term care", body: "A solar system is a long-term asset, and we plan service accordingly." },
    ],
    certifications: [], // Add real certifications or approvals, e.g. { name: "ANERT empanelled" }
    philosophy:
      "Solar is a long-term asset. We choose equipment, structures and wiring with the long term in mind, and we tell customers plainly what they need and what they don't.",
  },

  cta: {
    quoteLabel: "Get a Quote",
    callLabel: "Call Now",
    whatsappLabel: "WhatsApp",
    bannerHeadline: "Ready to see what solar can do for your roof?",
    bannerBody:
      "Tell us about your property and your electricity bill. We'll get back to you during working hours.",
  },

  leadForm: {
    // Public by design: Web3Forms keys are visible in the page HTML. Enquiries go to the email the key was created with.
    web3formsAccessKey: "329e52e9-8f08-44cd-8319-e5dfcc6c26f3",
    web3formsSubject: "New solar enquiry — {{companyName}}",
    web3formsFromName: "{{companyName}} Website",
    successMessage: "Thank you. Our solar team will contact you shortly.",
    errorMessage:
      "Something went wrong while sending your enquiry. Please try again, or call or WhatsApp us directly.",
    redirectToThankYou: false,
    billPrompt: {
      text: "Want a faster, more accurate quote? Send us a photo of your latest {{utilityName}} bill on WhatsApp so we can size your system before the site visit.",
      buttonLabel: "Send my bill on WhatsApp",
      whatsappMessage: "Hi {{companyName}}, I just sent an enquiry on your website. Here is a photo of my latest electricity bill.",
    },
    fields: defaultLeadFormFields,
    options: defaultLeadFormOptions,
    consentText:
      "I agree to be contacted by {{companyName}} about my enquiry by phone, WhatsApp or email.",
    rateLimit: { maxSubmissions: 3, windowMinutes: 60 },
    captcha: { provider: "turnstile" },
  },

  // Hidden until real numbers, reviews and projects are available. Set to true to show.
  features: { ...defaultFeatures, trustStats: false, testimonials: false, projects: false },
};

export default config;
