import React from 'react';

const ICON_PLACEHOLDER = "https://placehold.co/40x40.png";

const providers = [
  {
    name: 'Square',
    logoUrl: "https://img.icons8.com/color/48/square-inc.png",
    model: 'Flat Rate',
    onlineRate: '2.9% + $0.30',
    monthlyFee: '$0',
    bestFeature: 'Developer APIs',
    watchOut: [
      { text: 'Charge-back limits', type: 'warning' },
    ],
  },
  {
    name: 'Adyen',
    logoUrl: "https://img.icons8.com/color/48/bank-cards.png",
    model: 'Interchange Plus',
    onlineRate: 'IC+ + Fee',
    monthlyFee: '30/mo (as applied)',
    bestFeature: 'Global acquiring',
    watchOut: [
      { text: 'Tx limits: Enterprise', type: 'success' },
    ],
  },
  {
    name: 'PayPal',
    logoUrl: "https://img.icons8.com/color/48/paypal.png",
    model: 'Tiered/Flat Rate',
    onlineRate: '3.49% + $0.49',
    monthlyFee: '$0',
    bestFeature: 'Brand recognition',
    watchOut: [
      { text: 'Account freezes', type: 'error' },
    ],
  },
  {
    name: 'Square',
    logoUrl: "https://img.icons8.com/ios-filled/50/000000/square-inc.png",
    model: 'Flat Rate',
    onlineRate: '2.9% + $0.30',
    monthlyFee: '$0',
    bestFeature: 'POS integration',
    watchOut: [
      { text: 'Less flexible for growth', type: 'warning-outline' },
    ],
  },
  {
    name: 'Authorize.Net',
    logoUrl: "https://img.icons8.com/color/48/bank-safe.png",
    model: '+ Interchange',
    onlineRate: '2.9% + $0.30',
    monthlyFee: '$25/mo',
    bestFeature: '0.7% types',
    watchOut: [
      { text: 'Legacy interface', type: 'dark' },
    ],
  },
];

const badgeStyles = {
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  success: 'bg-green-50 text-green-800 border-green-200',
  error: 'bg-red-50 text-red-800 border-red-200',
  'warning-outline': 'bg-amber-50 text-amber-800 border-amber-200',
  dark: 'bg-gray-100 text-gray-700 border-gray-300',
};

const badgeIcons = {
  warning: "https://img.icons8.com/ios-filled/50/b45309/warning-shield.png",
  success: "https://img.icons8.com/ios-filled/50/166534/ok.png",
  error: "https://img.icons8.com/ios-filled/50/991b1b/cancel.png",
  'warning-outline': "https://img.icons8.com/ios-filled/50/92400e/box-important.png",
  dark: "https://img.icons8.com/ios-filled/50/374151/lock.png",
};

export default function ProviderComparison() {
  const columns = ['Provider', 'Model', 'Online Rate', 'Monthly Fee', 'Best Feature', 'Watch Out For'];

  return (
    <section className="bg-white py-16  font-manrope">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-[160px]">
        <div className="lg:text-center mb-10">
          <h2 className="lg:text-[32px] text-[24px] font-medium text-[#2C2C2C] mb-2.5">Provider Comparison</h2>
          <p className="lg:text-[18px] text-[15px] text-[#4E4E4E] max-w-[720px] mx-auto leading-relaxed">
            Enrolled analysis of leading payment gateways. Precision-engineered data to inform your enterprise infrastructure decisions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[14px] border-[1.5px] border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((col) => (
                  <th key={col} className="p-[14px_18px] text-left text-[15px]  text-[#4E4E4E] tracking-[0.07em] uppercase border-b-[1.5px] border-gray-200 whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {providers.map((p, idx) => (
                <tr
                  key={idx}
                  className="bg-white hover:bg-[#f9faf3] even:bg-white odd:bg-gray-50 transition-colors duration-200"
                >
                  <td className="p-[16px_18px] text-[15px] text-gray-700 border-b border-gray-100 align-middle">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        <img src={p.logoUrl} alt={`${p.name} logo`} className="w-5 h-5 object-contain" />
                      </div>
                      <span className="font-semibold text-[#1a1a2e] text-[0.88rem]">{p.name}</span>
                    </div>
                  </td>
                  <td className="p-[16px_18px] text-[15px] text-gray-700 border-b border-gray-100 align-middle">
                    {p.model}
                  </td>
                  <td className="p-[16px_18px] text-[15px] text-[#1a1a2e] font-semibold border-b border-gray-100 align-middle">
                    {p.onlineRate}
                  </td>
                  <td className="p-[16px_18px] text-[15px] text-gray-700 border-b border-gray-100 align-middle">
                    {p.monthlyFee}
                  </td>
                  <td className="p-[16px_18px] text-[15px] text-gray-700 border-b border-gray-100 align-middle">
                    <span className="text-[15px]  text-[#8a9a2a] bg-[#f5f8e8] border border-[#d4e157] rounded-full py-[3px] px-2.5 whitespace-nowrap flex items-center justify-center gap-2 inline-flex">
                      <img src="https://img.icons8.com/ios-filled/50/8a9a2a/ok.png" alt="Feature icon" className="w-3 h-3 object-contain" />
                      {p.bestFeature}
                    </span>
                  </td>
                  <td className="p-[16px_18px] text-[15px] text-gray-700 border-b border-gray-100 align-middle">
                    {p.watchOut.map((w, i) => (
                      <span key={i} className={`inline-flex items-center gap-1.5 text-[0.74rem] font-semibold py-1 px-3 rounded-full border whitespace-nowrap ${badgeStyles[w.type]}`}>
                        <img src={badgeIcons[w.type]} alt={`${w.type} icon`} className="w-3.5 h-3.5 object-contain" />
                        {w.text}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
