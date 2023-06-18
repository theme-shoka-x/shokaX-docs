# theme-shokax-anime API
可用区: `head api`(前端可用，但需在脚本引入后)

## 基础使用
### defaultOptions
```typescript
const defaultOptions = {
    targets: null,
    duration: Infinity,
    easing: "linear",
    delay: 0,
    begin: null,
    update: null,
    complete: null,
};
```
### anime
用于构造anime对象
#### 接收参数
- `option: AnimeOptions`: (可选，默认为`defaultOptions`)配置选项

#### 返回类型
- `Anime`: Anime类，包含原型方法和实例方法

#### 示例
```typescript
const animeInstance = anime({
  targets: document.getElementById("imgs"),
  duration: 1000,
  easing: "linear",
  delay: 0,
  opacity: 1
})
```

### anime.random
生成指定范围内的随机整数
#### 接收参数
- `min: number`: 随机数的最小值
- `max: number`: 随机数的最小值

#### 返回类型
- `number`: 生成的随机数

### Anime.prototype.timeline
用于从anime中构造timeline对象

#### 返回类型
- `Timeline`: 时间轴对象

#### 示例
````typescript
const timelineInstance = anime().timeline()
````

### Anime.prototype.play
启动动画
#### 返回类型
- `void`

#### 示例
````typescript
anime({
    targets: document.getElementById("imgs"),
    duration: 1000,
    easing: "linear",
    delay: 0,
    opacity: 1
}).play()
````

### Timeline.prototype.add
向时间轴中添加动画
#### 接收参数
- `option: AnimeOptions`: (可选，默认为`defaultOptions`)配置选项

#### 返回类型
- `Timeline`: 以支持链式调用

#### 示例
```typescript
const timelineInstance = anime().timeline().add({
    targets: particules,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    radius: 0.1,
}).add({
    targets: circle,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    radius: anime.random(80, 160),
    lineWidth: 0
})
```

### Timeline.prototype.play
启动时间轴动画
#### 返回类型
- `void`

#### 示例
````typescript
anime().timeline().add({
    targets: particules,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    radius: 0.1,
}).add({
    targets: circle,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    radius: anime.random(80, 160),
    lineWidth: 0
}).play()
````
## 深入配置
### AnimeOptions
- `targets: any`: (可选)动画对象，含多个可选类型:
  - DOM对象
    ```typescript
    targets: document.getElementById("imgs")
    ```
  - 简单对象
    ```typescript
    targets: { x: 1, y: 2 }
    ```
  - 数组
    ```typescript
    targets: [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}]
    ```
- `duration: number`: (可选)动画持续时间，单位毫秒
  - 常规动画
    ```typescript
    duration: 1000
    ```
  - 无限动画
    ```typescript
    duration: Infinity
    ```
- `easing: string`: (可选)动画类型，参见下文[EasingTypes](#easingtypes)
- `delay: number`: (可选)动画延迟时间，单位毫秒
- `begin: (targets: any) => void`: (可选)开始回调，在动画开始之前被调用
- `update: (targets: any) => void`: (可选)更新回调，在每次更新后被调用
- `complete: (targets: any) => void`: (可选)结束回调，在动画结束之后被调用
- `[index:string]:any`: (可选)动画对象中需要变化的属性及其终态值，含多个可选类型:
  - 基础类型，仅包含终态值
    ```typescript
    lineWidth: 0
    ```
  - 对象类型，可以对单个属性做更多配置
    ```typescript
    alpha: {
        value: 0,   // 终态值，必填
        easing: "linear",   // 类型
        duration: anime.random(600, 800)    // 持续时间，必填
    }
    ```
  - 数组类型，含初态和终态两个值
    ```typescript
    x: [10, 20]
    ```
  - 关键帧模式，可以做到更细力度的控制
    ```typescript
    x: [
        { value: 10, duration: 200 },
        { value: 20, duration: 400 },
    ]
    ```
  - 函数类型
    ```typescript
    y: (item) => item.x
    ```
  - 支持px和百分比
    ```typescript
    x: '100%',
    y: '20px',
    z: ['0%', '100%']
    ```
### EasingTypes
```typescript
type EasingTypes =
    | 'linear'
    | 'easeInSine'
    | 'easeOutSine'
    | 'easeInOutSine'
    | 'easeOutInSine'
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad'
    | 'easeOutInQuad'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeOutInCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeOutInQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint'
    | 'easeOutInQuint'
    | 'easeInExpo'
    | 'easeOutExpo'
    | 'easeInOutExpo'
    | 'easeOutInExpo'
    | 'easeInCirc'
    | 'easeOutCirc'
    | 'easeInOutCirc'
    | 'easeOutInCirc'
    | 'easeInBack'
    | 'easeOutBack'
    | 'easeInOutBack'
    | 'easeOutInBack'
    | 'easeInBounce'
    | 'easeOutBounce'
    | 'easeInOutBounce'
    | 'easeOutInBounce'
```
### 示例(节选自ShokaX)
```typescript
// 创建一个圆形
const circle = createCircle(x, y)
// 创建一个空数组用于存储烟花粒子
const particules = []
// 循环创建烟花粒子
for (let i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y))
}
// 创建一个 anime.js 的时间线，并添加动画
anime().timeline().add({
    targets: particules,
    // x 坐标移动到烟花粒子的终点坐标
    // 动画持续时间为 anime.random(1200, 1800)
    duration: anime.random(1200, 1800),
    // 动画缓动效果为 easeOutExpo
    easing: 'easeOutExpo',
    // 更新渲染函数
    update: (targets) => {
        // 遍历所有可动画的对象
        for (const target of targets) {
            // 调用对象上的draw函数来绘制烟花粒子
            target.draw()
        }
    },
    x: p => p.endPos.x,
    y: p => p.endPos.y,
    // 半径变为0.1
    radius: 0.1
}).add({
    targets: circle,
    // 圆形半径变为 anime.random(80, 160)
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    // 更新渲染函数
    update: (targets) => {
        // 遍历所有可动画的对象
        for (const target of targets) {
            // 调用对象上的draw函数来绘制烟花粒子
            target.draw()
        }
    },
    radius: anime.random(80, 160),
    lineWidth: 0,
    // 透明度变化，最终值为0
    alpha: {
      value: 0,
      easing: 'linear',
      // 持续时间为 anime.random(600, 800)
      duration: anime.random(600, 800)
    }
}).play()
```
