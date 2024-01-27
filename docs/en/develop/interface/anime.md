# theme-shokax-anime API

Available Partition: `head api` (Accessible on the frontend but requires script import)

## Basic Usage

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

Used to construct an anime object

#### Parameters

- `option: AnimeOptions`: (Optional, defaults to `defaultOptions`) Configuration options

#### Return Type

- `Anime`: Anime class containing prototype and instance methods

#### Example

```typescript
const animeInstance = anime({
  targets: document.getElementById("imgs"),
  duration: 1000,
  easing: "linear",
  delay: 0,
  opacity: 1,
});
```

### anime.random

Generates a random integer within a specified range

#### Parameters

- `min: number`: Minimum value for the random number
- `max: number`: Maximum value for the random number

#### Return Type

- `number`: Generated random number

### Anime.prototype.timeline

Used to construct a timeline object from anime

#### Return Type

- `Timeline`: Timeline object

#### Example

```typescript
const timelineInstance = anime().timeline();
```

### Anime.prototype.play

Starts the animation

#### Return Type

- `void`

#### Example

```typescript
anime({
  targets: document.getElementById("imgs"),
  duration: 1000,
  easing: "linear",
  delay: 0,
  opacity: 1,
}).play();
```

### Timeline.prototype.add

Adds an animation to the timeline

#### Parameters

- `option: AnimeOptions`: (Optional, defaults to `defaultOptions`) Configuration options

#### Return Type

- `Timeline`: Supports chaining

#### Example

```typescript
const timelineInstance = anime()
  .timeline()
  .add({
    targets: particles,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticle,
    radius: 0.1,
  })
  .add({
    targets: circle,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticle,
    radius: anime.random(80, 160),
    lineWidth: 0,
  });
```

### Timeline.prototype.play

Starts the timeline animation

#### Return Type

- `void`

#### Example

```typescript
anime()
  .timeline()
  .add({
    targets: particles,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticle,
    radius: 0.1,
  })
  .add({
    targets: circle,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticle,
    radius: anime.random(80, 160),
    lineWidth: 0,
  })
  .play();
```

## Advanced Configuration

### AnimeOptions

- `targets: any`: (Optional) Animated object containing multiple optional types:
  - DOM Object

      ```typescript
      targets: document.getElementById("imgs");
      ```

  - Simple Object

      ```typescript
      targets: { x: 1, y: 2 }
      ```

  - Array

      ```typescript
      targets: [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
      ];
      ```

- `duration: number`: (Optional) Duration of the animation in milliseconds
  - Regular animation

      ```typescript
      duration: 1000;
      ```

  - Infinite animation

      ```typescript
      duration: Infinity;
      ```

- `easing: string`: (Optional) Type of animation, see [EasingTypes](#easingtypes)
- `delay: number`: (Optional) Delay before the animation starts in milliseconds
- `begin: (targets: any) => void`: (Optional) Begin callback called before the animation starts
- `update: (targets: any) => void`: (Optional) Update callback called after each update
- `complete: (targets: any) => void`: (Optional) Complete callback called after the animation finishes
- `[index:string]:any`: (Optional) Properties to be animated and their final values in the animated object, containing multiple optional types:
  - Basic type with only a final value

      ```typescript
      lineWidth: 0;
      ```

  - Object type allowing further configuration for a single property

      ```typescript
      alpha: {
          value: 0,   // Required final value
          easing: "linear",   // Type
          duration: anime.random(600, 800)    // Required duration
      }
      ```

  - Array type with initial and final values

      ```typescript
      x: [10, 20];
      ```

  - Keyframes allowing finer control

      ```typescript
      x: [
        { value: 10, duration: 200 },
        { value: 20, duration: 400 },
      ];
      ```

  - Function type

      ```typescript
      y: (item) => item.x;
      ```

  - Supports px and percentages

      ```typescript
      x: '100%',
      y: '20px',
      z: ['0%', '100%']
      ```

### EasingTypes

```typescript
type EasingTypes =
  | "linear"
  | "easeInSine"
  | "easeOutSine"
  | "easeInOutSine"
  | "easeOutInSine"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeOutInQuad"
  | ... // (more easing types)
  | "easeInOutBounce"
  | "easeOutInBounce";
```

### Example (Excerpt from ShokaX)

```typescript
// Create a circle
const circle = createCircle(x, y);
// Create an empty array to store firework particles
const particles = [];
// Loop to create firework particles
for (let i = 0; i < numberOfParticles; i++) {
  particles.push(createParticle(x, y));
}
// Create an anime.js timeline and add animations
anime()
  .timeline()
  .add({
    targets: particles,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: (targets) => {
      for (const target of targets) {
        target.draw();
      }
    },
    x: (p) => p.endPos.x,
    y: (p) => p.endPos.y,
    radius: 0.1,
  })
  .add({
    targets: circle,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: (targets

) => {
      for (const target of targets) {
        target.draw();
      }
    },
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: "linear",
      duration: anime.random(600, 800),
    },
  })
  .play();
```
