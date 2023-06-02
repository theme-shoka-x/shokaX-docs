# 文章内嵌标签
## MD标签
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