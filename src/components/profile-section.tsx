'use client';

import { useI18n } from '@/lib/i18n';
import { useRef, useState, useEffect, useCallback } from 'react';

/* ─── Drawing carousel placeholder images ─── */
const DRAWING_PLACEHOLDERS = [
  { label: 'Sketch 01', color: '#D4B896' },
  { label: 'Sketch 02', color: '#C4A67C' },
  { label: 'Sketch 03', color: '#B8956A' },
  { label: 'Color Study', color: '#A0845C' },
  { label: 'Daily Note', color: '#D4B896' },
];

export default function ProfileSection() {
  const { t, lang } = useI18n();

  return (
    <section id="profile" className="pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* ── Meet Chloe ── */}
        <MeetChloe />

        {/* ── Education ── */}
        <Education />

        {/* ── Dance ── */}
        <DanceSection />

        {/* ── Drawing ── */}
        <DrawingSection />

        {/* ── Reading ── */}
        <ReadingSection />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Meet Chloe — Archive Photo Card
   ═══════════════════════════════════════════ */
function MeetChloe() {
  const { t, lang } = useI18n();

  const infoRows = [
    { label: lang === 'zh' ? '英文名' : 'English Name', value: t('profile.name.en') },
    { label: lang === 'zh' ? '性别' : 'Gender', value: t('profile.gender') },
    { label: lang === 'zh' ? '年龄' : 'Age', value: t('profile.age') },
    { label: lang === 'zh' ? '生日' : 'Birthday', value: t('profile.birthday') },
    { label: lang === 'zh' ? '身高' : 'Height', value: t('profile.height') },
    { label: lang === 'zh' ? '体重' : 'Weight', value: t('profile.weight') },
    { label: lang === 'zh' ? '所在地' : 'Based in', value: t('profile.location') },
  ];

  return (
    <div className="fade-in-up">
      {/* Section label */}
      <div className="mb-5">
        <span className="section-title">PROFILE</span>
      </div>

      <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
        {/* Left: Archive photo card */}
        <div className="md:w-[340px] shrink-0 paper-card p-4 sm:p-5">
          <div className="aspect-[3/4] bg-[#E2DED8] border border-black/[0.06] flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <svg
                className="mx-auto mb-2 text-[#A0845C]/30"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 21c0-3 2.5-5 5-5s5 2 5 5" />
              </svg>
              <span className="mono-label text-[10px]">
                {t('profile.photo.label')}
              </span>
            </div>
          </div>
          {/* Photo card footer */}
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#A0845C] tracking-wider">
              ARCHIVE PHOTO
            </span>
            <div className="w-5 h-5 border border-[#A0845C]/30 flex items-center justify-center">
              <span className="font-serif text-[9px] text-[#A0845C]">
                {lang === 'zh' ? '瑶' : 'C'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Info card */}
        <div className="flex-1 paper-card p-5 sm:p-7">
          {/* Name — largest */}
          <div className="mb-1">
            <span className="mono-label text-[10px] tracking-widest">
              MEET
            </span>
          </div>
          <h1 className="serif-heading text-3xl sm:text-4xl font-semibold mb-1 leading-tight">
            {t('profile.name.cn')}
          </h1>
          <p className="font-mono text-sm text-[#A0845C] tracking-wide mb-5">
            {t('profile.name.en')}
          </p>

          <div className="archive-divider mb-4" />

          {/* Info rows */}
          <div className="space-y-0">
            {infoRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center py-2 border-b border-dashed border-black/[0.05] last:border-b-0"
              >
                <span className="mono-label text-[10px] w-20 sm:w-24 shrink-0">
                  {row.label}
                </span>
                <span className="font-mono text-sm text-[#2B2B2B]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* File stamp */}
          <div className="mt-5 pt-3 border-t border-[#A0845C]/15 flex items-center gap-2">
            <span className="mono-label text-[10px]">
              {lang === 'zh' ? '档案编号 QJY-2025' : 'File No. QJY-2025'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Education — Two archive cards
   ═══════════════════════════════════════════ */
function Education() {
  const { t, lang } = useI18n();

  return (
    <div className="fade-in-up delay-100">
      <div className="mb-5">
        <span className="section-title">{t('profile.edu.title')}</span>
        <h2 className="serif-heading text-lg sm:text-xl font-medium mt-1">
          {t('profile.edu.subtitle')}
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        {/* Bachelor */}
        <div className="flex-1 paper-card p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] text-[#A0845C]">001</span>
            <span className="mono-label text-[10px]">
              {lang === 'zh' ? '本科' : "Bachelor's"}
            </span>
          </div>
          <h3 className="serif-heading text-base font-medium mb-1">
            {t('profile.edu.bachelor.school')}
          </h3>
          <p className="font-mono text-xs text-[#A0845C] mb-3">
            {t('profile.edu.bachelor.degree')}
          </p>
          <div className="archive-divider mb-3" />
          <p className="text-xs text-[#6B5E50] leading-relaxed">
            {t('profile.edu.bachelor.major')}
          </p>
        </div>

        {/* Master */}
        <div className="flex-1 index-card p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] text-[#8B7355]">002</span>
            <span className="mono-label text-[10px]" style={{ color: '#6B5E50' }}>
              {lang === 'zh' ? '硕士' : "Master's"}
            </span>
          </div>
          <h3 className="serif-heading text-base font-medium mb-1" style={{ color: '#2B2B2B' }}>
            {t('profile.edu.master.school')}
          </h3>
          <p className="font-mono text-xs mb-3" style={{ color: '#8B7355' }}>
            {t('profile.edu.master.degree')}
          </p>
          <div className="archive-divider mb-3" style={{ borderColor: 'rgba(139, 115, 85, 0.25)' }} />
          <p className="text-xs leading-relaxed" style={{ color: '#6B5E50' }}>
            {t('profile.edu.master.major')}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Dance — VIDEO FILE 01
   Left: video, Right: text
   ═══════════════════════════════════════════ */
function DanceSection() {
  const { t, lang } = useI18n();

  return (
    <div className="fade-in-up delay-200">
      <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
        {/* Left: Video */}
        <div className="md:flex-[3] paper-card p-5 sm:p-6">
          <div className="mono-label mb-1">
            {t('profile.spec.dance.title')}
          </div>
          <div className="video-container border border-black/[0.06] mb-3">
            <div className="absolute inset-0 flex items-center justify-center bg-[#2B2B2B]">
              <div className="text-center">
                <svg
                  className="mx-auto mb-2 text-white/25"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="font-mono text-[10px] text-white/25 tracking-wider">
                  {t('profile.spec.dance.video.label')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:flex-[2] paper-card p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="serif-heading text-lg font-medium mb-1">
            {t('profile.spec.dance.name')}
          </h3>
          <p className="font-mono text-xs text-[#A0845C] mb-4">
            {t('profile.spec.dance.style')}
          </p>
          <div className="archive-divider mb-4" />
          <p className="text-sm leading-[1.8] text-[#4A4039]">
            {t('profile.spec.dance.desc')}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Drawing — DRAWING ARCHIVE
   Horizontal scrolling carousel
   ═══════════════════════════════════════════ */
function DrawingSection() {
  const { t, lang } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === 'left' ? -280 : 280;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="fade-in-up delay-300">
      <div className="paper-card p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="mono-label mb-0.5">
              {t('profile.spec.drawing.title')}
            </div>
            <h3 className="serif-heading text-lg font-medium">
              {t('profile.spec.drawing.subtitle')}
            </h3>
          </div>
          {/* Scroll controls */}
          <div className="flex gap-1.5 shrink-0 ml-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-7 h-7 border border-black/[0.08] flex items-center justify-center font-mono text-xs text-[#6B5E50] hover:bg-black/[0.03] transition-colors duration-200 disabled:opacity-20 disabled:cursor-default"
            >
              &lt;
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-7 h-7 border border-black/[0.08] flex items-center justify-center font-mono text-xs text-[#6B5E50] hover:bg-black/[0.03] transition-colors duration-200 disabled:opacity-20 disabled:cursor-default"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1"
          style={{ scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {DRAWING_PLACEHOLDERS.map((item, i) => (
            <div
              key={i}
              className="shrink-0 w-[240px] sm:w-[280px] aspect-[4/3] border border-black/[0.06] flex items-center justify-center"
              style={{ backgroundColor: item.color + '22', scrollSnapAlign: 'start' }}
            >
              <div className="text-center">
                <svg
                  className="mx-auto mb-1.5 text-[#A0845C]/25"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <path d="M3 16l5-5 4 4 4-6 5 7" />
                  <circle cx="15" cy="8" r="2" />
                </svg>
                <span className="mono-label text-[9px]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="archive-divider mt-4 pt-4" />
        <p className="text-sm leading-[1.8] text-[#4A4039] mt-3">
          {t('profile.spec.drawing.desc')}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Reading — READING NOTES
   Left: image, Right: text
   ═══════════════════════════════════════════ */
function ReadingSection() {
  const { t, lang } = useI18n();

  return (
    <div className="fade-in-up delay-400">
      <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
        {/* Left: Image */}
        <div className="md:flex-[3] paper-card p-5 sm:p-6">
          <div className="mono-label mb-1">
            {t('profile.spec.reading.title')}
          </div>
          <h3 className="serif-heading text-base font-medium mb-3">
            {t('profile.spec.reading.subtitle')}
          </h3>
          <div className="w-full aspect-[4/3] bg-[#E2DED8] border border-black/[0.06] flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto mb-2 text-[#A0845C]/25"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <line x1="9" y1="7" x2="16" y2="7" />
                <line x1="9" y1="11" x2="14" y2="11" />
              </svg>
              <span className="mono-label text-[10px]">
                {t('profile.spec.reading.img.label')}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:flex-[2] paper-card p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="serif-heading text-lg font-medium mb-1">
            {t('profile.spec.reading.name')}
          </h3>
          <p className="font-mono text-xs text-[#A0845C] mb-4">
            {t('profile.spec.reading.subtitle')}
          </p>
          <div className="archive-divider mb-4" />
          <p className="text-sm leading-[1.8] text-[#4A4039]">
            {t('profile.spec.reading.desc')}
          </p>
        </div>
      </div>
    </div>
  );
}
