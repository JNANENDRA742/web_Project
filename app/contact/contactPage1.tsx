import Image from "next/image";

export default function ContactPage1() {
  return (
    <section className="bg-[#F4F7FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-[56px] md:text-[72px] leading-none text-[#2C4F7C] font-normal mb-10">
              Get in Touch
            </h1>

            <p className="text-[#2C4F7C] text-lg mb-4">
              Reaching out is an important first step.
            </p>

            <p className="text-[#2C4F7C] text-lg max-w-md mb-6">
              If you have questions about therapy or would like to schedule an
              initial consultation, I invite you to connect using the options
              below.
            </p>

            {/* Images */}
            <div className="relative">
              <div className="w-[260px]">
                <Image
                  src="/page51.jpeg"
                  alt="Therapy office interior"
                  width={260}
                  height={360}
                  className="object-cover rounded-t-full h-full"
                />
              </div>

              <div className="absolute bottom-[-40px] left-[180px] w-[140px] h-[140px] rounded-full overflow-hidden">
                <Image
                  src="/page52.jpeg"
                  alt="Calm neutral decor"
                  width={140}
                  height={140}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#1F3A5F] text-white px-12 py-14 max-w-lg">
            <p className="leading-[1.8] font-light">
              <span className="font-medium uppercase">
                Please note:
              </span>{" "}
              For privacy and confidentiality, this website does not collect
              sensitive health information through embedded forms. You may
              contact me directly via email or through a secure client portal.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
