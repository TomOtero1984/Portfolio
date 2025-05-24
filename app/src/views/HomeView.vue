<template>
  <div class="home">
    <h1>Welcome to Your Portfolio</h1>
    <LinkedInLogin />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LinkedInLogin from '@/components/LinkedInLogin.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    LinkedInLogin
  }
})
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
</style>