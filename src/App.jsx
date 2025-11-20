import React from 'react'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-white">
      {/* Background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
      </div>

      <Navbar />

      <main className="max-w-[1600px] mx-auto px-4 md:px-8">
        <Hero />
        <Sections />
        {/* Call to action card */}
        <section id="cta" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">هل تريد تحويل عرض PowerPoint إلى صفحة ويب؟</h3>
                <p className="text-white/80">يمكننا استيراد النقاط والعناوين وتحويلها إلى أقسام واضحة متجاوبة تعمل على كل الأجهزة.</p>
              </div>
              <a href="#intro" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">
                ابدأ الآن
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
