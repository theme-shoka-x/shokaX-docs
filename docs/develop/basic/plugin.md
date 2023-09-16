# 如何编写一个插件

## 前言

ShokaX Inject 是一个高度类似于 NexT Inject 的代码注入系统(核心代码来自于 Theme NexT，基于 AGPLv3) \
此系统旨在于整合 Shoka / ShokaX 现有社区魔改资源，解决社区魔改和主题升级相冲突这一难题，同时增强 ShokaX 的可扩展性

## 在开始之前

由于 Inject 系统基于 Hexo 的[过滤器](https://hexo.io/api/filter)机制，所以你应该对过滤器机制有所了解。

## 基础代码

### 注入器

ShokaX Inject 的模板和样式表需要一个 js 函数注入，这个函数在本文档中称为注入器。 \
一般而言，一个注入器的模板如下:

```javascript
hexo.extend.filter.register("theme_inject", function (injects) {
  // 此处放置注入代码
});
```

注入器可在一个文件内定义多个，可以和正常过滤器一样使用 npm 模块和进行文件系统操作等

### 注入点

注入点指模板和样式的目标注入位置，
截止 v0.3.0，ShokaX Inject 共有以下注入点:

| 代码名      | 点位       | 描述                               |
| :---------- | :--------- | :--------------------------------- |
| head        | 文件头部   | 在`</head>`标签前注入模板          |
| sidebar     | 侧栏       | 在 social 区域上方注入模板         |
| rightNav    | 导航栏右侧 | 在日夜模式切换和搜索的右侧注入模板 |
| postMeta    | 文章信息   | 在 card 的字数右侧注入模板         |
| postBodyEnd | 文章尾部   | 在文章的尾部注入模板               |
| footer      | 页面底部   | 在页面底部注入模板                 |
| comment     | 评论区     | 在评论区注入模板(在主题评论上方)   |
| bodyEnd     | 文件尾部   | 在`</body>`标签前注入模板          |
| status      | 页脚状态   | 在备案号及版权说明之前             |
