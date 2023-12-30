# More Configuration

:::tip
All configurations below are modified in the `/_config.yml` file.
:::

## File Compression

:::warning
If you're using MD renderer version 0.1.8 or lower, file compression won't apply.
:::

It's recommended to use [hexo-lightning-minify](https://github.com/theme-shoka-x/hexo-lightning-minify), developed by ShokaX. Installation method:

```shell
pnpm add hexo-lightning-minify
```

:::tip
When using SXC core 0.3+ (expected release in January 2024), this plugin will be bundled with the markdown rendering core.
:::

Configure as follows:

```yaml
minify:
  js:
    enable: true # ShokaX comes with esbuild optimization; not recommended to enable, suggested for other themes
    exclude: # Exclude files, accept string[], should match micromatch format
  css:
    enable: true # Enable CSS optimization
    options:
      targets: ">= 0.5%" # browserslist formatted target
    exclude: # Exclude files, accept string[], should match micromatch format
  html:
    enable: true # Enable HTML optimization
    options:
      comments: false # Preserve comment content or not
    exclude: # Exclude files, accept string[], should match micromatch format
  image:
    enable: true # Enable image preprocessing and automatic WebP conversion
    options:
      avif: false
      webp: true # Reserved configuration, currently ineffective
      quality: 80 # Quality, supports integers 1-100, lossless, or nearLossless
      effort: 2 # CPU effort, integer between 0 and 6 (lower is faster)
      replaceSrc: true # Automatically replace local image links with webp links in generated html
      # We highly recommend using Service Worker to implement replaceSrc on the user side; this will allow link replacement in a less intrusive manner
    exclude:
```

The automatic WebP conversion feature is not available after the initial `hexo g` or `hexo cl`; it needs another `hexo g` to be run.

## Generating Feeds

:::tip
All configurations below are modified in the `/_config.yml` file.
:::

This section configures feed files, generating `rss`, `atom`, `feed.json`, etc.

:::tip
Usually, choosing `npm(SXC) origin` suffices; if it's a GitHub source installation, use `github origin`.
:::

::: code-tabs#shell
@tab GitHub

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

## Algolia Search

This section configures site-wide search.

```yaml
algolia:
  appId: #Your appId
  apiKey: #Your apiKey
  adminApiKey: #Your adminApiKey
  chunkSize: 5000
  indexName: #"shokaX"
  fields:
    - title #Required
    - path #Required
    - categories #Recommended
    - content:strip:truncate,0,2000
    - gallery
    - photos
    - tags
```

### Configuration Process

- Log in to the [Algolia](https://www.algolia.com/) website, preferably using a GitHub/Google account for registration/login.
- Go to `Dashboard` - `Search` - `Index` page, select `+ Create Index` to create an index. It's suggested to name it `shokaX`.
- Go to `Dashboard` - `Settings` - `API Keys` page, copy the data below into the respective configurations above.

| Page Data             | Corresponding Configuration |
| :---------------------| :-------------------------- |
| `Application ID`      | `appId`                     |
| `Search-Only API Key` | `apiKey`                    |
| `Admin API Key`       | `adminApiKey`               |
| Created Index Name    | `indexName`                 |

- Run `hexo algolia` before deploying the blog to upload the index, viewable on the `Dashboard` - `Search` - `Index` page.

:::warning
Do not mix up `apiKey` and `adminApiKey`, as it might expose your index to attacks!
:::
