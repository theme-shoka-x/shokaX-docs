## ShokaX DOM API

Available Partition: `page ts` (Accessible on the frontend)

## $dom Series

### $dom

Used to fetch the first HTML node that matches a CSS selector. When using an ID, it retrieves via `getElementById`, otherwise through `querySelector`.

#### Parameters

- `selector: string`: CSS selector
- `element: Document`: (Optional, defaults to document) Parent node for query

#### Return Type

- `HTMLElement`: The queried child node

#### Example

```typescript
const Container = $dom("#container"); // Retrieved using getElementById
const article = $dom(".index.wrap"); // Retrieved using querySelector

article.innerHTML = "<p>Hello world</p>";
```

### $dom.all

Uses `querySelectorAll` to return all nodes that match the criteria. Generally not directly used.

#### Parameters

- `selector: string`: CSS selector
- `element: Document`: (Optional, defaults to document) Parent node for query

#### Return Type

- `NodeListOf<HTMLElement>`: List of queried child nodes

### $dom.each

Iterates over all nodes that match the selector and executes a callback.

#### Parameters

- `selector: string`: CSS selector
- `callback: (value: HTMLElement, key?: number, parent?: NodeListOf<Element>) => void`: Callback function
- `element: Document`: (Optional, defaults to document) Parent node for query

#### Return Type

- `void`

#### Example (Excerpt from ShokaX page ts)

```typescript
$dom.each(".post.block p.gallery", (element) => {
  const box = document.createElement("div");
  box.className = "gallery";
  box.attr("data-height", String(element.attr("data-height") || 220));

  box.innerHTML = element.innerHTML.replace(/<br>/g, "");

  element.parentNode.insertBefore(box, element);
  element.remove();
});
```

### Asynchronous DOM API

This section includes `$dom.asyncify`<Badge type="tip" text="Experimental" vertical="middle" /> and `$dom.asyncifyEach`<Badge type="tip" text="Experimental" vertical="middle" />. Due to the unstable code implementation, documentation is not provided at this time.

## Prototype Injection Series

Prototype injections involve setting `HTMLElement.prototype` to inject APIs.

### HTMLElement.prototype.createChild

Creates an HTML element and places it.

#### Parameters

- `tag: string`: Tag name of the HTML element to create ('div', 'span', etc.)
- `obj: Object`: Contains attributes and values to apply to the newly created HTML element
- `position?: string`: (Optional) Represents where the newly created HTML element is placed. Options:
  - `after`: Insert the new element after `this`
  - `replace`: Clear the content of `this` and add the newly created element as the only child within `this`
  - Otherwise: Default to adding the element as the last child of `this`

#### Return Type

- `HTMLElement`: Newly created child element

#### Example (Excerpt from ShokaX page ts)

```typescript
const BODY = document.getElementsByTagName("body")[0];
let siteSearch;

if (!siteSearch) {
  siteSearch = BODY.createChild("div", {
    id: "search",
    innerHTML:
      '<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>',
  });
}
```

### HTMLElement.prototype.wrapObject

Wraps `this` with a new div element.

#### Parameters

- `obj: Object`: Contains attributes and values to apply to the newly created div element

#### Return Type

- `void`

#### Example (Excerpt from ShokaX page ts)

```typescript
$dom.each(".md table", (element) => {
  element.wrapObject({
    className: "table-container",
  });
});
```

### HTMLElement.prototype.changeOrGetHeight

Change or retrieve the height of `this`.

#### Parameters

- `h: number | string`: (Optional) If provided, sets the height of `this` to the specified value. If a number, converts to string and adds 'rem' unit; otherwise, uses the value directly

#### Return Type

- `number`: Height of `this`

### HTMLElement.prototype.changeOrGetWidth

Change or retrieve the width of `this`.

#### Parameters

- `w: number | string`: (Optional) If provided, sets the width of `this` to the specified value. If a number, converts to string and adds 'rem' unit; otherwise, uses the value directly

