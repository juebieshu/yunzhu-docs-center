import { defaultTheme } from '@vuepress/theme-default'
// import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default ({
  lang: 'zh-cn',
  head: [
  ['link', { rel: 'icon', href: '/images/logo.png' }],
  ["link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900"
  }],
  ['link', { 
    rel: 'stylesheet', 
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' 
  }]],
  title: '云筑工坊文档中心',
  description: '云筑工坊文档中心',

  theme: defaultTheme({
    contributors: false,
    lastUpdated: true,
    logo: '/images/logo.png',
    repo: 'https://github.com/juebieshu/yunzhu-docs-center/tree/docs',
    editLinks: true,
    editLinkText: '帮助我们改进此页面！',
    navbar: [
      // 第一项：文档中心
      // {
      //   text: '文档中心',
      //   prefix: '',
      //   children: [
      //     '/',
      //     '/info/', 
      //     '/troubleshoot/', 
      //   ],
      // },
      // 第二项：文档中心
      {
        text: '快速访问',
        children: [
          { text: '云筑工坊',
            children: [
              { text: 'Wiki', link: 'https://wiki.yunzhu.host' },
              { text: '皮肤站', link: 'https://skins.yunzhu.host' },
              { text: '世界地图', link: 'https://map.yunzhu.host' },
              { text: '图床', link: 'https://image.yunzhu.host' },
              { text: '线路图', link: 'https://metro.yunzhu.host' },
              { text: '服务状态监控', link: 'https://status.yunzhu.host' },
            ],
          },
          { text: '社交媒体',
            children: [
              {
                text: '哔哩哔哩',
                link: 'https://space.bilibili.com/3546779284932989',
              },
            ],
          },
        ],
      },
      // 第三项：友链（分服务器、团体、个人三类）
      {
        text: '友情链接',
        children: [
          // 服务器
          {
            text: '服务器',
            children: [
              {
                text: '青岚工艺',
                link: 'https://gmwiki.bklmc.top/',
              },
            ],
          },
          // 团体
          {
            text: '团体',
            children: [
              {
                text: 'IMG 无限广播电视总台',
                link: 'https://imgnews.cn/',
              },
            ],
          },
          // 个人
          {
            text: '个人',
            children: [
              {
                text: '豹猫苦力怕可乐的小站',
                link: 'https://www.bklmc.top/',
              },
              {
                text: '喵橘的小窝',
                link: 'https://www.xfunny.top/',
              },
              {
                text: 'SunRt233的站点',
                link: 'https://site.sunrt233.top/',
              },
            ],
          },
        ],
      },
    ],
    sidebar:[
      // 首页
      {
        text: '首页',
        link: '/',
        children:[
          {
            text: '引言',
            link: '/#引言'
          },
          {
            text: '服务器站点',
            link: '/#服务器站点'
          },
        ]
      },
      {
        text: '基础信息',
        children:[
          {
            text: '概述',
            link: '/info/'
          },
          {
            text: '玩家指南',
            link: '/info/player-guide.html'
          },
          {
            text: '建筑',
            link: '/info/build.html'
          },
          {
            text: '行政区划',
            link: '/info/area.html'
          },
        ]
      },
      {
        text: '运营信息',
        children:[
          {
            text: '管理组',
            link: '/operations/admingroup.html'
          },
          {
            text: '技术架构',
            link: '/operations/technology.html'
          },
          {
            text: '模组与插件',
            collapsible: true,
            link: '/operations/mods-and-plugins.html',
          },
          {
            text: '社交媒体',
            link: '/operations/sociala-medias.html'
          },
        ]
      },
      {
        text: '条例文件',
        children:[
          {
            text: '交流群群规',
            link: '/files/group-rules.html'
          },
          {
            text: '管理条例',
            link: '/files/regulations.html'
          },
          {
            text: '建设条例',
            link: '/files/build-regulations.html'
          },
          {
            text: '宣传条例',
            link: '/files/promotion-regulations.html'
          },
          {
            text: '通告文件',
            link: '/files/notice.html'
          },
        ]
      },
      {
        text: '疑难解答',
        children:[
          {text: '一般问题排查',link: '/troubleshoot/',},
          {children:[
            {text: '游戏启动问题',link: '/troubleshoot/general/game-startup-issue.html',},
            {text: '游玩问题',link: '/troubleshoot/general/play-game-issue.html'},
            {text: '游戏意外结束问题',link: '/troubleshoot/general/unexpected-end-of-game-issue.html'}
          ],},
          {text: '指令问题',link: '/troubleshoot/command-issue.html'},
          {text: '其他问题',link: '/troubleshoot/other-issue.html'}
        ]
      },
      {
        text: '杂项',
        children:[
          {
            text: '支持指南',
            link: '/misc/supporting-the-guides.html'
          },
          {
            text: '感谢',
            link: '/misc/thanks.html'
          }
        ]
      },
    ],
  }),
  bundler: webpackBundler(),
  plugins: [
    markdownHintPlugin({
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true,
    }),
    markdownStylizePlugin({
      align: true,
    }),
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    slimsearchPlugin({
      indexContent: true,
      suggestion: true,
    }),
    seoPlugin({
      // ogp: (ogp, page) => ({
      //   ...ogp,
      //   'og:image': page.frontmatter.banner || ogp['og:image'],
      // }),
      hostname: 'https://docs.e-craft.top/',
    }),
    sitemapPlugin({
      // 选项
    }),
  ],
})
