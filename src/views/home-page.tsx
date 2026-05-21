import { AboutEvaluation } from '../components/about-evaluation';
import { Contact } from '../components/contact';
import { FAQ } from '../components/faq';
import { Footer } from '../components/footer';
import { FreeTest } from '../components/free-test';
import { Hero } from '../components/hero';
import { Navbar } from '../components/navbar';
import { Professional } from '../components/professional';
import { WhatWeInvestigate } from '../components/what-we-investigate';
import { WhoIsItFor } from '../components/who-is-it-for';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhatWeInvestigate />
        <WhoIsItFor />
        <AboutEvaluation />
        <Professional />
        <div className="hidden">
          <FreeTest />
        </div>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
