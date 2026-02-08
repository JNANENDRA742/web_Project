import Image from "next/image";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "I help adults who feel stuck in cycles of worry, overthinking, or physical tension. Together, we work on calming both the mind and body so you can feel more grounded and at ease in daily life.",
    image: "/page31.jpeg",
  },
  {
    title: "Trauma & EMDR",
    description:
      "I work with both single-incident and complex trauma using a paced, supportive approach. EMDR and body-based techniques help process past experiences while prioritizing safety and stability.",
    image: "/page32.jpeg",
  },
  {
    title: "Burnout & High Achievers",
    description:
      "For professionals and creatives feeling depleted or disconnected, therapy can be a space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
    image: "/page33.jpeg",
  },
];

export default function Page3() {
  return (
    <section className="bg-[#F2F5F8] py-20 md:py-28 font-gopher">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <h2 className="text-center text-3xl md:text-4xl font-normal text-[#2C4F7C] mb-14 md:mb-20">
          Areas I Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-[#E3EBF3] border border-[#2C4F7C]/40 p-8 md:p-10 flex flex-col justify-between min-h-[480px] md:min-h-[520px]"
            >
              <div>
                <h3 className="text-lg md:text-xl font-normal mb-4 text-[#2C4F7C]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#2C4F7C]">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 md:mt-12 flex justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-[#2C4F7C]/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
