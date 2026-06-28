'use client';

import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const { t, lang } = useI18n();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: 'url(/contact-bg.jpg)' }}
    >
      {/* Business card - landscape rectangle */}
      <div
        className="w-full max-w-2xl rounded-[1px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FAF8F3 0%, #F5F1E8 40%, #F8F5EF 100%)',
          boxShadow: '0 4px 24px rgba(80,60,30,0.12), 0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Left: Photo */}
          <div className="sm:w-[38%] shrink-0">
            <div className="aspect-[3/4] sm:aspect-auto sm:h-full relative overflow-hidden">
              <img
                src="/contact-photo.jpg"
                alt="Contact Photo"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay at bottom of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="flex-1 px-6 py-7 sm:px-8 sm:py-8 flex flex-col justify-between">
            {/* Header */}
            <div className="mb-5">
              <div className="section-title mb-1.5 text-[9px]">CONTACT CARD</div>
              <h1 className="serif-heading text-lg sm:text-xl font-semibold leading-tight">
                {t('contact.subtitle')}
              </h1>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-[#8C7045]/20 mb-4" />

            {/* Contact info - 2 column grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-0 flex-1">
              {/* Email */}
              <div className="py-2.5 border-b border-dashed border-[#8C7045]/12">
                <span className="mono-label text-[9px] block mb-1">{t('contact.email.label')}</span>
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`mailto:${t('contact.email.value')}`}
                    className="font-mono text-[11px] sm:text-xs text-[#2B2B2B] hover:text-[#8C7045] transition-colors duration-200 break-all"
                  >
                    {t('contact.email.value')}
                  </a>
                  <a
                    href={`mailto:${t('contact.email.value2')}`}
                    className="font-mono text-[11px] sm:text-xs text-[#2B2B2B] hover:text-[#8C7045] transition-colors duration-200 break-all"
                  >
                    {t('contact.email.value2')}
                  </a>
                </div>
              </div>

              {/* WeChat */}
              <div className="py-2.5 border-b border-dashed border-[#8C7045]/12">
                <span className="mono-label text-[9px] block mb-1">{t('contact.wechat.label')}</span>
                <span className="font-mono text-[11px] sm:text-xs text-[#2B2B2B]">{t('contact.wechat.value')}</span>
              </div>

              {/* Xiaohongshu */}
              <div className="py-2.5 border-b border-dashed border-[#8C7045]/12">
                <span className="mono-label text-[9px] block mb-1">{t('contact.xiaohongshu.label')}</span>
                <span className="font-mono text-[11px] sm:text-xs text-[#2B2B2B]">{t('contact.xiaohongshu.value')}</span>
              </div>

              {/* Douyin */}
              <div className="py-2.5 border-b border-dashed border-[#8C7045]/12">
                <span className="mono-label text-[9px] block mb-1">{t('contact.douyin.label')}</span>
                <span className="font-mono text-[11px] sm:text-xs text-[#2B2B2B]">{t('contact.douyin.value')}</span>
              </div>
            </div>

            {/* Note + Stamp */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#8C7045]/15">
              <p className="text-[10px] sm:text-[11px] leading-[1.8] text-[#6A6A6A] text-center mb-3">
                {t('contact.note')}
              </p>
              <div className="flex items-center justify-center gap-1.5">
                <div className="w-5 h-5 border border-[#8C7045]/25 flex items-center justify-center">
                  <span className="font-serif text-[9px] text-[#8C7045]">
                    {lang === 'zh' ? '联' : 'C'}
                  </span>
                </div>
                <span className="mono-label text-[8px]">
                  {lang === 'zh' ? '联系档案 — 长期有效' : 'Contact File — Always Valid'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
