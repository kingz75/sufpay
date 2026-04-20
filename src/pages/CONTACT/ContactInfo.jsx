import React from 'react';

const ICON_PLACEHOLDER = "https://placehold.co/40x40.png";

export default function ContactInfo({ onLiveChatClick }) {
  return (
    <div className="flex-1 font-manrope pr-0 lg:pr-10">
      <h1 className="lg:text-[64px] text-[32px] sm:text-[56px] font-medium text-[#1a1a2e] leading-tight lg:mb-6 mb-2">
        Get in <span className="inline-block w-24 sm:w-32 h-[3px] bg-[#1a1a2e] align-middle ml-2"></span> <br/>
        touch with us
      </h1>
      
      <p className="text-[18px] text-[#2C2C2C] leading-relaxed lg:mb-10 mb-4 max-w-[500px]">
        We're here to help! Whether you have a question about our
        services, need assistance with your account, or want to
        provide feedback, our team is ready to assist you.
      </p>

      <ul className="lg:space-y-6 space-y-3 lg:mb-12 mb-4">
        <li className="flex items-start lg:gap-4 gap-2">
          <img src="https://img.icons8.com/ios-filled/50/4E4E4E/phone.png" alt="Phone" className="w-[22px] h-[22px] object-contain mt-0.5" />
          <span className="text-[16px] text-[#4E4E4E] font-medium">+234 8059315950</span>
        </li>
        <li className="flex items-start gap-4">
          <img src="https://img.icons8.com/ios-filled/50/4E4E4E/marker.png" alt="Address" className="w-[22px] h-[22px] object-contain mt-0.5" />
          <span className="text-[16px] text-[#4E4E4E] font-medium">No 48, Anthony Enahoro Crescent, Utako.</span>
        </li>
        <li className="flex items-start gap-4">
          <img src="https://img.icons8.com/ios-filled/50/4E4E4E/new-post.png" alt="Email" className="w-[22px] h-[22px] object-contain mt-0.5" />
          <span className="text-[16px] text-[#4E4E4E] font-medium">sufpayltd@gmail.com, Info@Sufpay.ng.Business.</span>
        </li>
        <li className="flex items-start gap-4">
          <img src="https://img.icons8.com/ios-filled/50/4E4E4E/clock--v1.png" alt="Time" className="w-[22px] h-[22px] object-contain mt-0.5" />
          <span className="text-[16px] text-[#4E4E4E] font-medium">Monday-Friday, 09:00 am - 05:00pm.</span>
        </li>
      </ul>

      <button onClick={onLiveChatClick} className="flex items-center gap-3 bg-[#6B7E1B] text-white rounded-full lg:py-3.5 lg:px-6 py-2 px-3 font-semibold hover:bg-[#5C6D17] transition-colors shadow-md">
         <span>Live chat</span>
         <div className="bg-[#1a1a2e] rounded-full w-8 h-8 flex items-center justify-center">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/right.png" alt="Arrow Right" className="w-4 h-4 object-contain" />
         </div>
      </button>
    </div>
  );
}
