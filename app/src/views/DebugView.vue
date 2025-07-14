<script setup lang="ts">
import MiniEngine from "@/components/MiniEngine/MiniEngine.vue";
</script>

<template>
  <div class="debug">

    <MiniEngine />
  </div>
</template>

<style scoped>
.debug {
  background: black;
  width: 100%;
  height: 100%;
  position: static;
  display: flex inline;
  justify-content: center;
  align-items: center;
}
MiniEngine {

  width: 100%;
  height: 100%;
}
</style>
