<script setup lang="ts">
import { ref } from 'vue'
import MiniEngine from "@/components/MiniEngine/MiniEngine.vue";
import NavLinks from "@/components/NavLinks.vue";
import TerminalMenu from "@/components/TerminalMenu.vue";

const visible = ref(false);
function menuButton (){
  visible.value = !visible.value;
}

</script>

<template>
  <header class="navbar">
    <MiniEngine/>
    <button @click=menuButton() class="menu-button">MENU</button>
    <TerminalMenu :visible=visible @close="visible = false"/> />
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
  grid-template-columns: minmax(100px, 1fr) auto auto;
  gap: 1em;
  z-index: 50;
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

TerminalMenu {
  grid-column: 2;
}

.menu-button {
  grid-column: 3;
  position: relative;
  margin-right: 2rem;
  width: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--gruvbox-green);
  background: var(--monokai-pink);
  border: 4px outset var(--monokai-pink);
  font-family: "TerminessNerdFont-Regular", "Courier New", Courier, monospace;;
  font-size: 1.2rem;
  font-weight: bold;
}
.menu-button:active {
  color: var(--gruvbox-bg);
  background: var(--monokai-pink);
  border: 4px inset var(--monokai-purple);
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






.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
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

<!--/* Show desktop nav on large screens */-->
<!--@media (min-width: 768px) {-->
<!--.desktop-nav {-->
<!--display: block;-->
<!--}-->
<!--.menu-button,-->
<!--.mobile-nav {-->
<!--display: none;-->
<!--}-->
<!--}-->

<!--.mobile-nav {-->
<!--position: absolute;-->
<!--top: 100%;-->
<!--left: 0;-->
<!--right: 0;-->
<!--background: var(&#45;&#45;accent);-->
<!--color: var(&#45;&#45;gruvbox-bg-light);-->
<!--box-shadow: 0 4px 10px -4px var(&#45;&#45;monokai-pink);-->
<!--padding: 1rem;-->
<!--z-index: 30;-->
<!--}-->
