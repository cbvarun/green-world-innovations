import type { FaqGroup } from "@/types/content";

/** Green World Innovations FAQs, written for homes and institutions in central Kerala. */
export const faqGroups: FaqGroup[] = [
  {
    id: "pricing",
    title: "Pricing",
    faqs: [
      { question: "How much does rooftop solar cost in Kerala?", answer: "It depends on the system size, your roof type and the panel and inverter brands. A tiled roof, a concrete terrace and a sheet roof over a terrace each need a different structure. We give an itemised written quote after a free site survey of your roof and a look at your KSEB bills." },
      { question: "How much will I save on my KSEB bill?", answer: "We estimate generation from the system size, your roof and Kerala's seasons, then compare it with your consumption. Savings are highest in the sunny months and when you use more power during the day." },
      { question: "Can I pay in stages?", answer: "Payment terms are set out in your quote and usually follow project milestones. Ask us for the schedule that applies to your project." },
    ],
  },
  {
    id: "subsidy",
    title: "Subsidy",
    faqs: [
      { question: "Is there a subsidy for home solar in Kerala?", answer: "Homes may be eligible for the central subsidy under {{subsidyScheme}}. {{subsidyNote}}" },
      { question: "Do you help with the subsidy application?", answer: "Yes. We check your documents, register you on the national portal and take you through each step. Approval is decided by the authorities, not by us." },
      { question: "Can institutions or businesses claim the subsidy?", answer: "The home subsidy covers individual houses, and housing societies have their own rules for common areas. Businesses and most institutions aren't covered, though other benefits may apply; check with your accountant." },
    ],
  },
  {
    id: "net-metering",
    title: "KSEB net metering",
    faqs: [
      { question: "What is net metering?", answer: "Net metering lets your solar system send surplus daytime power to the KSEB grid. A bidirectional meter records what you import and export, and your bill is settled on the difference. The rules are set by {{regulatorName}} and can change." },
      { question: "Do I need KSEB approval to install solar?", answer: "Yes, for a grid-connected system. KSEB checks the application and your connection, inspects the installation and fits the new meter before the system can export." },
      { question: "How long does KSEB approval take?", answer: "It varies by section office and how complete the documents are. A consistent file avoids the delays you can control." },
    ],
  },
  {
    id: "installation",
    title: "Installation and roofs",
    faqs: [
      { question: "Can panels go on a tiled roof?", answer: "Yes. Tile hooks fix the panels to the rafters below the tiles, so the roof keeps shedding water. We replace any cracked tiles as we go." },
      { question: "Can you install during the monsoon?", answer: "We can, but we plan roof work for dry spells and avoid heavy-rain days for safety and to keep the roof sealed properly." },
      { question: "Will installation cause leaks?", answer: "We choose a mounting method suited to your roof and seal every fixing carefully. If the roof already needs repair, we tell you before work starts." },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    faqs: [
      { question: "Does solar need maintenance in Kerala?", answer: "A little. After the monsoon, moss and algae can grow along the panel edges, and trees drop leaves and sap. A clean after the rains and a check before them keep output healthy." },
      { question: "Is lightning a risk to solar systems?", answer: "Kerala sees a lot of lightning, so earthing and surge protection matter. We include them in every installation and check them during maintenance." },
      { question: "What should I do if the inverter shows an error?", answer: "Note the fault code, take a photo of the display or app, and call or WhatsApp us. Please don't open the inverter or isolators yourself." },
    ],
  },
  {
    id: "warranties",
    title: "Warranties",
    faqs: [
      { question: "What warranties will I get?", answer: "Warranties come from the equipment makers: a product warranty and a longer performance warranty on panels, and a separate inverter warranty. Exact terms depend on the brand, and your quote lists them." },
      { question: "Who handles a warranty claim?", answer: "For systems we install, we coordinate the claim with the manufacturer, and tell you up front if something isn't covered." },
      { question: "Is the installation work itself covered?", answer: "The workmanship terms for the installation are stated in your quote. Ask us for the period that applies to your project." },
    ],
  },
  {
    id: "commercial",
    title: "Institutions and businesses",
    faqs: [
      { question: "Is rooftop solar worth it for a school, hospital or church?", answer: "Institutions that use most of their power in daylight usually get a good return. We set out the costs, generation and payback assumptions in a proposal your committee can review." },
      { question: "Can solar go on a factory's sheet roof?", answer: "Yes, if the sheets and purlins are in good condition. Old asbestos roofs need a structural and safety assessment first, and replacing the roof is sometimes the better option." },
      { question: "Do you handle KSEB approvals for commercial connections?", answer: "Yes. We prepare the technical documents and coordinate with KSEB based on your connection category." },
    ],
  },
];
