<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'

const slots = useSlots()
const explode = ref(false)


const text = computed(() => {
  const slotContent = slots.default?.()[ 0 ]?.children ?? ''
  return typeof slotContent === 'string' ? slotContent : 'Explosion!'
})

type Letter = {
  index: number
  angle: number
  radius: number
  x: number
  y: number
  rotation: number
  char: string
  transform: string
  opacity: number
  transition: string
  exploded?: boolean
}

const letters = computed<Letter[]>(() => {
  return text.value.split('').map((char, i) => {
    const angle = (i / text.value.length) * 360
    const radius = 80
    const x = Math.cos((angle * Math.PI) / 180) * radius
    const y = Math.sin((angle * Math.PI) / 180) * radius
    const rotation = Math.random() * 720 - 360

    return {
      index: i,
      angle,
      radius,
      x,
      y,
      rotation,
      char,
      transform: '',
      opacity: 1,
      transition: ''
    }
  })
})

function triggerExplosion() {
  explode.value = true
  for (const letter of letters.value) {
    getExplosionStyle(letter)
  }
  setTimeout(() => {
    explode.value = false
    getResetStyle(letters.value)
  }, 1000) // Regenerate after 1 second
}

function getExplosionStyle(letter: Letter) {
  letter.transform = `translate(${ letter.x }px, ${ letter.y }px) rotate(${ letter.rotation }deg) scale(2)`;
  letter.opacity = 0;
  letter.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
  letter.exploded = true;
}

function getResetStyle(letters: Letter[]) {
  for (const letter of letters) {
    letter.transform = 'translate(0, 0) rotate(0deg) scale(1)';
    letter.opacity = 1;
    letter.transition = 'transform 0.5s ease-in, opacity 0.5s ease-in';
    letter.exploded = false;
  }
}
</script>

<template>
  <div class="explode-wrapper" :class="{ exploded: explode }" @click="triggerExplosion">
    <span
      v-for="letter in letters"
      :key="letter.index"
      class="letter"
      v-html="letter.char === ' ' ? '&nbsp;' : letter.char"
      :style="{
        transform: letter.transform,
        opacity: letter.opacity,
        transition: letter.transition,
      }"
    />
  </div>
</template>

<style scoped>
.explode-wrapper {
  display: inline-block;
  cursor: pointer;
}
.explode-wrapper.exploded {
  pointer-events: none;
}

.letter {
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>
