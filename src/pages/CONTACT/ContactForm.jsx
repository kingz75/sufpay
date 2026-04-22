import React, { useState, useRef } from "react";
import { Check } from "lucide-react";
import emailjs from "@emailjs/browser";

function UploadSuccess({ onClose }) {
  return (
    <div
      className="flex min-h-[560px] flex-col items-center justify-center px-6 py-20 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="grid h-[120px] w-[120px] place-items-center rounded-full bg-[#f0f4d4]">
        <div className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#00a978] shadow-[0_14px_28px_rgba(0,169,120,0.24)]">
          <Check className="h-8 w-8 text-[#f7f2d8]" strokeWidth={3.2} />
        </div>
      </div>

      <h2 className="mt-10 text-[24px] font-extrabold tracking-[-0.04em] text-[#000000] sm:mt-12">
        Talk to you soon.
      </h2>

      <p className="mt-6 max-w-[860px] text-[15px] leading-[1.9] text-[#171717]">
        Your request has been received. Our team will review
        <br className="hidden sm:block" />
        your message and get back to you shortly.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-12 rounded-full border border-[#dfe5c4] bg-[#f6f8ea] px-6 py-3 text-[15px] font-semibold text-[#637524] transition-colors hover:bg-[#eef3d7]"
      >
        Send another message
      </button>
    </div>
  );
}

export default function ContactForm() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        "service_en4ldj4",
        "template_qvckr3s",
        formRef.current,
        "wnibN4tBeKxz2lw-X"
      );
      formRef.current.reset();
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("EmailJS error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 w-full max-w-[600px] bg-white rounded-[10px] p-2 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] font-manrope">
      {submitted ? (
        <UploadSuccess onClose={() => setSubmitted(false)} />
      ) : (
        <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 sm:flex-row">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-full rounded-[10px] border-2 bg-[#F4F5F7] px-5 py-4 text-[15px] text-[#4E4E4E] transition-colors focus:border-[#6B7E1B] focus:bg-white focus:outline-none"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-full rounded-[10px] border-2 bg-[#F4F5F7] px-5 py-4 text-[15px] text-[#4E4E4E] transition-colors focus:border-[#6B7E1B] focus:bg-white focus:outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-[10px] border-2 bg-[#F4F5F7] px-5 py-4 text-[15px] text-[#4E4E4E] transition-colors focus:border-[#6B7E1B] focus:bg-white focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full rounded-[10px] border-2 bg-[#F4F5F7] px-5 py-4 text-[15px] text-[#4E4E4E] transition-colors focus:border-[#6B7E1B] focus:bg-white focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message....."
            rows="4"
            required
            className="w-full resize-none rounded-[10px] border-2 bg-[#F4F5F7] px-5 py-4 text-[15px] text-[#4E4E4E] transition-colors focus:border-[#6B7E1B] focus:bg-white focus:outline-none"
          ></textarea>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-3 rounded-full bg-[#6B7E1B] px-4 py-2 text-white shadow-md transition-colors hover:bg-[#5C6D17] lg:px-7 lg:py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isLoading ? "Sending..." : "Send"}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a2e]">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/right.png"
                  alt="Send Arrow"
                  className="h-4 w-4 object-contain"
                />
              </div>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
