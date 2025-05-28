<template>
  <header class="main-header">
    <nav class="nav">
      <a href="/" class="logo">SuperCoolLogo</a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent( {
  name: 'Header',
  components: {}
} );
</script>

<style scoped>
@import "@/styles/global.scss";

</style>