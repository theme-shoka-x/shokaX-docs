# 快速上手

## 在开始之前

在开始之前，你应该已经安装了如下软件:

- nodejs 18 以上
- hexo-cli 的 latest 版本

ShokaX-CLI 目前版本不负责处理 hexo 环境，请自行`hexo init`

## 安装主题

### 使用 ShokaX-CLI

安装 ShokaX-CLI:
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
:::warning
~~SXC 默认从 npm 安装主题，如果自定义的部分较多可以从 github 安装:~~
~~`SXC install -r=github shokaX`~~  
目前 SXC 已不支持从 github 源安装
:::

### 手动安装

:::warning
ShokaX 不建议使用手动安装，仅应该在 SXC 无法正常安装的时候手动安装
:::

指令如下:

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

## 配置主题

:::warning
更改根目录`_config.yml`中的`theme`为`shokaX`(SXC 默认 origin 或 npm 安装修改为`shokax`) \
请注意,本主题仅在 npm 上使用的是`shokax`,其他情况下均为`shokaX` \
对于 linux 等大小写敏感的系统，npm 源的 theme 必须使用`shokax`同时修改自定义配置文件为`_config.shokax.yml`
:::

markdown 配置如下:

```yaml
markdown:
  render: # 渲染器设置
    html: false # 过滤 HTML 标签
    xhtmlOut: true # 使用 '/' 来闭合单标签 （比如 <br />）。
    breaks: true # 转换段落里的 '\n' 到 <br>。
    linkify: true # 将类似 URL 的文本自动转换为链接。
    typographer:
    quotes: "“”‘’"
  plugins: # markdown-it 插件设置
    - plugin:
        name: markdown-it-toc-and-anchor
        enable: true
        options: # 文章目录以及锚点应用的 class 名称，shoka 系主题必须设置成这样
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
          title: "你知道得太多了"

autoprefixer:
  exclude:
    - "*.min.css"
```

停用默认代码高亮（<=`6.3.0`）:

```yaml
highlight:
  enable: false

prismjs:
  enable: false
```

停用默认代码高亮（>=`7.0.0-rc1`）:

```yaml
syntax_highlighter: false
```

:::warning
在 0.2.5 及以下的版本中，如果您把 ShokaX 网站部署到了 cloudflare CDN 支持的服务上，请关闭`rocket-loader`，此功能与 ShokaX 的 page ts 存在冲突，会导致页面在 loading 时卡死 \
0.2.6 已修复此问题，可开启`rocket-loader`功能
:::

现在 shokaX 已经可以正常运行了,`hexo s`即可
