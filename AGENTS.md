# AGENTS.md

## 项目概览

强竟瑶个人档案馆网站 — "个人档案馆 / 独立出版物 / 图书馆目录 / 纸质索引卡"风格的单页展示网站。

目标用户：招聘面试官、学术同行、对研究方向感兴趣的公众。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui + Tailwind CSS 4
- **Fonts**: IBM Plex Mono (等宽标签), Noto Serif SC (中文标题), PingFang SC (正文)

## 目录结构

```
src/
├── app/
│   ├── layout.tsx          # 根布局，I18nProvider 包裹
│   ├── page.tsx            # 主页面，组合所有 section
│   └── globals.css         # 全局样式，档案风格设计系统
├── components/
│   ├── navigation.tsx      # 顶部导航（标签式锚点 + 语言切换）
│   ├── profile-section.tsx # 首屏：个人介绍 + 索引卡
│   ├── resume-section.tsx  # 工作简历：PDF 预览 + 摘要
│   ├── portfolio-section.tsx # 作品集：档案目录式索引表
│   ├── social-section.tsx  # 社交媒体索引
│   ├── contact-section.tsx # 联系档案卡
│   └── ui/                 # shadcn/ui 组件库
├── lib/
│   ├── i18n.tsx            # 国际化系统（中英双语 Context）
│   └── utils.ts            # 通用工具函数
└── hooks/
    └── use-mobile.ts       # 移动端检测 Hook
```

## 核心功能

1. **中英双语切换**：`src/lib/i18n.tsx` 中维护翻译字典，通过 `useI18n()` hook 使用
2. **锚点导航**：5 个 section（profile/resume/portfolio/social/contact），平滑滚动
3. **作品集交互**：点击目录行展开详情卡片
4. **响应式**：移动端导航折叠为菜单，双卡片布局改为上下排列

## 设计风格

详见 `DESIGN.md`。核心：
- 浅灰背景 + 米白纸卡 + 淡黄索引卡
- 等宽字体标签 + 宋体标题
- 虚线分隔 + 印章式装饰
- 极低饱和度，克制留白

## 开发命令

- `pnpm dev` — 启动开发服务器
- `pnpm build` — 构建生产版本
- `pnpm start` — 启动生产服务器
- `pnpm ts-check` — TypeScript 类型检查
- `pnpm lint` — ESLint 检查

## 内容更新指南

- **翻译文本**：编辑 `src/lib/i18n.tsx` 中的 `translations` 对象
- **作品集条目**：编辑 `src/components/portfolio-section.tsx` 中的 `ITEMS` 数组
- **社交媒体链接**：编辑 `src/components/social-section.tsx` 中的 `SOCIAL_ITEMS` 数组
- **联系方式**：编辑 `src/components/contact-section.tsx`
- **照片/视频**：替换 `src/components/profile-section.tsx` 中的占位区域
