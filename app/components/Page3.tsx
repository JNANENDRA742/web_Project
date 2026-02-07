import Image from "next/image";

const specialties = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/image3.webp",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/image4.webp",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/image5.webp",
  },
];

export default function Page3() {
  return (
    <section className="bg-[#fbf7f2] py-28 font-gopher">
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-center text-4xl font-normal text-[#2f3b1f] mb-20">
          My Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-[#e5e0da] border border-[#2f3b1f]/70 p-10 flex flex-col justify-between min-h-[520px]"
            >
              <div>
                <h3 className="text-xl font-normal mb-4 text-[#2f3b1f]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#2f3b1f]/90">
                  {item.description}
                </p>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="w-56 h-56 rounded-full overflow-hidden">
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