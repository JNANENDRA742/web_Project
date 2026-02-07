import Image from "next/image";

export default function Page5() {
  return (
    <section className="bg-[#ebe7df] h-[900px] flex items-center">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-medium text-[#2f3b1f] mb-8">
            Hi, I’m Lilac.
          </h1>

          <p className="text-[#2f3b1f] leading-relaxed tracking-wide max-w-md mb-10">

            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>

          <button className="border border-[#2f3b1f] px-8 py-3 text-sm tracking-wide hover:bg-[#2f3b1f] hover:text-[#ebe7df] transition duration-900">
            LET&apos;S CHAT →
          </button>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center">
          {/* Tall rounded image */}
          <div className="relative w-[420px] h-[598.938px] overflow-hidden rounded-t-[1000px]">
            <Image
                src="/image7.webp"
                alt="Lilac bouquet"
                fill
                className="object-conatin"
                priority
            />
            </div>


          {/* Overlapping circle image */}
          <div className="absolute -bottom-20 -right-22 w-72 h-72 rounded-full overflow-hidden ">
            <Image
              src="/image8.webp"
              alt="Flowers"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
