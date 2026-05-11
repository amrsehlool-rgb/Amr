import React, { useState, useEffect, memo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Database,
  Smartphone,
  LayoutTemplate,
  Printer,
  Moon,
  Sun,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";

/* ================= DATA ================= */

const cvData = {
  personal: {
    name: "عمرو ناصر محمد سحلول",
    title: "مختص التخطيط والإدارة التشغيلية ونظم المعلومات",
    subTitle: "خبير في التنمية المجتمعية والبحث الميداني",
    phone: "+967775365891",
    email: "amrsehlool@gmail.com",
    location: "اليمن - محافظة البيضاء",
  },

  summary:
    "متخصص متعدد التخصصات بخبرة عملية تتجاوز 6 سنوات في مجالات التخطيط الاستراتيجي والإدارة التشغيلية ونظم المعلومات الإدارية والبحث الميداني والتنمية المجتمعية.",

  education: {
    degree: "بكالوريوس هندسة بترول",
    university: "جامعة حضرموت",
    years: "2011 - 2017",
    grade: "جيد جداً",
  },

  skills: [
    {
      name: "التخطيط الاستراتيجي والتشغيلي",
      level: 95,
      icon: LayoutTemplate,
    },
    {
      name: "الإدارة التشغيلية",
      level: 90,
      icon: Briefcase,
    },
    {
      name: "نظم المعلومات الإدارية",
      level: 85,
      icon: Database,
    },
    {
      name: "البحث الميداني الرقمي",
      level: 90,
      icon: Smartphone,
    },
    {
      name: "المتابعة والتقييم",
      level: 95,
      icon: CheckCircle2,
    },
    {
      name: "إدارة الأداء KPI",
      level: 90,
      icon: TrendingUp,
    },
  ],

  experience: [
    {
      id: 1,
      role: "رئيس قسم الدراسات والتخطيط والإدارة",
      company: "صندوق النظافة وتحسين المدن",
      date: "2021 - الآن",
      details: [
        "إعداد الخطط التشغيلية السنوية.",
        "تحليل الأداء المؤسسي.",
        "إدارة فرق العمل.",
        "متابعة مؤشرات الأداء.",
      ],
    },

    {
      id: 2,
      role: "باحث ميداني",
      company: "AEPX CONSULTING",
      date: "2023 - 2024",
      details: ["تنفيذ التقييمات الميدانية.", "جمع وتحليل البيانات.", "إجراء المقابلات."],
    },
  ],

  languages: [
    {
      lang: "العربية",
      level: "اللغة الأم",
      perc: 100,
    },
    {
      lang: "الإنجليزية",
      level: "متقدم",
      perc: 75,
    },
  ],

  courses: ["التنمية المجتمعية", "البحث السريع بالمشاركة", "جمع البيانات الرقمية"],
};

/* ================= COMPONENTS ================= */

const SkillBar = memo(({ name, level, icon: Icon }) => {
  return (
    <div className="mb-5">
      <div className="mb-2 flex justify-between">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span className="text-sm font-bold">{name}</span>
        </div>

        <span className="text-xs">{level}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
});

const TimelineItem = memo(({ item }) => {
  return (
    <div className="timeline-item border-r-2 border-blue-600 pb-8 pr-5">
      <h3 className="text-lg font-bold">{item.role}</h3>

      <div className="mb-2 text-sm text-blue-600">
        {item.company} | {item.date}
      </div>

      <ul className="space-y-1">
        {item.details.map((detail, index) => (
          <li key={index} className="text-sm text-slate-600">
            • {detail}
          </li>
        ))}
      </ul>
    </div>
  );
});

/* ================= APP ================= */

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(media.matches);

    const handler = (e) => {
      setIsDarkMode(e.matches);
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={isDarkMode ? "dark" : ""} dir="rtl">
      <div className="min-h-screen bg-slate-100 p-5 dark:bg-slate-950">
        {/* controls */}

        <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3 print:hidden">
          <button
            aria-label="تبديل الوضع الليلي"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="rounded-full bg-white p-3 shadow"
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>

          <button
            aria-label="طباعة السيرة الذاتية"
            onClick={handlePrint}
            className="rounded-full bg-blue-600 p-3 text-white shadow"
          >
            <Printer />
          </button>
        </div>

        {/* card */}

        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-900">
          {/* HEADER */}

          <div className="bg-slate-900 p-10 text-white">
            <h1 className="mb-3 text-4xl font-black">{cvData.personal.name}</h1>

            <h2 className="mb-5 text-xl text-blue-400">{cvData.personal.title}</h2>

            <div className="grid gap-3 text-sm md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                {cvData.personal.phone}
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} />
                {cvData.personal.email}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14} />
                {cvData.personal.location}
              </div>
            </div>
          </div>

          {/* BODY */}

          <div className="grid lg:grid-cols-12">
            {/* SIDEBAR */}

            <aside className="bg-slate-50 p-8 lg:col-span-4">
              <h3 className="mb-6 text-xl font-bold">المهارات</h3>

              {cvData.skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}

              <h3 className="mb-6 mt-10 text-xl font-bold">اللغات</h3>

              {cvData.languages.map((lang) => (
                <div key={lang.lang} className="mb-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{lang.lang}</span>
                    <span>{lang.level}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full bg-blue-600" style={{ width: `${lang.perc}%` }} />
                  </div>
                </div>
              ))}
            </aside>

            {/* MAIN */}

            <main className="p-8 lg:col-span-8">
              <section className="mb-12">
                <h3 className="mb-5 text-2xl font-bold">الملخص المهني</h3>

                <p className="leading-8 text-slate-700">{cvData.summary}</p>
              </section>

              <section className="mb-12">
                <h3 className="mb-8 text-2xl font-bold">الخبرات</h3>

                <div className="space-y-8">
                  {cvData.experience.map((item) => (
                    <TimelineItem key={item.id} item={item} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-5 text-2xl font-bold">الدورات</h3>

                <div className="grid gap-3 md:grid-cols-2">
                  {cvData.courses.map((course, index) => (
                    <div key={index} className="rounded-xl bg-slate-50 p-4">
                      {course}
                    </div>
                  ))}
                </div>
              </section>

              <footer className="mt-12 border-t pt-8 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <Users size={14} />
                  المراجع متاحة عند الطلب
                </div>
              </footer>
            </main>
          </div>
        </div>

        {/* PRINT CSS */}

        <style>{`
          body {
            font-family: sans-serif;
          }

          @media print {
            .print\\:hidden {
              display: none !important;
            }

            .timeline-item,
            section {
              page-break-inside: avoid;
              break-inside: avoid;
            }

            @page {
              margin: 0;
              size: A4;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
