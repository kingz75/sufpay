import React from 'react';

export default function ContactForm() {
  return (
    <div className="flex-1 w-full max-w-[600px] bg-white rounded-[10px] p-2 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] font-manrope">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-[#F4F5F7] text-[#4E4E4E] border-2 focus:border-[#6B7E1B] focus:bg-white focus:outline-none rounded-[10px] px-5 py-4 text-[15px] transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-[#F4F5F7] text-[#4E4E4E] border-2 focus:border-[#6B7E1B] focus:bg-white focus:outline-none rounded-[10px] px-5 py-4 text-[15px] transition-colors"
          />
        </div>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#F4F5F7] text-[#4E4E4E] border-2 focus:border-[#6B7E1B] focus:bg-white focus:outline-none rounded-[10px] px-5 py-4 text-[15px] transition-colors"
        />
        
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full bg-[#F4F5F7] text-[#4E4E4E] border-2 focus:border-[#6B7E1B] focus:bg-white focus:outline-none rounded-[10px] px-5 py-4 text-[15px] transition-colors"
        />

        <textarea
          placeholder="Message....."
          rows="4"
          className="w-full bg-[#F4F5F7] text-[#4E4E4E] border-2 focus:border-[#6B7E1B] focus:bg-white focus:outline-none rounded-[10px] px-5 py-4 text-[15px] resize-none transition-colors"
        ></textarea>
        
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="flex items-center gap-3 bg-[#6B7E1B] text-white rounded-full lg:py-3.5 lg:px-7 py-2 px-4 font-semibold hover:bg-[#5C6D17] transition-colors shadow-md"
          >
            <span>Send</span>
            <div className="bg-[#1a1a2e] rounded-full w-8 h-8 flex items-center justify-center">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/right.png" alt="Send Arrow" className="w-4 h-4 object-contain" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
