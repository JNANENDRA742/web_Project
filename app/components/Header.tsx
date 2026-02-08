import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
        
        {/* Logo / Title */}
        <Link
          href="/"
          className="text-2xl font-normal text-blue-700 font-serif"
        >
          Dr. Maya Reynolds
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {["Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-slate-700 text-sm tracking-wide hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}

          
        </nav>

      </div>
    </header>
  );
}
