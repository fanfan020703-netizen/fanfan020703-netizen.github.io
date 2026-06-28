'use client';

import { useI18n } from '@/lib/i18n';
import type { PageId } from '@/app/page';

interface BookNavigationProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

const TABS: { id: PageId; labelKey: string; color: string }[] = [
  { id: 'profile', labelKey: 'nav.profile', color: '#C6A46E' },
  { id: 'resume', labelKey: 'nav.resume', color: '#B8956A' },
  { id: 'portfolio', labelKey: 'nav.portfolio', color: '#A68B5B' },
  { id: 'social', labelKey: 'nav.social', color: '#C4A47A' },
  { id: 'contact', labelKey: 'nav.contact', color: '#BFA068' },
];

export default function BookNavigation({ currentPage, onPageChange }: BookNavigationProps) {
  const { t, lang, toggleLang } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-desk/90 backdrop-blur-sm border-b border-[#8C7045]/10">
      <div className="max-w-full mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Archive label */}
          <button
            onClick={() => onPageChange('profile')}
            className="font-mono text-[10px] sm:text-xs tracking-[0.15em] text-[#8C7045]/70 uppercase hover:text-[#8C7045] transition-colors duration-200 shrink-0"
          >
            {lang === 'zh' ? '档案馆' : 'Archive'}
          </button>

          {/* Center: Tab navigation — sticky note style */}
          <div className="flex items-end gap-0.5 sm:gap-1">
            {TABS.map((tab) => {
              const isActive = currentPage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onPageChange(tab.id)}
                  className={`relative px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-[10px] sm:text-xs tracking-wide transition-all duration-300 rounded-t-sm ${
                    isActive
                      ? 'text-[#2B2B2B] -translate-y-0.5'
                      : 'text-[#7A6548]/70 hover:text-[#7A6548] hover:-translate-y-0.5'
                  }`}
                  style={{
                    backgroundColor: isActive ? tab.color : 'transparent',
                    boxShadow: isActive
                      ? `0 -2px 8px ${tab.color}30, inset 0 1px 0 rgba(255,255,255,0.2)`
                      : 'none',
                  }}
                >
                  {/* Sticky note top edge effect */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm"
                      style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                    />
                  )}
                  <span className="hidden sm:inline">{t(tab.labelKey)}</span>
                  <span className="sm:hidden">
                    {tab.id === 'profile' ? (lang === 'zh' ? '介绍' : 'Bio') :
                     tab.id === 'resume' ? (lang === 'zh' ? '简历' : 'CV') :
                     tab.id === 'portfolio' ? (lang === 'zh' ? '作品' : 'Works') :
                     tab.id === 'social' ? (lang === 'zh' ? '社交' : 'Social') :
                     (lang === 'zh' ? '联系' : 'Contact')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Language toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-[10px] sm:text-xs tracking-wide px-2 sm:px-3 py-1.5 border border-[#8C7045]/20 text-[#7A6548] hover:border-[#8C7045]/40 hover:text-[#2B2B2B] transition-all duration-200 shrink-0"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>
        </div>
      </div>
    </nav>
  );
}
