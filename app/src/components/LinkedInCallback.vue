<template>
  <div class="callback-handler">
    <div v-if="isLoading">
      Processing login...
    </div>
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LinkedInService } from "@/services/LinkedInServce"

export default defineComponent( {
  name: 'LinkedInCallback',
  data() {
    return {
      isLoading: true,
      error: ''
    }
  },
  async created() {
    try {
      const urlParams = new URLSearchParams( window.location.search )
      const code = urlParams.get( 'code' )
      // const state = urlParams.get( 'state' )
      const error = urlParams.get( 'error' )

      if (error) {
        throw new Error( `LinkedIn login error: ${error}` )
      }
      if (!code) {
        throw new Error( 'No authorization code received' )
      }
      const accessToken = await LinkedInService.exchangeCodeForToken( code )
      const _profile = await LinkedInService.getProfile( accessToken )

      // Here you can:
      // 1. Store the profile in your state management (Vuex/Pinia)
      // 2. Store the token securely
      // 3. Redirect to the appropriate page
      // For now, let's just redirect to home with the profile
      this.$router.push( {
        path: '/',
        query: {loginSuccess: 'true'}
      } )
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'An unknown error occurred'
      console.error( 'LinkedIn callback error:', err )
    } finally {
      this.isLoading = false
    }
  }
} )
</script>

<style scoped>
.callback-handler {
  padding: 20px;
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>