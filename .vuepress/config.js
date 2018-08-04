module.exports = {
  base: '/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'zh',
      title: 'VuePress',
      description: 'Vue 真的很爽快'
    },
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
  },
  themeConfig: {
    navbar: true,
    search: false,
    searchMaxSuggestions: 10,
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'zh', // this will be set as the lang attribute on <html>
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
        selectText: '選擇語言',
        label: '繁體中文',
        editLinkText: '在 GitHub 上编辑此页',
        navbar: true,
        nav: [
          { text: '主頁', link: '/zh/' },
          { text: '文章', link: '/zh/blog/' },
          { text: 'Github', link: 'https://github.com/clement10601' },
        ],
        algolia: {},
        sidebar: {
          '/zh/': [/* ... */],
          '/zh/nested/': [/* ... */]
        }
      },
      '/en/': {
        lang: 'en', // this will be set as the lang attribute on <html>
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // algolia docsearch options for current locale
        algolia: {},
        navbar: false,
        nav: [
          { text: 'Home', link: '/zh/' },
          { text: 'Blog', link: '/zh/blog/' },
          { text: 'Github', link: 'https://github.com/clement10601' },
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'image'
      }
    }
  },
}