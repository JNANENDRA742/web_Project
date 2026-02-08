import Link from "next/link";

export default function ContactPage2() {
  return (
    <section className="bg-[#e9e4db] py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">

        {/* Heading */}
        <h2 className="text-[36px] md:text-[42px] lg:text-[52px] text-[#2C4F7C] font-normal mb-8">
          Book a Consultation
        </h2>

        {/* Description */}
        <p className="text-[#2C4F7C] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16 md:mb-24">
          Scheduling your first session is simple. Use the secure booking
          system below to request an appointment or a complimentary
          15-minute consultation.
        </p>

        {/* Placeholder box */}
        <div className="bg-white max-w-md mx-auto px-8 md:px-10 py-10 md:py-12 shadow-sm">
          <h3 className="text-lg text-[#2C4F7C] md:text-xl font-medium mb-4">
            Scheduling coming soon
          </h3>

          <p className="text-sm text-gray-600 mb-6">
            Online booking will be available shortly. In the meantime,
            please reach out directly to get started.
          </p>

          <Link href="/contact">
            <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-widest hover:opacity-90 transition">
              Contact Me
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
