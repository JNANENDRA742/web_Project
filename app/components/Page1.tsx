import Image from "next/image"

const Page1 = () => {
  return (
    <section className="w-full py-14">
            <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              {/* Image */}
              <div className="flex justify-start">
                <div className="w-[500px] h-[726px] rounded-t-full bg-gray-300 overflow-hidden">
                  <Image
                    src="/image1.jpeg"
                    alt="Therapy session"
                    width={420}
                    height={420}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
    
              {/* Text */}
              <div className="flex flex-col items-center justify-center ">
                <h1 className="text-[64px] leading-tight mb-6 font-medium">
                  Live your life <br /> in full bloom
                </h1>
    
                <p className="text-lg mb-10">
                  Therapy for Adults in Minneapolis, MN.
                </p>
    
                <button className="px-8 py-4 border border-[rgb(34, 54, 20)] uppercase text-sm tracking-wide hover:bg-[#2f3b1f] hover:text-white transition duration-900">
                  Connect with me →
                </button>
              </div>
            </div>
          </section>
  )
}

export default Page1
