import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhatWeInvestigate } from '../components/WhatWeInvestigate';
import { WhoIsItFor } from '../components/WhoIsItFor';
import { AboutEvaluation } from '../components/AboutEvaluation';
import { Professional } from '../components/Professional';
import { FreeTest } from '../components/FreeTest';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Area_Inktrap',sans-serif] antialiased">
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
