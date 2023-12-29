# Comment System

::: tip
    Unless otherwise specified, the following configurations are modified in the `/_config.shokax.yml` or `/_config.shokaX.yml` files.
:::

## Preface

If you are migrating from shoka, please note that shokaX has removed support for `minivaline` as the `minivaline` repository has been archived (ceased maintenance). It is recommended to use `waline` instead. ShokaX will not provide support for `valine` due to serious security issues with the `valine` comment system, and because `valine` is no longer open-source after version 1.4.0.

## valine-liked Comment System

These are some systems that fixed some issues of valine, but some attack events are reported in those systems' community issue, so choose those systems carefully

::: details waline
[waline](https://waline.js.org/) 一款简洁、安全的评论系统。
配置内容如下：

```yaml
waline:
  enable: true # 是否启用
  serverURL: "" # waline 服务端地址
  lang: "zh-CN" # 评论界面语言
  locale: {} # 本地化替换，详见 waline 文档
  emoji: # 表情包，默认为 waline 官方配置
    - https://unpkg.com/@waline/emojis@1.0.1/weibo
    - https://unpkg.com/@waline/emojis@1.0.1/alus
    - https://unpkg.com/@waline/emojis@1.0.1/bilibili
    - https://unpkg.com/@waline/emojis@1.0.1/qq
    - https://unpkg.com/@waline/emojis@1.0.1/tieba
    - https://unpkg.com/@waline/emojis@1.0.1/tw-emoji
  meta: # 评论可以填写的项目
    - nick
    - mail
    - link
  requiredMeta: # 评论必须填写的项目
    - nick
    - mail
  wordLimit: 0 # 评论字数上限 (不建议为 0)
  pageSize: 10 # 每页显示评论条数
  pageview: true # 页面浏览量显示
```

:::

:::details twikoo
[twikoo](https://twikoo.js.org) 一个简洁、安全、免费的静态网站评论系统。
配置内容如下：

```yaml
twikoo:
  enable: true # 是否开启
  link: "https://cdn.staticfile.org/twikoo/1.6.6/twikoo.nocss.min.js" # twikoo 前端 js 地址，替换 CDN 或升级可改
  mode: vercel # vercel(私有部署) 或 tencent
  envId: "https://114514.foo.bar" # twikoo 环境 ID,vercel 和私有部署填地址
  region: # vercel 和私有部署不填，腾讯云见 twikoo 文档
```

:::

## git 系评论系统

此系列均使用 git 相关系统进行数据储存，故分为一类。
受制于 oauth 权限问题，部分 git 系评论系统存在严重的隐私泄露问题，建议查看对应社区 issues 后使用。
:::details gitalk
[gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md) 是一个基于 GitHub Issue 和 Preact 开发的评论插件。
配置内容如下：

```yaml
gitalk:
  # 参考 gitalk 官方教程填入即可，下列键和 gitalk 配置键对应
  clientID:
  clientSecret:
  repo:
  owner:
  admin:
  proxy: # CORS 代理，选填
```

:::

## 添加评论系统详细教程

### waline

:::tip
使用 waline 评论系统 Zeabur 服务端作为部署，Zeabur 的控制台国内好像打不开（我没打开），但是生成的 Domains 要比 Vercel 的速度快很多。
:::

![云服务器对比](https://github.com/foryouos/shokaX-docs/assets/58133210/882899f3-5050-4b61-ace9-5ea6933a9217 "来源Twikoo文档对各服务器的对比")

- Zeabur 服务端部署，[官方简介](https://waline.js.org/guide/deploy/zeabur.html) 一步一步来，到最后可以通过 Domains 打开评论即可。

  :::tip
  部署时间会长一点 5 分钟左右，耐心等待，部署 running 之后，要生成 Domains，并打开 Doamins 测试，成功即可。
  :::

```yaml
waline:
  enable: true # 是否启用
  serverURL: "https://domains.zeabur.app" # 将此链接换成您自己的 Domains，主页链接后面不能加 /  会出错
```

- 执行 `hexo cl` 清理缓存。
- 执行 `hexo g` 重新构建。
- 执行 `hexo s` 启动本地服务器，评论即可使用。

![image](https://github.com/foryouos/shokaX-docs/assets/58133210/7c2ab393-96f1-4cce-95cc-0017e9981026)
