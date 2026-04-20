import React from 'react';
import PricingHero from './PRICING/PricingHero';
import StrategicRecommendation from './PRICING/StrategicRecommendation';
import ProviderComparison from './PRICING/ProviderComparison';
import HiddenFees from './PRICING/HiddenFees';
import CallToAction from './PRICING/CallToAction';

export default function Pricing() {
  return (
    <main style={{ fontFamily: " 'Manrope', sans-serif"   }}>
      {/* Section 1: Pricing Models Overview — 3 pricing cards */}
      <PricingHero />

      {/* Section 2: Strategic Recommendation — 4 model cards + download */}
      <StrategicRecommendation />

      {/* Section 3: Provider Comparison Table */}
      <ProviderComparison />

      {/* Section 4: Hidden Fees / Insight Cards */}
      <HiddenFees />

      {/* Section 5: Ready for an Audit? CTA Banner */}
      <CallToAction />
    </main>
  );
}
