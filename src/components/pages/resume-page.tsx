'use client';

import { useI18n } from '@/lib/i18n';

interface InternCardProps {
  number: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  showcase: string;
  images?: string[];
  showLinks?: { name: string; url: string }[];
}

function InternCard({ number, company, role, period, bullets, showcase, images, showLinks }: InternCardProps) {
  const { t } = useI18n();

  return (
    <div className="paper-card overflow-hidden">
      {/* Header: Number + Company */}
      <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#A0845C] leading-none mt-1">
              {number}
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B2B2B] leading-tight">
                {company}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#6B5E50] mt-1">{role}</p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#A0845C] whitespace-nowrap mt-2">{period}</span>
        </div>
      </div>

      <div className="archive-divider mx-5 sm:mx-7" />

      {/* Work content & achievements - all visible */}
      <div className="px-5 sm:px-7 py-4">
        <ul className="space-y-3">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-[#3D3D3D] flex gap-3"
            >
              <span className="font-mono text-[#A0845C] text-xs mt-0.5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Showcase area - only when images or links exist */}
        {(images && images.length > 0 || showLinks && showLinks.length > 0) && (
        <div className="mt-5 pt-4 border-t border-dashed border-[#A0845C]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] text-[#A0845C] uppercase tracking-wider">
              {t('resume.showcase')}
            </span>
          </div>

          {images && images.length > 0 && showLinks && showLinks.length > 0 ? (
            /* Left-right layout: image + links */
            <div className="flex gap-5 items-start">
              {/* Left: image taking ~3/4 */}
              <div className="flex-[3] min-w-0 border border-black/[0.04] overflow-hidden">
                <img
                  src={images[0]}
                  alt={company}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Right: text + links */}
              <div className="flex-[1] min-w-0 pt-1">
                <p className="font-mono text-[11px] text-[#6B5E50] mb-3 leading-relaxed">{showcase}</p>
                <ul className="space-y-2">
                  {showLinks.map((link, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-[#A0845C] text-[10px] mt-px shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] text-[#3D3D3D] hover:text-[#8C7045] underline underline-offset-2 decoration-[#A0845C]/30 hover:decoration-[#A0845C]/60 transition-colors leading-relaxed"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {images && images.length > 0
                  ? images.map((src, i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] border border-black/[0.04] overflow-hidden"
                      >
                        <img
                          src={src}
                          alt={`${company} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  : [1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] bg-[#E8E4DF] border border-black/[0.04] flex items-center justify-center"
                      >
                        <span className="font-mono text-[10px] text-[#A0845C]/60 text-center px-2">
                          {t('resume.showcase.placeholder')}
                        </span>
                      </div>
                    ))}
              </div>
              <p className="font-mono text-[11px] text-[#6B5E50] mt-3 leading-relaxed">{showcase}</p>
            </>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const { t } = useI18n();

  const internships = [
    {
      number: t('resume.intern.1.number'),
      company: t('resume.intern.1.company'),
      role: t('resume.intern.1.role'),
      period: t('resume.intern.1.period'),
      bullets: [
        t('resume.intern.1.bullet.1'),
        t('resume.intern.1.bullet.2'),
        t('resume.intern.1.bullet.3'),
      ],
      showcase: t('resume.intern.1.showcase'),
      images: [
        '/alibaba-01.jpg',
      ],
      showLinks: [
        {
          name: '《我们的歌》第六季',
          url: 'https://v.youku.com/v_show/id_XNjQwNzU4Mjc5Ng==.html',
        },
        {
          name: '《奔跑吧》第八季',
          url: 'https://v.youku.com/v_show/id_XNjM4MzI4MDM2MA==.html',
        },
        {
          name: '《是好朋友的周末2024》',
          url: 'https://v.youku.com/v_show/id_XNjQxMTkzNjY4NA==.html',
        },
        {
          name: '《呼喊我的名字》',
          url: 'https://v.youku.com/v_show/id_XNjQxOTg3NzcyMA==.html',
        },
      ],
    },
    {
      number: t('resume.intern.2.number'),
      company: t('resume.intern.2.company'),
      role: t('resume.intern.2.role'),
      period: t('resume.intern.2.period'),
      bullets: [
        t('resume.intern.2.bullet.1'),
        t('resume.intern.2.bullet.2'),
      ],
      showcase: t('resume.intern.2.showcase'),
      images: [
        '/kuaishou-01.jpg',
        '/kuaishou-02.png',
        '/kuaishou-03.png',
      ],
    },
    {
      number: t('resume.intern.3.number'),
      company: t('resume.intern.3.company'),
      role: t('resume.intern.3.role'),
      period: t('resume.intern.3.period'),
      bullets: [
        t('resume.intern.3.bullet.1'),
        t('resume.intern.3.bullet.2'),
      ],
      showcase: t('resume.intern.3.showcase'),
    },
    {
      number: t('resume.intern.4.number'),
      company: t('resume.intern.4.company'),
      role: t('resume.intern.4.role'),
      period: t('resume.intern.4.period'),
      bullets: [
        t('resume.intern.4.bullet.1'),
        t('resume.intern.4.bullet.2'),
      ],
      showcase: t('resume.intern.4.showcase'),
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 pb-20">
        {/* Page header + intro (consistent with social page) */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-2">RESUME FILE</div>
          <h1 className="serif-heading text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            {t('resume.subtitle')}
          </h1>
          <p className="text-sm sm:text-[15px] text-[#4A4A4A] leading-relaxed max-w-3xl whitespace-pre-line">
            {t('resume.intro')}
          </p>
        </div>

        {/* Education section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 bg-[#A0845C] flex items-center justify-center">
              <span className="font-mono text-[10px] text-white font-semibold">EDU</span>
            </span>
            <span className="font-mono text-sm text-[#6B5E50] uppercase tracking-wider">
              {t('profile.edu.title')}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Master */}
            <div className="paper-card p-5 sm:p-6">
              <span className="font-mono text-[10px] text-[#A0845C] uppercase tracking-wider">
                MASTER
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B2B2B] mt-2 leading-tight">
                {t('resume.edu.master.school')}
              </h3>
              <p className="font-mono text-xs text-[#6B5E50] mt-2">{t('resume.edu.master.degree')}</p>
              <p className="font-mono text-[11px] text-[#A0845C] mt-1">{t('resume.edu.master.direction')}</p>
            </div>
            {/* Bachelor */}
            <div className="index-card p-5 sm:p-6">
              <span className="font-mono text-[10px] text-[#6B5E50] uppercase tracking-wider">
                BACHELOR
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B2B2B] mt-2 leading-tight">
                {t('resume.edu.bachelor.school')}
              </h3>
              <p className="font-mono text-xs text-[#6B5E50] mt-2">{t('resume.edu.bachelor.degree')}</p>
              <p className="font-mono text-[11px] text-[#6B5E50] mt-1">{t('resume.edu.bachelor.direction')}</p>
            </div>
          </div>
        </section>

        {/* Internship archive cards */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 bg-[#8C7045] flex items-center justify-center">
              <span className="font-mono text-[10px] text-white font-semibold">EXP</span>
            </span>
            <span className="font-mono text-sm text-[#6B5E50] uppercase tracking-wider">
              Internship Archive
            </span>
          </div>
          <div className="space-y-5">
            {internships.map((intern, i) => (
              <InternCard key={i} {...intern} />
            ))}
          </div>
        </section>

        {/* Download button */}
        <div className="mt-10 text-center">
          <a
            href="/resume.pdf"
            download="强竟瑶简历.pdf"
            className="font-mono text-xs uppercase tracking-wider text-[#A0845C] hover:text-[#8C7045] border border-[#A0845C]/30 hover:border-[#A0845C]/60 px-6 py-3 transition-colors inline-block"
          >
            {t('resume.download')}
          </a>
        </div>
      </div>
    </div>
  );
}
