import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'RawDiamondMC 的个人博客',
  description: '',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://s2.loli.net/2025/03/15/8EzegPl2yqTdSNa.png' }],
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    hostname: 'https://rawdiamondmc.github.io/',
    lastUpdated: {
      formatOptions: {
        timeZone: "Asia/Shanghai",
        hour12: false,
        dateStyle: "short",
        timeStyle: "short",
      }
    },
    blog: {
       pagination: false,
    },
    article: '/article/',
    cache: 'filesystem',
    autoFrontmatter: {
       permalink: true,
       createTime: true,
       title: true,
    },
    plugins: {
      shiki: {
         twoslash: true,
      },
      markdownEnhance: {
         chartjs: true,
         mermaid: true,
      },
      markdownPower: {
         plot: {
          mask: {
            light: "#000000",
            dark: "#ffffff"
          }
         },
         bilibili: true,
         fileTree: true,
         artPlayer: true,
         icons: true,
         npmTo: true,
         repl: {
           rust: true,
           kotlin: true,
         },
         imageSize: 'local',
      },
    },
  }),
})
