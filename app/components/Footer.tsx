import React from 'react'

const Footer = () => {
  return (
    <section>
      {/* FOOTER SPACER */}

      <footer className="w-full bg-[#fffbf6]">
        <div className="max-w-7xl mx-auto px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Left column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-normal text-[#2f3b1f]">
                Lilac Template
              </h2>

              <p className="text-[#2f3b1f] leading-relaxed">
                123 Example Road <br />
                Minneapolis, MN
              </p>

              <div className="space-y-1">
                <a
                  href="mailto:email@example.com"
                  className="block underline text-[#2f3b1f]"
                >
                  email@example.com
                </a>
                <a
                  href="tel:5555555555"
                  className="block underline text-[#2f3b1f]"
                >
                  (555) 555-5555
                </a>
              </div>
            </div>

            {/* Right side wrapper */}
            <div className="md:col-span-2 flex justify-end gap-24">
              {/* Hours */}
              <div className="space-y-6 text-right">
                <h3 className="text-xl font-normal text-[#2f3b1f]">Hours</h3>

                <p className="text-[#2f3b1f] leading-relaxed">
                  Monday – Friday <br />
                  10am – 6pm
                </p>
              </div>

              {/* Find */}
              <div className="space-y-6 text-right">
                <h3 className="text-xl font-normal text-[#2f3b1f]">Find</h3>

                <ul className="space-y-2">
                  {["Home", "Contact", "Blog"].map((item) => (
                    <li key={item}>
                      <a href="#" className="underline text-[#2f3b1f]">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#DEDAD3] h-[220px] py-12 leading-[30.4883px]">
          <div className="max-w-7xl mx-auto px-10 text-center space-y-4 text-sm text-[#2f3b1f]">
            <div className="flex flex-wrap justify-center gap-4 underline">
              <a href="#">Privacy & Cookies Policy</a>
              <a href="#">Good Faith Estimate</a>
              <a href="#">Website Terms & Conditions</a>
              <a href="#">Disclaimer</a>
            </div>

            <p className="mb-16">
              Website Template Credits:{" "}
              <a href="#" className="underline">
                Go Bloom Creative
              </a>
            </p>

            <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
