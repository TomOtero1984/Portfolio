<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
</script>
<template>
  <div id="app">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>
<style scoped>
Layout {
  height: 100%;
}
#app {
  height: 100vh;
}
</style>

