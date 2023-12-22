import { hopeTheme } from "vuepress-theme-hope";
import navbar from './nav/navbar'
import sidebar from './nav/sidebar'
import navbarEn from './nav/navbar-en'
import sidebarEn from './nav/sidebar-en'

export default hopeTheme({
    locales: {
        '/': {
            sidebar: sidebar,
            navbar: navbar,
        },
        '/en/': {
            navbar: navbarEn,
            sidebar: sidebarEn
        }
    },
    displayFooter: true,
    footer: "<a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">津ICP备2022001375号</a>",
    hostname: "docs.kaitaku.xyz",
    plugins: {
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
