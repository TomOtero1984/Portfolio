<script setup lang="ts">
import { ref } from 'vue'
import MiniEngine from "@/components/MiniEngine/MiniEngine.vue";
import NavLinks from "@/components/NavLinks.vue";

const isOpen = ref(false);
const toggleMenu = () => isOpen.value = !isOpen.value;
</script>

<template>
  <header class="navbar">
    <MiniEngine/>
    <!-- Desktop Nav -->
    <div class="desktop-nav">
      <NavLinks/>
    </div>

    <!-- Hamburger -->
    <button class="hamburger" @click="toggleMenu">☰</button>

    <!-- Mobile Dropdown -->
    <div v-if="isOpen" class="mobile-nav">
      <NavLinks/>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  display: grid;
  top: 0;
  height: 64px;
  width: 100%;
  padding: 0 0;
  align-items: center;
  background: var(--accent);
  color: var(--gruvbox-bg-light);
  box-shadow: 0 2px 10px black;
  grid-template-columns: minmax(100px, 1fr) auto;
  gap: 1em;
  z-index: 50;
}
.nav-shadow {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 10px;
  background: var(--monokai-pink);
  filter: blur(8px);
  z-index: 0;
}


.desktop-nav {
  display: none;
}
.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--accent);
  color: var(--gruvbox-bg-light);
  box-shadow:
    0 8px 10px -2px var(--monokai-pink),
    0 -2px 10px 2px var(--monokai-pink);
  padding: 1rem;
  z-index: 30;
}

/* Show desktop nav on large screens */
@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  .hamburger,
  .mobile-nav {
    display: none;
  }
}


.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
}


MiniEngine {
  grid-column: 1;
  width: 100%;
  height: 100%;
  position: static;
  display: inline-flex;
  justify-content: center;
  align-items: center;

}


@media (max-width: 700px) {
  .header-content {
    padding: 0 0.5rem;
  }

  .nav {
    gap: 0.9em;
  }
}

</style>
