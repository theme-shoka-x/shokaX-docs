import { defineUserConfig} from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme";
export default defineUserConfig({
    plugins: [
        googleAnalyticsPlugin({
            id: "G-LTTY0HV9Z3"
        })
    ],
    lang: 'zh-CN',
    title: 'Hexo-theme-ShokaX',
    description: '基于 shoka 的高度可定制现代hexo主题，简洁、高效、易用。',
    head: [['meta',{name: "baidu-site-verification",content: "codeva-8HEN8ONW9G"}]],
    theme: theme,
    shouldPrefetch: false,
    bundler: viteBundler({
      viteOptions: {
        build: {
          cssMinify: "lightningcss"
        }
      }
    }),
    locales: {
      '/': {
        lang: "zh-CN",
        title: "Hexo-theme-ShokaX",
        description: '基于 shoka 的高度可定制现代hexo主题，简洁、高效、易用。'
      },
      '/en/': {
        lang: "en-US",
        title: "Hexo-theme-ShokaX",
        description: 'Shoka-based highly customizable modern Hexo theme that is clean, efficient, and easy to use.'
      }
    }
})