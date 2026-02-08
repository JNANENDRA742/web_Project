import Image from "next/image";
import Link from "next/link";

export default function Page5() {
  return (
    <section className="bg-[#E8EDF3] min-h-[900px] flex items-center py-20 md:py-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2C4F7C] mb-8">
            Hi, I’m Dr. Maya Reynolds.
          </h1>

          <p className="text-[#2C4F7C] leading-relaxed tracking-wide max-w-md mx-auto md:mx-0 mb-10">
            I’m a licensed clinical psychologist based in Santa Monica, California,
            offering therapy for adults who feel overwhelmed by anxiety, burnout,
            or the lingering effects of past experiences. My approach is warm,
            collaborative, and grounded—helping you better understand both the
            emotional and physical patterns that keep you stuck.
          </p>

          <Link href="/contact">
            <button className="w-full md:w-auto border border-[#2C4F7C] px-8 py-3 text-sm tracking-wide text-[#2C4F7C] hover:bg-[#2C4F7C] hover:text-white transition duration-700">
              WORK WITH ME →
            </button>
          </Link>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center mt-16 md:mt-0">
          
          {/* Tall rounded image */}
          <div className="relative w-[280px] h-[400px] md:w-[420px] md:h-[598.938px] overflow-hidden rounded-t-[1000px]">
            <Image
              src="/page1.png"
              alt="Dr. Maya Reynolds, Clinical Psychologist"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping circle image */}
          <div className="absolute -bottom-12 right-0 md:-bottom-20 md:-right-22 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
            <Image
              src="/page51.jpeg"
              alt="Calm therapy office detail"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
