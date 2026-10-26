export type Lang = 'zh' | 'en';

export const htmlLang: Record<Lang, string> = { zh: 'zh-Hant-TW', en: 'en' };

// Path prefix for each language; Chinese is the default and lives at the root.
export const base: Record<Lang, string> = { zh: '/', en: '/en/' };

export const ui = {
  zh: {
    home: '首頁',
    blog: '文章',
    about: '關於我',
    projects: '精選專案',
    experience: '工作經歷',
    skills: '技術專長',
    education: '學歷',
    languages: '語言與證照',
    present: '至今',
    latestPosts: '最新文章',
    allPosts: '所有文章',
    contact: '聯絡方式',
    noPosts: '還沒有文章。',
    switchLang: 'English',
    backToBlog: '← 回到文章列表',
    notFound: '找不到這個頁面。',
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    about: 'About',
    projects: 'Selected projects',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    languages: 'Languages & certifications',
    present: 'present',
    latestPosts: 'Latest posts',
    allPosts: 'All posts',
    contact: 'Contact',
    noPosts: 'No posts yet.',
    switchLang: '中文',
    backToBlog: '← Back to all posts',
    notFound: 'Page not found.',
  },
} as const;

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
