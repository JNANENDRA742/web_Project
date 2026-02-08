import Image from "next/image";
import Link from "next/link";

const Page2 = () => {
  return (
    <section className="w-full bg-[#F2F5F8]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        
        {/* LEFT: Text */}
        <div className="flex items-center">
          <div className="max-w-xl px-6 md:px-0">
            
            <h2 className="text-3xl md:text-[48px] mb-8 font-medium md:px-20 text-[#2C4F7C]">
              Find steadiness in the mindset of stress.
            </h2>

            <p className="text-base mb-6 leading-relaxed md:px-20 text-[#2C4F7C]">
              Many adults I work with appear capable and successful on the
              outside, while internally feeling overwhelmed, anxious, or
              emotionally exhausted.
            </p>

            <p className="text-base mb-12 leading-relaxed md:px-20 text-[#2C4F7C]">
              Therapy can be a place to slow down, feel supported, and begin
              understanding what your mind and body have been carrying.
            </p>

            <Link href="/contact">
              <button className="w-full md:w-auto text-[#2C4F7C] md:ml-20 border border-[#2C4F7C] px-8 py-3 text-sm tracking-wide hover:bg-[#2C4F7C] hover:text-[#ebe7df] transition duration-700">
                BEGIN THERAPY →
              </button>
            </Link>

          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative min-h-[300px] md:min-h-full">
          <Image
            src="/page2.jpg"
            alt="Calm therapy space in Santa Monica"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Page2;
