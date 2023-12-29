# 更多配置

:::tip
 以下配置均在 `/_config.yml` 文件中修改
:::

## 文件压缩

:::warning
如果您正在使用 0.1.8 或更低版本的 MD 渲染器，那么文件压缩不适用
:::

建议使用 [hexo-lightning-minify](https://github.com/theme-shoka-x/hexo-lightning-minify)，由 ShokaX 开发，安装方式：

```shell
pnpm add hexo-lightning-minify
```

:::tip
使用 SXC core 0.3+（预计2024年1月发布）时此插件会和markdown渲染核心捆绑安装
:::

配置如下：

```yaml
minify:
  js:
    enable: true # ShokaX 自带 esbuild 优化，不建议开启，其他主题建议开启
    exclude: # 排除文件，接受 string[]，需符合 micromatch 格式
  css:
    enable: true # 开启 CSS 优化
    options:
      targets: ">= 0.5%" # browserslist 格式的 target
    exclude: # 排除文件，接受 string[]，需符合 micromatch 格式
  html:
    enable: true # 开启 HTML 优化
    options:
      comments: false # 是否保留注释内容
    exclude: # 排除文件，接受 string[]，需符合 micromatch 格式
  image:
    enable: true # 开启图片预处理和自动 WebP 化
    options:
      avif: false
      webp: true # 预留配置项，现版本无作用
      quality: 80 # 质量，支持1-100的整数、lossless或nearLossless
      effort: 2 # CPU 工作量，0-6之间的整数(越低越快)
      replaceSrc: true # 自动替换生成html中的本地图片链接为webp链接
      # 我们更建议使用 Service Worker 来在用户侧实现 replaceSrc 的功能，这将能够以一种侵入式更小的方式实现链接替换
    exclude:
```

自动 WebP 化功能在初次`hexo g`或`hexo cl`后不可用，需要再运行一次`hexo g`

## feed 生成

:::tip
 以下配置均在 `/_config.yml` 文件中修改
:::

此部分对 feed 文件进行配置，生成 `rss`、`atom`、`feed.json` 等文件。

:::tip
一般情况选择 `npm(SXC) origin` 即可，如果是 github 源安装则需要使用 `github origin`。
:::

::: code-tabs#shell
@tab github

```yaml
feed:
  limit: 20
  order_by: "-date"
  tag_dir: false
  category_dir: false
  rss:
    enable: true
    template: "themes/shokaX/layout/_alternate/rss.ejs"
    output: "rss.xml"
  atom:
    enable: true
    template: "themes/shokaX/layout/_alternate/atom.ejs"
    output: "atom.xml"
  jsonFeed:
    enable: true
    template: "themes/shokaX/layout/_alternate/json.ejs"
    output: "feed.json"
```

@tab NPM(SXC)

```yaml
feed:
  limit: 20
  order_by: "-date"
  tag_dir: false
  category_dir: false
  rss:
    enable: true
    template: "node_modules/hexo-theme-shokax/layout/_alternate/rss.ejs"
    output: "rss.xml"
  atom:
    enable: true
    template: "node_modules/hexo-theme-shokax/layout/_alternate/atom.ejs"
    output: "atom.xml"
  jsonFeed:
    enable: true
    template: "node_modules/hexo-theme-shokax/layout/_alternate/json.ejs"
    output: "feed.json"
```

:::

## algolia 搜索

此部分为站内搜索配置。

```yaml
algolia:
  appId: #Your appId
  apiKey: #Your apiKey
  adminApiKey: #Your adminApiKey
  chunkSize: 5000
  indexName: #"shokaX"
  fields:
    - title #必须配置
    - path #必须配置
    - categories #推荐配置
    - content:strip:truncate,0,2000
    - gallery
    - photos
    - tags
```

### 配置流程

- 登录 [Algolia](https://www.algolia.com/) 官网，建议使用 Github/Google 账号注册/登录。
- 进入 `Dashboard` - `Search` - `Index` 页面，选择上方 `+ Create Index` 创建索引，索引名称建议为 `shokaX`。
- 进入 `Dashboard` - `Settings` - `API Keys` 页面，复制如下数据到上方配置中。

| 页面数据              | 对应配置      |
| :-------------------- | :------------ |
| `Application ID`      | `appId`       |
| `Search-Only API Key` | `apiKey`      |
| `Admin API Key`       | `adminApiKey` |
| 创建的索引名          | `indexName`   |

- 在博客部署前运行 `hexo algolia` 上传索引，可在 `Dashboard` - `Search` - `Index` 页面中查看。

:::warning
请勿将 `apiKey` 和 `adminApiKey` 混用，否则索引可能被攻击！
:::
