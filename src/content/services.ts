import type { Service } from "@/types/content";

/**
 * Green World Innovations services, written for Kottayam and central Kerala.
 * {{tokens}} still work: {{companyName}} {{utilityName}} {{regulatorName}} {{netMeteringTerm}}
 * {{subsidyScheme}} {{subsidyNote}} {{city}} {{state}} {{phone}}
 */
export const services: Service[] = [
  {
    slug: "residential-rooftop-solar",
    icon: "Home",
    title: "Residential Rooftop Solar Installation",
    summary:
      "Rooftop solar for Kerala homes, on tiled roofs, concrete terraces and terraces with a sheet roof above.",
    seoTitle: "Home Rooftop Solar Installation in Kottayam",
    seoDescription:
      "Rooftop solar for homes in Kottayam and central Kerala, on tile, concrete or truss roofs, with KSEB net metering and subsidy help from {{companyName}}.",
    image: {
      src: "/images/services/residential-rooftop-solar.webp",
      alt: "Solar panels on a red clay-tile roof surrounded by trees",
    },
    description: [
      "Kerala homes rarely have one standard roof. Some have sloping clay-tile roofs, many have a concrete terrace, and a lot have a GI or aluminium sheet roof built over the terrace to keep the monsoon out. Each needs a different mounting method, and we choose the one that keeps your roof watertight.",
      "We size the system from a year of your KSEB bills, check shade from coconut palms and nearby trees, and handle the installation and the KSEB net-metering file from start to finish.",
    ],
    audience: [
      "Houses with tiled, sloped concrete or flat terrace roofs",
      "Homes with a sheet roof built over the terrace",
      "Families whose KSEB bills rise in the hot months before the monsoon",
      "Homes with ACs, a well pump or an EV charger planned",
      "Families with members working abroad who want an easy-to-monitor system",
    ],
    included: [
      "Roof survey: roof type, shade from palms and trees, and usable area",
      "System sizing from your last 12 KSEB bills",
      "Mounting matched to your roof: tile hooks, terrace structures or truss-mounted rails",
      "Rust-resistant structures and fasteners for the humid climate",
      "Panels, inverter, earthing, and lightning and surge protection",
      "KSEB net-metering application and follow-up",
      "Commissioning and a monitoring app you can check from anywhere",
    ],
    process: [
      { title: "Bill and roof check", body: "We review your KSEB bills and visit to see the roof type, shade and space." },
      { title: "Design and quote", body: "You see the layout, the mounting method for your roof, expected generation and an itemised price." },
      { title: "Installation", body: "We plan the work around the weather, avoiding heavy-rain days where we can." },
      { title: "KSEB and handover", body: "We file the net-metering papers, then commission the system once KSEB fits the new meter." },
    ],
    pricing: {
      headline: "A written quote for your roof",
      body: "Price depends on system size, your roof type, the mounting needed and the panel and inverter brands. Your quote lists each component and its warranty. {{subsidyNote}}",
      ctaLabel: "Get a residential quote",
    },
    faqs: [
      { question: "Can solar panels go on a clay-tile roof?", answer: "Yes. Panels are fixed to the rafters below the tiles using tile hooks, so the tiles keep shedding water. Broken or brittle tiles are replaced during installation." },
      { question: "Our terrace has a sheet roof built over it. Can panels go on that?", answer: "Often, yes, if the truss and sheets are strong enough. We check the truss, purlins and sheet condition first. Mounting on the sheet roof also keeps the terrace below free." },
      { question: "Will coconut palms shade the panels?", answer: "They can, especially in the morning and evening. We map the shade at the survey and place panels where they get the most sun through the day." },
    ],
    related: ["hybrid-solar-battery-backup", "net-metering-subsidy-assistance", "annual-maintenance-contract"],
  },
  {
    slug: "commercial-industrial-rooftop-solar",
    icon: "Factory",
    title: "Commercial and Industrial Rooftop Solar",
    summary:
      "Rooftop solar for rubber units, factories, hospitals, schools, churches and hotels across central Kerala.",
    seoTitle: "Commercial and Institutional Rooftop Solar in Kerala",
    seoDescription:
      "Rooftop solar for factories, rubber units, hospitals, schools, churches and hotels in Kottayam and central Kerala. Engineering, installation and KSEB approvals.",
    image: {
      src: "/images/services/commercial-industrial-rooftop-solar.webp",
      alt: "Aerial view of a campus with rooftop solar among dense green trees",
    },
    description: [
      "Across Kottayam and central Kerala, many of the biggest daytime power users are rubber processing units, small factories, hospitals, schools, churches and hotels. They run mostly in daylight, which is when solar generates, so a rooftop plant can take a real share of the bill.",
      "We engineer each plant for the roof and the weather: wind loads during monsoon storms, corrosion near the backwaters and coast, and lightning protection for exposed rooftops. Then we handle the KSEB documents for your connection category.",
    ],
    audience: [
      "Rubber processing units and small factories",
      "Hospitals and clinics with steady daytime demand",
      "Schools, colleges, churches and other institutions",
      "Hotels, resorts and homestays",
      "Shops, offices and commercial buildings",
    ],
    included: [
      "Load and tariff study from your KSEB bills and connected load",
      "Roof survey: sheet condition, truss strength and concrete roof capacity",
      "Layout, single-line diagram and generation estimate",
      "Structures designed for monsoon wind and rain",
      "Corrosion-resistant materials for sites near the coast or backwaters",
      "Lightning protection, surge protection and earthing",
      "KSEB documentation for your connection category",
      "Commissioning and remote monitoring",
    ],
    process: [
      { title: "Load study", body: "We review your bills, connected load and how your consumption runs through the day." },
      { title: "Engineering proposal", body: "You get a design, expected generation and the assumptions behind the payback figure." },
      { title: "Installation", body: "We schedule work around your operations and the weather." },
      { title: "Approvals and handover", body: "We file the KSEB documents, commission the plant and set up monitoring for your team." },
    ],
    pricing: {
      headline: "A proposal your committee can review",
      body: "Commercial and institutional plants are quoted per project. The proposal sets out system size, equipment, expected generation and every assumption behind the payback estimate, so a management committee or board can check the numbers.",
      ctaLabel: "Request a commercial proposal",
    },
    faqs: [
      { question: "Will the structure survive monsoon storms?", answer: "We design the structure and fixings for the wind loads at your site, and check the roof can carry them. Exposed rooftops and coastal sites get extra attention." },
      { question: "Our building is near the backwaters. Will the structure rust?", answer: "Salt and humidity speed up corrosion, so for these sites we use hot-dip galvanised or aluminium structures and stainless-steel fasteners." },
      { question: "Can a church, school or trust install solar?", answer: "Yes. We prepare proposals that a committee or trust can review, with the costs, generation and payback assumptions set out clearly." },
    ],
    related: ["annual-maintenance-contract", "net-metering-subsidy-assistance", "site-survey-energy-audit"],
  },
  {
    slug: "hybrid-solar-battery-backup",
    icon: "BatteryCharging",
    title: "Hybrid Solar with Battery Backup",
    summary:
      "Solar with a hybrid inverter and lithium battery, so your home keeps running when monsoon storms bring the lines down.",
    seoTitle: "Hybrid Solar with Battery Backup in Kerala",
    seoDescription:
      "Hybrid rooftop solar with lithium battery backup for homes, clinics and shops in Kottayam and central Kerala. Power through monsoon outages. By {{companyName}}.",
    image: {
      src: "/images/services/hybrid-solar-battery-backup.webp",
      alt: "Dark timber house with rooftop solar panels and warmly lit windows at dusk",
    },
    description: [
      "During the monsoon, falling trees and storms can cut power for hours, especially in rural areas. A standard grid-connected system switches off during an outage, for the safety of line workers, so it can't help then.",
      "A hybrid system adds a battery and a hybrid inverter. Solar charges the battery during the day, the battery keeps your lights, fans, fridge, well pump and Wi-Fi running in an outage, and surplus power still goes to KSEB where net metering allows.",
    ],
    audience: [
      "Homes in rural areas with frequent monsoon outages",
      "Families replacing an old inverter and lead-acid batteries",
      "Homes with a well pump that needs to keep running",
      "Clinics, pharmacies and shops with essential loads",
      "Homestays and resorts that can't leave guests in the dark",
    ],
    included: [
      "Backup load study: which appliances, and for how many hours",
      "Solar sized to your bills, battery sized to your backup needs",
      "Hybrid inverter and lithium (LiFePO₄) battery options",
      "A separate backup circuit for the loads you choose",
      "Safe removal of your old inverter and batteries if you're replacing them",
      "KSEB paperwork and {{netMeteringTerm}} where applicable",
      "Commissioning, app set-up and a test of how the system behaves in an outage",
    ],
    process: [
      { title: "Backup and bill review", body: "We list the loads you want backed up and check your bills, roof and current inverter setup." },
      { title: "Design and options", body: "You see solar and battery sizes, expected backup hours and the trade-offs between options." },
      { title: "Installation", body: "We install the panels, hybrid inverter, battery and backup circuit, usually within a few days." },
      { title: "Handover", body: "We simulate an outage with you and set up monitoring on your phone." },
    ],
    pricing: {
      headline: "Priced to the backup you need",
      body: "The battery is the biggest part of the cost, so we work out how many hours of backup you need before quoting. The quote lists each component and its warranty. The {{subsidyScheme}} subsidy covers the solar panels of a grid-connected home system, not the battery, and we confirm what applies to you.",
      ctaLabel: "Get a hybrid system quote",
    },
    faqs: [
      { question: "Can the battery run our well pump during an outage?", answer: "Yes, if the battery and inverter are sized for it. Pumps draw a surge when they start, so we include that in the design." },
      { question: "How long will the battery last in an outage?", answer: "It depends on the battery size and what's connected. We size it to the appliances you choose and the hours of backup you want, and show you the numbers first." },
      { question: "Can I add a battery to my existing solar system?", answer: "Often, yes. Depending on your current inverter, we add a battery-ready inverter or a separate battery system. We check your setup first." },
    ],
    related: ["residential-rooftop-solar", "annual-maintenance-contract", "site-survey-energy-audit"],
  },
  {
    slug: "solar-panel-cleaning-maintenance",
    icon: "Droplets",
    title: "Solar Panel Cleaning and Maintenance",
    summary: "Panel cleaning for Kerala conditions: moss and algae after the monsoon, leaf litter, bird droppings and dry-season dust.",
    seoTitle: "Solar Panel Cleaning in Kottayam",
    seoDescription:
      "Solar panel cleaning in Kottayam and central Kerala: moss, algae, leaves and bird droppings removed safely, with a system health check on every visit.",
    image: {
      src: "/images/services/solar-panel-cleaning-maintenance.webp",
      alt: "Two workers cleaning a large rooftop solar array with long-handled brushes",
    },
    description: [
      "Kerala's rain washes panels often, but it doesn't keep them clean. Months of humidity let moss and algae grow along the panel edges, trees drop leaves and sap, and bird droppings bake on in the dry months. All of it cuts generation.",
      "We clean with soft brushes and water, never abrasive pads or harsh chemicals that damage the glass. Each visit includes a check of the wiring, earthing and inverter, which matters in a climate with this much moisture and lightning.",
    ],
    audience: [
      "Homes whose generation has dropped since installation",
      "Roofs under or near coconut palms and other trees",
      "Systems that haven't been cleaned since the last monsoon",
      "Sloped or high roofs that are unsafe to climb",
    ],
    included: [
      "Soft-brush and water cleaning of every panel",
      "Moss, algae and leaf-litter removal along panel edges",
      "Visual check of panels, cables, connectors and structure for rust",
      "Inverter status and fault-log check",
      "Before-and-after generation note",
      "Advice on a cleaning schedule for your location",
    ],
    process: [
      { title: "Book a visit", body: "Tell us the system size and roof type. We confirm a dry-weather slot." },
      { title: "Clean and inspect", body: "We clean the panels and check the system while we're on the roof." },
      { title: "Report", body: "You get a short note on what we found and anything that needs attention." },
    ],
    pricing: {
      headline: "One visit or a schedule",
      body: "Charges depend on the number of panels, roof height and access. For most homes, a clean after the monsoon and another before summer works well. Cleaning is also part of our AMC plans.",
      ctaLabel: "Book a cleaning visit",
    },
    faqs: [
      { question: "Doesn't the rain clean the panels?", answer: "It rinses off loose dust, but not moss, algae, sap or dried bird droppings. Those build up during the wet months and need a proper clean." },
      { question: "When is the best time to clean in Kerala?", answer: "Straight after the monsoon, to clear moss and algae, and again in the dry months before summer. Trees near the roof may mean more frequent visits." },
      { question: "Do you clean systems installed by other companies?", answer: "Yes. We clean any make of system, and tell you if we notice a fault." },
    ],
    related: ["annual-maintenance-contract", "solar-repair-troubleshooting"],
  },
  {
    slug: "solar-repair-troubleshooting",
    icon: "Wrench",
    title: "Solar Repair and Troubleshooting",
    summary: "Fault finding after lightning, water ingress or rust, plus inverter errors and low generation, on any make of system.",
    seoTitle: "Solar Repair and Troubleshooting in Kottayam",
    seoDescription:
      "Solar system not working after a storm? {{companyName}} finds and fixes lightning damage, water ingress, inverter faults and low generation in central Kerala.",
    image: {
      src: "/images/services/solar-repair-troubleshooting.webp",
      alt: "Gloved hands securing solar cables to a mounting rail on a clay-tile roof",
    },
    description: [
      "Kerala's weather is hard on electrical equipment. Lightning surges can damage inverters, water can get into junction boxes and connectors, and humid or salty air corrodes cheap fasteners and terminals over a few seasons.",
      "We test the panel strings, connectors, isolators, earthing, surge protection and inverter, compare generation with what the system should produce, and explain the fault before fixing anything.",
    ],
    audience: [
      "Systems that stopped working after a thunderstorm",
      "Inverters showing an error or fault code",
      "Generation that has dropped without an obvious reason",
      "Connectors or junction boxes with water or rust inside",
      "Systems whose original installer can't be reached",
    ],
    included: [
      "Generation check against the expected output",
      "Panel string voltage and insulation tests",
      "Connector and junction box inspection for water and corrosion",
      "Surge protection and earthing check after lightning",
      "Inverter fault-log reading and settings check",
      "A written note of the fault and fix, with prices before work starts",
      "Manufacturer warranty claim support where it applies",
    ],
    process: [
      { title: "Tell us the symptoms", body: "Send the fault code, a photo of the inverter or app, and when the problem started." },
      { title: "Diagnosis visit", body: "We test the system and find the cause." },
      { title: "Fix with your approval", body: "You get a clear explanation and price before we replace anything." },
    ],
    pricing: {
      headline: "Diagnosis first, then a clear price",
      body: "We charge for the diagnosis visit and quote any parts or repair work before starting. If the fault is covered by a manufacturer warranty, we help you claim it.",
      ctaLabel: "Report a problem",
    },
    faqs: [
      { question: "The inverter stopped working after a thunderstorm. What should I do?", answer: "Switch it off at the isolators if it's safe to reach, take a photo of the display, and call or WhatsApp us. Don't open the inverter. Lightning can damage the surge protection, the inverter or both, and we test each." },
      { question: "Is lightning protection worth adding to an existing system?", answer: "In Kerala, usually yes. Proper earthing and surge protection devices protect the inverter and the rest of your home's wiring. We can check what your system has." },
      { question: "Can you repair a system another company installed?", answer: "Yes. We work on all common inverter and panel brands." },
    ],
    related: ["annual-maintenance-contract", "solar-panel-cleaning-maintenance"],
  },
  {
    slug: "annual-maintenance-contract",
    icon: "CalendarCheck",
    title: "Annual Maintenance Contract (AMC)",
    summary: "Pre-monsoon and post-monsoon checks, cleaning and generation reports, planned around Kerala's two rainy seasons.",
    seoTitle: "Solar AMC in Kottayam and Central Kerala",
    seoDescription:
      "Solar annual maintenance contracts in central Kerala: pre-monsoon electrical checks, post-monsoon cleaning, rust inspections and priority support from {{companyName}}.",
    image: {
      src: "/images/services/annual-maintenance-contract.webp",
      alt: "Technician working on a sloped metal roof with solar mounting rails",
    },
    description: [
      "Kerala has two monsoons, so a solar system goes through a lot of wet weather every year. An AMC builds maintenance around that: an electrical and earthing check before the June rains, and a thorough clean and corrosion check once they ease.",
      "For homes, it means one less thing to remember, which helps families with members working away. For institutions and businesses, it gives a record of every visit for the committee or management.",
    ],
    audience: [
      "Homes that want maintenance taken care of",
      "Families who live away and want the system looked after",
      "Schools, hospitals, churches and other institutions",
      "Businesses with larger plants",
    ],
    included: [
      "Pre-monsoon electrical, earthing and surge protection check",
      "Post-monsoon cleaning, moss removal and corrosion inspection",
      "Structure and fastener check after storms",
      "Inverter and monitoring review",
      "Generation reports to track performance",
      "Priority response for breakdowns",
    ],
    process: [
      { title: "System review", body: "We inspect your system and agree a schedule around the monsoons." },
      { title: "Scheduled visits", body: "Checks and cleaning happen on the agreed dates, with a note after each one." },
      { title: "Reports and support", body: "You get regular generation reports and priority help when something goes wrong." },
    ],
    pricing: {
      headline: "A plan sized to your system",
      body: "AMC price depends on system size, the number of visits and roof access. Ask for a plan, and we'll list exactly what's included.",
      ctaLabel: "Ask about AMC plans",
    },
    faqs: [
      { question: "Why check the system before the monsoon?", answer: "Loose connections, weak earthing or damaged surge protection cause most storm-season failures. Finding them before the rains is cheaper than repairing a damaged inverter." },
      { question: "We live abroad. Can you look after our system?", answer: "Yes. We share visit notes and generation reports by WhatsApp or email, so you can follow the system from anywhere." },
      { question: "Does the AMC cover replacement parts?", answer: "Plans differ. The quote states clearly whether parts are included or charged separately." },
    ],
    related: ["solar-panel-cleaning-maintenance", "solar-repair-troubleshooting"],
  },
  {
    slug: "net-metering-subsidy-assistance",
    icon: "FileCheck2",
    title: "Net Metering and Subsidy Assistance",
    summary: "KSEB net-metering applications, documents and follow-up, plus help with the {{subsidyScheme}} subsidy.",
    seoTitle: "KSEB Net Metering and Solar Subsidy Help",
    seoDescription:
      "Help with KSEB net-metering applications and the {{subsidyScheme}} subsidy for Kerala homes: documents, portal steps and follow-up by {{companyName}}.",
    image: {
      src: "/images/services/net-metering-subsidy-assistance.webp",
      alt: "Digital electricity meter in a clear box on a textured wall",
    },
    description: [
      "Before a rooftop system can export to the grid, KSEB needs an application, a feasibility check, an inspection and a new meter. Each step can stall over a missing document or a name that doesn't match the consumer number.",
      "We prepare the file, follow it up with your KSEB section office and keep you posted. For homes, we also take you through the {{subsidyScheme}} portal steps and the documents the subsidy needs.",
    ],
    audience: [
      "Homes installing new rooftop solar",
      "Owners whose KSEB application is stuck",
      "Families applying for the {{subsidyScheme}} subsidy",
      "Institutions and businesses with KSEB approvals pending",
    ],
    included: [
      "Document checklist, including consumer number and name matching",
      "KSEB net-metering application and feasibility follow-up",
      "Coordination with the section office for inspection and the new meter",
      "Subsidy portal registration and document guidance for homes",
      "Status updates until your system is approved",
    ],
    process: [
      { title: "Document check", body: "We check your bill, ID and property papers match before anything is filed." },
      { title: "Application", body: "We file with KSEB and register on the subsidy portal where you're eligible." },
      { title: "Follow-up", body: "We track the application, inspection and meter change through to approval." },
    ],
    pricing: {
      headline: "Included with our installations",
      body: "Paperwork support is part of every system we install. If someone else installed your system and the application is stuck, ask us what's needed. {{subsidyNote}}",
      ctaLabel: "Ask about paperwork help",
    },
    faqs: [
      { question: "The KSEB connection is in a family member's name. Can I still apply?", answer: "Usually the connection needs to be in the applicant's name, or you need documents linking you to it. We tell you what's needed before applying, so the file isn't returned." },
      { question: "How long does KSEB approval take?", answer: "It varies by section office and how complete the documents are. A consistent file avoids the delays you can control, and we follow up at each stage." },
      { question: "Do you guarantee the subsidy?", answer: "No. Eligibility and approval are decided by the authorities. We make sure your application is complete and correct." },
    ],
    related: ["residential-rooftop-solar", "commercial-industrial-rooftop-solar", "site-survey-energy-audit"],
  },
  {
    slug: "site-survey-energy-audit",
    icon: "ClipboardList",
    title: "Site Survey and Energy Audit",
    summary: "A free roof assessment, shade study and bill review, with a written sizing report you can use with any installer.",
    seoTitle: "Solar Site Survey and Energy Audit in Kottayam",
    seoDescription:
      "A free solar site survey in Kottayam and central Kerala: roof type and condition, shade from palms and trees, KSEB bill review and a written sizing report.",
    image: {
      src: "/images/services/site-survey-energy-audit.webp",
      alt: "Surveyor with a tripod and tablet measuring a flat terrace",
    },
    description: [
      "In Kerala, the right system depends as much on the roof as on the bill. A clay-tile roof, a concrete terrace and a sheet roof over a terrace all need different structures, and coconut palms and hillside slopes can shade panels for part of the day.",
      "The survey covers the roof type and condition, shade through the day, the electrical setup and a review of your KSEB bills. You get a written report with a recommended size, layout and expected generation.",
    ],
    audience: [
      "Homeowners comparing quotes from different installers",
      "Families planning a new house or roof renovation",
      "Institutions and businesses planning a larger plant",
      "Anyone unsure whether their roof gets enough sun",
    ],
    included: [
      "Roof type, condition and usable-area assessment",
      "Shade study: palms, trees, hills and nearby buildings",
      "Truss and sheet check for terraces with a sheet roof",
      "Bill and connected-load review",
      "Recommended system size and expected generation",
      "Written report",
    ],
    process: [
      { title: "Book", body: "Tell us about the property and share a few recent bills." },
      { title: "Survey", body: "We visit, assess the roof and check the electrical setup." },
      { title: "Report", body: "You receive a written report with our recommendation and the reasoning." },
    ],
    pricing: {
      headline: "The site survey is free",
      body: "There's no charge for the survey. Home surveys are quick; commercial and institutional audits take longer, and we'll tell you up front what the visit involves.",
      ctaLabel: "Book a site survey",
    },
    faqs: [
      { question: "We're building a new house. When should we plan for solar?", answer: "Before the roof is finished. Planning conduit routes, roof orientation and fixing points early saves cost and keeps the roof watertight." },
      { question: "Can I use your report with another installer?", answer: "Yes. The report is yours to use." },
      { question: "Our roof is old. Should we fix it first?", answer: "If the tiles, sheets or waterproofing need work in the next few years, it's better to do it before installation. We note the roof's condition in the report." },
    ],
    related: ["residential-rooftop-solar", "commercial-industrial-rooftop-solar", "net-metering-subsidy-assistance"],
  },
];
