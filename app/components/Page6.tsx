"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Do you offer in-person or online therapy?",
    answer:
      "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for adults located in California. This allows flexibility while maintaining continuity of care.",
  },
  {
    question: "What issues do you specialize in?",
    answer:
      "My work focuses on anxiety, panic, trauma, and burnout. I also support clients dealing with perfectionism, chronic stress, and the lingering impact of earlier life experiences on relationships and self-confidence.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "I take a warm, collaborative, and grounded approach. I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques, while pacing the work carefully to prioritize safety and emotional regulation.",
  },
];

export default function Page6() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#E8EDF3] py-12 font-gopher">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[420px] h-[620px] overflow-hidden rounded-t-[1000px]">
            <Image
              src="/page6.jpeg"
              alt="Calm therapy office in Santa Monica"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h2 className="text-4xl font-normal text-[#2C4F7C] mb-12 tracking-tight">
            FAQs
          </h2>

          <div className="border-t border-[#2C4F7C]/40">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#2C4F7C]/40 py-6"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-light leading-none text-[#2C4F7C]">
                        {isOpen ? "−" : "+"}
                      </span>

                      <span className="text-xl text-[#2C4F7C] font-normal">
                        {faq.question}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-4 max-w-md text-[#2C4F7C] leading-relaxed tracking-[0.02em]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
