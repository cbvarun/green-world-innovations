import type { SystemSize } from "@/types/content";

/**
 * System-size pages (/solar/<slug>/), written for central Kerala. {{units}}, {{roof}}, {{panels}},
 * {{bill}} and {{subsidy}} are worked out from kw and the site config (same assumptions as the
 * savings calculator), so the numbers stay consistent.
 */
export const systems: SystemSize[] = [
  {
    slug: "3-kw",
    kw: 3,
    title: "3 kW Rooftop Solar System",
    seoTitle: "3 kW Solar System in Kottayam",
    seoDescription:
      "What a 3 kW rooftop solar system generates in Kerala, the roof space it needs, the {{subsidyScheme}} subsidy and the KSEB process. Quotes from {{companyName}}.",
    summary: "A common choice for Kerala homes, and the smallest system that gets the full home subsidy.",
    intro: [
      "A 3 kW system suits many homes in Kottayam and central Kerala, on a tiled roof, a concrete terrace or a sheet roof over the terrace. It's also the size at which a home gets the full central subsidy, which makes it good value for families with moderate KSEB bills.",
      "Kerala's generation follows the weather: strong from January to May, lower through the two monsoons. Treat the figures on this page as a yearly average; we confirm them from your bills and roof at the site survey.",
    ],
    suits: [
      "Homes with a KSEB bill of around {{bill}} a month",
      "Families using fans, lights, a fridge, a well pump and one AC part of the day",
      "Houses with about {{roof}} sq ft of shade-free roof",
      "Homeowners who want the maximum subsidy for the lowest investment",
    ],
    considerations: [
      "If your bill is well above {{bill}} a month, or you plan to add ACs or an EV charger, a 5 kW system may suit you better.",
      "Coconut palms and nearby trees can shade a roof in the morning or evening. We place panels where they get the most sun.",
      "Tiled, concrete and sheet roofs each need a different structure. We choose the one that keeps your roof watertight.",
    ],
    faqs: [
      { question: "How much electricity does a 3 kW system generate in Kerala?", answer: "Roughly {{units}} units a month on average over the year: more from January to May, less during the monsoons. Actual generation depends on your roof, shading and cleaning." },
      { question: "How much subsidy can I get for 3 kW?", answer: "Under {{subsidyScheme}}, a 3 kW home system qualifies for the maximum central subsidy, currently {{subsidy}}, subject to the scheme's rules. {{subsidyNote}}" },
      { question: "How much roof space does 3 kW need?", answer: "About {{roof}} sq ft of shade-free roof, usually {{panels}} panels. On a tiled roof, the south-facing slope is usually best." },
      { question: "Will a 3 kW system make my KSEB bill zero?", answer: "It can bring a moderate bill close to the fixed charges, but not below them. How close depends on your consumption and how much power you use during the day." },
    ],
  },
  {
    slug: "5-kw",
    kw: 5,
    title: "5 kW Rooftop Solar System",
    seoTitle: "5 kW Solar System in Kottayam",
    seoDescription:
      "What a 5 kW rooftop solar system generates in Kerala, the roof space it needs, KSEB checks and the {{subsidyScheme}} subsidy. Quotes from {{companyName}}.",
    summary: "For larger Kerala homes with several ACs, a well pump, or an EV charger on the way.",
    intro: [
      "A 5 kW system suits larger homes and families whose KSEB bills climb in the hot months before the monsoon. It generates enough to cover several ACs running part of the day, a pump, or an EV charger later.",
      "Because the central subsidy stops at 3 kW, the extra 2 kW is paid for in full, and earns its keep through lower bills in the sunny months. We check your bills and roof at the survey before recommending this size.",
    ],
    suits: [
      "Homes with a KSEB bill of around {{bill}} or more a month",
      "Families running two or more ACs, a pump or a home office",
      "Homes planning an EV charger",
      "Houses with about {{roof}} sq ft of shade-free roof",
    ],
    considerations: [
      "A 5 kW system may need a three-phase connection or a change to your connected load with KSEB. We check this before you commit.",
      "On a tiled roof, one slope may not hold all the panels. A sheet roof over the terrace often gives more usable space.",
      "If monsoon outages are a problem where you live, consider a hybrid system with a battery. See our hybrid solar service.",
    ],
    faqs: [
      { question: "How much electricity does a 5 kW system generate in Kerala?", answer: "Roughly {{units}} units a month on average over the year: more from January to May, less during the monsoons. Actual generation depends on your roof, shading and cleaning." },
      { question: "How much subsidy can I get for 5 kW?", answer: "The central home subsidy under {{subsidyScheme}} is capped at 3 kW, so a 5 kW home system gets the same maximum, currently {{subsidy}}, subject to the scheme's rules. {{subsidyNote}}" },
      { question: "How much roof space does 5 kW need?", answer: "About {{roof}} sq ft of shade-free roof, usually {{panels}} panels." },
      { question: "Is 5 kW too big for my home?", answer: "If your bill is well below {{bill}} a month, a smaller system is usually enough. Surplus power you export is usually credited at a lower rate than you pay KSEB for grid power, so oversizing rarely pays. We size from your bills, not from a standard package." },
    ],
  },
];
