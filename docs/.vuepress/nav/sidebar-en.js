export default {
    '/en/guide/': [
        {
            text: "User Guide",
            collapsible: true,
            children: [
                {text: "Quick Start", link: "/en/guide/"},
                {text: "More Configurations", link: "/en/guide/config.html"},
                {text: "Theme Configuration", link: "/en/guide/theme.html"},
                {text: "Comment System", link: "/en/guide/comment.html"},
                {text: "Content Modules", link: "/en/guide/tags.html"},
                {text: "Error Codes", link: "/en/guide/error-code.html"}
            ]
        },
        {
            text: "Migration Guide",
            collapsible: true,
            children: [
                {text: "Migrating from Shoka", link: "/en/guide/shoka.html"}
            ]
        },
        {
            text: "Best Practices",
            collapsible: true,
            children: [
                {text: "Performance Optimization", link: "/en/guide/performance.html"}
            ]
        }
    ],
    '/en/develop/': [
        {
            text: "Development Guide",
            collapsible: true,
            children: [
                {text: "Quick Start", link: "/en/develop/basic/"},
                {text: "Writing Plugins", link: "/en/develop/basic/plugin.html"}
            ]
        },
        {
            text: "API Guide",
            collapsible: true,
            children: [
                {text: "Glossary and Explanation", link: "/en/develop/interface/"},
                {text: "DOM Helper Functions", link: "/en/develop/interface/dom.html"},
                {text: "Storage Helper Functions", link: "/en/develop/interface/storage.html"},
                {text: "Theme ShokaX Anime", link: "/en/develop/interface/anime.html"}
            ]
        }
    ]
}
