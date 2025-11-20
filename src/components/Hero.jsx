import React from 'react'
import Spline from '@splinetool/react-spline'
import { MousePointer2, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden rounded-3xl">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="max-w-2xl ms-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/90 bg-black/30 px-3 py-1 rounded-full border border-white/10 mb-4">
              <MousePointer2 className="size-3.5 md:size-4" />
              <span>يحاكي الحركة — تفاعلي وحديث</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              صفحة عرض تقديمي عربية عصرية
            </h1>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6">
              صُممت لتقدّم محتوى العرض التقديمي الخاص بك بأسلوب بصري أنيق، مع لمسات زجاجية وتفاعل سلس.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#outline" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">
                ابدأ الاستعراض
              </a>
              <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition">
                <Download className="size-4" />
                تنزيل نسخة PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
