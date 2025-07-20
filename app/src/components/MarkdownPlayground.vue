<!-- src/components/MarkdownPlayground.vue -->
<script setup>
import {ref} from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const editing = ref(false)

const defaultText =
  `# 🧠 Creative Acceleration Log

- Learned Rust
- Built a Linux kernel
- Started Oyster
- Embedded a Linux VM into a webpage
`
const markdown = ref(defaultText)

const toggleEdit = () => {
  editing.value = !editing.value
}
</script>

<template>
  <div class="markdown-playground">
    <button @click="toggleEdit">
      {{ editing ? '🔒 Preview' : '✍️ Edit' }}
    </button>

    <div v-if="editing">
      <textarea v-model="markdown" class="editor"/>
    </div>

    <div class="preview" v-html="md.render(markdown)"/>
  </div>
</template>

<style scoped>
.markdown-playground {
  font-family: sans-serif;
  margin: 1rem auto;
  max-width: 700px;
}

button {
  margin-bottom: 1rem;
}

.editor {
  width: 100%;
  min-height: 200px;
  font-family: monospace;
  margin-bottom: 1rem;
}

.preview {
  border-top: 1px solid #ccc;
  padding-top: 1rem;
}
</style>
