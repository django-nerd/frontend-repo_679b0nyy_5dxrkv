import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400"></div>
            <span className="text-white font-semibold">عرض تقديمي</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#intro" className="hover:text-white transition">مقدمة</a>
            <a href="#outline" className="hover:text-white transition">الأجندة</a>
            <a href="#solution" className="hover:text-white transition">الحل</a>
            <a href="#proof" className="hover:text-white transition">الدليل</a>
            <a href="#cta" className="hover:text-white transition">التالي</a>
          </nav>
          <button className="md:hidden text-white/90">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
