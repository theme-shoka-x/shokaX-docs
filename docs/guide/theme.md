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
### 边栏设置
> 可以选择左侧或右侧，修改头像文件，在静态文件目录asserts中配置

```yaml
sidebar:
  position: right  # left
  avatar: avatar.jpg
```
### 底部设置
> 开启后在页面底部显示随机文章和最近评论

```yaml
widgets:
  #  
  random_posts: true  # 随机文章
  recent_comments: true  # 显示最近评论
```
### 字数和阅读时间统计

```yaml
# 页尾全站统计
footer:
  since: 2010  # 开始时间
  count: true  # 开启
# 文章界面统计
post:
  count: true   # 开启
```
![文章字数统计](./字数文章统计.png "文章字数统计")

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


### 夜间模式
```yaml
darkmode: # true
```
默认情况下，是否开启夜间模式取决于(优先级从高到低)
* 访客点击头部自行选择
* 浏览器设置主题色调
* darkmode配置
### 自动定位
> 开启后默认情况下，再次打开页面，会自动滚动到上次浏览的位置

```yaml
auto_scroll: false
```
### 网站标题自定义
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

### 网站头像自定义
* 在Hexo的根目录下source文件夹下
* 进入_data目录 (如果没有创建)
* 此时的要根据`_config.shokaX.yml`下面的自定义`assets` 图片目录，在`_data`创建对应的目录
* 不同的文件名称即可替代对应的图片

* `avatar.jpg ` # 默认情况下对应的是主页上的个人头像
*` favicon.ico`  # 网站标题左边成功呈现的头像logo
* `apple-touch-icon.png` # 网站图标的png格式即可
* `failure.ico`  # 网站隐藏窗台呈现的图标
* `alipay.png`  # 支付宝付款码
* `wechatpay.png` # 微信收款码
* `paypal.png`  # PayPal的收款码
* `search.png`  # 搜索下面显示的图片

### 网站轮播图自定义
* 在上面的`_data` 目录下创建 `images.yml`
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
### 首页精选与分类翻转块
1, 修改站点配置，在Hexo根目录`_config.yml`中找到`category_map`,配置每个分类对应的英文映射
> Hexo 对于路径中的特殊字符`~\`!@#$%^&*()-_+={}|\;:"'<>,.? `以及空格，这些全部会被替换成` -`
```yaml
category_map:
  计算机科学 : computer-science
  C++ : cpp
  郑莉老师C++语言程序设计: course-1
  Linux : Linux
```
2,设置文章所属的目录
> `source/_posts`为上传文章的保存目录，为默认
> `categories`的设置要根据上面的`category_map`以及文件顺序顺序书写，
> 此文件位于计算机科学 `/C++/郑莉老师C++语言程序设计` 目录下
> 根据上面的映射在存储文件的`_posts`文件路径下就位于 `source/_posts` 下`computer-science/cpp/course-1 `目录下
```yaml
categories:
- [计算机科学, C++, 郑莉老师C++语言程序设计]
```
![如图所示的布局](./目录设置.png "如图所示的布局")

3,如上图所示，在最底部的文件目录方式`cover.jpg` 文件,此图片将作为首页精选的图片。自此`文章精选`和`鼠标悬浮翻转`也将实现


### 实验性特性
:::tip
实验性特性均不稳定，随时可能引入破坏性更改，且部分有明显副作用
:::
### 长文章优化
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
