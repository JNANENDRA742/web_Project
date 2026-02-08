import Image from "next/image";

export default function BlogPage1() {
  return (
    <main className="bg-[#F4F7FB] text-[#1F3A5F]">
      <section className="py-8 md:py-2">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[280px] sm:w-[340px] md:w-[420px] h-[420px] sm:h-[520px] md:h-[620px] overflow-hidden rounded-t-[1000px]">
              <Image
                src="/blog1.webp"
                alt="Therapy reflections"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-8 md:mb-10 text-[#1F3A5F]">
              Reflections & Resources
            </h1>

            <p className="max-w-md mx-auto md:mx-0 leading-[1.9] mb-6 text-[#2C4F7C]">
              A space where I share thoughts on<br />
              anxiety, trauma, burnout,<br />
              and the process of healing<br />
              at a human pace.
            </p>

            <p className="font-semibold text-[#1F3A5F]">
              I’m glad you found your way here.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
