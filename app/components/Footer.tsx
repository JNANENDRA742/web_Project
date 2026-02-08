import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <footer className="w-full bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

            {/* Left column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-normal text-[#2C4F7C]">
                Dr. Maya Reynolds
              </h2>

              <p className="text-[#2C4F7C] leading-relaxed">
                123 Example Road <br />
                Santa Monica, CA
              </p>

              <div className="space-y-1">
                <a
                  href="mailto:email@example.com"
                  className="block underline text-[#2C4F7C]"
                >
                  email@example.com
                </a>
                <a
                  href="tel:5555555555"
                  className="block underline text-[#2C4F7C]"
                >
                  (555) 555-5555
                </a>
              </div>
            </div>

            {/* Right side wrapper */}
            <div className="md:col-span-2 flex justify-end gap-24">

              {/* Hours */}
              <div className="space-y-6 text-right">
                <h3 className="text-xl font-normal text-[#2C4F7C]">
                  Hours
                </h3>

                <p className="text-[#2C4F7C] leading-relaxed">
                  Monday – Friday <br />
                  10am – 6pm
                </p>
              </div>

              {/* Find */}
              <div className="space-y-6 text-right">
                <h3 className="text-xl font-normal text-[#2C4F7C]">
                  Find
                </h3>

                <ul className="space-y-2">
                  {["Home", "Contact", "Blog"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="underline text-[#2C4F7C]">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#E1E7EF] h-[220px] py-12 leading-[30.4883px]">
          <div className="max-w-7xl mx-auto px-10 text-center space-y-4 text-sm text-[#2C4F7C]">

            <div className="flex flex-wrap justify-center gap-4 underline text-[#2C4F7C]">
              <Link href="#">Privacy & Cookies Policy</Link>
              <Link href="#">Good Faith Estimate</Link>
              <Link href="#">Website Terms & Conditions</Link>
              <Link href="#">Disclaimer</Link>
            </div>

            <p className="mb-16">
              Website Template Credits:{" "}
              <Link href="#" className="underline text-[#2C4F7C]">
                Go Bloom Creative
              </Link>
            </p>

            <p>
              All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD.
            </p>

          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
