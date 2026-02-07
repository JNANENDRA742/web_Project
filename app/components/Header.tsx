import React from 'react'

const Header = () => {
  return (
    <header className="w-full py-6">
        <div className="max-w-1xl mx-auto px-20 flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl font-medium">Lilac Template</div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-9 text-1xl">
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
  )
}

export default Header
