<script setup lang="ts">
import CatRobot from "@/components/CatRobot.vue";

</script>

<template>
  <header class="site-header">
    <CatRobot class="cat-robot-wrapper" alt="cat robot logo"/>
    <nav class="nav">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/about" exact-active-class="active">About</router-link>
      <router-link to="/projects" exact-active-class="active">Projects</router-link>
      <router-link to="/contact" exact-active-class="active">Contact</router-link>
      <router-link to="/terminal" exact-active-class="active">Terminal</router-link>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  display: grid;
  top: 0;
  height: 64px;
  width: 100%;
  padding: 0 0;
  z-index: 50;
  align-items: center;
  background: var(--accent);
  color: var(--gruvbox-bg-light);
  box-shadow: 0 2px 10px black;
  grid-template-columns: minmax(100px, 1fr) auto;
  gap: 1em;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
}


.nav {
  grid-column: 2;
  display: flex;
  position: relative;
  width: inherit;
  height: inherit;
  align-items: center;
  padding-right: 10px;
  gap: 1.4em;
}

.nav a {
  color: var(--gruvbox-bg);
  font-weight: 500;
  text-decoration: none;
  font-size: 1.07rem;
  padding: 0.25em 0;
  transition: color 0.15s;
  border-bottom: 2px solid transparent;
}

.nav a:hover,
.nav a.active {
  color: var(--monokai-pink);
  border-bottom: 2px solid var(--monokai-pink);
}
.cat-robot-wrapper {
  grid-column: 1;
  display: flex;
  position: relative;
  width: inherit;
  height: inherit;
  align-items: center;
  outline: #1e1e1e dashed;
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
