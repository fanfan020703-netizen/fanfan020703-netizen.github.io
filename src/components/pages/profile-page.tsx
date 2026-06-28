'use client';

import { useI18n } from '@/lib/i18n';
import { useRef, useState, useEffect, useCallback } from 'react';

/* ─── Drawing carousel actual images ─── */
const DRAWING_IMAGES = [
  '/drawing-01.jpg',
  '/drawing-02.jpg',
  '/drawing-03.jpg',
  '/drawing-05.jpg',
  '/drawing-06.jpg',
  '/drawing-07.jpg',
  '/drawing-08.jpg',
  '/drawing-09.jpg',
  '/drawing-10.jpg',
  '/drawing-11.jpg',
  '/drawing-12.jpg',
];

export default function ProfilePage() {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10 sm:space-y-14">

        {/* ══════════════════════════════════════
            1. Meet Chloe
            ══════════════════════════════════════ */}
        <section className="pt-8 sm:pt-12">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="section-title whitespace-nowrap">01</div>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
            <h2 className="serif-heading text-xl sm:text-2xl font-medium whitespace-nowrap">
              Meet Chloe
            </h2>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
          </div>

          {/* Two-column: photo left, info right */}
          <div className="flex flex-col md:flex-row gap-5 sm:gap-7">
            {/* Left: Archive photo card */}
            <div className="md:w-[300px] lg:w-[340px] shrink-0">
              <div className="paper-card p-3 sm:p-4">
                <div className="aspect-[3/4] bg-[#E2DED8] border border-black/[0.05] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile-photo.png"
                    alt="Qiang Jingyao - Archive Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Photo card footer */}
                <div className="mt-2.5 flex items-center justify-between px-1">
                  <span className="font-mono text-[9px] text-[#A0845C]/60 tracking-wider uppercase">
                    Archive Photo
                  </span>
                  <div className="w-4 h-4 border border-[#A0845C]/20 flex items-center justify-center">
                    <span className="font-serif text-[8px] text-[#A0845C]/60">
                      {lang === 'zh' ? '瑶' : 'C'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Name + Info */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Name — largest element */}
              <div className="mb-1">
                <span className="mono-label text-[10px] tracking-[0.15em]">MEET</span>
              </div>
              <h1 className="serif-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight mb-1.5">
                {t('profile.name.cn')}
              </h1>
              <p className="font-mono text-sm text-[#A0845C] tracking-wide mb-5">
                Chloe
              </p>

              <div className="archive-divider mb-4" />

              {/* Info rows */}
              <div className="space-y-0">
                {[
                  { label: lang === 'zh' ? '性别' : 'Gender', value: t('profile.gender') },
                  { label: lang === 'zh' ? '年龄' : 'Age', value: t('profile.age') },
                  { label: lang === 'zh' ? '生日' : 'Birthday', value: t('profile.birthday') },
                  { label: lang === 'zh' ? '身高' : 'Height', value: t('profile.height') },
                  { label: lang === 'zh' ? '体重' : 'Weight', value: t('profile.weight') },
                  { label: lang === 'zh' ? '昵称' : 'Nickname', value: t('profile.nickname') },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center py-2 border-b border-dashed border-black/[0.04] last:border-b-0"
                  >
                    <span className="mono-label text-[10px] w-16 sm:w-20 shrink-0">
                      {row.label}
                    </span>
                    <span className="font-mono text-sm text-[#2B2B2B]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* File stamp */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-5 h-5 border border-[#A0845C]/20 flex items-center justify-center">
                  <span className="font-serif text-[8px] text-[#A0845C]">
                    {lang === 'zh' ? '档' : 'A'}
                  </span>
                </div>
                <span className="mono-label text-[9px]">
                  {lang === 'zh' ? '档案编号 QJY-2002.0703' : 'File No. QJY-2002.0703'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. Education
            ══════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="section-title whitespace-nowrap">02</div>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
            <h2 className="serif-heading text-xl sm:text-2xl font-medium whitespace-nowrap">
              {t('profile.edu.subtitle')}
            </h2>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Master */}
            <div className="paper-card p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px]" style={{ color: '#8B7355' }}>001</span>
                <span className="mono-label text-lg tracking-wider" style={{ color: '#6B5E50' }}>
                  {lang === 'zh' ? '硕士' : "Master's"}
                </span>
              </div>
              <h3 className="serif-heading text-2xl sm:text-3xl font-semibold mb-1.5" style={{ color: '#2B2B2B' }}>
                {t('profile.edu.master.school')}
              </h3>
              <p className="font-mono text-sm sm:text-base font-semibold mb-3" style={{ color: '#2B2B2B' }}>
                {t('profile.edu.master.degree')}
              </p>
              <div className="archive-divider mb-3" style={{ borderColor: 'rgba(139,115,85,0.2)' }} />
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#6B5E50' }}>
                {t('profile.edu.master.major')}
              </p>
              <div className="mt-4 pt-3 border-t border-dashed border-[#A0845C]/30">
                <p className="font-mono text-xs text-[#2B2B2B] mb-2">
                  {t('profile.edu.master.honors.title')}
                </p>
                <ul className="space-y-1.5">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#2B2B2B]">
                      <span className="font-mono text-[#A0845C] mt-0.5 shrink-0">·</span>
                      <span>{t(`profile.edu.master.honors.${i}` as any)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bachelor */}
            <div className="index-card p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-[#A0845C]">002</span>
                <span className="mono-label text-lg tracking-wider">
                  {lang === 'zh' ? '本科' : "Bachelor's"}
                </span>
              </div>
              <h3 className="serif-heading text-2xl sm:text-3xl font-semibold mb-1.5">
                {t('profile.edu.bachelor.school')}
              </h3>
              <p className="font-mono text-sm sm:text-base font-semibold text-[#2B2B2B] mb-3">
                {t('profile.edu.bachelor.degree')}
              </p>
              <div className="archive-divider mb-3" />
              <p className="text-xs sm:text-sm text-[#6B5E50] leading-relaxed">
                {t('profile.edu.bachelor.major')}
              </p>

              {/* Honors & Campus Experience */}
              <div className="mt-4 pt-3 border-t border-dashed border-[#A0845C]/30">
                <p className="font-mono text-xs text-[#2B2B2B] mb-2">
                  {t('profile.edu.bachelor.honors.title')}
                </p>
                <ul className="space-y-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#2B2B2B]">
                      <span className="font-mono text-[#A0845C] mt-0.5 shrink-0">·</span>
                      <span>{t(`profile.edu.bachelor.honors.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. Drawing — DRAWING ARCHIVE
            Horizontal scrolling carousel
            ══════════════════════════════════════ */}
        <DrawingSection />

        {/* ══════════════════════════════════════
            5. Reading — READING NOTES
            Left: image, Right: text
            ══════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="section-title whitespace-nowrap">04</div>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
            <h2 className="serif-heading text-xl sm:text-2xl font-medium whitespace-nowrap">
              {t('profile.spec.reading.name')}
            </h2>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
          </div>

          <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
            {/* Left: Image */}
            <div className="md:flex-[3] paper-card p-4 sm:p-5">
              <div className="mono-label mb-2">
                {t('profile.spec.reading.title')}
              </div>
              <h3 className="serif-heading text-base font-medium mb-3">
                {t('profile.spec.reading.subtitle')}
              </h3>
              <div className="w-full aspect-[4/3] border border-black/[0.05] overflow-hidden">
                <img
                  src="/reading-notes.jpg"
                  alt="Reading Notes"
                  className="w-full h-full object-cover"
                />
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
              <p className="text-sm leading-[1.85] text-[#4A4039]">
                {t('profile.spec.reading.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. Dancing — DANCING ARCHIVE
            Left: video, Right: text
            ══════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="section-title whitespace-nowrap">05</div>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
            <h2 className="serif-heading text-xl sm:text-2xl font-medium whitespace-nowrap">
              {t('profile.spec.dance.name')}
            </h2>
            <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
          </div>

          <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
            {/* Left: Text */}
            <div className="md:flex-[2] paper-card p-5 sm:p-6 flex flex-col justify-center">
              <h3 className="serif-heading text-lg font-medium mb-1">
                {t('profile.spec.dance.name')}
              </h3>
              <p className="font-mono text-xs text-[#A0845C] mb-4">
                {t('profile.spec.dance.name')}
              </p>
              <div className="archive-divider mb-4" />
              <p className="text-sm leading-[1.85] text-[#4A4039] whitespace-pre-line">
                {t('profile.spec.dance.desc')}
              </p>
            </div>

            {/* Right: Video */}
            <div className="md:flex-[3] paper-card p-4 sm:p-5">
              <div className="mono-label mb-2">
                {t('profile.spec.dance.title')}
              </div>
              <h3 className="serif-heading text-base font-medium mb-3">
                {t('profile.spec.dance.name')}
              </h3>
              <div className="w-full aspect-video border border-black/[0.05] overflow-hidden">
                <iframe
                  src="//player.bilibili.com/player.html?bvid=BV1uJ7W6bEH2&autoplay=0&high_quality=1"
                  className="w-full h-full"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="fullscreen"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Drawing — DRAWING ARCHIVE (sub-component)
   ═══════════════════════════════════════════ */
function DrawingSection() {
  const { t } = useI18n();
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
    el.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div className="section-title whitespace-nowrap">03</div>
        <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
        <h2 className="serif-heading text-xl sm:text-2xl font-medium whitespace-nowrap">
          {t('profile.spec.drawing.name')}
        </h2>
        <div className="h-[1px] flex-1 bg-[#A0845C]/15" />
      </div>

      <div className="paper-card p-5 sm:p-6">
        {/* Header with scroll controls */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="mono-label mb-0.5">
              {t('profile.spec.drawing.title')}
            </div>
            <h3 className="serif-heading text-base sm:text-lg font-medium">
              {t('profile.spec.drawing.subtitle')}
            </h3>
          </div>
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

        {/* Horizontal carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {DRAWING_IMAGES.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] sm:w-[360px] aspect-[4/3] border border-black/[0.05] overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={src}
                alt={`Drawing ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="archive-divider mt-4 pt-4" />
        <p className="text-sm leading-[1.85] text-[#4A4039] mt-3">
          {t('profile.spec.drawing.desc')}
        </p>
      </div>
    </section>
  );
}
