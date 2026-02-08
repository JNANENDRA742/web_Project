import Image from "next/image";

export default function OurOfficeSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-[#2C4F7C] mb-6 font-serif">
            A Calm Space for Healing
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Therapy takes place in a quiet, welcoming office designed to help
            you feel grounded, safe, and at ease. The space is intentionally
            calm and private—offering room to slow down, reflect, and focus on
            what matters most.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            In-person sessions are available in Santa Monica, with secure
            telehealth options for clients located throughout California.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Image 1 */}
          <div className="relative h-[360px] rounded-lg overflow-hidden">
            <Image
              src="/office1.png"
              alt="Therapy office seating area"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-[360px] rounded-lg overflow-hidden">
            <Image
              src="/office2.png"
              alt="Warm and calm therapy office details"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Supporting Details */}
        <div className="mt-14 text-slate-600 text-sm">
          <p>
            Located in <span className="font-medium text-slate-800">Santa Monica, California</span> •
            In-person & hybrid sessions available
          </p>
        </div>

      </div>
    </section>
  );
}
