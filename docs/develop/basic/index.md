# 二次开发

## 在开始之前...

本教程仅提供与 ShokaX 有关的 Hexo 开发知识、代码示例和 API 调用文档，因此，在开始之前，你应该会:

- 编写并运行一个 Javascript/Typescript 脚本
- 了解基础的 Node.js 知识(例如 import 和 npm)
- 自行配置一个适合自己的 IDE 环境
- 会使用 git 和 github 进行一些基础操作

此文档的一些阅读须知:

- `<type>`代表此值必填，不需要保留尖括号，直接用值替换即可，需要符合 Type(遵循 typescript 类型标准)
- `[--depth=1]`代表此值/选项可选，不需要保留方括号

## 克隆代码库

我建议你使用 fork 功能以便储存更改/发起 PR，在仓库的右上角有一个 fork 按钮，点击之后进入你 fork 的仓库，随后:

```bash
git clone <string> # 此处为你的fork地址
```

然后请确保你已经安装了`pnpm`包管理器，随后:

```shell
pnpm install
pnpm run build
```

如果`build`未抛出错误，则仓库完整且可以用于开发

## 开发须知

### 目录结构

ShokaX 的目录结构(仅包含对开发重要的部分)如下:

```text
|- .github # issues模板、CI工作流等存储位置
|- languages # 国际化文件储存位置
|- layout # 模板储存位置
|- scripts # hexo脚本储存位置
|- source # 前端文件位置
|- test # 测试脚本
- package.json # npm包json
- tsconfig.json # typescript编译配置
- .eslintrc.cjs # eslint配置
- _config.yml # hexo主题配置文件
- _images.yml # 图床配置文件
```

### 调试注意事项

1. hexo 不会自动排除 typescript 文件，因此在 build 后复制到 themes 文件时应手动删除`*.ts`文件，linux 可使用`find . -type f -name "*.ts" -delete`批量删除

### 代码注意事项

1. `source/js`目录不能使用 hexo 的辅助函数和 node 库，`scripts`目录不能使用`source/js`的函数
2. 注意 ESM 和 CJS 的区别，对于仅支持 CJS 的模块应使用`import xxx = require('xxx')`的形式，否则 tsc 后无法正常生成文件
3. 尽可能少使用`@ts-ignore`，一般除去部分遗留代码和 types 有问题的代码外不应出现`@ts-ignore`
4. 写注释，特别是奇怪的代码(例如魔法数字和神奇的正则)。对于正则表达式应提供一个示例以便理解
