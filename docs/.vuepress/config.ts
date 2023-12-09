import { defineUserConfig} from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { viteBundler } from 'vuepress'
import theme from "./theme";
export default defineUserConfig({
    plugins: [
        docsearchPlugin({
          apiKey: 'c30c4d59605d21483f6b76cdde63ce96',
          appId: 'MTVNNUDZBE',
          indexName: 'kaitaku',
          placeholder: '请输入您需要搜索的内容',
          translations: {
            button: {
              buttonText: '搜索文档'
            }
          }
        }),
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
    })
})