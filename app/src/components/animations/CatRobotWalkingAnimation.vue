<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { WalkCycle } from './keyframe';


const props = defineProps<{
  spriteWidth?: number,
  spriteHeight?: number,
  scale?: number,
}>();


const spriteWidth = props.spriteWidth ?? 256;
const spriteHeight = props.spriteHeight ?? 256;
const scale = props.scale ?? 1;

const scaledWidth = spriteWidth * scale;
const scaledHeight = spriteHeight * scale;

const numFrames = 4;
const walkCycle = `-${spriteWidth * numFrames}px`;

</script>

<template>
  <div class="sprite-wrapper"
       :style="{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
       }"
  >
    <div class="sprite"
         :style="{
          width:`${spriteWidth}px`,
          height: `${spriteHeight}px`,
        }"
    />
  </div>
</template>

<style scoped>
.sprite-wrapper {
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
}
.sprite {
  background-image: url('../../assets/sprites/robot_cat_walking.png');
  background-repeat: no-repeat;
  image-rendering: pixelated;
  animation: walk-cycle 0.6s steps(4) infinite;
}

@keyframes walk-cycle {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -1024px;
  }
}
</style>
