# ShokaX dom API
可用区: `page ts`(前端可用)

## $dom系
### $dom
适用于获取满足CSS选择器的首个HTML节点，当使用id获取时为 `getElementById` 获取，其他情况为 `querySelector` 获取
#### 接受参数
- `selector: string`: CSS选择器
- `element: Document`: (可选，默认为document)查询父节点

#### 返回类型
- `HTMLElement`: 查询到的子节点

#### 示例
```typescript
const Container = $dom('#container') // 使用getElementById获取的
const article = $dom('.index.wrap') // 使用querySelector获取的

article.innerHTML = '<p>Hello world</p>'
```

### $dom.all
使用 `querySelectorAll` 返回所有符合条件的节点，一般不直接使用此函数

#### 接受参数
- `selector: string`: CSS选择器
- `element: Document`: (可选，默认为document)查询父节点

#### 返回类型
- `NodeListOf<HTMLElement>`: 查询到的子节点列表

### $dom.each
遍历所有符合选择器的节点并执行callback

#### 接受参数
- `selector: string`: CSS选择器
- `callback: (value: HTMLElement, key?: number, parent?: NodeListOf<Element>) => void`: 回调参数
- `element: Document`: (可选，默认为document)查询父节点

#### 返回类型
- `void`

#### 示例(节选自ShokaX page ts)
```typescript
$dom.each('.post.block p.gallery', (element) => {
    const box = document.createElement('div')
    box.className = 'gallery'
    box.attr('data-height', String(element.attr('data-height') || 220))
    
    box.innerHTML = element.innerHTML.replace(/<br>/g, '')
    
    element.parentNode.insertBefore(box, element)
    element.remove()
})
```

### dom异步化API
此部分API包含`$dom.asyncify`<Badge type="tip" text="实验性" vertical="middle" /> 和 `$dom.asyncifyEach`<Badge type="tip" text="实验性" vertical="middle" />
由于具体代码实现尚未稳定，暂不提供文档


## 原型注入系
原型注入系通过设置 `HTMLElement.prototype` 来注入API
### HTMLElement.prototype.createChild
创建一个HTML元素并放置
#### 接受参数
- `tag: string`: 要创建的HTML元素的标签名(如，'div'，'span'等)
- `obj: Object`: 包含要应用于新创建的HTML元素的属性和值
- `positon?: string`: (可选)表示新创建的HTML元素放置的位置。可选值:
  - `after`: 将新创建的元素插入到 `this` 的后面
  - `replace`: 清空 `this` 的内容，并将新创建的元素作为唯一子元素添加到 `this` 中
  - 省略该参数或传入其他值: 默认将元素添加为 `this` 的最后一个子元素

#### 返回类型
- `HTMLElement`: 新创建的子元素

#### 示例(节选自ShokaX page ts)
```typescript
const BODY = document.getElementsByTagName('body')[0]
let siteSearch

if (!siteSearch) {
  siteSearch = BODY.createChild('div', {
    id: 'search',
    innerHTML: '<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'
  })
}
```

### HTMLElement.prototype.wrapObject
使用用一个新的div元素包裹 `this`
#### 接受参数
- `obj: Object`: 包含要应用于新创建的div元素的属性和值

#### 返回类型
- `void`

#### 示例(节选自ShokaX page ts)
```typescript
$dom.each('.md table', (element) => {
  element.wrapObject({
    className: 'table-container'
  })
})
```

### HTMLElement.prototype.changeOrGetHeight
改变或获取 `this` 的高度
#### 接受参数
- `h: number | string`: (可选)如果提供了该参数，则将 `this` 的高度设置为该值。如果类型为数字，则将其转换为字符串并添加'rem'单位；否则，直接使用该值

#### 返回类型
- `number`: `this`的高度

### HTMLElement.prototype.changeOrGetWidth
改变或获取 `this` 的宽度
#### 接受参数
- `w: number | string`: (可选)如果提供了该参数，则将 `this` 的宽度设置为该值。如果类型为数字，则将其转换为字符串并添加'rem'单位；否则，直接使用该值

#### 返回类型
- `number`: `this`的宽度

