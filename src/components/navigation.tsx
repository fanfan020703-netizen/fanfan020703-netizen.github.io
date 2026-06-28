'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'profile', labelKey: 'nav.profile' },
  { id: 'resume', labelKey: 'nav.resume' },
  { id: 'portfolio', labelKey: 'nav.portfolio' },
  { id: 'social', labelKey: 'nav.social' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export default function Navigation() {
  const { t, lang, toggleLang } = useI18n();
  const [activeSection, setActiveSection] = useState('profile');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);

    // Determine active section
    const sections = NAV_ITEMS.map((item) => ({
      id: item.id,
      el: document.getElementById(item.id),
    }));

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = sections[i].el;
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Always scroll to top when clicking the same active tab
  const handleNavClick = (id: string) => {
    if (id === activeSection) {
      // Already on this section — scroll to its top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollTo(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E6E2DC]/95 backdrop-blur-sm border-b border-black/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Archive label */}
          <button
            onClick={() => scrollTo('profile')}
            className="nav-tab-text font-mono tracking-widest text-[#8C7045] uppercase hover:text-[#2B2B2B] transition-colors duration-200"
          >
            {lang === 'zh' ? '个人档案馆' : 'PERSONAL ARCHIVE'}
          </button>

          {/* Desktop nav tabs */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-tab-text font-mono tracking-wide px-3 py-1.5 transition-all duration-200 border-b-2 ${
                  activeSection === item.id
                    ? 'text-[#2B2B2B] border-[#8C7045] bg-[#C6A46E]/20'
                    : 'text-[#7A6548] border-transparent hover:text-[#2B2B2B] hover:bg-black/[0.02]'
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="nav-tab-text ml-3 font-mono tracking-wide px-2.5 py-1.5 border border-[#8C7045]/30 text-[#7A6548] hover:text-[#2B2B2B] hover:border-[#8C7045]/60 transition-all duration-200"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="nav-tab-text font-mono tracking-wide px-2 py-1 border border-[#8C7045]/30 text-[#7A6548] hover:text-[#2B2B2B] transition-all duration-200"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-tab-text font-mono p-1.5 text-[#7A6548] hover:text-[#2B2B2B] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden pb-3 border-t border-black/[0.06]">
            <div className="flex flex-col gap-0.5 pt-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-tab-text font-mono tracking-wide px-3 py-2 text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-[#2B2B2B] bg-[#C6A46E]/20'
                      : 'text-[#7A6548] hover:text-[#2B2B2B]'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
