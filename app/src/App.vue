<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
</script>
<template>
  <div id="app">
    <Layout>
      <router-view class="content"/>
    </Layout>
  </div>
</template>
<style scoped>
Layout {
  min-height: 100%;
}
.content {
  min-height: 100vh;
}
</style>

