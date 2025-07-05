<script setup lang="ts">
import { computed, useSlots } from "vue";
import ImaginationText from "@/components/animations/ImaginationText.vue";

defineProps<{
  to: string | object
  exactActiveClass?: string
  animate?: boolean
}>()

const  slots = useSlots()


const text = computed(() => {
  const nodes = slots.default?.() ?? []

  const combined = nodes
    .map(n => typeof n.children === 'string' ? n.children : '')
    .join('')

  if (combined === '') {
    console.warn('⚠️ Slot content could not be resolved to plain text:', nodes)
  }

  return combined
})

const isPlainText = computed(() => {
  const slotNodes = slots.default?.() ?? []
  return slotNodes.length === 1 && typeof slotNodes[0].children === 'string'
})


</script>

<template>
  <component
    :is="animate && isPlainText ? ImaginationText : 'span'"
  >
    <router-link :to="to" :exact-active-class="exactActiveClass">
      <slot />
    </router-link>
  </component>
</template>

<style scoped>

</style>
