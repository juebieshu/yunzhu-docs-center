import { defaultTheme } from '@vuepress/theme-default'
// import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'

export default ({
  lang: 'zh-cn',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  title: '云筑工坊文档中心',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    contributors: false,
    lastUpdated: true,
    logo: '/images/logo.png',
    repo: 'https://github.com/juebieshu/yunzhu-docs-center',
    editLinks: true,
    editLinkText: '帮助我们改进此页面！',
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        prefix: '/group/',
            children: [
              'foo.md', // 解析为 `/guide/group/sub1/bar.md`
              'bar.md', // 解析为 `/guide/group/sub1/bar.md`

              // 一个外部链接
              {
                text: 'Example',
                link: 'https://example.com',
              },
        ],
      },
    ],
    sidebar:[
      // 首页
      {
        text: '首页',
        children:[
          {
            text: '引言',
            link: '/introduce.html#引言'
          },
          {
            text: '服务器站点',
            link: '/introduce.html#服务器站点'
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
            children:[
              {
                text: '模组列表',
                link: '/operations/plugins.html#模组列表'
              },
              {
                text: '推荐模组',
                link: '/operations/plugins.html#推荐模组'
              }
            ],
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
          {
            text: '概述',
            link: '/troubleshoot/',
          },
          {
            text: '游戏启动问题',
            link: '/troubleshoot/game-startup-issue.html'
          },
          {
            text: '游玩问题',
            link: '/troubleshoot/play-issue.html'
          },
          {
            text: '游戏意外结束问题',
            link: '/troubleshoot/unexpected-end-of-game-issue.html'
          },
          {
            text: '其他问题',
            link: '/troubleshoot/other-issue.html'
          }
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
            text: '鸣谢',
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
  ],
})
