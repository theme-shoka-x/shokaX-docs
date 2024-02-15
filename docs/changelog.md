# 更新日志

## 0.4.2

- feat: remove 300 weight font by [@D-Sketon](https://github.com/D-Sketon) in [#237](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/237)
- perf: lighthouse by [@D-Sketon](https://github.com/D-Sketon) in [#238](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/238)
- fix: menu 异常 by [@D-Sketon](https://github.com/D-Sketon) in [#240](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/240)
- fix: 最新评论与浏览量问题 by [@zkz098](https://github.com/zkz098) in [#241](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/241)

**Full Changelog**: [v0.4.1...v0.4.2](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.4.1...v0.4.2)

## 0.4.1

> 注意：必须使用 SXC 0.1.0 + 才能正常安装（SXC -V 显示 ShokaX 0.4+ 的版本）

- perf: 改进 LCP & 优化谷歌字体 by [@zkz098](https://github.com/zkz098) in [#235](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/235)

**Full Changelog**: [v0.4.0...v0.4.1](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.4.0...v0.4.1)

## 0.4.0

> 注意：必须使用 SXC 0.1.0 + 才能正常安装（SXC -V 显示 ShokaX 0.4+ 的版本）

- refactor/ci: 移除 attr 函数 & 更新工作流 & 使用 esbuild 静态常量优化编译 by [@zkz098](https://github.com/zkz098) in [#212](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/212)
- refactor: 优化编译生成 js 体积 & 直接打包 ts 文件 by [@zkz098](https://github.com/zkz098) in [#213](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/213)
- refactor: 建立 0.4 新模块化分包引入机制 & 移除异步 $dom by [@zkz098](https://github.com/zkz098) in [#218](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/218)
- feat: 引入实验性代码拆分 & 进一步捆绑依赖 by [@zkz098](https://github.com/zkz098) in [#221](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/221)
- feat: 修复运行不正常 & 去 vue 化 by [@zkz098](https://github.com/zkz098) in [#222](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/222)
- feat: 捆绑 waline by [@zkz098](https://github.com/zkz098) in [#223](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/223)
- Update: Added 14 new language packs by [@TKanX](https://github.com/TKanX) in [#206](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/206)
- Refactor comment by [@zkz098](https://github.com/zkz098) in [#224](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/224)
- Revert "Update: Added 14 new language packs" by [@zkz098](https://github.com/zkz098) in [#225](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/225)
- perf: 优化 LCP & perf: 懒运行非重要模块 & perf: 预加载重要内容 by [@zkz098](https://github.com/zkz098) in [#228](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/228)
- beta1：修复 lazyload 无法正确运行 & 导航栏会埋头像眉毛 & 加载动画总是超过实际加载时间 by [@zkz098](https://github.com/zkz098) in [#232](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/232)
- chore: 0.4 by [@zkz098](https://github.com/zkz098) in [#233](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/233)

**Full Changelog**: [v0.3.13...v0.4.0](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.13...v0.4.0)

## 0.3.13

- fix: 更新 iconfont 链接 by [@FidStyle](https://github.com/FidStyle) in [#199](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/199)
- feat: 移除本地 twikoo css by [@D-Sketon](https://github.com/D-Sketon) in [#201](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/201)
- 优化英文文档和部分中文文档 by [@TKanX](https://github.com/TKanX) in [#205](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/205)
- feat: 使用 unlazy by [@zkz098](https://github.com/zkz098)
- fix: 修复 lightning 无法正确压缩生成 css 的问题 by [@zkz098](https://github.com/zkz098)

**Full Changelog**: [v0.3.12...v0.3.13](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.12...v0.3.13)

## 0.3.12

- build(deps): bump mouse-firework from 0.0.3 to 0.0.4 by @dependabot in [#193](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/193)
- 使用 jsdelivr 加速 waline 在国内访问速度 by [@FidStyle](https://github.com/FidStyle) in [#197](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/197)
- fix: 解决最新评论 // 显示错误 by [@FidStyle](https://github.com/FidStyle) in [#198](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/198)
- refactor: addVendors 和 vendors 统一 by [@zkz098](https://github.com/zkz098)
- refactor: 使用 FetchAPI 检查版本更新 by [@zkz098](https://github.com/zkz098) in [c5cba32](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/c5cba32a101375a74a9d15dc6da18fc78193b86d)

**Full Changelog**: [v0.3.11...v0.3.12](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.11...v0.3.12)

## 0.3.11

- feat: import mouse-firework by [@D-Sketon](https://github.com/D-Sketon) in [#192](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/192)
- build: CJS 与 ESM 模块分离 by [@zkz098](https://github.com/zkz098)

**Full Changelog**: [v0.3.10...v0.3.11](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.10...v0.3.11)

## 0.3.10

- fix: Index 在有且只有置顶文章时渲染错误 by [@D-Sketon](https://github.com/D-Sketon) in [#182](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/182)
- fix: Index 无法正确渲染 sticky 显式设置为 false 的文章 by [@D-Sketon](https://github.com/D-Sketon) in [#184](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/184)
- chore: anime 升级 by [@D-Sketon](https://github.com/D-Sketon) in [#186](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/186)
- fix: cover 和 index_cover 使用错误 by [@zkz098](https://github.com/zkz098) in [185f0fc](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/185f0fc7aa460d47e25f9b9cad890f1aa83a0c93)
- refactor: 删除 git 系评论系统 by [@zkz098](https://github.com/zkz098) in [b82f639](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/b82f6390a16172165d395c3ede9dc81b622888f3)

**Full Changelog**: [v0.3.9...v0.3.10](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.9...v0.3.10)

## 0.3.9

- fix: links href 错误问题 by [@zkz098](https://github.com/zkz098) in [923da30](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/923da30f07a78c7603d5ce6cffdc5bacd8b8bae2)
- feat: 封面图少于 6 张时自动填充为 6 张 by [@zkz098](https://github.com/zkz098) in [99d34b0](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/99d34b02f17b3e5a84f8e5f91e5286597fc6cc65)

**Full Changelog**: [v0.3.8...v0.3.9](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.8...v0.3.9)

## 0.3.8

- fix: 修复 zh-HK 翻译 by [@Xujiayao](https://github.com/Xujiayao) in [#174](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/174)
- fix: config merge by [@D-Sketon](https://github.com/D-Sketon) in [#176](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/176)
- refactor: 去除外链 nofollow 功能 by [@zkz098](https://github.com/zkz098) in [b76ce07](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/b76ce0777e45819660ce3a4343eb0054fdb644bb)
- feat: index_images 优先读取 data 文件夹中的文件 by [@zkz098](https://github.com/zkz098) in [7a910a5](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/7a910a5ece28b3dd91fad9c995597e8f962d6e0b)

**Full Changelog**: [v0.3.7...v0.3.8](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.7...v0.3.8)

## 0.3.7

- docs: 移除 github 源 by [@D-Sketon](https://github.com/D-Sketon) in [#160](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/160)
- fix: pageviewCount 404 by [@D-Sketon](https://github.com/D-Sketon) in [#169](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/169)
- feat: 允许 index 和文章使用不同的封面图 by [@zkz098](https://github.com/zkz098) in [beae805](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/beae805d1eb66f728f484ca4e1ffb63d7d25f734)
- fix: 修复分类页面一级分类显示不正常问题 by [@zkz098](https://github.com/zkz098) and [@AquaOH](https://github.com/AquaOH) in [ca01f61](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/ca01f61088309309a503a62623647a8199dc5558)

**Full Changelog**: [v0.3.6...v0.3.7](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.6...v0.3.7)

## 0.3.6

:::warning
⚠️ 破坏性更改 ⚠️

由于本版本引入了模块化机制，您需要安装 theme-shokax-pjax、theme-shokax-anime、lozad 和 esbuild ShokaX 才能运行
请在 hexo 文件夹下安装
:::

- fix: player regexp by [@D-Sketon](https://github.com/D-Sketon) in [#156](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/156)
- fix: firework color by [@D-Sketon](https://github.com/D-Sketon) in [#155](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/155)
- fix: cloudflare patch 错误触发 by [@zkz098](https://github.com/zkz098) in [87b39ac](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/87b39ac687676800b466f78296ff977fd71c1788)

**Full Changelog**: [v0.3.5...v0.3.6](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.5...v0.3.6)

## 0.3.5

:::warning
⚠️ 破坏性更改 ⚠️

由于本版本引入了模块化机制，您需要安装 theme-shokax-pjax、theme-shokax-anime、lozad 和 esbuild ShokaX 才能运行
请在 hexo 文件夹下安装
:::

- fix: 修复面包屑导航高亮渲染错误问题 by [@zkz098](https://github.com/zkz098) in [afc88f7](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/afc88f74695db01193c6a78632e0e398fa393a6a)
- fix: 修复 page audio 配置失效问题 by [@zkz098](https://github.com/zkz098) in [afc88f7](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/afc88f74695db01193c6a78632e0e398fa393a6a)
- fix: 修复过期提醒渲染错误问题 by [@zkz098](https://github.com/zkz098) in [afc88f7](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/afc88f74695db01193c6a78632e0e398fa393a6a)

**Full Changelog**: [v0.3.4...v0.3.5](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.4...v0.3.5)

## 0.3.4

:::warning
⚠️ 破坏性更改 ⚠️

由于本版本引入了模块化机制，您需要安装 theme-shokax-pjax、theme-shokax-anime、lozad 和 esbuild ShokaX 才能运行
请在 hexo 文件夹下安装
:::

- fix: 修复日夜切换无效的问题 by [@zkz098](https://github.com/zkz098) in [527ce50](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/527ce50eb8fa001141623bbd4b7821c9c85489a8)

**Full Changelog**: [v0.3.3...v0.3.4](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.3...v0.3.4)

## 0.3.3

:::warning
⚠️ 破坏性更改 ⚠️

由于本版本引入了模块化机制，您需要安装 theme-shokax-pjax、theme-shokax-anime、lozad 和 esbuild ShokaX 才能运行
请在 hexo 文件夹下安装
:::

- fix: 修复原型注入错误问题 by [@zkz098](https://github.com/zkz098) in [d4e40aa](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/d4e40aaec709847785a647097d3056cc3a8e4ace)

**Full Changelog**: [v0.3.2...v0.3.3](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.2...v0.3.3)

## 0.3.2

:::warning
⚠️ 破坏性更改 ⚠️

由于本版本引入了模块化机制，您需要安装 theme-shokax-pjax、theme-shokax-anime、lozad 和 esbuild ShokaX 才能运行
请在 hexo 文件夹下安装
:::

- fix: 最新评论跳转 by [@D-Sketon](https://github.com/D-Sketon) in [#139](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/139)
- refactor: 基于 esbuild 的 page ts 模块化与打包机制 by [@zkz098](https://github.com/zkz098)
- test: 添加 mocha 单元测试 by [@zkz098](https://github.com/zkz098)

**Full Changelog**: [v0.3.1...v0.3.2](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3.1...v0.3.2)

## 0.3.1

- fix: 修复 waline 评论无法加载问题 by [@zkz098](https://github.com/zkz098) in [47109b6](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/47109b61b1e3ce4d416b12034f81ddc4f5efb952)
- refactor: 移除多余控制台输出 by [@zkz098](https://github.com/zkz098) in [dfa98e1](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/dfa98e1fe83abbc58550f7ec2e4cd0c4d230bfda)
- refactor: 更新到 modern-normalize.css by [@zkz098](https://github.com/zkz098) in [d729170](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/d729170d5b520b7e30ada107e98a62b9c980bbb0)

**Full Changelog**: [v0.3...v0.3.1](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.3...v0.3.1)

## 0.3

:::warning
本版本仅为 0.3 预览版，下个版本仍可能存在破坏性更改，请在更新时查看更新日志以免造成不必要的困扰
:::

- fix: 歌词异常 by [@D-Sketon](https://github.com/D-Sketon) in [#126](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/126)
- refactor: typescript 代码拆分与重构 [@zkz098](https://github.com/zkz098) in [775961b](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/775961b1c43518b0c0032f76dd0df2b9958e5f55)
- chore: 增加环境检查 [@zkz098](https://github.com/zkz098) in [cb1c291](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/cb1c29190d59d5012071ee29a8ba8a36258c1b9d)
- refactor: 移除 chart 作为 js 加载项 [@zkz098](https://github.com/zkz098)
- fix: 修复最新评论本地化键缺失 by [@zkz098](https://github.com/zkz098) in [6376cf0](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/6376cf023e480046c643a7a41db60fe832de368a)

**Full Changelog**: [v0.2.10...v0.3](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.10...v0.3)

## 0.2.10

- fix: waline 暗黑模式 by [@D-Sketon](https://github.com/D-Sketon) in [#120](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/120)
- perf: change to modern javascript by [@D-Sketon](https://github.com/D-Sketon) in [#124](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/124)
- refactor: 修改默认配置 by [@zkz098](https://github.com/zkz098) in [b3bafa3](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/b3bafa3617bfef02caa6ec8d4eae30c893e6134a)
- fix: 文章标题末尾多一个- by [@zkz098](https://github.com/zkz098) in [ec89740](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/ec8974080a7d6d02f4650b75d2b2aeafc34692ec)

**Full Changelog**: [v0.2.9...v0.2.10](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.9...v0.2.10)

## 0.2.9

- fix: 修复标签卡分页线不显示问题 & refactor: 杂项重构 by [@zkz098](https://github.com/zkz098) in [#105](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/105)
- feat: google-analytics by [@D-Sketon](https://github.com/D-Sketon) in [#111](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/111)
- perf: decrease FCP by [@D-Sketon](https://github.com/D-Sketon) in [#116](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/116)
- fix: 修复 css load 问题 by [@zkz098](https://github.com/zkz098) in [9ee183b](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/9ee183b55b4cd2280b76b4d664c7c38e21f598cd)

**Full Changelog**: [v0.2.8...v0.2.9](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.8...v0.2.9)

## 0.2.8

- refactor: 清理无用代码 & polyfill 可选 by [@zkz098](https://github.com/zkz098) in [#104](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/104)

**Full Changelog**: [v0.2.7...v0.2.8](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.7...v0.2.8)

## 0.2.7

- ci: 增加 github pkg 源 by [@zkz098](https://github.com/zkz098) in [#94](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/94)
- fix: 修正評論區間距問題 by [@katelynn620](https://github.com/katelynn620) in [#99](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/99)
- fix: 微調 pageview 顯示 by [@katelynn620](https://github.com/katelynn620) in [#100](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/100)
- fix: 修正 waline 最新評論樣式 by [@katelynn620](https://github.com/katelynn620) in [#101](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/101)
- docs: 迁移文档 by [@zkz098](https://github.com/zkz098) in [#102](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/102)

**Full Changelog**: [v0.2.6...v0.2.7](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.6...v0.2.7)

## 0.2.6

- refactor: 基于 zh-CN 重新翻译语言文件 by [@zkz098](https://github.com/zkz098) in [#88](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/88)
- refactor: 重构 pug 模板和为 script 添加注释 by [@zkz098](https://github.com/zkz098) in [#89](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/89)
- docs: 搭建开发文档框架 by [@zkz098](https://github.com/zkz098) in [#91](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/91)
- fix: 修复 cloudflare rocket-loader 开启时卡 loading 问题 by [@zkz098](https://github.com/zkz098) in [#93](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/93)

**Full Changelog**: [v0.2.5...v0.2.6](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.5...v0.2.6)

## 0.2.5

- feat: AI 生成文章概括 by [@zkz098](https://github.com/zkz098) in [#73](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/73)
- feat: 为 summary 添加锁 & refactor: 优化代码结构 by [@zkz098](https://github.com/zkz098) in [#77](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/77)
- refactor/fix: 引入 theme-shokax-pjax/修复播放器 by [@D-Sketon](https://github.com/D-Sketon) in [#80](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/80)
- fix: 修复 summary 死锁 by [@zkz098](https://github.com/zkz098) in [#82](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/82)

**Full Changelog**: [v0.2.4...v0.2.5](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.4...v0.2.5)

## 0.2.4

- fix: 移动端显示异常 by [@D-Sketon](https://github.com/D-Sketon) in [#65](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/65)
- refactor: 引入 theme-shokax-anime by [@D-Sketon](https://github.com/D-Sketon) in [#67](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/67)
- fix: ESM 和 CJS 兼容错误 & ci: Test 的 Build TS 无效问题 by [@zkz098](https://github.com/zkz098) in [#68](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/68)
- chore: 引入 theme-shokax-anime 依赖 by [@D-Sketon](https://github.com/D-Sketon) in [#71](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/71)
- docs: 增加开发文档 by [@zkz098](https://github.com/zkz098) in [#72](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/72)

**Full Changelog**: [v0.2.3...v0.2.4](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.3...v0.2.4)

## 0.2.3

- fix: 解决 ESM 兼容性问题 & 优化 import by [@zkz098](https://github.com/zkz098) in [#62](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/62)
- ci: 添加 Test by [@zkz098](https://github.com/zkz098) in [#63](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/63)
- ci: 修复 CI theme 错误 & fix: 偶现@import expect string 错误 by [@zkz098](https://github.com/zkz098) in [#64](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/64)

**Full Changelog**: [v0.2.2...v0.2.3](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.2...v0.2.3)

## 0.2.2

- fix: 禁用 A 标签的 Fireworks 动画以修复动画不消失问题 by [@D-Sketon](https://github.com/D-Sketon) in [#54](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/54)
- perf: 减少无意义回流 by [@D-Sketon](https://github.com/D-Sketon) in [#56](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/56)
- perf: 视口外时停止动画 by [@D-Sketon](https://github.com/D-Sketon) in [#59](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/59)
- refactor: 处理迁移剩余工作 by [@zkz098](https://github.com/zkz098) in [#60](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/60)

**Full Changelog**: [v0.2.1...v0.2.2](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.1...v0.2.2)

## 0.2.1

- fix: sidebar 缺少后退按钮([#51](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/51)) by [@zkz098](https://github.com/zkz098) in [ecc970b](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/ecc970b2989e7e075bf4094440a86ac6709798a3)
- fix: fireworks 长时间不消失([#49](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/49)) by [@zkz098](https://github.com/zkz098) in [7a1c87e](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/7a1c87e335a2ec7f349232dae758bf01aeb273ba)

**Full Changelog**: [v0.2.0...v0.2.1](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.2.0...v0.2.1)

## 0.2.0

- refactor: typescript 及模板重构 by [@zkz098](https://github.com/zkz098) in [#41](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/41)
- pref: 优化长文章性能 by [@zkz098](https://github.com/zkz098) in [#42](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/42)
- perf: 优化头图显示 by [@D-Sketon](https://github.com/D-Sketon) in [#44](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/44)
- fix: 尝试修复 sidebar 抽动 by [@D-Sketon](https://github.com/D-Sketon) in [#48](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/48)
- fix: 修复 waline 最新评论问题 by [@zkz098](https://github.com/zkz098) in [6717aad](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/6717aadc43e1255de1a7ea0bcc2393692c09b37f)
- fix: 修复 fireworks 无法禁用 by [@zkz098](https://github.com/zkz098) in [cd5e244](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/cd5e2448faa1d47a3c1aa193c793464825a7ac86)

**Full Changelog**: [v0.1.9...v0.2.0](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.1.9...v0.2.0)

## 0.1.9

- docs(config): update algolia config by [@D-Sketon](https://github.com/D-Sketon) in [#39](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/39)
- feat: waline 浏览量显示可以独立开启 by [@zkz098](https://github.com/zkz098) in [8f9359e](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/8f9359ede669cf84e0151c8f9de17ae7d1a397f3)

**Full Changelog**: [v0.1.8...v0.1.9](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.1.8...v0.1.9)

## 0.1.8

- feat: support pullquote by [@D-Sketon](https://github.com/D-Sketon) in [#35](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/35)
- docs: Use "pnpm add" instead of "pnpm install" by [@argvchs](https://github.com/argvchs) in [#33](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/33)
- feat: update i18n by [@D-Sketon](https://github.com/D-Sketon) in [#34](https://github.com/theme-shoka-x/hexo-theme-shokaX/pull/34)
- feat(perf): dns-fetch 和 preconnect 可设置 by [@zkz098](https://github.com/zkz098) in [f3b7405](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/f3b740539958fc8166d4b49cc6dc0cc71a4f2f4a)
- feat(script): 自动检查版本更新 by [@zkz098](https://github.com/zkz098) in [fedae12](https://github.com/theme-shoka-x/hexo-theme-shokaX/commit/fedae123e7588b900909bfbef79ee27880972b2a)

**Full Changelog**: [v0.1.7...v0.1.8](https://github.com/theme-shoka-x/hexo-theme-shokaX/compare/v0.1.7...v0.1.8)
