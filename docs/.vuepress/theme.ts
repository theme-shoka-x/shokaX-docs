import { hopeTheme } from "vuepress-theme-hope";
import navbar from './nav/navbar'
import sidebar from './nav/sidebar'

export default hopeTheme({
    displayFooter: true,
    footer: "<a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">津ICP备2022001375号</a>",
    sidebar: sidebar,
    navbar: navbar,
    plugins: {
        prismjs: false,
        mdEnhance: {
            codetabs: true
        },
        feed: {
            rss: true
        },
        // TODO 配置icon
        pwa: {
            cachePic: true,
            update: "available"
        }
    },
    pure: true,
    repo: "theme-shoka-x/hexo-theme-shokaX",
    docsDir: 'docs',
    docsRepo: 'theme-shoka-x/shokaX-docs',
    contributors: true,
    lastUpdated: true,
    editLink: true,
    iconAssets: "fontawesome"
});
