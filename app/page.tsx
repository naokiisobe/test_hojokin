
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceOverview from '../components/ServiceOverview';
import Strengths from '../components/Strengths';
import PricingPlan from '../components/PricingPlan';
import ProcessFlow from '../components/ProcessFlow';
import Results from '../components/Results';
import CTAMiddle from '../components/CTAMiddle';
import DifferentiationSection from '../components/DifferentiationSection';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 min-h-screen">
      <Header />
      <Hero />
      <ServiceOverview />
      <Strengths />
      <PricingPlan />
      <ProcessFlow />
      <Results />
      <CTAMiddle />
      <DifferentiationSection />
      <CTAFinal />
      <Footer />
    </div>
  );
}
