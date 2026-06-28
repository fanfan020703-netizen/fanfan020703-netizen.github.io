'use client';

import { useI18n } from '@/lib/i18n';
import { useState } from 'react';

type MainTab = 'video' | 'article';
type VideoSubCat = 'ai-short' | 'variety' | 'documentary' | 'ad';

export default function PortfolioPage() {
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<MainTab>('video');
  const [activeVideoCat, setActiveVideoCat] = useState<VideoSubCat>('ai-short');

  const mainTabs: { key: MainTab; label: string }[] = [
    { key: 'video', label: t('portfolio.tab.video') },
    { key: 'article', label: t('portfolio.tab.article') },
  ];

  const videoSubCats: { key: VideoSubCat; label: string; group?: string }[] = [
    { key: 'ai-short', label: t('portfolio.video.cat.ai.short'), group: 'ai' },
    { key: 'variety', label: t('portfolio.video.cat.variety') },
    { key: 'documentary', label: t('portfolio.video.cat.documentary') },
    { key: 'ad', label: t('portfolio.video.cat.ad') },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 pb-20">
        {/* Page header + intro (consistent with social page) */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-2">{t('portfolio.title')}</div>
          <h1 className="serif-heading text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            {t('portfolio.subtitle')}
          </h1>
          <p className="text-sm sm:text-[15px] text-[#4A4A4A] leading-relaxed max-w-3xl whitespace-pre-line">
            {t('portfolio.intro')}
          </p>
        </div>

        {/* Main tabs - archive style */}
        <div className="flex gap-0 mb-8 border-b border-[#8C7045]/20">
          {mainTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm tracking-wider transition-colors relative ${
                activeTab === tab.key
                  ? 'text-[#2B2B2B] bg-[#F8F5EF]'
                  : 'text-[#7A6548] hover:text-[#2B2B2B] hover:bg-[#F8F5EF]/50'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C7045]" />
              )}
            </button>
          ))}
        </div>

        {/* Video Works */}
        {activeTab === 'video' && (
          <div>
            {/* Video sub-categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {videoSubCats.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveVideoCat(cat.key)}
                  className={`px-3 py-1.5 font-mono text-[11px] sm:text-xs tracking-wider border transition-colors ${
                    activeVideoCat === cat.key
                      ? 'bg-[#8C7045] text-[#F8F5EF] border-[#8C7045]'
                      : 'bg-transparent text-[#7A6548] border-[#8C7045]/30 hover:border-[#8C7045]/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Video cards */}
            <div className="space-y-6">
              {activeVideoCat === 'ai-short' ? (
                /* AI Short Drama File 01 - 重生后，君为我折腰 */
                <div className="paper-card p-6 sm:p-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-xs text-[#8C7045] tracking-wider">AI SHORT DRAMA FILE 01</span>
                  </div>

                  <h3 className="serif-heading text-xl sm:text-2xl font-semibold mb-3">{t('portfolio.video.aishort.title')}</h3>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/80 uppercase">{t('portfolio.video.aishort.type')}</span>
                  </div>

                  <p className="text-[#6B5E50] text-sm leading-relaxed mb-6 indent-[2em]">{t('portfolio.video.aishort.desc')}</p>

                  {/* Bilibili video */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">VIDEO</span>
                    <div className="aspect-video">
                      <iframe
                        src="https://player.bilibili.com/player.html?bvid=BV1QVTA61E4R&high_quality=1&danmaku=0&autoplay=0"
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  </div>

                  {/* Creative Process */}
                  <div className="border-t border-dashed border-[#8C7045]/20 pt-6 mb-6">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-4">
                      {t('portfolio.video.aishort.process.title')}
                    </h4>
                    <div className="space-y-4">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i}>
                          <span className="font-mono text-[11px] tracking-wider text-[#8C7045] block mb-1">
                            {t(`portfolio.video.aishort.process.0${i}.title`)}
                          </span>
                          <p className="text-sm text-[#6B5E50] leading-relaxed indent-[2em]">
                            {t(`portfolio.video.aishort.process.0${i}.desc`)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div className="border-t border-dashed border-[#8C7045]/20 pt-6 mb-6">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-4">
                      {t('portfolio.video.aishort.tools.title')}
                    </h4>
                    <ul className="space-y-2">
                      {[1,2,3,4,5].map((i) => (
                        <li key={i} className="text-sm text-[#6B5E50] leading-relaxed flex gap-2">
                          <span className="text-[#8C7045] mt-0.5 shrink-0">*</span>
                          <span>{t(`portfolio.video.aishort.tools.0${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Review */}
                  <div className="border-t border-dashed border-[#8C7045]/20 pt-6 mb-6">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-4">
                      {t('portfolio.video.aishort.review.title')}
                    </h4>
                    <ul className="space-y-2">
                      {[1,2,3,4,5].map((i) => (
                        <li key={i} className="text-sm text-[#6B5E50] leading-relaxed flex gap-2">
                          <span className="text-[#8C7045] mt-0.5 shrink-0">*</span>
                          <span>{t(`portfolio.video.aishort.review.0${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : activeVideoCat === 'variety' ? (
                <div className="paper-card p-6 sm:p-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-xs text-[#8C7045] tracking-wider">VIDEO FILE 01</span>
                  </div>

                  <h3 className="serif-heading text-xl sm:text-2xl font-semibold mb-2">《MBTI星球》</h3>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/80 uppercase">
                      {t('portfolio.video.variety.mbti.type')}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-1">ROLE</span>
                    <span className="text-[#6B5E50] text-sm">{t('portfolio.video.variety.mbti.role')}</span>
                  </div>

                  <p className="text-[#6B5E50] text-sm leading-relaxed mb-3 indent-[2em]">{t('portfolio.video.variety.mbti.desc')}</p>
                  <p className="text-[#6B5E50] text-sm leading-relaxed mb-6 indent-[2em]">{t('portfolio.video.variety.mbti.desc2')}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">HIGHLIGHTS</span>
                    <ul className="space-y-1.5">
                      {[1,2,3,4,5].map((i) => (
                        <li key={i} className="text-[#6B5E50] text-sm leading-relaxed flex gap-2">
                          <span className="text-[#8C7045] mt-0.5 shrink-0">*</span>
                          <span>{t(`portfolio.video.variety.mbti.highlight${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bilibili video */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">VIDEO</span>
                    <div className="aspect-video">
                      <iframe
                        src="https://player.bilibili.com/player.html?bvid=BV1GM4m1Q7Yg&high_quality=1&danmaku=0&autoplay=0"
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  </div>

                  {/* PDF download */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">DOCUMENT</span>
                    <a
                      href="/mbti-plan.pdf"
                      download="策划案《MBTI星球》.pdf"
                      className="inline-flex items-center gap-2 text-[#8C7045] hover:text-[#6B5E50] transition-colors text-sm border border-[#8C7045]/20 hover:border-[#8C7045]/40 px-4 py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V16a2 2 0 01-2 2z" />
                      </svg>
                      策划案《MBTI星球》.pdf
                    </a>
                  </div>

                  {/* Photo gallery */}
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">PHOTOS</span>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <img src="/mbti-01.jpg" alt="游戏环节截图" className="w-full aspect-[3/4] object-cover border-2 border-[#8C7045]/20" />
                        <p className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 mt-1.5">拍摄现场图片</p>
                      </div>
                      <div>
                        <img src="/mbti-02.jpg" alt="拍摄现场照片" className="w-full aspect-[3/4] object-cover border-2 border-[#8C7045]/20" />
                        <p className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 mt-1.5">节目游戏环节截图</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeVideoCat === 'documentary' ? (
                <>
                {/* Documentary File 01 - 花火 */}
                <div className="paper-card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    {/* Left: Basic Info */}
                    <div className="flex-1">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#8C7045] uppercase block mb-1">{t('portfolio.video.doc.label')}</span>
                      <h3 className="serif-heading text-2xl sm:text-3xl mb-5">{t('portfolio.video.doc.name')}</h3>

                      <div className="space-y-2 mb-5">
                        <div className="flex gap-3 text-sm">
                          <span className="font-mono text-[11px] tracking-wider text-[#8C7045] uppercase min-w-[60px]">TYPE</span>
                          <span className="text-[#4A4A4A]">{t('portfolio.video.doc.type')}</span>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <span className="font-mono text-[11px] tracking-wider text-[#8C7045] uppercase min-w-[60px]">TIME</span>
                          <span className="text-[#4A4A4A]">{t('portfolio.video.doc.duration')}</span>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <span className="font-mono text-[11px] tracking-wider text-[#8C7045] uppercase min-w-[60px]">ROLE</span>
                          <span className="text-[#4A4A4A]">{t('portfolio.video.doc.role')}</span>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-[#8C7045]/20 pt-4">
                        <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">SYNOPSIS</span>
                        <p className="text-sm text-[#4A4A4A] leading-relaxed indent-[2em]">{t('portfolio.video.doc.desc')}</p>
                      </div>
                    </div>

                    {/* Right: Poster */}
                    <div className="sm:w-[240px] shrink-0">
                      <img src="/huahuo-poster.jpg" alt="花火海报" className="w-full aspect-[3/4] object-cover border border-[#8C7045]/10" />
                    </div>
                  </div>

                  {/* Materials section */}
                  <div className="border-t border-dashed border-[#8C7045]/20 mt-6 pt-5">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-4">MATERIALS</span>

                    {/* Video preview with link */}
                    <a
                      href="https://pan.baidu.com/s/1jGqBi0hvCs3MVePpQWPkaA?pwd=1116"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group mb-4"
                    >
                      <div className="relative aspect-video bg-[#2B2B2B]/5 border border-[#8C7045]/10 overflow-hidden">
                        <img src="/huahuo-video-thumb.png" alt="花火纪录片" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#F8F5EF]/90 border border-[#8C7045]/20 flex items-center justify-center group-hover:bg-[#F8F5EF] transition-colors">
                            <svg className="w-6 h-6 text-[#8C7045] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3">
                          <span className="font-mono text-[11px] tracking-wider text-white/90 uppercase">{t('portfolio.video.doc.video.label')}</span>
                          <p className="text-sm text-white/80 mt-0.5">{t('portfolio.video.doc.video.link')}</p>
                        </div>
                      </div>
                    </a>

                    {/* Report download */}
                    <div>
                      <span className="font-mono text-[11px] tracking-wider text-[#8C7045] uppercase block mb-1.5">{t('portfolio.video.doc.report.label')}</span>
                      <a
                        href="/huahuo-report.docx"
                        download="花火纪录片报告.docx"
                        className="inline-flex items-center gap-1.5 text-sm text-[#8C7045] underline underline-offset-2 decoration-[#8C7045]/30 hover:decoration-[#8C7045] transition-colors"
                      >
                        {t('portfolio.video.doc.report.download')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Documentary File 02 - 济世神医万密斋 */}
                <div className="paper-card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    {/* Left: Basic Info */}
                    <div className="flex-1">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#8C7045] uppercase block mb-1">{t('portfolio.video.doc2.label')}</span>
                      <h3 className="serif-heading text-2xl sm:text-3xl mb-4">{t('portfolio.video.doc2.name')}</h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex gap-3 text-sm">
                          <span className="font-mono text-[11px] tracking-wider text-[#8C7045] uppercase min-w-[60px]">TYPE</span>
                          <span className="text-[#4A4A4A]">{t('portfolio.video.doc2.type')}</span>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <span className="font-mono text-[11px] tracking-wider text-[#8C7045] uppercase min-w-[60px]">AWARD</span>
                          <span className="text-[#4A4A4A]">{t('portfolio.video.doc2.award')}</span>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-[#8C7045]/20 pt-4 mb-4">
                        <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">SYNOPSIS</span>
                        <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3 indent-[2em]">{t('portfolio.video.doc2.desc')}</p>
                        <p className="text-sm text-[#4A4A4A] leading-relaxed indent-[2em]">{t('portfolio.video.doc2.desc2')}</p>
                      </div>
                    </div>

                    {/* Right: Award image */}
                    <div className="sm:w-[240px] shrink-0">
                      <img src="/jishi-award.png" alt="获奖证书" className="w-full aspect-[3/4] object-contain border border-[#8C7045]/10" />
                    </div>
                  </div>

                  {/* Bilibili video thumbnail */}
                  <div className="border-t border-dashed border-[#8C7045]/20 mt-6 pt-5">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">VIDEO</span>
                    <a
                      href="https://www.bilibili.com/video/BV17z421C7gi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative aspect-video bg-[#2B2B2B]/5 border border-[#8C7045]/10 overflow-hidden">
                        <img src="/jishi-cover.jpg" alt="济世神医万密斋" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#F8F5EF]/90 border border-[#8C7045]/20 flex items-center justify-center group-hover:bg-[#F8F5EF] transition-colors">
                            <svg className="w-6 h-6 text-[#8C7045] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#7A6548] indent-[2em]">
                      2023年还没有现在生成Ai视频的技术，老一辈子当时只能手搓。虽然画面跳帧，视频成像不稳定，但是仍然对这个视频充满了感情，因为我们至少尝试了、接触了、开始了。也对我今后接触Ai产生了更多的热情。
                    </p>
                  </div>
                </div>
                </>
              ) : activeVideoCat === 'ad' ? (
                /* Advertising File 01 - 爱华仕箱包 */
                <div className="paper-card p-6 sm:p-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-xs text-[#8C7045] tracking-wider">{t('portfolio.video.ad.label')}</span>
                  </div>

                  <h3 className="serif-heading text-xl sm:text-2xl font-semibold mb-3">{t('portfolio.video.ad.name')}</h3>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/80 uppercase">{t('portfolio.video.ad.type')}</span>
                  </div>

                  <div className="mb-5">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-1">AWARD</span>
                    <span className="text-[#6B5E50] text-sm">{t('portfolio.video.ad.award')}</span>
                  </div>

                  <div className="border-t border-dashed border-[#8C7045]/20 pt-5 mb-5">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">SYNOPSIS</span>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3 indent-[2em]">{t('portfolio.video.ad.desc')}</p>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed indent-[2em]">{t('portfolio.video.ad.desc2')}</p>
                  </div>

                  <div className="border-t border-dashed border-[#8C7045]/20 pt-5 mb-5">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-3">
                      {t('portfolio.video.ad.visual.title')}
                    </h4>
                    <p className="text-sm text-[#6B5E50] leading-relaxed indent-[2em]">{t('portfolio.video.ad.visual.desc')}</p>
                  </div>

                  {/* Bilibili video thumbnail */}
                  <div className="border-t border-dashed border-[#8C7045]/20 pt-5">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/60 uppercase block mb-2">VIDEO</span>
                    <a
                      href="https://www.bilibili.com/video/BV1Ex421m7NS/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative aspect-video bg-[#2B2B2B]/5 border border-[#8C7045]/10 overflow-hidden">
                        <img src="/ad-aihuashi-cover.jpg" alt="爱华仕箱包" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#F8F5EF]/90 border border-[#8C7045]/20 flex items-center justify-center group-hover:bg-[#F8F5EF] transition-colors">
                            <svg className="w-6 h-6 text-[#8C7045] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                <VideoFileCard
                  number="01"
                  title={t('portfolio.video.placeholder.title')}
                  category={videoSubCats.find(c => c.key === activeVideoCat)?.label || ''}
                  description={t('portfolio.video.placeholder.desc')}
                />
              )}
            </div>
          </div>
        )}

        {/* Article & Visual Works */}
        {activeTab === 'article' && (
          <div>
            {/* Article file card - left/right layout */}
            <div className="paper-card p-6 sm:p-8">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-mono text-xs text-[#8C7045] tracking-wider">ARTICLE FILE 01</span>
              </div>

              <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/colourme-avatar.jpg"
                      alt="卡拉米 ColourMe"
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <h3 className="serif-heading text-xl sm:text-2xl font-semibold">
                      {t('portfolio.article.file.title')}
                    </h3>
                  </div>

                  {/* Type tag */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/80 uppercase">
                      {t('portfolio.article.file.type')}
                    </span>
                  </div>

                  {/* Project intro */}
                  <div className="mb-6">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-3">
                      {lang === 'zh' ? '项目简介' : 'Project Intro'}
                    </h4>
                    <p className="text-[15px] leading-relaxed text-[#4A4A4A] indent-[2em]">
                      {t('portfolio.article.file.intro')}
                    </p>
                  </div>

                  {/* Concept */}
                  <div className="mb-6">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-3">
                      {lang === 'zh' ? '创作理念' : 'Creative Concept'}
                    </h4>
                    <p className="text-[15px] leading-relaxed text-[#4A4A4A] indent-[2em]">
                      {t('portfolio.article.file.concept')}
                    </p>
                  </div>

                  {/* Article links with cover images */}
                  <div className="border-t border-dashed border-[#8C7045]/20 pt-6">
                    <h4 className="font-mono text-[10px] tracking-wider text-[#8C7045] uppercase mb-4">
                      {t('portfolio.article.file.links.label')}
                    </h4>
                    <div className="grid grid-cols-5 gap-4">
                      {[
                        { url: 'https://mp.weixin.qq.com/s/IsXibpeQWuV2435FClT5ew', img: '/colourme-01.jpg' },
                        { url: 'https://mp.weixin.qq.com/s/H7XZWPH6wqI9MhST5Xo1sg', img: '/colourme-02.jpg' },
                        { url: 'https://mp.weixin.qq.com/s/asoRAw5pJ3BfSYMCNCtylA', img: '/colourme-03.jpg' },
                        { url: 'https://mp.weixin.qq.com/s/LuU5XKrkV2R2o61RESpEEQ', img: '/colourme-04.jpg' },
                        { url: 'https://mp.weixin.qq.com/s/HSXiQzmN28D9WWk6JtP6tQ', img: '/colourme-05.jpg' },
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <div className="aspect-[2/3] overflow-hidden bg-[#E6E2DC] mb-2">
                            <img
                              src={item.img}
                              alt={lang === 'zh' ? `推文 ${String(i + 1).padStart(2, '0')}` : `Article ${String(i + 1).padStart(2, '0')}`}
                              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                            />
                          </div>
                          <span className="font-mono text-[10px] text-[#8C7045] group-hover:text-[#6B5E50] transition-colors">
                            {lang === 'zh' ? `推文 ${String(i + 1).padStart(2, '0')}` : `Article ${String(i + 1).padStart(2, '0')}`} →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

/* Video File Card Component */
function VideoFileCard({
  number,
  title,
  category,
  description,
}: {
  number: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="paper-card p-6 sm:p-8">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-mono text-xs text-[#8C7045] tracking-wider">VIDEO FILE {number}</span>
      </div>

      <h3 className="serif-heading text-xl sm:text-2xl font-semibold mb-2">{title}</h3>

      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-wider text-[#8C7045]/80 uppercase">
          {category}
        </span>
      </div>

      <p className="text-[#6B5E50] text-sm leading-relaxed mb-6 indent-[2em]">{description}</p>

      {/* Video player placeholder */}
      <div className="aspect-video bg-[#1a1a1a] border border-[#8C7045]/10 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-2 text-[#8C7045]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-mono text-[10px] text-[#8C7045]/50 tracking-wider">VIDEO PLAYER</span>
        </div>
      </div>
    </div>
  );
}
