// src/vite-env.d.ts
declare module '*.html?raw' {
  const content: string;
  export default content;
}