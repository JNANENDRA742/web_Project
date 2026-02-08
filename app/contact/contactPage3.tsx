"use client";

export default function ContactPage3() {
  return (
    <section className="bg-[#1F3A5F]">
      <div className="min-h-[550px] px-6 md:px-12 py-12 md:py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-light mb-8 md:mb-10">
              Office Location
            </h1>

            <div className="text-base md:text-lg leading-relaxed mb-10 md:mb-14 text-white/90">
              <p>Downtown Minneapolis</p>
              <p>Minneapolis, MN</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
              Office Hours
            </h2>

            <div className="text-base md:text-lg leading-relaxed text-white/90">
              <p>Monday – Friday</p>
              <p>10:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[300px] sm:h-[360px] md:h-[460px] rounded-md overflow-hidden">
            <iframe
              className="w-full h-full border-0 grayscale"
              src="https://www.google.com/maps?q=Minneapolis&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
