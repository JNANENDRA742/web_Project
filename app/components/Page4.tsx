import Image from "next/image";
import Link from "next/link";

const Page4 = () => {
  return (
    <section className="w-full bg-[#E8EDF3]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        
        {/* LEFT: Image */}
        <div className="relative min-h-[400px] md:min-h-[650px]">
          <Image
            src="/page4.jpeg"
            alt="Calm therapy office in Santa Monica"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT: Text */}
        <div className="flex items-center">
          <div className="max-w-xl px-6 md:px-16 py-16 md:py-20 text-[#2C4F7C]">

            <h1 className="text-3xl md:text-[48px] leading-tight font-medium mb-8 text-[#2C4F7C]">
              You don’t have to navigate this{" "}
              <span className="italic">on your own.</span>
            </h1>

            <p className="text-base font-gopher mb-6 leading-relaxed font-medium text-[#2C4F7C]">
              Therapy can help if you’re experiencing:
            </p>

            <ul className="list-disc font-gopher pl-5 space-y-3 mb-8 ml-2 md:ml-10 text-base">
              <li>Persistent anxiety, worry, or panic</li>
              <li>Feeling tense, on edge, or emotionally exhausted</li>
              <li>Difficulty slowing down or overthinking everything</li>
              <li>Burnout from work or constant internal pressure</li>
              <li>The lingering impact of past or recent trauma</li>
            </ul>

            <p className="text-base font-gopher leading-relaxed">
              My approach is warm, structured, and collaborative—helping you
              feel more grounded, regulated, and connected both inside and
              outside of sessions.
            </p>

            <Link href="/contact">
              <button className="mt-10 w-full border border-[#2C4F7C] px-8 py-3 text-sm tracking-wide text-[#2C4F7C] hover:bg-[#2C4F7C] hover:text-white transition duration-700">
                START THERAPY →
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
