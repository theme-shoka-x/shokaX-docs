# ShokaX dom API
可用区: `page ts`(前端可用)

## $dom系
### $dom
适用于获取一个HTML节点，当使用id获取时为getElementById获取，其他情况为querySelector获取。\
选择器遵循CSS选择器格式，接受参数:
- `selector`(string): CSS选择器
- `element`(Document): 查询父节点，不指定为document \
示例:
```typescript
const Container = $dom('#container') // 使用getElementById获取的
const article = $dom('.index.wrap') // 使用querySelector获取的

article.innerHTML = '<p>Hello world</p>'
```

### $dom.all
同$dom格式，返回所有符合条件的节点，一般不直接使用此函数
:::tip
$dom.all和$dom.each不支持使用id选择器
:::

### $dom.each
遍历所有符合选择器的节点并执行callback，接受参数如下:
- `selector`(string): CSS选择器，不支持id
- `callback`: 回调参数，格式如下: `(value: HTMLElement, key?: number, parent?: NodeListOf<Element>) => void`
- `element`: 查询父节点，默认为document

示例代码(节选自ShokaX page ts):
```typescript
$dom.each('.post.block p.gallery', function (element) {
        const box = document.createElement('div')
        box.className = 'gallery'
        box.attr('data-height', String(element.attr('data-height') || 220))

        box.innerHTML = element.innerHTML.replace(/<br>/g, '')

        element.parentNode.insertBefore(box, element)
        element.remove()
      })
```

### dom异步化API
此部分API包含$dom.asyncify<Badge type="tip" text="实验性" vertical="middle" /> 和 $dom.asyncifyEach<Badge type="tip" text="实验性" vertical="middle" />
由于具体代码实现尚未稳定，暂不提供文档