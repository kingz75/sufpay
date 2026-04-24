import React from 'react';


const recommendations = [
  {
    id: 'startup',
    tag: 'FIRST CHOICE',
    tagColor: 'text-gray-500',
    model: 'FLAT RATE',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/rocket.png",
    description:
      'Flat Rate works best when costs are under $10k/mo. Revenue amplitude impact: measure it every month to ensure timely best gains savings.',
  },
  {
    id: 'scale',
    tag: 'STRATEGIC MODEL',
    tagColor: 'text-[#8a9a2a]',
    model: 'INTERCHANGE-PLUS',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/bar-chart.png",
    description:
      'Interchange-Plus on the artisanal 350+/mo. The long-running shows for unique audit builds on commonly stable.',
    featured: true,
  },
  {
    id: 'payment',
    tag: 'PAYMENT IN HIGH-CAP',
    tagColor: 'text-gray-500',
    model: 'SUBSCRIPTION',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/shield.png",
    description:
      'Subscription is ideal for merchants processing >$40k/mo with high-ticket sales where processing overhead and volume penalties each end.',
  },
  {
    id: 'blended',
    tag: 'BLEND STRATEGY',
    tagColor: 'text-gray-500',
    model: 'CUSTOM RATES',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/settings.png",
    description:
      'Some vendors offer volume or subscription-level deals or even blended models suiting organisations with blending multi-scale or combining subscription with volume funnel.',
  },
];

export default function StrategicRecommendation() {
  return (
    <section className="bg-gray-50 py-16  font-manrope">
      <div className="lg:max-w-[2000px] lg:mx-auto px-4 lg:px-[160px] ">
        <div className="flex flex-wrap items-start justify-between mb-9 gap-4">
          <div className="flex-1">
            <h2 className="lg:text-[32px] text-[24px] font-medium text-[#2C2C2C] mb-2">Strategic Recommendation</h2>
            <p className="lg:text-[18px] text-[15px] text-[#2C2C2C]">
              Data-driven shopping for your organisational scale.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#8a9a2a] text-white border-none rounded-lg py-3 px-5 text-[15px] font-semibold cursor-pointer whitespace-nowrap shadow-[0_4px_14px_rgba(138,154,42,0.25)] transition-all duration-250 hover:bg-[#7a8a20] hover:-translate-y-0.5"
          >
            <img src="https://img.icons8.com/ios-filled/50/ffffff/download.png" alt="Download icon" className="w-[15px] h-[15px] object-contain" />
            Download Full Matrix
          </button>
        </div>

        <div className="flex lg:grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className={`
                w-[85vw] max-w-[85vw] sm:w-[320px] sm:max-w-[320px] lg:w-auto lg:max-w-none snap-center shrink-0 whitespace-normal
                bg-white rounded-xl p-[22px_20px] cursor-pointer transition-all duration-300
                hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(138,154,42,0.13)]
                ${rec.featured ? 'border-2 border-[#b5c96a]' : 'border-[1.5px] border-gray-200'}
                shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              `}
            >
              <div className={`text-[15px]  tracking-[0.08em] uppercase mb-2.5 ${rec.tagColor}`}>
                {rec.tag}
              </div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <img src={rec.iconUrl} alt={`${rec.model} icon`} className="w-[22px] h-[22px] object-contain" />
                <span className="text-[15px] font-bold text-[#1a1a2e]">{rec.model}</span>
              </div>
              <p className="text-[14px] text-[#4E4E4E] leading-relaxed">
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
