<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CreateWorld, CreateColliders, AnimationLoop, RefreshWorld } from './utils';


const canvasRef = ref<HTMLCanvasElement | null>(null);
let delta = 0
onMounted(() => {
  let resizeTimeout: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      RefreshWorld(  {
        ctx, canvas,
        engine, world, ground,
        actor, delta
      });
    }, 200)
  })

  const {canvas, ctx, canvasSize, engine, world} = CreateWorld(canvasRef);
  const {ground, actor} = CreateColliders({world, canvas})
  AnimationLoop({canvas, canvasSize, ctx, engine, world, ground, actor});
});
</script>

<template>
  <canvas class="mini-engine" ref="canvasRef"/>
</template>

<style scoped>
.mini-engine {
  height: inherit;
  width: inherit;
  position: inherit;
  display: inherit;
}
</style>
