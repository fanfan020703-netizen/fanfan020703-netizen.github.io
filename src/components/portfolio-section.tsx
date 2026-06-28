'use client';

import { useI18n } from '@/lib/i18n';
import { useState } from 'react';

interface PortfolioItem {
  id: number;
  titleKey: string;
  typeKey: string;
  tagsKey: string;
  descKey: string;
  year: string;
}

const ITEMS: PortfolioItem[] = [
  { id: 1, titleKey: 'portfolio.item.1.title', typeKey: 'portfolio.item.1.type', tagsKey: 'portfolio.item.1.tags', descKey: 'portfolio.item.1.desc', year: '2024' },
  { id: 2, titleKey: 'portfolio.item.2.title', typeKey: 'portfolio.item.2.type', tagsKey: 'portfolio.item.2.tags', descKey: 'portfolio.item.2.desc', year: '2024' },
  { id: 3, titleKey: 'portfolio.item.3.title', typeKey: 'portfolio.item.3.type', tagsKey: 'portfolio.item.3.tags', descKey: 'portfolio.item.3.desc', year: '2023' },
  { id: 4, titleKey: 'portfolio.item.4.title', typeKey: 'portfolio.item.4.type', tagsKey: 'portfolio.item.4.tags', descKey: 'portfolio.item.4.desc', year: '2023' },
  { id: 5, titleKey: 'portfolio.item.5.title', typeKey: 'portfolio.item.5.type', tagsKey: 'portfolio.item.5.tags', descKey: 'portfolio.item.5.desc', year: '2022' },
];

export default function PortfolioSection() {
  const { t, lang } = useI18n();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = selectedId !== null ? ITEMS.find((item) => item.id === selectedId) : null;

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-1">{t('portfolio.title')}</div>
          <h2 className="serif-heading text-xl sm:text-2xl font-medium">
            {t('portfolio.subtitle')}
          </h2>
        </div>

        {/* Index table */}
        <div className="paper-card overflow-hidden">
          {/* Table header */}
          <div className="index-card px-4 sm:px-6 py-3 flex items-center gap-4 border-b border-[#8C7045]/20">
            <span className="font-mono text-[10px] tracking-wider text-[#8C7045] w-8 hidden sm:block">
              No.
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#8C7045] flex-1 min-w-0">
              {t('portfolio.col.title')}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#8C7045] w-16 hidden sm:block text-center">
              {t('portfolio.col.type')}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#8C7045] w-12 hidden md:block text-center">
              {t('portfolio.col.year')}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#8C7045] w-32 hidden lg:block">
              {t('portfolio.col.tags')}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#8C7045] w-16 text-right">
              {t('portfolio.col.action')}
            </span>
          </div>

          {/* Table rows */}
          {ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
              className={`w-full px-4 sm:px-6 py-3.5 flex items-center gap-4 text-left border-b border-dashed border-black/[0.06] last:border-b-0 transition-all duration-200 hover:bg-[#C6A46E]/10 ${
                selectedId === item.id ? 'bg-[#C6A46E]/15' : ''
              }`}
            >
              <span className="font-mono text-[10px] text-[#8C7045] w-8 hidden sm:block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-sm text-[#2B2B2B] flex-1 min-w-0 truncate">
                {t(item.titleKey)}
              </span>
              <span className="font-mono text-[10px] text-[#7A6548] w-16 hidden sm:block text-center">
                {t(item.typeKey)}
              </span>
              <span className="font-mono text-[10px] text-[#8C7045] w-12 hidden md:block text-center">
                {item.year}
              </span>
              <span className="font-mono text-[10px] text-[#7A6548] w-32 hidden lg:block truncate">
                {t(item.tagsKey)}
              </span>
              <span className="font-mono text-xs text-[#8C7045] w-16 text-right">
                {t('portfolio.view')}
              </span>
            </button>
          ))}
        </div>

        {/* Detail card */}
        {selectedItem && (
          <div className="mt-5 paper-card-warm p-6 sm:p-8 fade-in-up">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="mono-label mb-1">
                  {t('portfolio.detail.title')}
                </div>
                <h3 className="serif-heading text-lg sm:text-xl font-medium">
                  {t(selectedItem.titleKey)}
                </h3>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="font-mono text-xs text-[#7A6548] hover:text-[#2B2B2B] transition-colors duration-200 whitespace-nowrap"
              >
                {t('portfolio.detail.close')} &times;
              </button>
            </div>

            <div className="archive-divider mb-4" />

            <div className="flex flex-wrap gap-4 mb-4">
              <div>
                <span className="mono-label text-[10px] block mb-0.5">
                  {t('portfolio.col.type')}
                </span>
                <span className="font-mono text-xs text-[#2B2B2B]">
                  {t(selectedItem.typeKey)}
                </span>
              </div>
              <div>
                <span className="mono-label text-[10px] block mb-0.5">
                  {t('portfolio.col.year')}
                </span>
                <span className="font-mono text-xs text-[#2B2B2B]">
                  {selectedItem.year}
                </span>
              </div>
              <div>
                <span className="mono-label text-[10px] block mb-0.5">
                  {t('portfolio.col.tags')}
                </span>
                <span className="font-mono text-xs text-[#2B2B2B]">
                  {t(selectedItem.tagsKey)}
                </span>
              </div>
            </div>

            <p className="text-sm leading-[1.8] text-[#4A4039] mb-5">
              {t(selectedItem.descKey)}
            </p>

            <div className="flex gap-3">
              <button className="font-mono text-xs tracking-wider uppercase px-4 py-2 border border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#FBF8F1] transition-all duration-200">
                {t('portfolio.open')}
              </button>
              <button className="font-mono text-xs tracking-wider uppercase px-4 py-2 border border-[#8C7045]/30 text-[#7A6548] hover:border-[#8C7045] hover:text-[#2B2B2B] transition-all duration-200">
                {t('portfolio.download')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
