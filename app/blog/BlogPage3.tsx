export default function BlogPage3() {
  return (
    <section className="bg-[#1F3A5F] py-32">
      <div className="max-w-5xl mx-auto px-8">
        
        {/* Border box */}
        <div className="border border-white/60 px-20 py-24 text-center text-white">
          
          {/* Title */}
          <h2 className="text-[42px] md:text-[48px] font-light mb-6">
            Stay Connected
          </h2>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto mb-14 text-[16px] leading-[1.8] font-light text-white/90">
            Receive thoughtful reflections on anxiety, trauma, and emotional
            well-being—along with practice updates and resources.
          </p>

          {/* Form */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-14">
            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full md:w-[360px]
                px-6 py-4
                bg-white
                text-[#1F3A5F]
                placeholder:text-[#6B7280]
                text-[15px]
                outline-none
              "
            />

            <button
              className="
                border border-white
                px-10 py-4
                text-[12px]
                uppercase
                tracking-[0.25em]
                font-medium
                hover:bg-[#4A6FA5]
                hover:border-[#4A6FA5]
                transition-colors duration-300
              "
            >
              Subscribe
            </button>
          </div>

          {/* Privacy */}
          <p className="text-[14px] font-light text-white/80">
            Your information is kept private and never shared.
          </p>

        </div>
      </div>
    </section>
  )
}
