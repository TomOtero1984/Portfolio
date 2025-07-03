<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const username = 'tomotero1984'
const repo = 'ConC.GPT'
const branch = 'main' // or 'master' or any other

const markdown = ref('')
const html = ref('')

onMounted(async () => {
  const url = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/README.md`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to fetch README: ${res.statusText}`)
    markdown.value = await res.text()
    html.value = marked.parse(markdown.value).toString()
  } catch (err) {
    html.value = `<p><strong>Error loading README.md:</strong> ${err}</p>`
  }
})
</script>

<template>
  <div class="readme-content" v-html="html" />
</template>

<style scoped>
.readme-content {
  padding: 1rem;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}
</style>