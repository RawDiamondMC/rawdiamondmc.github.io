import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://github.com/RawDiamondMC.png',
  appearance: true,
  social: [
    { icon: 'github', link: 'https://github.com/RawDiamondMC/' },
  ],
  navbarSocialInclude: ['github'],
  aside: true,

  copyright: 'CC BY-SA 4.0',
  footer: {
    message: 'Powered by <a target="_blank" href="https://wolf.snowlyicewolf.club/">AmarokIce</a> & <a target="_blank" href="https://github.com/HO-Artisan/">HO-Artisan</a><br/><a href="https://icp.gov.moe/?keyword=20259182" target="_blank">萌ICP备20259182号</a>'
  },
  profile: {
    avatar: 'https://github.com/RawDiamondMC.png',
    name: 'RawDiamondMC 的个人博客',
    description: '',
    circle: true,
    location: '梦境',
    organization: 'Kessoku Tea Time & CTN STUDIO',
  },

  navbar,
  notes,
})
