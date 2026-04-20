import React from 'react';

// Using a generic placeholder for the PNG images as requested
const ICON_PLACEHOLDER = "https://placehold.co/40x40.png";

const pricingCards = [
  {
    id: 'flat-rate',
    badge: 'Predictable',
    badgeColor: 'bg-gray-500',
    title: 'Flat-Rate',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/wallet.png",
    description:
      'Simple, one-size-fits-all pricing where you pay a fixed percentage and a small transaction fee regardless of card type.',
    rate: 'FLAT RATE',
    rateValue: '2.6% + $0.10',
    topProviders: ['+ Square', '+ PayPal'],
    accentText: 'text-[#8a9a3b]',
    accentBg: 'bg-[#8a9a3b]/10',
    accentBorder: 'border-[#8a9a3b]/30',
    actionBtns: [
      { label: 'Low Volume' },
      { label: 'Consumer' },
    ],
  },
  {
    id: 'interchange-plus',
    badge: 'Most Popular',
    badgeColor: 'bg-[#8a9a2a]',
    title: 'Interchange-Plus',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/line-chart.png",
    description:
      'Transparent markup on top of actual credit card network rates, and never find out how you actually make money. Highly customizable scale.',
    rate: 'BEST FOR',
    rateValue: 'Mid-Market',
    topProviders: ['+ Adyen', '+ Chase Payment Solutions'],
    accentText: 'text-[#8a9a2a]',
    accentBg: 'bg-[#8a9a2a]/10',
    accentBorder: 'border-[#8a9a2a]/30',
    featured: true,
    actionBtns: [
      { label: 'Low Volume' },
      { label: 'Multi-Scale' },
    ],
  },
  {
    id: 'subscription',
    badge: 'Flat Fee',
    badgeColor: 'bg-gray-500',
    title: 'Subscription',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/membership-card.png",
    description:
      'A fixed monthly membership fee provides access to interchange processing costs with low per-transaction pricing from the network.',
    rate: 'FLAT FEE',
    rateValue: '$49–$199/mo',
    topProviders: ['+ Fattmerchant', '+ Payment Depot'],
    accentText: 'text-gray-500',
    accentBg: 'bg-gray-500/10',
    accentBorder: 'border-gray-500/30',
    actionBtns: [
      { label: 'Low Volume' },
      { label: 'Mid/High' },
    ],
  },
];

export default function PricingHero() {
  return (
    <section className="bg-white  lg:pt-[150px] pt-[90px] pb-[60px] font-manrope">
      <div className="max-w-[2000px] mx-auto lg:px-[160px] px-4">
        <div className="lg:text-center mb-12">
          <h1 className="lg:text-[42px] text-[24px] font-medium text-[#1a1a2e] mb-3.5 leading-tight">
            Pricing Models Overview
          </h1>
          <p className="text-[18px] text-gray-500 max-w-[760px] mx-auto leading-relaxed">
            Deciphering the economics and nuances of modern payment processing. Our precision-fine analysis helps you select the gateway strategy that maximises margin retention.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
          {pricingCards.map((card) => (
            <div
              key={card.id}
              className={`
                relative p-[28px_26px] rounded-md cursor-pointer transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(138,154,42,0.13)]
                ${
                  card.featured
                    ? 'bg-[#f9faf3] border-2 border-[#b5c96a] shadow-[0_4px_18px_rgba(138,154,42,0.09)]'
                    : 'bg-white border-[1.5px] border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
                }
              `}
            >
              <span className={`inline-block text-[0.72rem] font-semibold text-white ${card.badgeColor} rounded-full px-3 py-1 mb-3.5 tracking-wider`}>
                {card.badge}
              </span>
              
              <div className="flex items-center gap-3 mb-3">
                <img src={card.iconUrl} alt={`${card.title} icon`} className="w-7 h-7 object-contain" />
                <h3 className="text-[24px] font-medium text-[#2C2C2C]">{card.title}</h3>
              </div>
              
              <p className="text-[15px]  text-[#2C2C2C] leading-relaxed mb-4.5">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {card.actionBtns.map((btn, i) => (
                  <span 
                    key={i} 
                    className={`text-[0.72rem] mt-3 font-semibold ${card.accentText} ${card.accentBg} border-[1.2px] ${card.accentBorder} rounded-full py-1 px-3`}
                  >
                    {btn.label}
                  </span>
                ))}
              </div>

              <hr className="border-t-[1.5px] border-gray-200 my-3.5" />

              <div className="text-[0.7rem] font-bold text-gray-400 tracking-wider uppercase mb-0.5">
                {card.rate}
              </div>
              <div className="text-base font-bold text-[#1a1a2e] mb-3">
                {card.rateValue}
              </div>

              <div className="text-[0.7rem] font-bold text-gray-400 tracking-wider uppercase mb-1.5">
                TOP PROVIDERS
              </div>
              {card.topProviders.map((p, i) => (
                <div key={i} className="text-[0.82rem] text-gray-600 leading-relaxed">
                  {p}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
