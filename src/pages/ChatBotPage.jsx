import React from 'react';
import ChatBot from './CONTACT/ChatBot';

export default function ChatBotPage() {
  return (
    <main className="font-manrope min-h-screen pt-24 pb-12 px-4 bg-[#F2F4E6] flex justify-center">
      <div className="w-full max-w-[600px] h-[calc(100vh-140px)]">
         <ChatBot />
      </div>
    </main>
  );
}
