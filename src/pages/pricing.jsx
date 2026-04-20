import React from 'react';
import PricingHero from './PRICING/PricingHero';
import StrategicRecommendation from './PRICING/StrategicRecommendation';
import ProviderComparison from './PRICING/ProviderComparison';
import HiddenFees from './PRICING/HiddenFees';
import CallToAction from './PRICING/CallToAction';

export default function Pricing() {
  return (
    <main style={{ fontFamily: "" }}>

      <PricingHero />


      <StrategicRecommendation />


      <ProviderComparison />


      <HiddenFees />


      <CallToAction />
    </main>
  );
}
