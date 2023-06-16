# 主题配置
## 基础配置
### 静态资源和标题
`alternate`为站点大标题(比title高一级，但仅在index显示)

```yaml
statics: "/" # 静态文件根目录，可用于CDN加速
assets: "assets" # 图片资源存放目录
css: "css" # css存放目录(不建议改动)
js: "js" # js存放目录(不建议改动)
```

### 导航栏
```yaml
menu:
  home: / || home
  submenu:
    default: /page/ || user
    link: /page1/ || cloud
  link2: /page2/ || coffee
```
此处的配置分为如下两种:
1. 独立导航链接(例如`home`和`link2`)
   - `home(link2)`为本地化键(详见本地化)和备用名称
   - `/(/page2/)`为超链接地址，可为站外链接(需要带`https`)
   - `||`分隔符，分隔链接和图标
   - `home(user)`图标，具体可参见`/source/css/_iconfont.styl`
2. 下拉菜单(例如`submenu`)
   - `default`为dropbox显示的内容，不建议在此处放置超链接地址(建议设置为`/`)
   - 剩余部分为n个不重复的独立导航链接

### 社交链接
```yaml
social:
   github: https://github.com/name || github || "#191717"
   #google: https://plus.google.com/yourname || google
   #twitter: https://twitter.com/yourname || twitter || "#00aff0"
   #zhihu: https://www.zhihu.com/people/yourname || zhihu || "#1e88e5"
   #music: https://music.163.com/#/user/home?id=yourid || cloud-music || "#e60026"
   #weibo: https://weibo.com/yourname || weibo || "#ea716e"
   #about: https://about.me/yourname || address-card || "#3b5998"
   #  email: mailto:foo@xxx.com || envelope || "#55acd5"
   #facebook: https://www.facebook.com/yourname || facebook
   #  stackoverflow: https://stackoverflow.com/ || stack-overflow
   #youtube: https://youtube.com/yourname || youtube
   #instagram: https://instagram.com/yourname || instagram
   #skype: skype:yourname?call|chat || skype
   #douban: https://www.douban.com/people/yourname/ || douban
```
启用对应社交链接，只需要解除对应行注释即可。至少需要保留一个链接
格式:
```yaml
social:
  keyname: link || logo || "color"
```
- `keyname`:合法且不重复的yaml键
- `link`: 社交网站链接
- `logo`: 社交网站logo
- `color`: 社交网站logo颜色，选填(不填为字体颜色)

### performance设置
```yaml
performance:
  # 使用preconnect预加载的网址(不建议超过三个)
  preConnect:
    - "https://lf9-cdn-tos.bytecdntp.com"
  # 使用dns-prefetch预解析的网址
  dnsPrefetch:
    - "https://cdn.jsdelivr.net"
    - "https://unpkg.com"
```
preConnect选项会对链接进行预连接，这会极大加速CDN文件/评论系统的加载速度，但使用过多会影响首屏性能 \
dnsPrefetch适用于"不值得使用pre-connect"的，此模式仅会优化DNS解析，适用于部分非关键站外链接(例如广告和站外视频)

### seo和访客优化
```yaml
seo:
  bing:
  google:
  yandex:
  baidu:

visitor:
  clarity: false
  baiduAnalytics: false
```
seo只需要在对应搜索引擎后填入验证码即可(域名验证->meta验证->meta标签的content) \
visitor需要填入对应项目的许可码，一般包含在js文件/script标签中 
例如clarity一般是js代码中function的第五个参数，百度统计是`?hm=`后面的代码

#### 百度SEO
> 让npm自动生成网站的sitemap并提交到百度或其它搜索引擎

* 安装相关的插件
```shell
npm install hexo-generator-sitemap --save     
npm install hexo-generator-baidu-sitemap --save
```
* 修改并添加在根目录下_config.yml
```yaml
#在deploy下加入type : 
deploy:
  - type : baidu_url_submitter
# 自动生成sitemap 此文件可以提交必应Google等
sitemap:
 path: sitemap.xml
# 生成百度的sitemap
baidusitemap:
 path: baidusitemap.xml
# 百度提交
baidu_url_submit:
  count: 100
  host: #必填 您的完整网址
  token: # 必填  API提交百度所需要的token值，在百度站长之家获取
  path: baidu_urls.txt  # 会生成的urltxt文件
```
#### nofollow插件
> 自动为Hexo博客中的外键添加`rel="external nofollow noreferrer"从而改善网站SEO

* 安装
```shell
npm i hexo-filter-nofollow --save
```
* 配置根目录config.yml文件
```yaml
nofollow:
  enable: true  # 是否启用插件
  field: site   # 查看处理范围,post仅处理文章,site 处理全站所有内容
  exclude:  # 域名白名单
    - 'exclude1.com'
    - 'exclude2.com'
