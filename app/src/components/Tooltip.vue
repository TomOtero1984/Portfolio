<!-- Tooltip.vue -->
<script setup>
defineProps({
  text: String
})
</script>


<template>
  <span class="tooltip">
    <slot name="trigger" />
    <span class="tooltip-text">
      <slot name="content" />
    </span>
  </span>
</template>

<style scoped>
.tooltip { position: relative; cursor: help; border-bottom: 1px dashed var(--accent); }

.tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 10;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 0.5em;
  border-radius: 6px;
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 0.2s;
  white-space: normal;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
