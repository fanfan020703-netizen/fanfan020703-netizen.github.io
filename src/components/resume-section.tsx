'use client';

import { useI18n } from '@/lib/i18n';

export default function ResumeSection() {
  const { t, lang } = useI18n();

  return (
    <section id="resume" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-1">{t('resume.title')}</div>
          <h2 className="serif-heading text-xl sm:text-2xl font-medium">
            {t('resume.subtitle')}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">
          {/* Left: Resume preview card */}
          <div className="lg:flex-[3] paper-card p-6 sm:p-8">
            <div className="mono-label mb-1">
              {t('resume.preview.title')}
            </div>

            {/* PDF Preview area */}
            <div className="w-full aspect-[3/4] bg-[#E0DCD5] border border-black/[0.06] flex items-center justify-center mb-5">
              <div className="text-center px-4">
                <svg
                  className="mx-auto mb-3 text-[#8C7045]/40"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="mono-label text-[10px]">
                  {lang === 'zh' ? '简历 PDF 预览区域' : 'Resume PDF Preview Area'}
                </span>
                <br />
                <span className="font-mono text-[10px] text-[#8C7045]/60">
                  {lang === 'zh' ? '请替换为实际 PDF 文件' : 'Replace with actual PDF file'}
                </span>
              </div>
            </div>

            {/* Download button */}
            <button className="w-full font-mono text-xs tracking-wider uppercase py-3 border border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#FBF8F1] transition-all duration-200">
              {t('resume.download')}
            </button>
          </div>

          {/* Right: Summary card */}
          <div className="lg:flex-[2] space-y-5">
            {/* Education */}
            <div className="paper-card p-6">
              <div className="section-title mb-3">
                {t('resume.education.title')}
              </div>
              <div className="space-y-4">
                <div className="archive-divider pb-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-serif text-sm font-medium text-[#2B2B2B]">
                      {t('resume.edu.1.school')}
                    </span>
                    <span className="font-mono text-[10px] text-[#8C7045] whitespace-nowrap">
                      {t('resume.edu.1.year')}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#7A6548]">
                    {t('resume.edu.1.degree')}
                  </span>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-serif text-sm font-medium text-[#2B2B2B]">
                      {t('resume.edu.2.school')}
                    </span>
                    <span className="font-mono text-[10px] text-[#8C7045] whitespace-nowrap">
                      {t('resume.edu.2.year')}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#7A6548]">
                    {t('resume.edu.2.degree')}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="paper-card p-6">
              <div className="section-title mb-3">
                {t('resume.experience.title')}
              </div>
              <div className="space-y-4">
                <div className="archive-divider pb-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-serif text-sm font-medium text-[#2B2B2B]">
                      {t('resume.exp.1.company')}
                    </span>
                    <span className="font-mono text-[10px] text-[#8C7045] whitespace-nowrap">
                      {t('resume.exp.1.year')}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#8C7045] mb-1">
                    {t('resume.exp.1.role')}
                  </div>
                  <p className="text-xs text-[#7A6548] leading-relaxed">
                    {t('resume.exp.1.desc')}
                  </p>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-serif text-sm font-medium text-[#2B2B2B]">
                      {t('resume.exp.2.company')}
                    </span>
                    <span className="font-mono text-[10px] text-[#8C7045] whitespace-nowrap">
                      {t('resume.exp.2.year')}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#8C7045] mb-1">
                    {t('resume.exp.2.role')}
                  </div>
                  <p className="text-xs text-[#7A6548] leading-relaxed">
                    {t('resume.exp.2.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="index-card p-6">
              <div className="section-title mb-3">
                {t('resume.skills.title')}
              </div>
              <div className="space-y-0">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2 border-b border-dashed border-[#8C7045]/20 last:border-b-0"
                  >
                    <span className="font-mono text-[10px] text-[#8C7045]">
                      {String(i).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-xs text-[#2B2B2B]">
                      {t(`resume.skill.${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
