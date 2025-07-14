<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import { ref, onMounted, onUnmounted, defineProps, nextTick } from 'vue';
import CatRobotWalkingAnimation from "@/components/animations/CatRobotWalkingAnimation.vue";


const props = defineProps<{
  scale?: number,
  spriteWidth?: number,
  spriteHeight?: number,
}>()

const spriteWidth = props.spriteWidth ?? 256;
const spriteHeight = props.spriteHeight ?? 256;
const scale = props.scale ?? 0.25;

const cat = ref<HTMLElement | null>(null);
const catTrack = ref<HTMLElement | null>(null);


let currentX = 0;
let lastX = 0;
let rafId: number | null = null;

function updateCat() {
  if (!cat.value || !catTrack.value) {
    rafId = requestAnimationFrame(updateCat)
    return;
  }
  const scaledWidth = spriteWidth * scale;
  const scaledHeight= spriteHeight * scale;
  const deltaX = (currentX - lastX) * 0.1;
  lastX += deltaX;

  const maxX = catTrack.value.offsetWidth;
  const offset = scaledWidth * 0.5;
  const clamped = Math.max(0 - spriteWidth + (spriteWidth-scaledWidth) * 0.5, Math.min(lastX, maxX- spriteWidth + (spriteWidth-scaledWidth) * 0.5));
  if (cat.value) {
    cat.value.style.left = `${ clamped }px`
  }
  // // flip direction
  // if (delta > 0.5) catEl.style.transform = 'scaleX(1)'
  // else if (delta < -0.5) catEl.style.transform = 'scaleX(-1)'

  rafId = requestAnimationFrame(updateCat);
}

function handleMouseMove(e: MouseEvent) {
  if (!catTrack.value) return
  const bounds = catTrack.value.getBoundingClientRect();
  currentX = e.clientX - bounds.left;
}

onMounted(async () => {
  window.addEventListener('mousemove', handleMouseMove)
  await nextTick()
  rafId = requestAnimationFrame(updateCat)

})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  if (rafId) cancelAnimationFrame(rafId);
})

</script>

<template>
  <div class="cat-robot-track" ref="catTrack">
    <div class="cat-wrapper" ref="cat"
         :style="{
          width:`${scaledWidth}px`,
          height: `${scaledHeight}px`,
          overflow: 'visible',
        }"
    >
    <router-link to="/" class="router-link-no-style">
      <CatRobotWalkingAnimation
        class="walking-animation"
        :sprite-width="256"
        :sprite-height="256"
        :scale=0.25
      />
    </router-link>
    </div>
  </div>
</template>

<style scoped>
.cat-robot-track {
  position: relative;
  height: 64px;
  width: 100%;
  align-items: center;
  display: flex;
  pointer-events: none;
}

.cat-wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  display: flex;
}

.walking-animation {
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

</style>