#### Return Type

- `number`: Width of `this`

### HTMLElement.prototype.getTop

Get the distance of `this` from the top of the viewport (offset from the top edge).

#### Return Type

- `number`: Distance of `this` from the top of the viewport

### HTMLElement.prototype.left

Get the distance of `this` from the left of the viewport (offset from the left edge).

#### Return Type

- `number`: Distance of `this` from the left of the viewport

### HTMLElement.prototype.attr

Manipulate attributes of `this`.

#### Parameters

- `type: string`: Attribute name to manipulate
- `value: string`: (Optional) Attribute value. Options:
  - `null`: Remove the attribute with the given `type`
  - Exists (neither `null` nor `undefined`): Set the attribute with `type` name to `value`
  - `undefined` or omitted: Return the value of the attribute with `type` name

#### Return Type

- `void | EventTarget | string`: Varies based on the value of `value`:
  - `void`: `value` is `null`
  - `EventTarget`: `value` exists (neither `null` nor `undefined`), returns `this` (itself)
  - `string`: `value` is `undefined` or omitted, returns the value of the attribute with `type` name

#### Example (Excerpt from ShokaX page ts)

```typescript
if ((info = element.attr("title"))) {
  $imageWrapLink.attr("data-caption", info);
  const para = document.createElement("span");
  const txt = document.createTextNode(info);
  para.appendChild(txt);
  para.addClass(captionClass);
  element.insertAfter(para);
}
```

### HTMLElement.prototype.insertAfter

Inserts another element after `this`.

#### Parameters

- `element: HTMLElement`: Element to insert

#### Return Type

- `void`

### HTMLElement.prototype.display

Set/get the `display

` property of `this`.

#### Parameters

- `d: string`: (Optional) The display state to set for the element. If passed, sets the `display` property of `this` to the specified value

#### Return Type

- `string | EventTarget`: Varies based on `d`:
  - `string`: If `d` is omitted, returns the `display` property of `this`
  - `EventTarget`: If `d` is provided, returns `this` (itself)

#### Example (Excerpt from ShokaX page ts)

```typescript
if (qr.display() === "inline-flex") {
  transition(qr, 0);
} else {
  transition(qr, 1, () => {
    qr.display("inline-flex");
  }); // slideUpBigIn
}
```

### HTMLElement.prototype.child

Find the first child node that matches the selector.

#### Parameters

- `selector: string`: CSS selector

#### Return Type

- `HTMLElement`: Queried child node

### HTMLElement.prototype.find

Find all child nodes of `this` that match the selector.

#### Parameters

- `selector: string`: CSS selector

#### Return Type

- `NodeListOf<HTMLElement>`: List of queried child nodes

### HTMLElement.prototype._class

Manipulate class names. Generally not directly used.

#### Parameters

- `type: string`: Type of class name operation. Options:
  - `add`
  - `remove`
  - `toggle`
  - `replace`
- `className: string`: Class name or list of class names to operate on
- `display: boolean`: (Optional) For `toggle` operations, whether to add or remove the class name

#### Return Type

- `void`

### HTMLElement.prototype.addClass

Add a class name.

#### Parameters

- `className: string`: Class name or list of class names to operate on

#### Return Type

- `EventTarget`: Returns `this` (itself)

### HTMLElement.prototype.removeClass

Remove a class name.

#### Parameters

- `className: string`: Class name or list of class names to operate on

#### Return Type

- `EventTarget`: Returns `this` (itself)

### HTMLElement.prototype.toggleClass

Toggle a class name.

#### Parameters

- `className: string`: Class name or list of class names to operate on
- `display: boolean`: (Optional) Forces adding or removing the class, regardless of whether the class name exists

#### Return Type

- `EventTarget`: Returns `this` (itself)

### HTMLElement.prototype.hasClass

Check if the specified class name exists within `this`.

#### Parameters

- `className: string`: Class name or list of class names to operate on

#### Return Type

- `boolean`: Whether the class name exists
