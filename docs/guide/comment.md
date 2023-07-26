# 评论系统
## 前言

如果你从shoka迁移，请注意shokaX已经删除了对于`minivaline`的支持，因为`minivaline`储存库已存档(停止维护)，建议使用`waline`代替 \
ShokaX不会对`valine`提供支持，因为`valine`评论系统存在严重的安全问题，且`1.4.0`后valine不再开源

## valine系评论系统
以下是在解决 valine 遗留问题同一时期产生的评论系统故归为一类, 然在其社区issue中也报告了类似的攻击事件,故请谨慎选择.
::: details waline
[waline](https://waline.js.org/) 一款简洁、安全的评论系统。
配置内容如下:
```yaml
waline:
  enable: true # 是否启用
  serverURL: "" # waline服务端地址
  lang: "zh-CN" # 评论界面语言
  locale: {} # 本地化替换，详见waline文档
  emoji: # 表情包，默认为waline官方配置
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
  wordLimit: 0 # 评论字数上限(不建议为0)
  pageSize: 10 # 每页显示评论条数
  pageview: true # 页面浏览量显示
```
:::

:::details twikoo
[twikoo](https://twikoo.js.org) 一个简洁、安全、免费的静态网站评论系统。
配置内容如下:
```yaml
twikoo:
  enable: true # 是否开启
  link: "https://cdn.staticfile.org/twikoo/1.6.6/twikoo.nocss.min.js" # twikoo 前端js地址，替换CDN或升级可改
  mode: vercel # vercel(私有部署)或tencent
  envId: "https://114514.foo.bar" # twikoo环境ID,vercel和私有部署填地址
  region: # vercel和私有部署不填，腾讯云见twikoo文档
```
:::

## git系评论系统
此系列均使用 git 相关系统进行数据储存，故分为一类。
受制于oauth权限问题，部分 git 系评论系统存在严重的隐私泄露问题，建议查看对应社区issues后使用
:::details gitalk
[gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md) 是一个基于 GitHub Issue 和 Preact 开发的评论插件。
配置内容如下:
```yaml
gitalk:
  # 参考gitalk官方教程填入即可，下列键和gitalk配置键对应
  clientID:
  clientSecret:
  repo:
  owner:
  admin:
  proxy: # CORS代理，选填
```
:::

## 添加评论系统详细教程
### waline
> 使用waline评论系统 Zeabur服务端作为部署
> Zeabur的控制台国内好像打不开(我没打开),但是生成的Domains要比Vercel的速度快很多

![云服务器对比](https://github.com/foryouos/shokaX-docs/assets/58133210/882899f3-5050-4b61-ace9-5ea6933a9217 "来源Twikoo文档对各服务器的对比")
* Zeabur服务端部署，[官方简洁](https://waline.js.org/guide/deploy/zeabur.html) 一步一步来，到最后可以通过Domains打开评论即可
> 部署时间会长一点5分钟左右，耐心等待，部署running之后，要生成Domains，并打开Doamins测试，成功即可

* 配置根目录下_config.shokaX.yml的评论系统
```yaml
waline:
  enable: true # 是否启用 
  serverURL: "https://domains.zeabur.app"  # 将此链接换成您自己的Domains,主页链接后面不能加 /  会出错
```
* 清理Hexo cl 
* 重新构建 Hexo g
* Hexo s 评论就可以使用啦
![image](https://github.com/foryouos/shokaX-docs/assets/58133210/7c2ab393-96f1-4cce-95cc-0017e9981026)
