"use client";

import DiagramSection from "./DiagramSection";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PageShell from "./PageShell";
import SiteFooter from "./SiteFooter";
import WhoWeWorkWith from "./WhoWeWorkWith";

export default function HomeClient() {
  return (
    <>
      <PageShell>
        <Hero />
        <DiagramSection />
        <HowItWorks />
        <WhoWeWorkWith />
      </PageShell>
      <SiteFooter />
    </>
  );
}
