import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'

const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-tools-notes/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '工具集合',
  description: '工具集合',
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    navbar: [
    ],
    sidebar: {
    }
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      linkCheck: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@recommend',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip', vertical: 'middle' },
              content: 'Recommend'
            }
          }
        }
      ],
    }),
    searchProPlugin({}),
    autoCatalogPlugin({}),
    copyCodePlugin({
      showInMobile: true
    })
  ]
})