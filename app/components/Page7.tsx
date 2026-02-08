"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Education",
    answer:
      "Dr. Maya Reynolds holds a Doctorate in Clinical Psychology (PsyD). Her training emphasized evidence-based therapy, trauma-informed care, and the integration of emotional and physiological approaches to healing.",
  },
  {
    question: "Licensure",
    answer:
      "She is a Licensed Clinical Psychologist in the state of California and provides therapy to adults through in-person sessions in Santa Monica as well as secure telehealth across California.",
  },
  {
    question: "Clinical Focus",
    answer:
      "Her clinical work centers on anxiety, panic, trauma, burnout, and perfectionism. She frequently works with high-achieving adults who feel outwardly functional but internally overwhelmed or emotionally on edge.",
  },
];

const Page7 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full">

      {/* FAQ SECTION */}
      <div className="w-full bg-[#E8EDF3] py-16 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl text-center font-normal text-[#2C4F7C] mb-12 md:mb-16 tracking-tight">
          My Professional Background
        </h2>

        <div className="max-w-4xl mx-auto border-t border-[#2C4F7C]/40">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#2C4F7C]/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left gap-6"
                >
                  <span className="text-lg md:text-xl text-[#2C4F7C] font-normal">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-light leading-none text-[#2C4F7C]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 flex justify-center px-4">
                    <p className="max-w-md text-[#2E2E2E] leading-relaxed tracking-[0.02em] text-center md:text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="w-full bg-[#1F3A5F] min-h-[420px] md:h-[500px] px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-8 md:mb-10">
          Begin therapy when you’re ready.
        </h2>

        <p className="font-medium text-white/90 leading-loose max-w-xl">
          If you’re feeling overwhelmed by anxiety, burnout, or past experiences,
          therapy can offer a steady and supportive place to begin.
          <br />
          I welcome you to reach out and schedule a first session when it feels right.
        </p>

        <a
          href="/contact"
          className="mt-12 md:mt-20 px-8 py-4 text-white border border-white uppercase text-sm tracking-wide hover:bg-white hover:text-[#1F3A5F] transition duration-700"
        >
          GET IN TOUCH →
        </a>
      </div>

    </section>
  );
};

export default Page7;
