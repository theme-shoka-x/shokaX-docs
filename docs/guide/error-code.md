# SXEC(ShokaX Error Code)

SXEC 有两种解释，一种是 `ShokaX Enviroment Check`，另一种则是 `ShokaX Error Code`，本文档取后者。

## SXEC 1xx

SXEC 1xx 为错误级别，当此错误码出现时，ShokaX 会存在无法运行、功能不完整和显示错误等问题。

### SXEC 101

此代码代表高亮器配置不正确，会导致代码块样式错误。

重新查看[配置教程](/guide/index.md#配置主题)，检查 `prismjs` 、 `highlight` 和 `syntax_highlighter` 是否关闭。

如果从 Hexo 6 或更低版本迁移到 Hexo 7+，请根据配置教程重新配置代码高亮器。

### SXEC 102

此代码代表包安装不完整，关键插件未安装，可能导致显示错误和性能下降等问题。

使用 SXC 重新安装主题一般可以解决。

### SXEC 103

Nodejs 版本过于久远，ShokaX 需要 nodejs 18 或更高版本以运行。

安装更新版本的 Nodejs，建议使用最新的 LTS 版本。

## SXEC 2xx

SXEC 2xx 为警告级别，如果出现，则 ShokaX 可能运行不正常或显示错误。

### SXEC 201

Hexo 配置中的关键信息缺失，包括站点标题、站点描述、站点语言、站点时区和站点 URL。

根据相关文档配置完整即可。

### SXEC 202

使用了废弃的特性，这些特性已被删除或将被删除，可根据文档寻找替代方案。

截至 ShokaX v0.3.10，共有如下废弃特性：

- git 系评论系统（0.3.10删除）建议使用 twikoo 或 waline 替代
