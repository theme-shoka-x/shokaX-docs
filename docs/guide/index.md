# 快速上手
## 在开始之前
在开始之前，你应该已经安装了如下软件:
- nodejs 18以上
- hexo-cli 的 latest 版本

ShokaX-CLI 目前版本不负责处理 hexo 环境，请自行`hexo init`

## 安装主题
### 使用ShokaX-CLI
安装 ShokaX-CLI:
:::: code-group
::: code-group-item npm
```shell
# hexo init
npm install shokax-cli --location=global
# cd your_blog
SXC install shokaX
```
:::

::: code-group-item pnpm
```shell
# hexo init
pnpm add shokax-cli --location=global
# cd your_blog
SXC install shokaX
```
:::
::::
:::tip
SXC默认从npm安装主题，如果自定义的部分较多可以从github安装:
`SXC install -r=github shokaX`
:::

### 手动安装

:::warning
ShokaX不建议使用手动安装，仅应该在SXC无法正常安装的时候手动安装
:::

指令如下:

:::: code-group
::: code-group-item npm

```shell
npm i hexo-theme-shokax
npm i hexo-renderer-multi-next-markdown-it
npm i hexo-autoprefixer
npm i hexo-algoliasearch
npm i hexo-feed
```

:::
::: code-group-item yarn

```shell
yarn add hexo-theme-shokax
yarn add hexo-renderer-multi-next-markdown-it
yarn add hexo-autoprefixer
yarn add hexo-algoliasearch
yarn add hexo-feed
```

:::
::: code-group-item pnpm

```shell [pnpm]
pnpm add hexo-theme-shokax
pnpm add hexo-renderer-multi-next-markdown-it
pnpm add hexo-autoprefixer
pnpm add hexo-algoliasearch
pnpm add hexo-feed
```

:::
::::

## 配置主题
:::warning
更改根目录`_config.yml`中的`theme`为`shokaX`(SXC默认origin或npm安装修改为`shokax`) \
请注意,本主题仅在npm上使用的是`shokax`,其他情况下均为`shokaX` \
对于linux等大小写敏感的系统，npm源的theme必须使用`shokax`同时修改自定义配置文件为`_config.shokax.yml`
:::

markdown配置如下:
```yaml
markdown:
  render: # 渲染器设置
    html: false # 过滤 HTML 标签
    xhtmlOut: true # 使用 '/' 来闭合单标签 （比如 <br />）。
    breaks: true # 转换段落里的 '\n' 到 <br>。
    linkify: true # 将类似 URL 的文本自动转换为链接。
    typographer: 
    quotes: '“”‘’'
  plugins: # markdown-it 插件设置
    - plugin:
        name: markdown-it-toc-and-anchor
        enable: true
        options: # 文章目录以及锚点应用的 class 名称，shoka 系主题必须设置成这样
          tocClassName: 'toc'
          anchorClassName: 'anchor'
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
    - '*.min.css'

```
停用默认代码高亮:
```yaml
highlight:
  enable: false

prismjs:
  enable: false
```

:::warning
在0.2.5及以下的版本中，如果您把 ShokaX 网站部署到了 cloudflare CDN 支持的服务上，请关闭`rocket-loader`，此功能与ShokaX的page ts存在冲突，会导致页面在loading时卡死 \
0.2.6已修复此问题，可开启`rocket-loader`功能
:::

现在shokaX已经可以正常运行了,`hexo s`即可
