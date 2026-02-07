import Image from "next/image";
const Page4 = () => {
  return (
    <section className="w-full bg-[#d6d4de]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* LEFT: Image */}
          <div className="relative">
            <Image
              src="/image61.webp"
              alt="Therapy lifestyle"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT: Text */}
          <div className="flex items-center">
            <div className="max-w-xl px-16 py-20 text-[#2f3b1f]">
              <h1 className="text-[48px] leading-tight font-medium mb-8">
                You don’t have to do this all{" "}
                <span className="italic">alone.</span>
              </h1>

              <p className="text-base font-gopher mb-6 leading-relaxed font-medium">
                If you are facing any of these, there’s hope:
              </p>

              <ul className="list-disc font-gopher pl-5 space-y-3 mb-8 ml-10 text-base ">
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>

              <p className="text-base font-gopher leading-relaxed">
                With empathy and guidance, we’ll work together to navigate the
                challenges life throws your way.
              </p>
              <button className="px-8 py-4 w-full border border-[#2f3b1f] uppercase text-sm tracking-wide hover:bg-[#2f3b1f] hover:text-white transition duration-900">
                work with me→
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Page4
