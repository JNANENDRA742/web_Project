"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Do you take insurance?",
    answer: "Answer goes here.",
  },
  {
    question: "What are your rates?",
    answer: "Answer goes here.",
  },
  {
    question: "Do you have any openings?",
    answer: "Answer goes here.",
  },
];

export default function Page6() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fbf7f2] py-12 font-gopher">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[420px] h-[620px] overflow-hidden rounded-t-[1000px]">
            <Image
              src="/image9.webp"
              alt="Decorative florals"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h2 className="text-4xl font-normal text-[#2f3b1f] mb-12 tracking-tight">
            FAQs
          </h2>

          <div className="border-t border-[#2f3b1f]/60">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-[#2f3b1f]/60 py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    {/* LEFT: icon + question together */}
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-light leading-none">
                        {isOpen ? "−" : "+"}
                      </span>

                      <span className="text-xl text-[#2f3b1f] font-normal">
                        {faq.question}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-4 max-w-md text-[#2f3b1f]/90 leading-relaxed tracking-[0.02em]">
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
