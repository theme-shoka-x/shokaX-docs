# Quick Start

## Before You Begin

### Preface

Due to time constraints within the development team, this document is bound to have many imperfections. In order to provide users with a good Blogging experience, if you already have some understanding of Hexo and ShokaX and are willing to help modify the document, we welcome you to initiate a Pull Request.

Before you start, you should have already installed the following software:

- Node.js 18 or above
- Latest version of hexo-cli

The current version of ShokaX-CLI does not handle the hexo environment. Please use `hexo init` on your own.

## Theme Installation

### Using ShokaX-CLI

Install ShokaX-CLI:
::: code-tabs#shell
@tab npm

```shell
# hexo init
npm install shokax-cli --location=global
# cd your_blog
SXC install shokaX
```

@tab pnpm

```shell
# hexo init
pnpm add shokax-cli --location=global
# cd your_blog
SXC install shokaX
```

:::

### Manual Installation

:::warning
ShokaX does not recommend manual installation, and it should only be done when SXC cannot install properly.
:::

Commands are as follows:

::: code-tabs#shell

@tab yarn

```shell
yarn add hexo-theme-shokax
yarn add hexo-renderer-multi-next-markdown-it
yarn add hexo-autoprefixer
yarn add hexo-algoliasearch
yarn add hexo-feed
yarn add esbuild
yarn add theme-shokax-pjax
yarn add theme-shokax-anime
yarn add lozad
```

@tab pnpm

```shell
pnpm add hexo-theme-shokax
pnpm add hexo-renderer-multi-next-markdown-it
pnpm add hexo-autoprefixer
pnpm add hexo-algoliasearch
pnpm add hexo-feed
pnpm add esbuild
pnpm add theme-shokax-pjax
pnpm add theme-shokax-anime
pnpm add lozad
```

:::

## Theme Configuration

:::warning
Change the `theme` in the root directory `/_config.yml` to `shokaX` (SXC defaults to origin or npm installation modified to `shokax`) \
Please note, this theme is `shokax` only when used on npm; otherwise, it's `shokaX` \
For case-sensitive systems like Linux, the npm source theme must use `shokax`, simultaneously modifying the custom configuration file to `_config.shokax.yml`.
:::

:::tip
All configurations below are modified in the `/_config.yml` file.
:::

Markdown configuration is as follows:

```yaml
markdown:
  render: # Renderer settings
    html: false # Filter HTML tags
    xhtmlOut: true # Use '/' to close single tags (e.g., <br />)
    breaks: true # Convert '\n' in paragraphs to <br>
    linkify: true # Automatically convert URL-like text to links
    typographer:
    quotes: "“”‘’"
  plugins: # markdown-it plugin settings
    - plugin:
        name: markdown-it-toc-and-anchor
        enable: true
        options: # Class names for article directory and anchors, required for shoka-based themes
          tocClassName: "toc"
          anchorClassName: "anchor"
    - plugin:
        name: markdown-it-multimd-table
        enable: true
        options:
          multiline: true
          rowspan: true
          headerless: true
    - plugin:
        name: ./markdown-it-furigana
        enable: true
        options:
          fallbackParens: "()"
    - plugin:
        name: ./markdown-it-spoiler
        enable: true
        options:
          title: "You know too much"

autoprefixer:
  exclude:
    - "*.min.css"
```

Disable default code highlighting (<= `6.3.0`):

```yaml
highlight:
  enable: false

prismjs:
  enable: false
```

Disable default code highlighting (>= `7.0.0-rc1`):

```yaml
syntax_highlighter: false
```

:::warning
In versions 0.2.5 and below, if you deploy the ShokaX website to a service supported by Cloudflare CDN, please disable `rocket-loader`. This conflicts with ShokaX's page.ts and causes the page to hang during loading. \
This issue has been fixed in 0.2.6; you can enable the `rocket-loader` feature.
:::

Now, ShokaX should be running smoothly; just use `hexo s`.
