import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Understanding Anxiety in High-Achieving Adults",
    date: "Mar 11, 2024",
    image: "/page2.jpg",
    slug: "#",
  },
  {
    id: 2,
    title: "When Burnout Starts to Affect Your Nervous System",
    date: "Mar 11, 2024",
    image: "/blog3.webp",
    slug: "#",
  },
  {
    id: 3,
    title: "Trauma Isn’t Always What You Think It Is",
    date: "Mar 11, 2024",
    image: "/page6.jpeg",
    slug: "#",
  },
  {
    id: 4,
    title: "Learning to Feel Safe in Your Body Again",
    date: "Mar 11, 2024",
    image: "/blog5.jpeg",
    slug: "#",
  },
]

export default function BlogPage2() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 md:gap-y-28">
          {posts.map((post) => (
            <article key={post.id} className="space-y-6">
              
              {/* Image */}
              <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Date */}
              <p className="text-sm text-[#4A6FA5]">
                {post.date}
              </p>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1F3A5F]">
                {post.title}
              </h2>

              {/* Read more */}
              <Link
                href={post.slug}
                className="inline-block underline text-[#1F3A5F] hover:text-[#4A6FA5] transition"
              >
                Read More
              </Link>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
