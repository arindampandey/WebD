import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-blue-500 cursor-pointer">
          Facebook
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer transition-all">
            Home
          </li>

          <li className="hover:text-white cursor-pointer transition-all">
            Projects
          </li>

          <li className="hover:text-white cursor-pointer transition-all">
            Services
          </li>

          <li className="hover:text-white cursor-pointer transition-all">
            About
          </li>

          <li className="hover:text-white cursor-pointer transition-all">
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-4">
          
          <button className="hidden md:block bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all">
            Login
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-all">
            Get Started
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar