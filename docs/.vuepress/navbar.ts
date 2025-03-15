import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: "material-symbols-light:home" },
  { text: '博客', link: '/blog/',icon: "material-symbols-light:article" },
  { text: '标签', link: '/blog/tags/',icon: "material-symbols-light:tag" },
  { text: '归档', link: '/blog/archives/', icon: "material-symbols-light:folder-copy" },
  { text: '请我喝杯阿萨姆！', link: 'https://afdian.com/a/RawDiamondMC', icon: "streamline:tea-cup-solid" },
  /*{
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },*/
])
