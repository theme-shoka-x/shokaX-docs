# 文章内嵌标签
## MD标签
## Front-matter
* title   :文章标题
* date    :文章发布时间
* comment : 是否关闭文章评论
* sticky  : 当设置为`true`时此篇文章置顶 ，如果置顶多篇文章按照发布时间倒序排列，不分页
* tags    : 文章标签
* cover   ：文章轮播图(覆盖全局)文章封面
* audio   : 文章背景音乐 (覆盖全局) 当设置为`false`时关闭背景音乐
```yaml
title: 文章标题
date: 文章发布的时间
comment: false   # 关闭本文章评论
sticky  : true   # 文章是否置顶
tags:
- 文章标签1
- 文章标签2
categories:
    - [计算机科学, Linux]
cover: 文章顶部和文章介绍图(将覆盖文章主页轮播图)
audio:  
  - https://music.163.com/song?id=1387098940
audio: false
```

### 数学公式(KaTeX)
使用[KaTeX](https://katex.org/)在文章内添加数学公式，需要在 Front-matter 中添加`math: true`:
```markdown
---
title: 数学公式显示
math: true
---

行内公式：$\sqrt {3x-1}+(1+x)^2$

独立块显示：
$$\begin {array}{c}

\nabla \times \vec {\mathbf {B}} -\, \frac1c\, \frac {\partial\vec {\mathbf {E}}}{\partial t} &
= \frac {4\pi}{c}\vec {\mathbf {j}}    \nabla \cdot \vec {\mathbf {E}} & = 4 \pi \rho \\

\nabla \times \vec {\mathbf {E}}\, +\, \frac1c\, \frac {\partial\vec {\mathbf {B}}}{\partial t} & = \vec {\mathbf {0}} \\

\nabla \cdot \vec {\mathbf {B}} & = 0

\end {array}$$
```
效果预览:
![公式渲染图](img.webp)

### quiz(练习题)
#### 开启此功能
在使用此功能前，需要在 Front-matter 里添加`quiz: true`，例如:
```markdown
---
title: quiz(练习题)
quiz: true
---
```

#### 单选题
有1-n个待选项且只有一个正确选项的练习题，格式如下:
```markdown
1. 题目[]{.gap} {.quiz}
    - 选项
    - 正确选项 {.correct}
{.options}
```
作用如下:
- `1.`: 题号，建议使用
- `[]{.gap}` 题目的挖空处，会渲染为横线(可选)
- `{.correct}` 题目的正确选项
- `{.options}` 选项列表的结束处

例:
```markdown
1. 以下选项正确的是[]{.gap}。{.quiz}
    - 这是选项A
    - 这是选项B
    - 这是选项C
    - 这是选项D(正确答案) {.correct}
{.options}
```

### 多选题
有2-n个待选项且有多个正确选项的练习题，格式如下:
```markdown
1. 题目 {.quiz .multi}
    - 选项
    - 正确选项 {.correct}
    - 正确选项 {.correct}
{.options}
    > - 这里是A选项的注解
    > - 这里是B选项的注解
    > - 这里是C选项的注解
    > {.options}
```
作用如下:
- `1.`: 题号，建议使用
- `{.correct}` 题目的正确选项
- `{.options}` 选项列表的结束处(使用缩进控制)

## Hexo标签
### links(链接块)
此标签用于以富媒体形式表现某链接，可用于友链、网站分享和功能合集等 \
配置格式如下:
```yaml
- site: # 主标题
  owner: # 站点所有者(选填)
  url: # 站点链接
  desc: # 站点描述(选填)
  image: # 站点图像(选填)
  color: # 站点颜色(选填)
```
- `color`: 需要使用双引号包裹，值为大写的16进制颜色代码

在文章中使用:
:::: code-group
::: code-group-item 文章内嵌
```text
{% links %}
- site: # 主标题
  owner: # 站点所有者(选填)
  url: # 站点链接
  desc: # 站点描述(选填)
  image: # 站点图像(选填)
  color: # 站点颜色(选填)
# 多链接参考yaml列表格式
{% endlinks %}
```
:::
::: code-group-item 外部文件
```text
# path为一个yaml文件
{% linksfile [path] %}
```
示例文件:
```yaml
- site: # 主标题
  owner: # 站点所有者(选填)
  url: # 站点链接
  desc: # 站点描述(选填)
  image: # 站点图像(选填)
  color: # 站点颜色(选填)
```
:::
::::