### HTMLElement.prototype.getTop
获取 `this` 相对于视口顶部的距离(即上边界的偏移量)
#### 返回类型
- `number`: `this` 相对于视口顶部的距离

### HTMLElement.prototype.left
获取 `this` 相对于视口左侧的距离(即左边界的偏移量)
#### 返回类型
- `number`: `this` 相对于视口左侧的距离

### HTMLElement.prototype.attr
操作 `this` 的属性
#### 接受参数
- `type: string`: 操作的属性名
- `value: string`: (可选)属性值，可选值: 
  - `null`: 删除具有 `type` 名称的属性
  - 存在(既不为 `null` 也不为 `undefined`): 为 `this` 中将 `type` 名称的属性设置为 `value`
  - `undefined` 或省略该参数: 返回具有 `type` 名称属性的属性值

#### 返回类型
- `void | EventTarget | string`: 根据 `value` 的值而变化: 
  - `void`: `value` 为 `null`
  - `EventTarget`: `value` 既不为 `null` 也不为 `undefined`，返回 `this` (自身)
  - `string`: `value` 为 `undefined` 或省略该参数，返回具有 `type` 名称的属性的属性值

#### 示例(节选自ShokaX page ts)
```typescript
if ((info = element.attr('title'))) {
  $imageWrapLink.attr('data-caption', info)
  const para = document.createElement('span')
  const txt = document.createTextNode(info)
  para.appendChild(txt)
  para.addClass(captionClass)
  element.insertAfter(para)
}
```

### HTMLElement.prototype.insertAfter
在 `this` 之后插入另一个元素
#### 接受参数
- `element: HTMLElement`: 插入的元素

#### 返回类型
- `void`

### HTMLElement.prototype.display
设置/获得 `this` 的 `display` 属性
#### 接受参数
- `d: string`: (可选)要设置给元素的显示状态，如果传入，则设置 `this` 的 `display` 属性为指定值

#### 返回类型
- `string | EventTarget`: 根据 `d` 的值而变化:
  - `string`: 省略 `d`，返回 `this` 的 `display` 属性
  - `EventTarget`: 传入 `d`，返回 `this` (自身)

#### 示例(节选自ShokaX page ts)
```typescript
if (qr.display() === 'inline-flex') {
  transition(qr, 0)
} else {
  transition(qr, 1, () => {
    qr.display('inline-flex')
  }) // slideUpBigIn
}
```

### HTMLElement.prototype.child
找到 `this` 首个符合selector选择器的子节点
#### 接受参数
- `selector: string`: CSS选择器

#### 返回类型
- `HTMLElement`: 查询到的子节点

### HTMLElement.prototype.find
找到 `this` 所有符合selector选择器的子节点
#### 接受参数
- `selector: string`: CSS选择器

#### 返回类型
- `NodeListOf<HTMLElement>`: 查询到的子节点列表

### HTMLElement.prototype._class
操作类名，一般不直接使用此函数
#### 接受参数
- `type: string`: 执行的类名操作类型。可选值:
  - `add`
  - `remove`
  - `toggle`
  - `replace`
- `className: string`: 要操作的类名或类名列表
- `display: boolean`: (可选)用于 `toggle` 类型的操作，表示是否要添加或移除类名

#### 返回类型
- `void`

### HTMLElement.prototype.addClass
添加类名
#### 接受参数
- `className: string`: 要操作的类名或类名列表

#### 返回类型
- `EventTarget`: 返回 `this` (自身)

### HTMLElement.prototype.removeClass
移除类名
#### 接受参数
- `className: string`: 要操作的类名或类名列表

#### 返回类型
- `EventTarget`: 返回 `this` (自身)

### HTMLElement.prototype.toggleClass
切换类名
#### 接受参数
- `className: string`: 要操作的类名或类名列表
- `display: boolean`: (可选)设置元素是否强制添加或移除类，不管该类名是否存在

#### 返回类型
- `EventTarget`: 返回 `this` (自身)

### HTMLElement.prototype.hasClass
判断 `this` 中指定的类名是否存在
#### 接受参数
- `className: string`: 要判断的类名或类名列表

#### 返回类型
- `boolean`: 是否存在
