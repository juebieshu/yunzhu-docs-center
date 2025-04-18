import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-cn',

  title: '云筑工坊文档中心',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    lastUpdated: true,
    logo: '../images/logo.png',
    repo: 'https://github.com/juebieshu/yunzhu-docs-center',
    editLinks: true,
    editLinkText: '帮助我们改进此页面！',
    navbar: [
      {
        text: '首页',
        link:'/',
      },
    ],
  }),

  bundler: webpackBundler(),
})
