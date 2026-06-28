'use client';

import { useI18n } from '@/lib/i18n';

interface SocialItem {
  nameKey: string;
  descKey: string;
  url: string;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    nameKey: 'social.xiaohongshu.name',
    descKey: 'social.xiaohongshu.desc',
    url: '#',
  },
  {
    nameKey: 'social.wechat.name',
    descKey: 'social.wechat.desc',
    url: '#',
  },
  {
    nameKey: 'social.bilibili.name',
    descKey: 'social.bilibili.desc',
    url: '#',
  },
  {
    nameKey: 'social.linkedin.name',
    descKey: 'social.linkedin.desc',
    url: '#',
  },
  {
    nameKey: 'social.github.name',
    descKey: 'social.github.desc',
    url: '#',
  },
];

export default function SocialSection() {
  const { t } = useI18n();

  return (
    <section id="social" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-1">{t('social.title')}</div>
          <h2 className="serif-heading text-xl sm:text-2xl font-medium">
            {t('social.subtitle')}
          </h2>
        </div>

        {/* Social index card */}
        <div className="paper-card overflow-hidden">
          {SOCIAL_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-dashed border-black/[0.06] last:border-b-0 group transition-all duration-200 hover:bg-[#C6A46E]/10"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="font-mono text-[10px] text-[#8C7045] w-6 hidden sm:block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-sm text-[#2B2B2B] group-hover:text-[#8C7045] transition-colors duration-200 mb-0.5">
                    {t(item.nameKey)}
                  </div>
                  <div className="font-sans text-xs text-[#7A6548] truncate">
                    {t(item.descKey)}
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-[#8C7045] ml-4 whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                {t('social.visit')}
              </span>
            </a>
          ))}
        </div>

        {/* Decorative note */}
        <div className="mt-5 text-center">
          <span className="mono-label text-[10px]">
            &mdash;&mdash; END OF SOCIAL INDEX &mdash;&mdash;
          </span>
        </div>
      </div>
    </section>
  );
}