```
### 实验性特性
:::tip
实验性特性均不稳定，随时可能引入破坏性更改，且部分有明显副作用
:::
#### 长文章优化
```yaml
experiments:
  optimizeLongPosts: true # 开启长文章优化
```
当文章过长时(≥5万字)，文章页面的FPS会下降到10FPS左右，部分渲染性能较差的设备还会出现假死现象。 \
此问题在 shoka 时期就已存在，因此 shokaX 引入了长文章优化，底层原理是使用`content-visibility`暴力缩短渲染范围以大幅提高性能。
:::tip
实验室数据显示在2万字时FPS便会出现波动，3万字时就可以感觉到波动了，5万字时页面已经十分卡顿。
如果页面有大量Katex公式则此问题会更严重
:::

实验室数据显示此选项可将FPS由10提升到25左右(4x CPU slowdown)并解决卡死问题，但此功能存在`导航栏抖动`和`进度条抖动`问题，可能影响到浏览体验。
- 导航栏抖动：在滑动时导航栏会反复弹出收回，时间较短(一般不超过1s)
- 进度条抖动：返回顶部的文字和滑动条的长度与文章实际长度不符，存在±1-5%的误差

上述问题均是由于此方法导致的`window.scrollY`抖动引起的，如果你有好的解决方法欢迎发起PR。
因此，长文章优化功能仅建议在有文章字数超过3万字或站点主要面向渲染性能较差的设备时启用。

### 杂项设置
#### 网站标题自定义
> 自动网站点击之后和隐藏之后的标题，可覆盖原本呈现的文字
* 在Hexo的根目录下source文件夹下
* 进入_data目录 (如果没有创建)
* 在下面创建文件`languages.yml`
* 修改网站标题 在不同语言情况下favicon show时,和隐藏呈现的文字
```yaml
# language
zh-CN:
  # items
  favicon:
    show: 不负韶华
    hide: 以梦为马！
    
zh-HK:
  favicon:
    show: 不负韶华
    hide: 以梦为马！

zh-TW:
  favicon:
    show: 不负韶华
    hide: 以梦为马！

en:
  favicon:
    show: 不负韶华
    hide: 以梦为马！

ja:
  favicon:
    show: 不负韶华
    hide: 以梦为马！
```
* 保存文件即可

#### 网站头像自定义
* 在Hexo的根目录下source文件夹下
* 进入_data目录 (如果没有创建)
* 此时的要根据_config.shokaX.yml下面的自定义assets 图片目录，在_data创建对应的目录
* 不同的文件名称即可替代对应的图片

* avatar.jpg  # 默认情况下对应的是主页上的个人头像
* favicon.ico  # 网站标题左边成功呈现的头像logo
* apple-touch-icon.png # 网站图标的png格式即可
* failure.ico  # 网站隐藏窗台呈现的图标
* alipay.png  # 支付宝付款码
* wechatpay.png # 微信收款码
* paypal.png  # PayPal的收款码

#### 网站轮播图自定义
* 在上面的_data 目录下创建 images.yml
* 在文件内存入轮播图图片即可替换原本自带的轮播图
* 类似如下，可存入图床当中
```yaml
- https://i.imgtg.com/2023/03/09/YS2LU.jpg
- https://i.imgtg.com/2023/03/09/YSj7p.jpg
- https://i.imgtg.com/2023/03/09/YS6XY.jpg
- https://i.imgtg.com/2023/03/09/YSIlc.jpg
- https://i.imgtg.com/2023/03/09/YQSYM.jpg
- https://i.imgtg.com/2023/03/09/Y0xvg.jpg
- https://i.imgtg.com/2023/03/09/Y0iNK.jpg
- https://i.imgtg.com/2023/03/09/Y0zdB.jpg
- https://i.imgtg.com/2023/03/09/Y0kTl.jpg
- https://i.imgtg.com/2023/03/09/Y0hOs.jpg
```
