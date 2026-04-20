import React from 'react';

const ICON_PLACEHOLDER = "https://placehold.co/40x40.png";

export default function CallToAction() {
  return (
    <section className="py-10  pb-[60px] bg-white font-manrope">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-[160px]">
        <div className="bg-gradient-to-br from-[#637524] via-[#637524] to-[#637524] rounded-[20px] p-[56px_48px] text-center relative overflow-hidden shadow-[0_16px_48px_rgba(45,58,14,0.3)]">
          {/* Decorative circles */}
          <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-40px] w-[200px] h-[200px] rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-[30px] left-[60px] w-[100px] h-[100px] rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="lg:text-[32px] text-[24px] font-medium text-[#ffffff] mb-3.5 leading-tight">
              Ready for an Audit?
            </h2>
            <p className="lg:text-[18px] text-[15px] text-[#FFFFFF] max-w-[680px] mx-auto mb-9 leading-relaxed">
              Send us your last two processing statements. Our analysts will perform a deep-dive live from comparison at no cost.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-[#c8d96e] hover:bg-[#b5c96a] text-[#1a1a2e] border-none rounded-lg p-[13px_28px] text-[0.9rem] font-bold cursor-pointer transition-all duration-250 hover:-translate-y-[2px] shadow-[0_4px_14px_rgba(200,217,110,0.2)] hover:shadow-[0_8px_24px_rgba(200,217,110,0.35)]">
                <img src="https://img.icons8.com/ios-filled/50/1a1a2e/upload.png" alt="Upload icon" className="w-4 h-4 object-contain" />
                Upload Statements
              </button>

              <button className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-[1.5px] border-white/40 rounded-lg p-[13px_28px] text-[0.9rem] font-semibold cursor-pointer transition-all duration-250 hover:-translate-y-[2px]">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/speech-bubble.png" alt="Speak icon" className="w-4 h-4 object-contain" />
                Speak with an Analyst
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
