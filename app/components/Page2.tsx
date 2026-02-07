import Image from "next/image"

const Page2 = () => {
  return (
    <section className="w-full bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
              {/* LEFT: Text */}
              <div className="flex items-center">
                <div className="max-w-xl ">
                  <h2 className="text-[48px] mb-8 font-medium px-20">
                    Live a fulfilling life.
                  </h2>
    
                  <p className="text-base mb-6 leading-relaxed px-20">
                    Life can be challenging—especially when you're trying to balance
                    your personal and professional life.
                  </p>
    
                  <p className="text-base mb-12 leading-relaxed px-20">
                    It's easy to feel like you're alone in facing these challenges,
                    but I want you to know that I'm here to help.
                  </p>
    
                  <button className="px-8 py-4 w-full border border-[#2f3b1f] uppercase text-sm tracking-wide hover:bg-[#2f3b1f] hover:text-white transition">
                    Get in touch →
                  </button>
                </div>
              </div>
    
              {/* RIGHT: Image */}
              <div className="relative">
                <Image
                  src="/image2.jpeg"
                  alt="Therapy lifestyle"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
  )
}

export default Page2
