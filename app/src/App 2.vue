<template>
  <div id="app">
    <HomeView />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HomeView from '@/views/HomeView.vue'  // Assuming HomeView is in the views directory

export default defineComponent( {
  name: 'App',
  components: {
    HomeView
  }
} )

</script>