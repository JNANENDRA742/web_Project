import Image from "next/image";
import Link from "next/link";

const Page1 = () => {
  return (
    <section className="w-full py-14 bg-[#F2F5F8]">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Image */}
        <div className="flex justify-start">
          <div className="w-[500px] h-[726px] rounded-t-full bg-[#D6E0EA] overflow-hidden">
            <Image
              src="/page1.png"
              alt="Dr. Maya Reynolds therapy office in Santa Monica"
              width={420}
              height={420}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[64px] leading-tight mb-6 font-medium text-[#2C4F7C]">
            Therapy for anxiety, <br /> trauma & burnout
          </h1>

          <p className="text-lg mb-10 text-[#2E2E2E]">
            Evidence-based therapy for adults in Santa Monica, California.
          </p>

          <Link href="/contact">
            <button className="border border-[#2C4F7C] text-[#2C4F7C] px-8 py-3 text-sm tracking-wide hover:bg-[#2C4F7C] hover:text-white transition duration-700">
              SCHEDULE A CONSULT →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Page1;
