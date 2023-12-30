# Theme Configuration

::: tip
Unless specified otherwise, the configurations below are modified in either `/_config.shokax.yml` or `/_config.shokaX.yml` files.
:::

## Basic Configuration

### Static Resources

```yaml
statics: "/" # Root directory for static files, can be used for CDN acceleration
assets: "assets" # Directory for image resources
css: "css" # Directory for CSS (not recommended to change)
js: "js" # Directory for JavaScript (not recommended to change)
```

#### Custom Website Images

::: tip
Modifications for the following files are made within the preset material folder in `/source/_data/`, such as `/source/_data/assets`
:::details Detailed Steps

- Within the Hexo root directory `/source` folder;
- Navigate to the `/_data` directory (create if absent);
- Based on the custom image directory specified in `/_config.shokax.yml` or `/_config.shokaX.yml` (e.g., `assets`), create the corresponding directory within the `_data` folder.
  :::

:::warning
Currently **supports** static file parsing for `*.jpg`, `*.png`, `*.ico` files only.
:::

- Different file names correspond to respective images.
  - `avatar.jpg` typically corresponds to the personal avatar on the homepage, editable
  - `favicon.ico` website icon
  - `apple-touch-icon.png` icon when adding the webpage link to the home screen
  - `failure.ico` website icon when hidden
  - `alipay.png` Alipay donation QR code
  - `wechatpay.png` WeChat donation QR code
  - `paypal.png` PayPal donation QR code
  - `search.png` image displayed under search

## Navbar, Social Links, Sidebar, Big Title

### Navbar

```yaml
menu:
  home: / || home
  submenu:
    default: /page/ || user
    link: /page1/ || cloud
  link2: /page2/ || coffee
```

The configuration here consists of:

1. Independent navigation links (e.g., `home` and `link2`)
    - `home (link2)` as the localized key (see localization) and alternative name;
    - `/ (/page2/)` as the hyperlink address, can be an external link (must include `https`);
    - `||` separator, separating the link and icon;
    - `home (user)` icon, detailed in `/source/css/_iconfont.styl`.
2. Dropdown menu (e.g., `submenu`)
    - `default` is the content displayed in the dropdown box, not recommended to place hyperlink addresses here (suggested to set as `/`);
    - The remaining part consists of n unique independent navigation links.

### Social Links

```yaml
social:
  github: https://github.com/name || github || "#191717"
  # google: https://plus.google.com/yourname || google
  # twitter: https://twitter.com/yourname || twitter || "#00aff0"
  # zhihu: https://www.zhihu.com/people/yourname || zhihu || "#1e88e5"
  # music: https://music.163.com/#/user/home?id=yourid || cloud-music || "#e60026"
  # weibo: https://weibo.com/yourname || weibo || "#ea716e"
  # about: https://about.me/yourname || address-card || "#3b5998"
  # email: mailto:foo@xxx.com || envelope || "#55acd5"
  # facebook: https://www.facebook.com/yourname || facebook
  # stackoverflow: https://stackoverflow.com/ || stack-overflow
  # youtube: https://youtube.com/yourname || youtube
  # instagram: https://instagram.com/yourname || instagram
  # skype: skype:yourname?call|chat || skype
  # douban: https://www.douban.com/people/yourname/ || douban
```

To enable the corresponding social links, simply uncomment the respective line. **For versions prior to v0.3.8, at least one link must be retained**.

Format:

```yaml
social:
  keyname: link || logo || "color"
```

- `keyname`: Valid and unique YAML key;
- `link`: Social media link;
- `logo`: Social media logo;
- `color`: Social media logo color, optional (if not filled, uses font color);

### Sidebar

::: tip
You can choose left or right (`position: right` or `position: left`).
The avatar file can be modified in the static file directory `/source/_data/assets`, like `/source/_data/assets/avatar.jpg`.
:::

```yaml
sidebar:
  position: right # left/right corresponds to left/right
  avatar: avatar.jpg
```

### Big Title

```yaml
alternate: "foo" # Site's big title (higher level than title, only displayed on index)
```

## Footer Settings

### Bottom Settings

::: tip
Enabling this displays random articles and recent comments at the bottom of the page.
:::

```yaml
widgets:
  random_posts: true # Random articles
  recent_comments: true # Display recent comments
```

### Word Count and Reading Time Stats

```yaml
# Site-wide stats in footer
footer:
  since: 2010 # Start year
  count: true # Enable
# Post-specific stats
post:
  count: true # Enable
```

## Preloading, Address Resolution Settings

```yaml
performance:
  # Addresses preloaded using preconnect (not recommended to exceed three)
  preConnect:
    - "https://lf9-cdn-tos.bytecdntp.com"
  # Addresses pre-resolved using dns-prefetch
  dnsPrefetch:
    - "https://cdn.jsdelivr.net"
    - "https://unpkg.com"
```

