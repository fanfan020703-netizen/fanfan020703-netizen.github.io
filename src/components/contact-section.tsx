'use client';

import { useI18n } from '@/lib/i18n';

export default function ContactSection() {
  const { t, lang } = useI18n();

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-1">{t('contact.title')}</div>
          <h2 className="serif-heading text-xl sm:text-2xl font-medium">
            {t('contact.subtitle')}
          </h2>
        </div>

        {/* Contact card */}
        <div className="max-w-2xl mx-auto">
          <div className="index-card p-6 sm:p-8">
            {/* Contact info rows */}
            <div className="space-y-0 mb-6">
              {/* Email */}
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-1 sm:gap-4 py-3 border-b border-dashed border-[#8C7045]/20">
                <span className="mono-label text-[10px] w-20 shrink-0">
                  {t('contact.email.label')}
                </span>
                <a
                  href={`mailto:${t('contact.email.value')}`}
                  className="font-mono text-sm text-[#2B2B2B] hover:text-[#8C7045] transition-colors duration-200 break-all"
                >
                  {t('contact.email.value')}
                </a>
              </div>

              {/* WeChat */}
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-1 sm:gap-4 py-3 border-b border-dashed border-[#8C7045]/20">
                <span className="mono-label text-[10px] w-20 shrink-0">
                  {t('contact.wechat.label')}
                </span>
                <span className="font-mono text-sm text-[#2B2B2B]">
                  {t('contact.wechat.value')}
                </span>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-1 sm:gap-4 py-3 border-b border-dashed border-[#8C7045]/20">
                <span className="mono-label text-[10px] w-20 shrink-0">
                  LinkedIn
                </span>
                <a
                  href="#"
                  className="font-mono text-sm text-[#2B2B2B] hover:text-[#8C7045] transition-colors duration-200"
                >
                  linkedin.com/in/qiangjingyao
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-1 sm:gap-4 py-3">
                <span className="mono-label text-[10px] w-20 shrink-0">
                  GitHub
                </span>
                <a
                  href="#"
                  className="font-mono text-sm text-[#2B2B2B] hover:text-[#8C7045] transition-colors duration-200"
                >
                  github.com/qiangjingyao
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="archive-divider pt-4">
              <p className="text-sm leading-[1.8] text-[#4A4039]">
                {t('contact.note')}
              </p>
            </div>

            {/* Decorative stamp */}
            <div className="mt-5 flex items-center gap-2">
              <div className="w-6 h-6 border border-[#8C7045]/30 flex items-center justify-center">
                <span className="font-serif text-[10px] text-[#8C7045]">
                  {lang === 'zh' ? '联' : 'C'}
                </span>
              </div>
              <span className="mono-label text-[10px]">
                {lang === 'zh' ? '联系档案 — 长期有效' : 'Contact File — Always Valid'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 text-center">
          <div className="archive-divider mb-6" />
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-serif text-sm text-[#2B2B2B]">
              {t('footer.copyright')}
            </span>
          </div>
          <span className="mono-label text-[10px]">
            {t('footer.note')} &mdash; {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </section>
  );
}
