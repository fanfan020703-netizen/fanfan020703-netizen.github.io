'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { ExternalLink } from 'lucide-react';

type AccountTab = 'douyin' | 'xiaohongshu';

export default function SocialPage() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<AccountTab>('douyin');

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 pb-20">
        {/* Page header */}
        <div className="mb-8 sm:mb-10">
          <div className="section-title mb-2">{t('social.title')}</div>
          <h1 className="serif-heading text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            {t('social.subtitle')}
          </h1>
          <p className="text-sm sm:text-[15px] text-[#4A4A4A] leading-relaxed max-w-3xl whitespace-pre-line">
            {t('social.intro')}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-0 mb-8 border-b border-[#A0845C]/20">
          {(['douyin', 'xiaohongshu'] as AccountTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 sm:px-6 py-3 font-mono text-xs sm:text-sm tracking-wider transition-all duration-200 border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-[#A0845C] text-[#2B2B2B] bg-[#D4B896]/20'
                  : 'border-transparent text-[#6B5E50] hover:text-[#2B2B2B] hover:border-[#A0845C]/30'
              }`}
            >
              {tab === 'douyin' ? t('social.tab.douyin') : t('social.tab.xiaohongshu')}
            </button>
          ))}
        </div>

        {/* Account content */}
        {activeTab === 'douyin' ? <DouyinAccount /> : <XiaohongshuAccount />}
      </div>
    </div>
  );
}

function DouyinAccount() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      {/* Section 1: Account Profile */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">01</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.profile')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3">
              <div>
                <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-1">
                  {t('social.douyin.platform').toUpperCase()}
                </span>
                <div className="flex items-center gap-3">
                  <img src="/social-avatar.jpg" alt="番番" className="w-10 h-10 rounded-full object-cover border border-[#8C7045]/20" />
                  <h2 className="serif-heading text-xl sm:text-2xl font-semibold">{t('social.douyin.name')}</h2>
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-1">
                  POSITIONING
                </span>
                <p className="text-sm text-[#2B2B2B]">{t('social.douyin.positioning')}</p>
              </div>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-2">
              DESCRIPTION
            </span>
            <p className="text-sm text-[#4A4A4A] leading-relaxed whitespace-pre-line">{t('social.douyin.desc')}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 pt-5 border-t border-dashed border-[#A0845C]/20">
          <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-3">
            {t('social.douyin.stats.followers').split('：')[0].toUpperCase()}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="index-card p-3 text-center">
              <div className="font-mono text-lg sm:text-xl font-semibold text-[#2B2B2B]">1.4 万+</div>
              <div className="font-mono text-[10px] text-[#6B5E50] mt-1">FOLLOWERS</div>
            </div>
            <div className="index-card p-3 text-center">
              <div className="font-mono text-lg sm:text-xl font-semibold text-[#2B2B2B]">27.1 万+</div>
              <div className="font-mono text-[10px] text-[#6B5E50] mt-1">LIKES</div>
            </div>
            <div className="index-card p-3 text-center">
              <div className="font-mono text-lg sm:text-xl font-semibold text-[#2B2B2B]">50 万+</div>
              <div className="font-mono text-[10px] text-[#6B5E50] mt-1">TOP VIEWS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Operation Insights */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">02</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.ops')}
          </h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A] leading-relaxed">
              <span className="font-mono text-[10px] text-[#A0845C] mt-0.5 shrink-0">
                {String(i).padStart(2, '0')}
              </span>
              <span>{t(`social.douyin.ops.${i}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Screenshots */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">03</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.screenshots')}
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <img key={i} src={`/douyin-ss-0${i}.jpg`} alt={`账号截图 ${i}`} className="w-full aspect-[3/4] object-cover" />
          ))}
        </div>
      </div>

      {/* Operation Insight Image + Link */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">04</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.qr')}
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src="/douyin-insight.jpg" alt="抖音二维码" className="w-32 h-32 object-contain" />
          <div className="text-center sm:text-left">
            <p className="text-sm text-[#4A4A4A] mb-4 whitespace-pre-line">{t('social.douyin.desc')}</p>
            <a
              href="https://v.douyin.com/A9LQmuKAUa4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-[#D4B896] text-[#2B2B2B] font-mono text-xs tracking-wider hover:bg-[#C6A46E] transition-colors duration-200"
            >
              {t('social.douyin.visit')} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function XiaohongshuAccount() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      {/* Section 1: Account Profile */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">01</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.profile')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3">
              <div>
                <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-1">
                  {t('social.xhs.platform').toUpperCase()}
                </span>
                <div className="flex items-center gap-3">
                  <img src="/xhs-avatar.jpg" alt="小红书头像" className="w-10 h-10 rounded-full object-cover border border-[#A0845C]/20" />
                  <h2 className="serif-heading text-xl sm:text-2xl font-semibold">{t('social.xhs.name')}</h2>
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-1">
                  POSITIONING
                </span>
                <p className="text-sm text-[#2B2B2B]">{t('social.xhs.positioning')}</p>
              </div>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A0845C] tracking-wider block mb-2">
              DESCRIPTION
            </span>
            <p className="text-sm text-[#4A4A4A] leading-relaxed whitespace-pre-line">{t('social.xhs.desc')}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 pt-5 border-t border-dashed border-[#A0845C]/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="index-card p-3 text-center">
              <div className="font-mono text-base sm:text-lg font-semibold text-[#2B2B2B]">2000+</div>
              <div className="font-mono text-[10px] text-[#6B5E50] mt-1">FOLLOWERS / 4 MO.</div>
            </div>
            <div className="index-card p-3 text-center">
              <div className="font-mono text-base sm:text-lg font-semibold text-[#2B2B2B]">1000+</div>
              <div className="font-mono text-[10px] text-[#6B5E50] mt-1">LIKES</div>
            </div>
            <div className="index-card p-3 text-center">
              <div className="font-mono text-base sm:text-lg font-semibold text-[#2B2B2B]">AI Agent</div>
              <div className="font-mono text-[10px] text-[#6B5E50] mt-1">CONTENT OPS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Operation Method */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">02</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.ops')}
          </h3>
        </div>
        <div className="space-y-2">
          {[3, 2, 1, 4, 5].map((i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
              <span className="font-mono text-[10px] text-[#A0845C] mt-0.5 shrink-0">
                {String(i).padStart(2, '0')}
              </span>
              <span>{t(`social.xhs.ops.${i}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Screenshots */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">03</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.screenshots')}
          </h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory scrollbar-hide">
          {[3, 2, 1, 4, 5].map((i) => (
            <div key={i} className="flex-none w-40 aspect-[2/3] snap-start overflow-hidden">
              <img src={`/xhs-ss-0${i}.jpg`} alt={`小红书截图 ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: QR Code & Links */}
      <div className="paper-card p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-[#A0845C]/50">04</span>
          <h3 className="font-mono text-xs tracking-[0.15em] text-[#6B5E50] uppercase">
            {t('social.section.qr')}
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src="/xhs-qr.jpg" alt="小红书二维码" className="w-32 h-32 object-contain" />
          <div className="text-center sm:text-left">
            <p className="text-sm text-[#4A4A4A] mb-4">{t('social.xhs.desc').slice(0, 60)}...</p>
            <a
              href="https://xhslink.com/m/7TQTjDYmHAx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-[#D4B896] text-[#2B2B2B] font-mono text-xs tracking-wider hover:bg-[#C6A46E] transition-colors duration-200"
            >
              {t('social.xhs.visit')} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