:::details Should I use preConnect or dnsPrefetch?
The `preConnect` option pre-connects to links, significantly accelerating the loading speed of CDN files/comment systems, but using too many can impact initial page performance.

`dnsPrefetch` is for cases where "pre-connect" isn't worth it; this mode only optimizes DNS resolution, suitable for some non-critical external links (e.g., ads and external videos).

## SEO Optimization and Visitor Enhancement

```yaml
seo:
  bing:
  google:
  yandex:
  baidu:

visitor:
  clarity: false
  baiduAnalytics: false
  googleAnalytics: false
```

For SEO, simply enter the verification code for the respective search engine (domain verification -> meta verification -> content of meta tags).

For visitor, enter the corresponding project's license code, typically found in JS files/script tags. For example, clarity is generally the fifth parameter in the function in JS code, while Baidu Analytics is the code after `?hm=`.

## Other Settings

### Dark Mode

```yaml
darkmode: true

 # true/false for on/off dark mode
```

By default, whether dark mode is enabled depends on (priority from high to low):

- Visitor clicks on the header to choose
- Browser settings for theme color
- darkmode configuration

### Auto-Scroll

::: tip
When enabled, the page will automatically scroll to the last viewed position upon reopening.
:::

```yaml
auto_scroll: false
```

### Custom Website Title

::: tip
Customize the title displayed after clicking and hiding the website.
These configurations are modified in the `/_source/_data/languages.yml` file.
:::details Detailed Steps

- Within the Hexo root directory `source` folder;
- Enter the `_data` directory (create if absent);
- Create a file named `languages.yml` below;
- Modify the website title when the favicon is shown and hidden for different languages.
  :::

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

- Save the file.

## Image Customization

### Custom Website Slideshow

- Create an `images.yml` in the `_data` directory mentioned above;
- Input slideshow images in the file to replace the default slideshow;
- Similar to below, images can be hosted on image hosting platforms.

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

Since version 0.3.7, ShokaX allows different image sources for the homepage and articles:
Files starting with `_` are theme folder-specific, while others are in the `source/_data` directory:

- `images_index.yml` is for the homepage image source. If `_images_index.yml` exists in the theme folder, it'll use that; otherwise, it'll use `source/_data/images_index.yml`.
- `images.yml` is the general image source, acting as the fallback for the homepage and article image sources. If `images.yml` isn't found, it'll use `_images.yml` in the theme folder.

### Featured Homepage and Category Flip Blocks

1. Modify the site configuration: In the Hexo root directory `/_config.yml`, find `category_map` and configure the English mapping for each category.

2. Set the directory for articles: `/source/_posts` is where articles are uploaded and saved.

   `categories` should be written according to the `category_map` and file sequence. For instance, if a file belongs to the directory `计算机科学/C++/郑莉老师C++语言程序设计`, based on the mapping, in the `_posts` file path, it'll be under `/source/_posts` in `/computer-science/cpp/course-1`.

   ```yaml
   categories:
     - [计算机科学, C++, 郑莉老师C++语言程序设计]
   ```

3. As shown in the image above, at the bottom of the file directory, include a `cover.jpg` file, which will serve as the image for the featured homepage. This will enable the "Featured Articles" and "Mouse Hover Flip" functionalities.

## Experimental Features

:::caution Risk Warning
Experimental features are unstable, subject to potentially disruptive changes at any time, and some have noticeable side effects.
:::

::: details Long Article Optimization

```yaml
experiments:
  optimizeLongPosts: true # Enable long article optimization
```

When an article is very long (≥50,000 words), the FPS (Frames Per Second) on the article page drops to around 10 FPS. Devices with poor rendering performance may even experience freezes.

Lab data shows that at 20,000 words, FPS starts fluctuating, noticeable fluctuations start at 30,000 words, and at 50,000 words, the page is severely laggy. If the page contains a large number of Katex formulas, this issue becomes more severe.

This issue existed during the Shoka era, hence ShokaX introduces long article optimization, using `content-visibility` to drastically reduce the rendering range and significantly improve performance.

Lab data suggests this option can increase FPS from 10 to around 25 (4x CPU slowdown) and solve freezing issues. However, this feature presents *Navbar Jitter* and *Progress Bar Jitter* problems, potentially impacting browsing experience.

- Navbar Jitter: The navbar repeatedly pops in and out during scrolling, for a short duration (usually not exceeding 1s).
- Progress Bar Jitter: The text for returning to the top and the length of the scrollbar don't match the actual article length, with an error of ±1-5%.

The aforementioned issues are caused by `window.scrollY` jitter due to this method. If you have a solution, feel free to initiate a Pull Request.

In summary, the long article optimization feature is recommended only for articles exceeding 30,000 words or if the site primarily targets devices with poor rendering performance.
:::
