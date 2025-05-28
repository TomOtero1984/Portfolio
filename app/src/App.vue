<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
  </div>
</template>
<style scoped>
/* Optional styles */
</style>
