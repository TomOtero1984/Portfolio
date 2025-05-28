<template>
  <div id="app">
    <Header />
    <HomeView />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import HomeView from '@/views/HomeView.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent( {
  name: 'App',
  components: {
    Header,
    HomeView,
    Footer
  }
} )

</script>