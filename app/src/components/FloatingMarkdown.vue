<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  url: string
  visible: boolean
}>()

const emit = defineEmits(['close'])

const markdown = ref('')
const html = ref('')

watch(() => props.url, async (newUrl) => {
  if (newUrl) {
    const res = await fetch(newUrl)
    markdown.value = await res.text()
    html.value = await marked.parse(markdown.value)
  }
}, { immediate: true })


function handleClickOutside() {
  emit('close')
}
const close = () => emit('close')

</script>

<template>
  <div class="floating-window" v-if="visible" v-click-outside="handleClickOutside">
    <button @click="close" class="close-btn">x</button>
    <div v-html="html" class="markdown-content" />
  </div>
</template>

<style scoped>
.floating-window {
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: var(--bg, #1e1e1e);
  color: var(--text, #eee);
  overflow: auto;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #eee;
  cursor: pointer;
}
.markdown-content :deep(pre) {
  background: #2e2e2e;
  padding: 0.5rem;
  overflow: auto;
}
</style>
