import React from 'react';


export default function ChatBot() {
  return (
    <div className="w-full max-w-[600px] h-full min-h-[580px] bg-[#F8F9F3] rounded-[16px] overflow-hidden flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.04)] font-manrope border border-[#E5E9D5]">
      {/* Header */}
      <div className="bg-[#6B7E1B] p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center p-1">
              <img src="https://img.icons8.com/ios-filled/50/6B7E1B/bot.png" alt="Bot Icon" className="w-6 h-6 object-contain" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#6B7E1B] rounded-full"></span>
          </div>
          <div>
            <h3 className="text-white font-bold text-[17px] leading-tight">SufBot</h3>
            <p className="text-white/80 text-[12px] font-medium leading-tight">Online</p>
          </div>
        </div>
        <button className="text-white/80 hover:text-white transition-colors">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/refresh.png" alt="Refresh" className="w-5 h-5 object-contain opacity-80" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5">
        
        {/* Bot Message 1 */}
        <div className="flex items-start gap-4 max-w-[85%]">
          <div className="bg-[#788C22] rounded-full w-9 h-9 shrink-0 flex items-center justify-center relative p-1.5 mt-2">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/bot.png" alt="Bot" className="w-full h-full object-contain" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 border border-[#788C22] rounded-full"></span>
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm text-[#4E4E4E] text-[14.5px] leading-relaxed">
            Hello! 👋 Welcome. What would you like to do today top up, pay a bill, or manage toll payments?
          </div>
        </div>

        {/* User Message */}
        <div className="self-end max-w-[85%] flex flex-col items-end">
          <span className="text-[#8B9B9B] text-[12px] font-medium mb-1.5 mr-2">Customer</span>
          <div className="bg-[#6B7E1B] p-4 rounded-2xl rounded-br-sm shadow-sm text-white text-[14.5px] leading-relaxed">
            I want to see everything I've done this month, including all payments and top-ups.
          </div>
        </div>

        {/* Bot Message 2 */}
        <div className="flex items-start gap-4 max-w-[85%]">
          <div className="bg-[#788C22] rounded-full w-9 h-9 shrink-0 flex items-center justify-center relative p-1.5 mt-2">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/bot.png" alt="Bot" className="w-full h-full object-contain" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 border border-[#788C22] rounded-full"></span>
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm text-[#4E4E4E] text-[14.5px] leading-relaxed">
            📊 Here's your summary: You've completed 18 transactions this month, including airtime purchases, bill payments, and toll charges.
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="p-4 bg-transparent mt-auto flex items-center gap-3">
        <input 
          type="text" 
          placeholder="Type your message here..." 
          className="flex-1 bg-white border border-gray-100 rounded-full px-5 py-3.5 text-[14px] text-[#4E4E4E] outline-none shadow-sm focus:border-[#6B7E1B] transition-colors"
        />
        <button className="bg-[#6B7E1B] hover:bg-[#5C6D17] transition-colors rounded-full w-[46px] h-[46px] flex items-center justify-center shrink-0 shadow-md">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/paper-plane.png" alt="Send" className="w-5 h-5 object-contain" />
        </button>
      </div>

    </div>
  );
}
