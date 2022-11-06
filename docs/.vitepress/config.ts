module.exports = {
  lang: 'zh-CN',
  title: 'missyt-utils',
  base: '/mutils',
  description: 'js常用工具函数',
  lastUpdated: true,
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/webtj/missyt-utils' }],
    editLink: {
      pattern: 'https://github.com/webtj/missyt-utils/tree/main/docs/:path',
      text: '在GitHub编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present by taojian',
    },
    algolia: {
      appId: 'ZZNDXJ2XIU',
      apiKey: 'a6e9af943b8057a410b4059a1bb3306f',
      indexName: 'FasTool',
    },
  },
}

function nav() {
  return [
    { text: '开始吧', link: '/guide/' },
    { text: '博客', link: 'https://www.taojian.icu/' },
    { text: '找到我', link: 'https://github.com/webtj' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '🚦 准备好了吗',
      collapsible: true,
      items: [
        { text: '介绍一下', link: '/guide/' },
        { text: '快速上手', link: '/guide/start' },
        { text: '参与编辑', link: '/guide/EditMd' },
      ],
    },
    {
      text: '🚦 浏览器',
      items: [
        { text: 'Browser', link: '/guide/Browser' },
        { text: 'Device设备', link: '/guide/Device' },
        { text: 'Dom操作', link: '/guide/Dom' }
      ]
    },
    {
      text: '🚦 本地储存',
      items: [
        { text: 'Cookie操作', link: '/guide/Cookie' },
        { text: 'Storage操作', link: '/guide/Storage' },
      ],
    }
  ]
}
