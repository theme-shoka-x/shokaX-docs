export default {
    '/guide/': [
        {
            text: "User Guide",
            collapsible: true,
            children: [
                {text: "Quick Start", link: "/guide/"},
                {text: "More Configurations", link: "/guide/config.html"},
                {text: "Theme Configuration", link: "/guide/theme.html"},
                {text: "Comment System", link: "/guide/comment.html"},
                {text: "Content Modules", link: "/guide/tags.html"},
                {text: "Error Codes", link: "/guide/error-code.html"}
            ]
        },
        {
            text: "Migration Guide",
            collapsible: true,
            children: [
                {text: "Migrating from Shoka", link: "/guide/shoka.html"}
            ]
        },
        {
            text: "Best Practices",
            collapsible: true,
            children: [
                {text: "Performance Optimization", link: "/guide/performance.html"}
            ]
        }
    ],
    '/develop/': [
        {
            text: "Development Guide",
            collapsible: true,
            children: [
                {text: "Quick Start", link: "/develop/basic/"},
                {text: "Writing Plugins", link: "/develop/basic/plugin.html"}
            ]
        },
        {
            text: "API Guide",
            collapsible: true,
            children: [
                {text: "Glossary and Explanation", link: "/develop/interface/"},
                {text: "DOM Helper Functions", link: "/develop/interface/dom.html"},
                {text: "Storage Helper Functions", link: "/develop/interface/storage.html"},
                {text: "Theme ShokaX Anime", link: "/develop/interface/anime.html"}
            ]
        }
    ]
}
