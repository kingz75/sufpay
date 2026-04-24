import React from 'react';


const cards = [
  {
    id: 'volume',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/bullish.png",
    title: 'Volume Leverage',
    description:
      'The more volume a Stripe site processes, the more incentivised volume and tiered transaction volume rewards reach 2.90%. Always negotiate from here.',
  },
  {
    id: 'hidden',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/invisible.png",
    title: 'Hidden Settlement Fees',
    description:
      'Hidden fees can offset the low advertised rate — costs to 1.1% on top of standard rates. Adyen is particularly aggressive here.',
  },
  {
    id: 'security',
    iconUrl: "https://img.icons8.com/ios-filled/50/8a9a2a/security-checked.png",
    title: 'Security Overhead',
    description:
      'PCI compliance includes advanced fraud solutions at over mainly no user advance. Today, Radar runs as a per-transaction cost.',
  },
];

export default function HiddenFees() {
  return (
    <section className="bg-gray-50 py-16  font-manrope">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-[160px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border-[1.5px] border-gray-200 rounded-[14px] p-[28px_26px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(138,154,42,0.12)] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-[#f5f8e8] flex items-center justify-center mb-4.5">
                <img src={card.iconUrl} alt={`${card.title} icon`} className="w-[30px] h-[30px] object-contain" />
              </div>
              <h3 className="text-[20px] font-medium text-[#1a1a2e] mb-2.5">{card.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
