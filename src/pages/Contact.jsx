import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactInfo from './CONTACT/ContactInfo';
import ContactForm from './CONTACT/ContactForm';
import ChatBot from './CONTACT/ChatBot';

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleLiveChatClick = () => {
    if (window.innerWidth < 1024) {
      navigate('/chatbot');
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <main className="font-manrope lg:pt-36 pt-24 pb-20 px-4">
      <div className="max-w-[2000px] lg:px-[60px] mx-auto">
        <div className="bg-[#F2F4E6] rounded-[24px] lg:rounded-[10px] p-4 md:p-14 lg:p-20 flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-center lg:items-start shadow-sm">
          <ContactInfo onLiveChatClick={handleLiveChatClick} />
          
          <div className="flex-1 w-full max-w-[600px] h-auto lg:h-[580px]" style={{ perspective: '1000px' }}>
            <div 
              className="relative w-full h-full transition-transform duration-700" 
              style={{ 
                transformStyle: 'preserve-3d', 
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
              }}
            >
              <div 
                className="w-full h-full relative lg:absolute inset-0" 
                style={{ backfaceVisibility: 'hidden' }}
              >
                <ContactForm />
              </div>
              
              {/* Desktop Back (ChatBot) hidden on mobile to rely on routing */}
              <div 
                className="absolute inset-0 w-full h-full hidden lg:block" 
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <ChatBot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
