# ⚡ TypeScript Quick Reference (for Vue Developers)

A concise cheat sheet for working with TypeScript inside Vue 3 projects using `<script setup lang="ts">`.

---

## 🧱 Basic Types

```ts
let name: string = 'Tom'
let age: number = 9001
let isExploding: boolean = true
```

---

## 🗂️ Object Types (struct-style)

```ts
type Letter = {
  char: string
  x: number
  y: number
  rotation?: number // optional
}
```

Use `type` or `interface` to define reusable structures.

---

## 📦 Arrays and Tuples

```ts
let names: string[] = ['Tom', 'Jerry']
let coords: [number, number] = [0, 1] // fixed-length tuple
```

---

## 🚦 Union & Literal Types

```ts
type Direction = 'up' | 'down' | 'left' | 'right'
let move: Direction = 'up'
```

---

## 🧠 Functions

```ts
function explode(letter: Letter): void {
  console.log(letter.char + '💥')
}

const reassemble = (x: number): number => x + 1
```

Use `void` when a function returns nothing.

---

## 🧪 Type Assertions

```ts
const el = document.querySelector('#myDiv') as HTMLElement
```

---

## 🔁 Vue Refs & Reactivity

```ts
const count = ref(0) // count.value
const user = reactive({ name: 'Tom', age: 30 })
```

| Tool         | Use Case                 | Access |
|--------------|--------------------------|--------|
| `ref()`      | Single primitive/value    | `.value` |
| `reactive()` | Reactive object structure | dot access |

In Vue templates, `.value` is unwrapped:

```vue
<span>{{ count }}</span> <!-- No .value needed -->
```

---

## 🧰 Utility Types

| Type            | Description                              |
|-----------------|------------------------------------------|
| `Partial<T>`    | All props optional                       |
| `Pick<T, K>`    | Select keys                              |
| `Omit<T, K>`    | Remove keys                              |
| `Record<K, T>`  | Map of keys to values                    |

```ts
type PartialLetter = Partial<Letter>
type JustChar = Pick<Letter, 'char'>
type CoordMap = Record<string, { x: number, y: number }>
```

---

## ✨ `type` vs `interface`

| Feature      | `type`                             | `interface`           |
|--------------|-------------------------------------|------------------------|
| Object shape | ✅                                  | ✅                    |
| Extends      | ✅ (`&`)                            | ✅ (`extends`)        |
| Flexible     | ✅ Literal types, unions            | ❌                    |
| Best for     | Component data + reactivity         | Class-like APIs       |

---

## 🔒 Generics

```ts
function identity<T>(value: T): T {
  return value
}

const result = identity<string>('hello')
```

---

## 🚀 Vue Prop Typing

```ts
defineProps<{
  name: string
  age?: number
}>()
```

---

## 🧯 Debugging Tips

- Use `typeof something` to debug at runtime
- Hover in IDE to inspect inferred types
- Use `as const` to lock in literal types:

```ts
const dir = 'left' as const // becomes type: 'left'
```

---

## 🧠 Summary

- `ref()` holds a single reactive value → use `.value`
- `reactive()` is for objects → no `.value`
- `type` is your best friend for struct-like data
- No `new` unless you're using a `class`
- Vue unpacks `.value` in templates — but not in scripts

---

Keep it close, update as needed — and happy typing! 🧠💥
