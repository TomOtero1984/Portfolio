<script setup>
import {computed, useSlots} from 'vue'

const slots = useSlots()
const text = computed(() => (slots.default ? slots.default()[0].children : 'big text'))

const letters = computed(() => text.value.split(''))
</script>

<template>
  <div class="big-text-wrapper">
    <span
      v-for="(char, index) in letters"
      :key="index"
      class="big-text"
      :style="{animationDelay: `${index * 0.5}s`}"
      v-html="char === ' ' ? '&nbsp;' : char"
    >
    </span>
  </div>
</template>

<style scoped>
.big-text-wrapper {
  display: inline-flex;
  gap: 0.02em;
}

.big-text:hover {
  display: inline-block;
}

.big-text-wrapper:hover .big-text {
  animation: bigText 5s ease-in-out forwards infinite;
  color: white;
}

@keyframes bigText {
  0% {
    transform: translateY(-1em) translateX(-4em) scaleX(150%) scaleY(50%);

  }
  50% {
    transform: translateY(1em) translateX(4em) scaleX(50%) scaleY(150%);
  }
  75% {
    transform: translateY(-1em) translateX(-4em) scale(250%);
  }
  100% {
    transform: translateY(1em) translateX(4em) scale(250%);
  }
}


</style>
