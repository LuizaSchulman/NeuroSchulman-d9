import React from "react";
import { Hero } from "@/components/hero";
import { WhatWeInvestigate } from "@/components/what-we-investigate";
import { WhoIsItFor } from "@/components/who-is-it-for";
import { AboutEvaluation } from "@/components/about-evaluation";
import { Professional } from "@/components/professional";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Page(): React.JSX.Element {
  return (
    <>
      <Hero />
      <WhatWeInvestigate />
      <WhoIsItFor />
      <AboutEvaluation />
      <Professional />
      <FAQ />
      <Contact />
    </>
  );
}
