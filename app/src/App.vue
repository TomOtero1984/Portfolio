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
=======
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

