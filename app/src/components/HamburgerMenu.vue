<script lang="ts" setup>
import { ref } from 'vue'
import NavLinks from '@/components/NavLinks.vue';

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative">
    <!-- Hamburger Icon -->
    <button
      @click="toggleMenu"
      class="z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 group"
      aria-label="Toggle navigation"
    >
      <span
        class="w-6 h-0.5 bg-current transition-transform duration-300"
        :class="isOpen ? 'rotate-45 translate-y-2' : ''"
      />
      <span
        class="w-6 h-0.5 bg-current transition-opacity duration-300"
        :class="isOpen ? 'opacity-0' : ''"
      />
      <span
        class="w-6 h-0.5 bg-current transition-transform duration-300"
        :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
      />
    </button>

    <!-- Slide-in Menu -->
    <!--    class="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-zinc-800 shadow-lg rounded transition-all duration-300 overflow-hidden"-->
    <NavLinks v-if="isOpen" />
  </div>
</template>

<style scoped>
button span {
  border-radius: 9999px;
}
</style>
