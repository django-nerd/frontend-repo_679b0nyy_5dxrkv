import React from 'react'

const sections = [
  {
    id: 'intro',
    title: 'مقدمة',
    points: [
      'لمحة سريعة عن الفكرة والمشكلة التي نحلّها',
      'لماذا الآن؟ الفرصة والسياق',
      'الأهداف الرئيسية للعرض'
    ],
  },
  {
    id: 'outline',
    title: 'الأجندة',
    points: [
      'نظرة عامة على المحتوى',
      'المسار الذي سنتّبعه خطوة بخطوة',
      'نهاية واضحة مع دعوة لاتخاذ إجراء'
    ],
  },
  {
    id: 'solution',
    title: 'الحل',
    points: [
      'الميزات الأساسية للحل المقترح',
      'القيمة التي يضيفها للمستخدمين',
      'لماذا نحن مختلفون'
    ],
  },
  {
    id: 'proof',
    title: 'الدليل والنتائج',
    points: [
      'أرقام ومؤشرات أداء',
      'دراسات حالة مختصرة',
      'آراء العملاء'
    ],
  },
  {
    id: 'cta',
    title: 'الخطوة التالية',
    points: [
      'التواصل أو تجربة المنتج',
      'الجدول الزمني المقترح',
      'طرق الدعم والمتابعة'
    ],
  },
]

const Sections = () => {
  return (
    <section id="outline" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {sections.map((s) => (
            <div key={s.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{s.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-white/85 leading-relaxed">
                {s.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sections
