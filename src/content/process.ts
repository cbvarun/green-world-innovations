import type { ProcessStep } from "@/types/content";

/** How a Green World installation runs, from first call to after-sales. */
export const processSteps: ProcessStep[] = [
  { icon: "MessagesSquare", title: "First conversation", body: "Share your KSEB bills and tell us about your roof. We'll say plainly whether solar suits your home." },
  { icon: "Search", title: "Free roof survey", body: "We check the roof type and condition, shade from palms and trees, and your electrical connection, at no charge." },
  { icon: "PencilRuler", title: "Design and quote", body: "You see the layout, the mounting for your roof, expected generation and an itemised price." },
  { icon: "HardHat", title: "Installation", body: "We install in dry weather, with structures and fixings suited to Kerala's rain and humidity." },
  { icon: "FileCheck2", title: "KSEB paperwork", body: "We file and follow up the net-metering application, and guide you on subsidy documents where you're eligible." },
  { icon: "PlugZap", title: "Switch on", body: "Once KSEB fits the new meter, the system goes live and we show you the monitoring app." },
  { icon: "LifeBuoy", title: "Through the seasons", body: "Pre-monsoon checks, cleaning and repairs from the same team that installed your system." },
];
