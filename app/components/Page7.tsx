"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Education",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Licensure",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Certifications",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

const Page7 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full">
      {/* FAQ SECTION */}
      <div className="w-full bg-[#E5E0DA] py-24">
        <h2 className="text-4xl text-center font-normal text-[#2f3b1f] mb-16 tracking-tight">
          My Professional Background
        </h2>

        <div className="max-w-4xl mx-auto border-t border-[#2f3b1f]/50">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#2f3b1f]/50">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-xl text-[#2f3b1f] font-normal">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-light leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 flex justify-center">
                    <p className="max-w-md  text-[#2f3b1f]/90 leading-relaxed tracking-[0.02em]">
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
      <div className="w-full bg-[#7E7B46] h-[500px] flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center font-normal text-white tracking-tight mb-10 ">
          Get started today.
        </h2>
        <p className="text-center font-medium text-white leading-loose">
          Ready to take the first step towards a happier, healthier you? <br />
          Contact me to book your first session. I look forward to starting
          <br /> this therapeutic journey with you.
        </p>
        <button className="mt-20">
          <a
            href="/contact"
            className="px-8 py-4 text-white border border-white uppercase text-sm tracking-wide hover:bg-white hover:text-[#7E7B46] transition duration-900"
          >
            GET IN TOUCH →
          </a>
        </button>
      </div>

      
    </section>
  );
};

export default Page7;
