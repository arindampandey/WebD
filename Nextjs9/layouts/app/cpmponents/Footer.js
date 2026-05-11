import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h1 className="text-2xl font-bold text-blue-500">Facebook</h1>
          <p className="text-gray-400 mt-4 text-sm leading-6">
            Building modern web experiences using React, Next.js and Tailwind CSS.
            Passionate about creating clean and responsive UI designs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-all">Home</li>
            <li className="hover:text-white cursor-pointer transition-all">Projects</li>
            <li className="hover:text-white cursor-pointer transition-all">About</li>
            <li className="hover:text-white cursor-pointer transition-all">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Connect</h2>

          <div className="flex gap-4 mt-4">
            <div className="bg-gray-800 hover:bg-blue-500 transition-all p-3 rounded-full cursor-pointer">
              🌐
            </div>

            <div className="bg-gray-800 hover:bg-pink-500 transition-all p-3 rounded-full cursor-pointer">
              📸
            </div>

            <div className="bg-gray-800 hover:bg-blue-400 transition-all p-3 rounded-full cursor-pointer">
              💼
            </div>

            <div className="bg-gray-800 hover:bg-green-500 transition-all p-3 rounded-full cursor-pointer">
              📧
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © 2026 Facebook. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer