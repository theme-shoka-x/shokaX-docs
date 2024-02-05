# Migrating from Shoka

## Reinstalling the Theme

First, uninstall `hexo-renderer-multi-markdown-it`.
Then, run SXC to install the theme.
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

## Configuration Modifications

First, it is recommended to use `_config.shokaX.yml` instead of directly modifying the theme `_config.yml`.
This can prevent generation errors caused by missing configurations.

### seo Class

The previous search engine verification has been migrated to the following configuration:

```yaml
seo: # Just fill in the content corresponding to meta directly below.
  bing:
  google:
  yandex:
  baidu:
```

Baidu statistics migration is as follows:

```yaml
visitor:
  baiduAnalytics: # The last part of Baidu statistics code
```

### Comment System

shokaX no longer supports the minivaline comment system. It is recommended to migrate to [waline](./comment.md#valine-based-comment-system).

Other comment systems like twikoo also provide migration tools, so you can choose accordingly.

### Basic configuration

```yaml
# assets replaces the previous image option
assets: "assets"
```

:::tip
As of 0.1.8, ShokaX's advVendors and vendors coexist, please do not delete either of them.
:::

ShokaX provides official ICP and network security registration configuration:

```yaml
footer:
  icp: # ICP Filing
  enable: false
  icon: "beian.webp" #Internet security registration pictures
  icpnumber: "xxx" # ICP registration number
  beian: "xxx" # Internet security registration number
  recordcode: "xxx" # The recordcode parameter in the network security registration link
```

## Other Modifications

### Technical Modifications

ShokaX has changed the template from njk to pug, which may cause difficulties in migrating shoka sites with extensive modifications.

In addition, the page js section of ShokaX uses typescript. Therefore, please compile the code after making modifications, otherwise the changes will not take effect.

### Page Modifications

ShokaX does not automatically generate `404.html`. You need to manually place 404.md in the source directory to generate the 404 page.
