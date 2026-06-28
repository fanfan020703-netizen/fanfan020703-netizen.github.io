'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Lang = 'zh' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  'nav.profile': { zh: '个人介绍', en: 'Profile' },
  'nav.resume': { zh: '工作简历', en: 'Resume' },
  'nav.portfolio': { zh: '作品集', en: 'Portfolio' },
  'nav.social': { zh: '社交媒体', en: 'Social Media' },
  'nav.contact': { zh: '联系方式', en: 'Contact' },

  // Profile Section — Meet Chloe
  'profile.meet': { zh: 'Meet Chloe', en: 'Meet Chloe' },
  'profile.name.cn': { zh: '强竟瑶', en: 'Qiang Jingyao' },
  'profile.name.en': { zh: 'Chloe', en: 'Chloe' },
  'profile.gender': { zh: '女', en: 'Female' },
  'profile.age': { zh: '23岁', en: '23' },
  'profile.birthday': { zh: '2002.7.3', en: 'Jul 3, 2002' },
  'profile.height': { zh: '173cm', en: '173cm' },
  'profile.weight': { zh: '52kg', en: '52kg' },
  'profile.nickname': { zh: '番番', en: 'Fanfan' },
  'profile.location': { zh: 'Base 武汉', en: 'Based in Wuhan' },
  'profile.photo.label': { zh: '档案照片', en: 'Archive Photo' },
  'profile.index.title': { zh: '目录索引', en: 'Index' },
  'profile.index.subtitle': { zh: 'LIBRARY INDEX', en: 'LIBRARY INDEX' },

  // Education
  'profile.edu.title': { zh: 'EDUCATION', en: 'EDUCATION' },
  'profile.edu.subtitle': { zh: '教育背景', en: 'Education Background' },
  'profile.edu.bachelor.school': { zh: '华中科技大学', en: 'Huazhong University of Science and Technology' },
  'profile.edu.bachelor.degree': { zh: '本科 / 播音与主持艺术', en: "Bachelor's / Broadcasting & Hosting Art" },
  'profile.edu.bachelor.major': { zh: '主修：广播电视节目制作 / 影视编导 / 播音主持', en: 'Majors: Broadcasting Production / Film & TV Directing / Hosting' },
  'profile.edu.bachelor.honors.title': { zh: '校园经历与荣誉', en: 'Campus Experience & Honors' },
  'profile.edu.bachelor.honors.1': { zh: '成绩排名年级第 2，以第二名成绩保研', en: 'Ranked 2nd in grade, admitted to graduate program via recommendation' },
  'profile.edu.bachelor.honors.2': { zh: '2025 届校级优秀毕业生', en: 'University Outstanding Graduate, Class of 2025' },
  'profile.edu.bachelor.honors.3': { zh: '担任校级学生会文体部部长', en: 'Head of Culture & Sports Department, University Student Union' },
  'profile.edu.bachelor.honors.4': { zh: '多次获评优秀学生干部、优秀共青团干部、校级奖学金', en: 'Multiple awards: Outstanding Student Cadre, Outstanding Youth League Cadre, University Scholarship' },
  'profile.edu.bachelor.honors.5': { zh: '主导策划 20 场大型活动、13 场校级主题活动', en: 'Led planning of 20 large-scale events and 13 university-themed activities' },
  'profile.edu.bachelor.honors.6': { zh: '主持大型活动 10 场以上', en: 'Hosted 10+ large-scale events' },
  'profile.edu.bachelor.honors.7': { zh: '获大学生广告大赛、计算机类竞赛省级及国家级奖项 3 项', en: 'Won 3 provincial & national awards in advertising and computing competitions' },
  'profile.edu.bachelor.honors.8': { zh: '独立策划大学生纪录片、大学生综艺《MBTI》节目', en: 'Independently produced student documentary and variety show "MBTI"' },
  'profile.edu.master.school': { zh: '华中科技大学', en: 'Huazhong University of Science and Technology' },
  'profile.edu.master.degree': { zh: '硕士 / 广告与媒介经济', en: "Master's / Advertising & Media Economics" },
  'profile.edu.master.major': { zh: '方向：公共关系 / 国际传播 / 城市形象', en: 'Focus: Public Relations / International Communication / City Image' },
  'profile.edu.master.honors.title': { zh: '校园经历与荣誉', en: 'Campus Experience & Honors' },
  'profile.edu.master.honors.1': { zh: '国家级大创立项《生成式 AI 赋能知识生产的公众态度研究》', en: 'National Innovation Project: "Public Attitudes toward Generative AI in Knowledge Production"' },
  'profile.edu.master.honors.2': { zh: '华中科技大学 AI 项目第 3 名《TrustWise Pricing 硫磺采购智能决策助手》', en: 'HUST AI Project 3rd Place: "TrustWise Pricing Sulfur Procurement Decision Assistant"' },
  'profile.edu.master.honors.3': { zh: '论文入选第三届智能营销论坛 AI 应用与智能营销方向', en: 'Paper selected for 3rd Intelligent Marketing Forum (AI Applications track)' },
  'profile.edu.master.honors.4': { zh: '担任班长，负责班级事务协调与组织沟通', en: 'Class monitor, responsible for coordination and communication' },
  'profile.edu.master.honors.5': { zh: '中国创意传播学院新媒体运营', en: 'New media operations, China Creative Communication Academy' },
  'profile.edu.master.honors.6': { zh: '大学生职业规划大赛学院第 3 名', en: '3rd place, College Career Planning Competition' },

  // Specialties
  'profile.spec.dance.title': { zh: 'VIDEO FILE 01', en: 'VIDEO FILE 01' },
  'profile.spec.dance.name': { zh: 'Dance / 舞蹈', en: 'Dance' },
  'profile.spec.dance.style': { zh: 'Hiphop / Jazz', en: 'Hiphop / Jazz' },
  'profile.spec.dance.desc': {
    zh: '世界上有很多东西想羁绊你\n但跳舞时 你是自由的 舞蹈就是呼吸 舞蹈就是走路\n跳舞会让自己比任何时候都更像自己',
    en: 'There are so many things in the world trying to hold you back.\nBut when you dance, you are free — dance is breathing, dance is walking.\nDancing makes you feel more like yourself than at any other time.',
  },
  'profile.spec.dance.video.label': { zh: '舞蹈视频占位', en: 'Dance video placeholder' },

  'profile.spec.drawing.title': { zh: 'DRAWING ARCHIVE', en: 'DRAWING ARCHIVE' },
  'profile.spec.drawing.subtitle': { zh: 'Sketches & Visual Notes', en: 'Sketches & Visual Notes' },
  'profile.spec.drawing.name': { zh: 'Drawing / 绘画', en: 'Drawing' },
  'profile.spec.drawing.desc': {
    zh: '绘画是我整理感受的另一种方式。有时候只是一些线条、颜色，就可以勾勒出当下的情绪，赋予所见所感一份意义。找到注意力所在，拥抱无序的世界里定格的瞬间，此刻我确信——我拥有边界、时间和确定的美。',
    en: 'Drawing is another way for me to organize my feelings. Sometimes just a few lines and colors can outline the emotions of the moment, giving meaning to what I see and feel. Finding where my attention lies, embracing the frozen moments in a chaotic world — in this moment I am certain — I possess boundaries, time, and a definite beauty.',
  },
  'profile.spec.drawing.img.label': { zh: '绘画作品占位', en: 'Drawing placeholder' },

  'profile.spec.reading.title': { zh: 'READING NOTES', en: 'READING NOTES' },
  'profile.spec.reading.subtitle': { zh: 'Notes & Thoughts', en: 'Notes & Thoughts' },
  'profile.spec.reading.name': { zh: 'Reading / 阅读', en: 'Reading' },
  'profile.spec.reading.desc': {
    zh: '阅读让我看见自己，让我看见天地众生。明白去爱、去经历、去感受、去接纳，这就是生命的全部意义。当我们专注于河水咆哮的交响，当不再听到哀，听到笑，当灵魂不再执念于一种声音，自我不再被占据，而是倾听一切，倾听整体和统一时，这伟大的交响，凝成了一个字，这个字是"唵"，意为圆满。 "你可听见？"',
    en: 'Reading lets me see myself, and lets me see the天地众生. To love, to experience, to feel, to accept — this is the full meaning of life. When we focus on the symphony of the roaring river, when we no longer hear sorrow or laughter, when the soul is no longer obsessed with one voice, when the self is no longer occupied but listens to everything, to the whole and the unified, this great symphony condenses into one word — "Om," meaning wholeness. "Can you hear it?"',
  },
  'profile.spec.reading.img.label': { zh: '阅读笔记占位', en: 'Reading notes placeholder' },

  // Resume Section
  'resume.title': { zh: 'RESUME FILE', en: 'RESUME FILE' },
  'resume.subtitle': { zh: '工作简历', en: 'Resume' },
  'resume.download': { zh: '下载完整简历 PDF', en: 'Download Full Resume' },
  'resume.preview.title': { zh: '简历预览', en: 'Resume Preview' },
  'resume.expand': { zh: '展开详情', en: 'Expand Details' },
  'resume.collapse': { zh: '收起', en: 'Collapse' },
  'resume.showcase': { zh: '相关展示', en: 'Showcase' },
  'resume.showcase.placeholder': { zh: '项目截图、方案材料待补充', en: 'Project screenshots and materials to be added' },
  'resume.intro': {
    zh: '在媒体与互联网内容相关实习中，参与内容生产与传播执行的多个环节。\n在实践中逐步形成对内容生产逻辑与平台分发机制的理解，能够基于数据反馈对内容方向进行基础调整与优化。\n具备从信息处理到内容表达、从执行到反馈分析的基础能力，并在不同工作场景中完成跨团队协同与任务衔接。',
    en: 'During media and internet content-related internships, participated in multiple stages of content production and distribution.\nDeveloped an understanding of content production logic and platform distribution mechanisms through practice, with the ability to make basic adjustments and optimizations based on data feedback.\nPossesses foundational capabilities from information processing to content expression, and from execution to feedback analysis, with cross-team collaboration and task coordination across diverse work settings.',
  },

  // Education items
  'resume.edu.master.school': { zh: '华中科技大学', en: 'Huazhong University of Science and Technology' },
  'resume.edu.master.degree': { zh: '硕士 / 广告与媒介经济', en: "Master's / Advertising & Media Economics" },
  'resume.edu.master.direction': { zh: '公共关系 / 国际传播 / 城市形象', en: 'Public Relations / International Communication / City Image' },
  'resume.edu.bachelor.school': { zh: '华中科技大学', en: 'Huazhong University of Science and Technology' },
  'resume.edu.bachelor.degree': { zh: '本科 / 播音与主持艺术', en: "Bachelor's / Broadcasting & Hosting Art" },
  'resume.edu.bachelor.direction': { zh: '广播电视节目制作 / 影视编导 / 播音主持', en: 'Broadcasting Production / Film Directing / Hosting' },
  'resume.edu.bachelor.honors.title': { zh: '校园经历与荣誉', en: 'Campus Experience & Honors' },
  'resume.edu.bachelor.honors.1': { zh: '成绩排名年级第 2，以第二名成绩保研', en: 'Ranked 2nd in grade, recommended for postgraduate admission' },
  'resume.edu.bachelor.honors.2': { zh: '2025 届校级优秀毕业生', en: 'University Outstanding Graduate, Class of 2025' },
  'resume.edu.bachelor.honors.3': { zh: '多次获评优秀学生干部、优秀共青团干部、校级奖学金', en: 'Multiple awards: Outstanding Student Cadre, Outstanding Youth League Cadre, University Scholarship' },
  'resume.edu.bachelor.honors.4': { zh: '担任校级学生会文体部部长', en: 'Head of Cultural & Sports Department, University Student Union' },
  'resume.edu.bachelor.honors.5': { zh: '主导策划 20 场大型活动、13 场校级主题活动', en: 'Led planning of 20 large-scale events and 13 university-level themed events' },
  'resume.edu.bachelor.honors.6': { zh: '主持大型活动 10 场以上', en: 'Hosted 10+ large-scale events' },
  'resume.edu.bachelor.honors.7': { zh: '获大学生广告大赛、计算机类竞赛省级及国家级奖项 3 项', en: 'Won 3 provincial and national awards in advertising and computing competitions' },
  'resume.edu.bachelor.honors.8': { zh: '独立策划大学生纪录片、大学生综艺《MBTI》节目', en: 'Independently produced student documentary and variety show "MBTI"' },

  // Internship 01: Alibaba-Youku
  'resume.intern.1.number': { zh: '01', en: '01' },
  'resume.intern.1.company': { zh: '阿里巴巴-优酷', en: 'Alibaba - Youku' },
  'resume.intern.1.role': { zh: '综艺内容运营（大文娱总裁班）', en: 'Variety Content Operations (President Class)' },
  'resume.intern.1.period': { zh: '2024.06 - 2024.10', en: '2024.06 - 2024.10' },
  'resume.intern.1.bullet.1': {
    zh: '担任 8 人团队队长，主导频道策略课题，考核获个人第 1、团队第 1，并获直通 offer。',
    en: 'Led a team of 8, spearheaded channel strategy project. Ranked #1 individually and #1 as a team; received a direct job offer.',
  },
  'resume.intern.1.bullet.2': {
    zh: '参与优酷 S+ 级自制综艺《是好朋友的周末2024》运营，围绕年轻用户偏好、节目看点，协同节目 PM 制定排播、促收及分阶段精细化运营策略，并跟进预热期与播出期执行及复盘；项目同比第一季点击量增长 45%，播转率提升 0.37%，收入翻倍，预热期预约量超 200 万+。',
    en: 'Participated in operations for Youku S+ variety show "Weekend with Friends 2024". Collaborated with PMs on scheduling, revenue, and phased strategies. +45% views YoY, +0.37% play-through rate, doubled revenue, 2M+ pre-launch reservations.',
  },
  'resume.intern.1.bullet.3': {
    zh: '独立负责《我们的歌》第六季、《奔跑吧》等版权综艺日常运营，完成竞品分析、搜索分发、Push 触达、数据监测及内容策略迭代，围绕节目亮点持续策划热点宣发与差异化方案；实习期累计独立运营 30+ 期节目，相关内容累计登上微博热搜 50+ 次。',
    en: 'Independently managed daily operations for licensed variety shows including "Our Song S6" and "Running Man". Completed competitive analysis, search distribution, push outreach, data monitoring, and content strategy. Operated 30+ episodes; related content trended on Weibo 50+ times.',
  },
  'resume.intern.1.showcase': {
    zh: '负责节目链接：',
    en: 'Responsible show links:',
  },

  // Internship 02: Kuaishou
  'resume.intern.2.number': { zh: '02', en: '02' },
  'resume.intern.2.company': { zh: '快手', en: 'Kuaishou' },
  'resume.intern.2.role': { zh: '商业化新媒体运营', en: 'Commercial New Media Operations' },
  'resume.intern.2.period': { zh: '2024.03 - 2024.06', en: '2024.03 - 2024.06' },
  'resume.intern.2.bullet.1': {
    zh: '达人营销项目运营：为提升"聚光计划"项目影响力，结合达人画像、内容风格与平台招商需求制定差异化营销方案，并通过策划、组织20场达人连麦活动放大项目声量、提升合作转化；单场连麦活动场均观看3w+，项目新增达人合作量1000+。',
    en: 'Creator Marketing Operations: Developed differentiated marketing plans for the "Spotlight Program" based on creator profiles and platform needs. Organized 20 creator co-streaming events. Average 30K+ views per session; 1000+ new creator partnerships.',
  },
  'resume.intern.2.bullet.2': {
    zh: '商业化内容运营：负责磁力聚星官方账号短视频及直播运营，围绕达人入驻平台及广告接单需求，策划输出平台招商、接单路径、合作玩法等内容，通过短视频与直播完成达人触达，并引导达人理解平台入驻及广告接单路径；实习期累计产出短视频40+期，单期平均播放量5万+，直播场均浏览量4000+，有效转化1000+达人广告合作。',
    en: 'Commercial Content Operations: Managed short video and live streaming for the official Magnetic Juxing account. Created content on platform onboarding, ad booking, and collaboration. Produced 40+ short videos (avg 50K+ views each), hosted live streams (avg 4000+ views), converted 1000+ creator ad partnerships.',
  },
  'resume.intern.2.showcase': {
    zh: '快手账号主页 / 代表短视频 / 直播项目截图',
    en: 'Kuaishou account homepage / representative short videos / live streaming screenshots',
  },

  // Internship 03: Chutian Music Radio
  'resume.intern.3.number': { zh: '03', en: '03' },
  'resume.intern.3.company': { zh: '楚天音乐广播', en: 'Chutian Music Radio' },
  'resume.intern.3.role': { zh: '播客内容策划', en: 'Podcast Content Planner' },
  'resume.intern.3.period': { zh: '2023.09 - 2024.04', en: '2023.09 - 2024.04' },
  'resume.intern.3.bullet.1': {
    zh: '主导电台新版块"从 0 到 1"搭建，通过竞品拆解明确账号定位、选题方向与内容矩阵，持续输出品牌、体育赛事等差异化内容；"BM 品牌""武汉足球三镇""CUBA 篮球赛"等首发选题公众号浏览量均超 1 万+。',
    en: 'Led the "zero-to-one" launch of a new radio segment. Defined positioning, topic direction, and content matrix through competitive analysis. First-run topics each exceeded 10K+ views on WeChat.',
  },
  'resume.intern.3.bullet.2': {
    zh: '结合播客热度数据与用户反馈优化活动选题，独立完成线下沙龙主题策划、流程设计与落地执行，累计推动 15+ 场活动落地，覆盖参与人次 3000+。',
    en: 'Optimized event topics based on podcast data and user feedback. Independently completed offline salon planning, process design, and execution. Delivered 15+ events with 3000+ total participants.',
  },
  'resume.intern.3.showcase': {
    zh: '播客栏目截图、公众号推文截图、线下沙龙活动照片、播客节目链接 / 公众号推文链接 / 活动案例材料',
    en: 'Podcast column screenshots, WeChat article screenshots, offline salon photos, podcast links / WeChat article links / event case materials',
  },

  // Internship 04 - 中国交通广播
  'resume.intern.4.number': { zh: '04', en: '04' },
  'resume.intern.4.company': { zh: '中国交通广播新媒体宣传部', en: 'China Transportation Radio, New Media Dept.' },
  'resume.intern.4.role': { zh: '内容运营实习生', en: 'Content Operations Intern' },
  'resume.intern.4.period': { zh: '2023.07 - 2023.09', en: '2023.07 - 2023.09' },
  'resume.intern.4.bullet.1': {
    zh: '根据拍摄场景、活动形式与主题，把握短视频内容重点，设计拍摄脚本，独立完成拍摄与剪辑；同时对标同类账号爆款视频，持续优化短视频拍摄重点、剪辑方式与内容呈现，提升作品质量。',
    en: 'Grasped short video content focus based on shooting scenarios and themes. Designed shooting scripts and independently completed filming and editing. Benchmarked against top-performing videos from similar accounts to continuously optimize shooting, editing, and content presentation.',
  },
  'resume.intern.4.bullet.2': {
    zh: '根据不同投放平台的内容特点，设计标题、文案与发布方式，吸引受众观看；结合后台数据分析发布频次与发布时间段，优化内容分发效果，发布作品浏览量累计达 10000 次以上。',
    en: 'Designed titles, copy, and publishing strategies based on platform-specific content characteristics. Optimized distribution by analyzing publishing frequency and timing with backend data. Accumulated over 10,000 views across published works.',
  },
  'resume.intern.4.showcase': {
    zh: '短视频脚本截图、拍摄现场照片、短视频作品截图、后台数据截图、代表作品链接',
    en: 'Short video script screenshots, on-set photos, video work screenshots, backend data screenshots, representative work links',
  },

  // Portfolio - Main
  'portfolio.title': { zh: 'WORKS ARCHIVE', en: 'WORKS ARCHIVE' },
  'portfolio.subtitle': { zh: '作品集', en: 'Portfolio' },
  'portfolio.intro': {
    zh: '围绕"内容如何被表达"展开的跨媒介实践集合。\n从选题生成、结构组织到表达实现，并通过发布后的反馈对创作路径进行修正与延展。\n这些实践构成对影像表达、文本生产与AI内容生成之间关系的持续探索。',
    en: 'A cross-media practice collection centered on "how content is expressed".\nFrom topic generation, structure organization to expression realization, with creative paths revised and extended through post-publication feedback.\nThese practices form an ongoing exploration of the relationship between visual expression, text production, and AI content generation.',
  },
  'portfolio.tab.video': { zh: '视频类作品', en: 'Video Works' },
  'portfolio.tab.article': { zh: '图文类作品', en: 'Article & Visual Works' },
  'portfolio.tab.academic': { zh: '学术类作品', en: 'Academic Works' },

  // Portfolio - Video
  'portfolio.video.subtitle': { zh: 'VIDEO WORKS', en: 'VIDEO WORKS' },
  'portfolio.video.intro': {
    zh: '这里收录番番参与或独立完成的视频类作品，涵盖 AI 创作、综艺节目、纪录片与广告内容。从选题策划、脚本设计、拍摄执行到后期剪辑，这些作品展示了她在影像表达、内容创意和视听叙事方面的实践能力。',
    en: 'A collection of video works that Chloe participated in or independently completed, covering AI creation, variety shows, documentaries, and advertisements. From topic planning, script design, shooting to post-production editing, these works demonstrate her practical abilities in visual expression, content creativity, and audiovisual storytelling.',
  },
  'portfolio.video.cat.ai': { zh: 'AI 类', en: 'AI' },
  'portfolio.video.cat.ai.short': { zh: 'AI 短剧', en: 'AI Short Drama' },
  'portfolio.video.cat.ai.creation': { zh: 'AI 创作', en: 'AI Creation' },
  'portfolio.video.cat.ai.early': { zh: '古早 AI', en: 'Early AI' },
  'portfolio.video.cat.variety': { zh: '综艺', en: 'Variety' },
  'portfolio.video.cat.documentary': { zh: '纪录片', en: 'Documentary' },
  'portfolio.video.cat.ad': { zh: '广告', en: 'Advertisement' },
  'portfolio.video.placeholder.title': { zh: '作品标题', en: 'Work Title' },
  'portfolio.video.placeholder.desc': { zh: '作品简介，待补充', en: 'Work description, to be added' },

  // Portfolio - Video - AI Short Drama (重生后，君为我折腰)
  'portfolio.video.aishort.title': { zh: '重生后，君为我折腰', en: 'Reborn, You Bow for Me' },
  'portfolio.video.aishort.type': { zh: 'AI 短剧 / AI 视频创作 / 古风情感短剧', en: 'AI Short Drama / AI Video Creation / Ancient Romance' },
  'portfolio.video.aishort.platform': { zh: '哔哩哔哩', en: 'Bilibili' },
  'portfolio.video.aishort.method': { zh: 'AI 辅助创作 + 后期剪辑包装', en: 'AI-Assisted Creation + Post-Production' },
  'portfolio.video.aishort.desc': { zh: '《重生后，君为我折腰》是一支古风情感向 AI 短剧作品。作品以"重生""情感反转""古风权力关系"等短剧常见叙事元素为基础，通过 AI 生成影像与短剧化剪辑方式，尝试将网络短剧的爽感结构、古风视觉风格和 AI 视频生成技术结合起来。', en: '"Reborn, You Bow for Me" is an ancient romance AI short drama. Based on common short drama narrative elements such as "rebirth," "emotional reversal," and "ancient power dynamics," the work attempts to combine the satisfying structure of web short dramas, ancient visual aesthetics, and AI video generation technology through AI-generated imagery and drama-style editing.' },
  'portfolio.video.aishort.process.title': { zh: '创作流程', en: 'Creative Process' },
  'portfolio.video.aishort.process.01.title': { zh: '01 题材判断', en: '01 Topic Selection' },
  'portfolio.video.aishort.process.01.desc': { zh: '选择了古风重生短剧作为创作方向。这个题材具有较强的平台识别度，也适合 AI 视觉化：古风人物、情感反转、权力关系、宿命感画面，都可以通过提示词和图像生成快速建立视觉基础。', en: 'Chose ancient-style rebirth short drama as the creative direction. This topic has strong platform recognition and is well-suited for AI visualization: ancient characters, emotional reversals, power dynamics, and fate-laden scenes can all quickly establish a visual foundation through prompts and image generation.' },
  'portfolio.video.aishort.process.02.title': { zh: '02 剧本与分镜拆解', en: '02 Script & Storyboard Breakdown' },
  'portfolio.video.aishort.process.02.desc': { zh: 'AI 短剧不能直接依靠一段完整文本生成成片，而需要先将故事拆解成可执行的镜头节点。在制作过程中，将剧情拆分为人物出场、关系建立、情绪冲突、转折推进和结尾钩子等部分，再分别转化为画面提示和镜头描述，提高生成结果的可控性，也方便后期根据素材质量重新调整叙事顺序。', en: 'AI short dramas cannot be generated directly from a complete text. The story must first be broken down into executable shot nodes. The plot is divided into character introductions, relationship building, emotional conflicts, turning points, and ending hooks, then converted into visual prompts and shot descriptions to improve controllability and allow narrative reordering based on material quality.' },
  'portfolio.video.aishort.process.03.title': { zh: '03 人物与视觉设定', en: '03 Character & Visual Design' },
  'portfolio.video.aishort.process.03.desc': { zh: '古风短剧对人物造型和视觉氛围要求较高，因此在正式生成视频前，需要先建立人物和世界观的视觉基准。主要使用 OIIOII 进行人物设定、古风场景和关键画面生成，并以豆包作为辅助工具，尽量统一角色的服饰、发型、妆容、色调与画面质感。', en: 'Ancient-style short dramas have high requirements for character styling and visual atmosphere. Before formal video generation, visual benchmarks for characters and worldview must be established. Primarily used OIIOII for character design, ancient scenes, and key frame generation, with Doubao as an auxiliary tool to unify costumes, hairstyles, makeup, color tones, and image quality.' },
  'portfolio.video.aishort.process.04.title': { zh: '04 视频生成', en: '04 Video Generation' },
  'portfolio.video.aishort.process.04.desc': { zh: '视频生成阶段主要使用 OIIOII、FLOVA、即梦等平台，并结合 Seedance 2.0 Pro 和 HappyHorse 1.1 大模型进行素材生成和效果测试。', en: 'The video generation phase primarily used platforms such as OIIOII, FLOVA, and Jimeng, combined with Seedance 2.0 Pro and HappyHorse 1.1 models for material generation and effect testing.' },
  'portfolio.video.aishort.process.05.title': { zh: '05 后期剪辑与平台包装', en: '05 Post-Production & Platform Packaging' },
  'portfolio.video.aishort.process.05.desc': { zh: 'AI 生成的视频素材通常是分散的镜头片段，真正形成短剧观看体验，还需要依靠后期剪辑。使用剪映完成镜头排序、字幕包装、音乐节奏、转场处理和最终导出。剪辑阶段重点处理开头吸引力、情绪推进和结尾停顿，让 AI 生成素材从"单个画面"变成具有连续观看感的短剧作品。', en: 'AI-generated video materials are usually scattered shot clips. To create a true short drama viewing experience, post-production editing is essential. Used CapCut for shot sequencing, subtitle packaging, music rhythm, transition handling, and final export. The editing phase focused on opening appeal, emotional progression, and ending pauses, transforming AI-generated materials from "individual frames" into a continuously watchable short drama.' },
  'portfolio.video.aishort.tools.title': { zh: '使用工具', en: 'Tools Used' },
  'portfolio.video.aishort.tools.01': { zh: 'ChatGPT / Claude / 豆包 — 剧本设定、人物关系梳理、分镜拆解、提示词辅助和发布文案整理', en: 'ChatGPT / Claude / Doubao — Script design, character relationship mapping, storyboard breakdown, prompt assistance, and copywriting' },
  'portfolio.video.aishort.tools.02': { zh: 'Coze / OIIOII — 人物设定、古风场景、封面图和关键画面生成', en: 'Coze / OIIOII — Character design, ancient scenes, cover images, and key frame generation' },
  'portfolio.video.aishort.tools.03': { zh: 'Seedance 2.0 Pro / HappyHorse 1.1 — 动态视频生成（古风人物、情绪镜头、氛围镜头、关键剧情画面）', en: 'Seedance 2.0 Pro / HappyHorse 1.1 — Dynamic video generation (ancient characters, emotional shots, atmosphere shots, key plot scenes)' },
  'portfolio.video.aishort.tools.04': { zh: 'OIIOII / FLOVA / 即梦 — 视频素材生成与效果测试，不同平台生成结果比较、筛选和补充', en: 'OIIOII / FLOVA / Jimeng — Video material generation and effect testing, cross-platform comparison, selection, and supplementation' },
  'portfolio.video.aishort.tools.05': { zh: '剪映 — 最终剪辑、字幕包装、音乐节奏、画面裁切和发布版本导出', en: 'CapCut — Final editing, subtitle packaging, music rhythm, frame cropping, and export for publishing' },
  'portfolio.video.aishort.review.title': { zh: '技术复盘', en: 'Technical Review' },
  'portfolio.video.aishort.review.01': { zh: '人物一致性问题：不同镜头中 AI 可能生成略有差异的人物面部、服饰和气质，需要在前期尽量统一人物设定，并通过反复生成和筛选减少跳跃感。', en: 'Character consistency: AI may generate slightly different character faces, costumes, and temperament across shots. Need to unify character design upfront and reduce inconsistency through repeated generation and selection.' },
  'portfolio.video.aishort.review.02': { zh: '动作稳定性问题：AI 在复杂动作、多人互动和连续运动上仍容易出现变形或不自然，因此更多使用情绪镜头、近景镜头、氛围镜头和轻微动作镜头，再通过剪辑完成节奏衔接。', en: 'Motion stability: AI still struggles with complex actions, multi-person interactions, and continuous movement. Therefore, more emotional shots, close-ups, atmosphere shots, and subtle motion shots were used, with rhythm achieved through editing.' },
  'portfolio.video.aishort.review.03': { zh: '视觉风格统一问题：不同模型和平台生成的画面质感不完全一致，需要通过统一色调、统一古风视觉关键词和后期剪辑来减少风格断裂。', en: 'Visual style consistency: Different models and platforms produce inconsistent image quality. Unified color tones, consistent ancient visual keywords, and post-production editing help reduce style breaks.' },
  'portfolio.video.aishort.review.04': { zh: '叙事连贯问题：AI 生成的素材更像"镜头片段"而非完整故事，剪辑、字幕和音乐承担了补足情节、组织情绪和引导观众理解的作用。', en: 'Narrative coherence: AI-generated materials are more like "shot fragments" than complete stories. Editing, subtitles, and music serve to fill in plot gaps, organize emotions, and guide audience understanding.' },
  'portfolio.video.aishort.review.05': { zh: 'AI 视频创作并不是替代创作者，而是改变了创作流程。AI 可以帮助个人创作者更快完成影像实验，但作品是否成立，仍取决于创作者对题材、分镜、人物、情绪、节奏和平台传播的整体判断。', en: 'AI video creation does not replace creators but changes the creative process. AI helps individual creators complete visual experiments faster, but whether a work succeeds still depends on the creator\'s overall judgment of topic, storyboard, characters, emotion, rhythm, and platform distribution.' },
  'portfolio.video.aishort.watch': { zh: '观看完整作品', en: 'Watch Full Work' },
  'portfolio.video.aishort.bilibili': { zh: '打开 B站链接', en: 'Open Bilibili Link' },
  'portfolio.video.aishort.tags': { zh: 'AI短剧 / 古风情感 / 重生叙事 / AI视频生成 / 短剧剪辑 / 多模型协作 / 平台发布', en: 'AI Short Drama / Ancient Romance / Rebirth Narrative / AI Video Generation / Drama Editing / Multi-Model Collaboration / Platform Publishing' },

  // Portfolio - Video - Variety (MBTI)
  'portfolio.video.variety.mbti.type': { zh: '综艺节目策划 / 视听节目编导作品', en: 'Variety Show Planning / Audio-Visual Directing' },
  'portfolio.video.variety.mbti.role': { zh: '导演 / 组长 / 节目策划 / 流程统筹 / 拍摄', en: 'Director / Team Lead / Show Planner / Flow Coordinator / Camera' },
  'portfolio.video.variety.mbti.desc': { zh: '《MBTI星球》是一档以 MBTI 人格测试为切入点的青年向综艺节目。节目将参与者设定为"MBTI 星球代言人"候选人，通过自我介绍、猜题游戏、聊天室等环节，观察不同人格倾向在表达方式、沟通习惯、决策风格和团队互动中的差异。', en: '"MBTI Planet" is a youth-oriented variety show centered on MBTI personality testing. Participants are set as candidates for "MBTI Planet Spokesperson," and through self-introductions, guessing games, chat rooms, and other segments, the show observes differences in expression, communication habits, decision-making styles, and team interactions across personality types.' },
  'portfolio.video.variety.mbti.desc2': { zh: '相比单纯科普 MBTI，节目更希望用轻松、游戏化的方式呈现性格差异：让观众在娱乐氛围中理解 I/E、S/N、F/T、J/P 等维度，也在嘉宾互动中看到 MBTI 如何进入年轻人的自我介绍、社交判断和日常关系。', en: 'Rather than simply popularizing MBTI, the show aims to present personality differences in a light, gamified way: letting audiences understand dimensions like I/E, S/N, F/T, J/P in an entertaining atmosphere, and seeing how MBTI enters young people\'s self-introductions, social judgments, and daily relationships.' },
  'portfolio.video.variety.mbti.highlight1': { zh: '以 MBTI 热点话题切入，贴近年轻受众的社交兴趣与自我认知需求。', en: 'Leverages the MBTI hot topic to connect with young audiences\' social interests and self-awareness needs.' },
  'portfolio.video.variety.mbti.highlight2': { zh: '将人格维度转化为具体游戏任务，让抽象性格概念变得更直观。', en: 'Transforms personality dimensions into concrete game tasks, making abstract personality concepts more tangible.' },
  'portfolio.video.variety.mbti.highlight3': { zh: '设置"MBTI 星球代言人"选举情境，增强节目叙事感和参与感。', en: 'Sets up a "MBTI Planet Spokesperson" election scenario to enhance narrative engagement.' },
  'portfolio.video.variety.mbti.highlight4': { zh: '通过嘉宾互动、投票和采访，兼顾娱乐效果与性格观察。', en: 'Balances entertainment and personality observation through guest interactions, voting, and interviews.' },
  'portfolio.video.variety.mbti.highlight5': { zh: '在策划中考虑 MBTI 标签化风险，强调性格理解的开放性与多元性。', en: 'Addresses MBTI labeling risks in planning, emphasizing openness and diversity in personality understanding.' },

  // Portfolio - Video - Documentary (花火)
  'portfolio.video.doc.label': { zh: 'DOCUMENTARY FILE 01', en: 'DOCUMENTARY FILE 01' },
  'portfolio.video.doc.name': { zh: '《花火》', en: '"Spark"' },
  'portfolio.video.doc.type': { zh: '纪录片', en: 'Documentary' },
  'portfolio.video.doc.duration': { zh: '13 分 14 秒', en: '13 min 14 sec' },
  'portfolio.video.doc.role': { zh: '小组组长 / 策划 / 文案 / 拍摄 / 后期 / 海报设计 / 出镜采访', en: 'Team Lead / Planner / Writer / Camera / Post-production / Poster Design / Interview' },
  'portfolio.video.doc.desc': { zh: '《花火》是一部关于学生乐队的纪录片。影片记录了一支即将解散的学生乐队，在现实、毕业、生活选择与音乐热爱之间如何继续延续自身生命力。作品没有把"乐队"仅仅处理成青春热血的符号，而是把镜头对准成员们真实的生活处境、个人选择和情感表达，呈现他们在理想与现实之间的摇摆、坚持与告别。', en: '"Spark" is a documentary about a student band. The film follows a student band on the verge of disbanding, exploring how they continue to sustain their vitality amid reality, graduation, life choices, and their passion for music. Rather than treating "band" as merely a symbol of youthful passion, the film turns its lens toward the members\' real life circumstances, personal choices, and emotional expression, presenting their oscillation, persistence, and farewell between ideals and reality.' },
  'portfolio.video.doc.video.label': { zh: '纪录片视频', en: 'Documentary Video' },
  'portfolio.video.doc.video.link': { zh: '百度网盘链接', en: 'Baidu Pan Link' },
  'portfolio.video.doc.report.label': { zh: '纪录片报告', en: 'Documentary Report' },
  'portfolio.video.doc.report.download': { zh: '下载报告', en: 'Download Report' },

  // Portfolio - Video - Documentary 02 (济世神医万密斋)
  'portfolio.video.doc2.label': { zh: 'DOCUMENTARY FILE 02', en: 'DOCUMENTARY FILE 02' },
  'portfolio.video.doc2.name': { zh: '《济世神医万密斋》', en: '"The Healer Wan Mizhai"' },
  'portfolio.video.doc2.type': { zh: '纪录片 / 历史人物影像 / 中医文化传播', en: 'Documentary / Historical Figure Film / TCM Culture' },
  'portfolio.video.doc2.award': { zh: '大计赛获奖作品', en: 'Competition Award Winner' },
  'portfolio.video.doc2.desc': { zh: '《济世神医万密斋》是一部围绕明代医家万密斋展开的纪录片作品。作品以历史人物为入口，讲述万密斋的医学实践、医者精神与地方文化记忆，试图将一位古代医学家的生命故事转化为更容易被当代观众理解的影像叙事。', en: '"The Healer Wan Mizhai" is a documentary centered on Wan Mizhai, a physician of the Ming Dynasty. Using this historical figure as an entry point, the work tells the story of his medical practice, healer\'s spirit, and local cultural memory, attempting to transform the life story of an ancient physician into a visual narrative more accessible to contemporary audiences.' },
  'portfolio.video.doc2.desc2': { zh: '影片并不只是介绍一位历史名医，而是通过"济世"这一关键词，呈现中医文化中关于医德、仁心、救人和传承的价值。万密斋的故事连接着医学史、地方文化和普通人的生命经验，也让"传统文化"不再只是书本中的知识，而成为可以被观看、被感受、被重新理解的内容。', en: 'The film does not merely introduce a famous historical physician, but uses the keyword "healing the world" to present the values of medical ethics, benevolence, salvation, and inheritance in traditional Chinese medicine culture. Wan Mizhai\'s story connects medical history, local culture, and ordinary people\'s life experiences, making "traditional culture" no longer just knowledge in books, but something that can be watched, felt, and re-understood.' },
  'portfolio.video.doc2.watch': { zh: '观看完整作品', en: 'Watch Full Work' },

  // Portfolio - Video - Ad 01 (爱华仕箱包)
  'portfolio.video.ad.label': { zh: 'ADVERTISING FILE 01', en: 'ADVERTISING FILE 01' },
  'portfolio.video.ad.name': { zh: '《爱华仕箱包》', en: '"Oiwashi Luggage"' },
  'portfolio.video.ad.type': { zh: '广告短片 / 品牌传播 / 大广赛参赛作品', en: 'Ad Film / Brand Communication / Competition Entry' },
  'portfolio.video.ad.award': { zh: '大广赛获奖作品', en: 'Competition Award Winner' },
  'portfolio.video.ad.desc': { zh: '《爱华仕箱包》是一支围绕箱包品牌"爱华仕"创作的广告短片。作品以年轻人的出行、选择与生活状态为切入点，将箱包从单纯的收纳工具，转化为陪伴人们走向更大世界的日常物件。', en: '"Oiwashi Luggage" is an advertising short film created for the luggage brand "Oiwashi." Using young people\'s travel, choices, and lifestyle as an entry point, the work transforms luggage from a mere storage tool into an everyday companion that accompanies people toward a bigger world.' },
  'portfolio.video.ad.desc2': { zh: '广告围绕"装得下"的品牌表达展开：箱包装下的不只是衣物和行李，也可以是期待、计划、勇气、变化和对远方的想象。作品尝试用影像语言呈现年轻人从日常生活出发、走向新的空间与可能性的过程。', en: 'The ad revolves around the brand expression of "fits everything": what the luggage carries is not just clothes and baggage, but also expectations, plans, courage, change, and imagination of distant places. The work attempts to use visual language to present the process of young people setting out from daily life toward new spaces and possibilities.' },
  'portfolio.video.ad.visual.title': { zh: '视觉与节奏', en: 'Visual & Rhythm' },
  'portfolio.video.ad.visual.desc': { zh: '广告整体采用明快、轻盈、年轻化的视觉节奏。画面突出箱包在不同场景中的使用状态，例如整理、推行、转身、出门、抵达等动作，让产品自然进入叙事，而不是以生硬特写出现。剪辑上通过场景切换制造"出发感"，让观众感受到从日常到远方、从原地到新生活的变化。音乐和字幕则负责强化情绪，让广告在功能表达之外保留轻松、积极和向外生长的气质。', en: 'The ad adopts a bright, light, and youthful visual rhythm throughout. The visuals highlight the luggage in use across different scenarios — packing, rolling, turning, leaving, arriving — letting the product naturally enter the narrative rather than appearing as forced close-ups. Editing creates a sense of departure through scene transitions, making the audience feel the shift from daily routine to distant places, from staying put to a new life. Music and subtitles reinforce the emotion, giving the ad a relaxed, positive, and outward-growing quality beyond functional expression.' },
  'portfolio.video.ad.watch': { zh: '观看完整作品', en: 'Watch Full Work' },

  // Portfolio - Article
  'portfolio.article.subtitle': { zh: 'ARTICLE & VISUAL WORKS', en: 'ARTICLE & VISUAL WORKS' },
  'portfolio.article.intro': {
    zh: '这里收录番番参与创作或运营的图文内容，包括公众号推文、选题策划、内容编辑与传播呈现。相比视频作品，图文类内容更侧重选题判断、文字表达、排版审美与账号内容调性建设。',
    en: 'A collection of written and visual content that Chloe participated in creating or managing, including official account articles, topic planning, content editing, and communication presentation. Compared to video works, article content focuses more on topic judgment, writing expression, layout aesthetics, and account content tone building.',
  },
  'portfolio.article.file.title': { zh: '卡拉米 ColourMe', en: 'ColourMe' },
  'portfolio.article.file.type': { zh: '微信公众号 / 图文内容策划', en: 'WeChat Official Account / Graphic Content Planning' },
  'portfolio.article.file.intro': {
    zh: '"卡拉米"是一个网络用语，指向籍籍无名的普通人；而 ColourMe 则意味着无数个 colour 瞬间共同构成了"我"。我们希望用这个名字回应一种很普遍的生活状态：大多数时候，我们也许只是生活里普通的卡拉米，但总有一些瞬间，会让我们重新感到自己是鲜明的、特别的、正在被生活触动的。',
    en: '"Karami" is an internet term referring to ordinary, unknown people; while ColourMe means countless colour moments together form "me". We hope to respond to a very common state of life with this name: most of the time, we may just be ordinary Karami in life, but there are always moments that make us feel vivid, special, and touched by life again.',
  },
  'portfolio.article.file.concept': {
    zh: '卡拉米 ColourMe 的核心，是从"媒介"重新理解生活感受。我们最初从互联网、报刊等当代与传统媒介出发，进一步想到风、声音、气味、食物、触感这些更原始也更自然的媒介。由此，我们选择以"五感"为线索，从听觉、嗅觉、味觉、触觉、视觉展开五期内容。在这个系列中，媒介不只是传播信息的工具，也可以是人重新感知生活的方式。一首歌、一种气味、一口食物、一次触碰、一帧画面，都可能成为把人带回自身的入口。我们希望通过这些具体而细微的感官经验，让读者开始留意属于自己的 colour 瞬间。',
    en: 'The core of ColourMe is to re-understand life experiences through "media". Starting from contemporary and traditional media like the internet and newspapers, we further thought of wind, sound, smell, food, and touch — more primitive and natural media. We chose "five senses" as the thread, developing five issues from hearing, smell, taste, touch, and vision.',
  },
  'portfolio.article.file.links.label': { zh: '推文链接', en: 'Article Links' },

  // Portfolio - Academic
  'portfolio.academic.subtitle': { zh: 'ACADEMIC WORKS', en: 'ACADEMIC WORKS' },
  'portfolio.academic.intro': {
    zh: '这里收录番番参与的学术研究与论文成果，内容涉及生成式 AI、智能营销、公共传播、媒介技术与公众态度等方向。该部分重点展示她在研究设计、资料整理、调研分析、论文写作和学术表达方面的能力。',
    en: 'A collection of academic research and paper achievements that Chloe participated in, covering generative AI, intelligent marketing, public communication, media technology, and public attitudes. This section focuses on demonstrating her abilities in research design, data organization, survey analysis, paper writing, and academic expression.',
  },
  'portfolio.academic.file.title': { zh: '论文 / 项目标题', en: 'Paper / Project Title' },
  'portfolio.academic.file.direction': { zh: '研究方向', en: 'Research Direction' },
  'portfolio.academic.file.desc': { zh: '作品简介', en: 'Description' },
  'portfolio.academic.file.participation': { zh: '个人参与', en: 'Personal Contribution' },
  'portfolio.academic.file.participation.desc': {
    zh: '参与资料整理、文献梳理、问卷/访谈分析、报告撰写或论文修改等工作。',
    en: 'Participated in data organization, literature review, questionnaire/interview analysis, report writing, and paper revision.',
  },
  'portfolio.academic.doc.1': { zh: '传播学研究方法论文 — 强竟瑶、王芮、蒋润宇、柴子凌', en: 'Communication Research Methods Paper — Qiang Jingyao, Wang Rui, Jiang Runyu, Chai Ziling' },
  'portfolio.academic.doc.2': { zh: '课程展示 PPT（4.24）', en: 'Course Presentation PPT (4.24)' },
  'portfolio.academic.doc.3': { zh: '学位论文相关作业（M202575652）', en: 'Thesis-related Assignment (M202575652)' },
  'portfolio.academic.doc.4': { zh: '广告与公共关系效果作业（第11次）', en: 'Advertising & Public Relations Effectiveness Assignment (No.11)' },
  'portfolio.academic.doc.5': { zh: '广告与公关效果分析作业（第13次）', en: 'Advertising & PR Effectiveness Analysis Assignment (No.13)' },
  'portfolio.academic.doc.6': { zh: '国际传播（金山文档）', en: 'International Communication (WPS Docs)' },

  // Social Section
  'social.title': { zh: 'SOCIAL MEDIA ARCHIVE', en: 'SOCIAL MEDIA ARCHIVE' },
  'social.subtitle': { zh: '账号运营', en: 'Account Operations' },
  'social.intro': {
    zh: '基于持续的内容发布与平台反馈，对账号的表达结构进行调整与重组，使选题逻辑与内容呈现保持动态更新。\n在这一过程中，形成对短视频表达与图文内容组织方式的持续观察与实践。',
    en: 'Through continuous content publishing and platform feedback, I adjust and restructure the account\'s expression framework, keeping topic selection logic and content presentation dynamically updated.\nThrough this process, I develop ongoing observation and practice in short video expression and graphic content organization.',
  },
  'social.tab.douyin': { zh: '抖音账号', en: 'Douyin Account' },
  'social.tab.xiaohongshu': { zh: '小红书账号', en: 'Xiaohongshu Account' },
  // Douyin
  'social.douyin.name': { zh: '番番', en: 'Fanfan' },
  'social.douyin.platform': { zh: '抖音', en: 'Douyin (TikTok CN)' },
  'social.douyin.positioning': { zh: '个人短视频内容账号', en: 'Personal Short Video Content Account' },
  'social.douyin.desc': {
    zh: '主要分享手势舞、学校生活Vlog等。\n一部分是偏娱乐表达的短视频拍摄，比如手势舞；另一部分是对校园生活的记录，比如日常片段、学习和生活场景。\n整体更偏向真实记录和轻表达，不是固定主题账号，而是围绕校园生活做内容输出。',
    en: 'Mainly sharing hand gesture dances, school life vlogs, etc.\nOne part is entertainment-oriented short video shooting, such as hand gesture dances; the other is recording campus life, such as daily moments, study and life scenes.\nOverall leaning towards authentic documentation and light expression — not a fixed-theme account, but content output centered around campus life.',
  },
  'social.douyin.ops.1': { zh: '持续发觉热点话题与平台趋势', en: 'Continuously discover trending topics and platform trends' },
  'social.douyin.ops.2': { zh: '深化账号定位，将个人风格最大化', en: 'Deepen account positioning and maximize personal style' },
  'social.douyin.ops.3': { zh: '通过标题、封面、节奏和话题标签提升内容点击率，并根据播放量、互动量和评论反馈调整后续选题', en: 'Improve click-through rate through titles, covers, rhythm and hashtags, and adjust future topics based on views, engagement and comment feedback' },
  'social.douyin.ops.4': { zh: '关注内容的情绪共鸣、传播节点和用户停留', en: 'Focus on emotional resonance, viral nodes and user retention' },
  'social.douyin.stats.followers': { zh: '粉丝量：1.4 万+', en: 'Followers: 14K+' },
  'social.douyin.stats.likes': { zh: '累计获赞：27.1 万+', en: 'Total Likes: 271K+' },
  'social.douyin.stats.topViews': { zh: '热门视频播放量：50 万+', en: 'Top Video Views: 500K+' },
  'social.douyin.cases.title': { zh: '重点视频分析', en: 'Key Video Analysis' },
  'social.douyin.visit': { zh: '查看抖音账号', en: 'Visit Douyin Account' },
  // Xiaohongshu
  'social.xhs.name': { zh: '小机器人是大努力', en: 'Little Robot Works Hard' },
  'social.xhs.platform': { zh: '小红书', en: 'Xiaohongshu (RED)' },
  'social.xhs.positioning': { zh: '学习类 / 研究生日常 / 个人成长类内容账号', en: 'Study / Grad Life / Personal Growth Content Account' },
  'social.xhs.desc': {
    zh: '校园博主-主要内容为知识分享、校园生活。\n内容以校园生活记录和轻量知识整理为主，风格偏清晰、实用，偏向图文表达。\n整体定位是一个校园生活+知识表达结合的内容账号。',
    en: 'Campus blogger — main content is knowledge sharing and campus life.\nContent focuses on campus life documentation and lightweight knowledge organization, with a clear, practical style leaning towards graphic-text expression.\nOverall positioning is a content account combining campus life and knowledge expression.',
  },
  'social.xhs.ops.1': { zh: '围绕研究生生活、学习经验、书籍分享等方向进行内容规划', en: 'Plan content around grad life, study experience, book sharing and more' },
  'social.xhs.ops.2': { zh: '结合平台热点和用户搜索需求优化选题', en: 'Optimize topics by combining platform trends and user search needs' },
  'social.xhs.ops.3': { zh: '通过标题、封面、关键词和正文结构提升点击与收藏', en: 'Improve clicks and bookmarks through titles, covers, keywords and content structure' },
  'social.xhs.ops.4': { zh: '根据互动数据调整内容方向', en: 'Adjust content direction based on engagement data' },
  'social.xhs.ops.5': { zh: '使用 AI 工具辅助选题生成、内容迭代和发布规划', en: 'Use AI tools to assist topic generation, content iteration and publishing planning' },
  'social.xhs.stats.1': { zh: '4 个月涨粉 2000+', en: '2000+ followers gained in 4 months' },
  'social.xhs.stats.2': { zh: '累计获赞 1000+', en: 'Total Likes: 1000+' },
  'social.xhs.stats.3': { zh: '使用 AI 编程助手扣子搭建内容运营 Agent，提高内容生产效率', en: 'Built content operation Agent using AI coding assistant Coze, improving content production efficiency' },
  'social.xhs.cases.title': { zh: '重点图文分析', en: 'Key Graphic Analysis' },
  'social.xhs.visit': { zh: '查看小红书账号', en: 'Visit Xiaohongshu Account' },
  // Common
  'social.section.profile': { zh: '账号档案', en: 'Account Profile' },
  'social.section.ops': { zh: '运营心得', en: 'Operation Insights' },
  'social.section.cases': { zh: '重点内容分析', en: 'Key Content Analysis' },
  'social.section.screenshots': { zh: '账号截图', en: 'Account Screenshots' },
  'social.section.qr': { zh: '二维码与跳转', en: 'QR Code & Links' },
  'social.openLink': { zh: '打开主页 >', en: 'Open Profile >' },
  'social.case.placeholder': { zh: '待补充', en: 'To be added' },

  // Contact Section
  'contact.title': { zh: 'CONTACT CARD', en: 'CONTACT CARD' },
  'contact.subtitle': { zh: '欢迎通过以下方式联系我', en: 'Feel free to reach out through any of the following channels' },
  'contact.email.label': { zh: '电子邮箱', en: 'Email' },
  'contact.email.value': { zh: '2870605846@qq.com', en: '2870605846@qq.com' },
  'contact.email.value2': { zh: 'fanfan020703@gmail.com', en: 'fanfan020703@gmail.com' },
  'contact.wechat.label': { zh: '微信', en: 'WeChat' },
  'contact.wechat.value': { zh: '13569623398', en: '13569623398' },
  'contact.xiaohongshu.label': { zh: '小红书', en: 'Xiaohongshu' },
  'contact.xiaohongshu.value': { zh: '899477217', en: '899477217' },
  'contact.douyin.label': { zh: '抖音', en: 'Douyin' },
  'contact.douyin.value': { zh: '39635594', en: '39635594' },
  'contact.note': {
    zh: '无论是工作、拍摄、学术交流还是其他机会，都欢迎随时联系。',
    en: 'Whether for work, filming, academic exchange, or other opportunities, feel free to get in touch anytime.',
  },

  // Footer
  'footer.copyright': { zh: '强竟瑶 / Qiang Jingyao', en: 'Qiang Jingyao' },
  'footer.note': { zh: '个人档案馆 — 更新于', en: 'Personal Archive — Updated' },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[lang] ?? key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
