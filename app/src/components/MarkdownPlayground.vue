<script setup>
import { ref, watch, computed } from "vue";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const props = defineProps({
  text: {
    type: String,
    default: `# 🧠 creative acceleration log\n\n- learned rust\n- built things\n`,
  },
});

const emit = defineEmits(["update:text"]);

const editing = ref(false);
const markdown = ref(props.text);

watch(
  () => props.text,
  (v) => {
    if (!editing.value) markdown.value = v ?? "";
  },
);

const textProxy = computed({
  get: () => markdown.value,
  set: (v) => {
    markdown.value = v;
    emit("update:text", v);
  },
});

const toggleEdit = () => {
  editing.value = !editing.value;
};
</script>

<template>
  <div class="markdown-playground">
    <button @click="toggleEdit">
      {{ editing ? "🔒 Preview" : "✍️ Edit" }}
    </button>
    <slot></slot>
    <div v-if="editing">
      <textarea v-model="textProxy" class="editor" />
    </div>
    <div class="preview" v-html="md.render(markdown)" />
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
