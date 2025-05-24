<template>
  <div class="linkedin-login">
    <button
      :disabled="isLoading"
      @click="initiateLogin"
    >
      {{ isLoading ? 'Loading...' : 'Login with LinkedIn' }}
    </button>
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LinkedInService } from "@/services/LinkedInServce"

export default defineComponent( {
  name: 'LinkedInLogin',
  data() {
    return {
      isLoading: false,
      error: ''
    }
  },
  methods: {
    initiateLogin() {
      try {
        this.isLoading = true
        this.error = ''
        const authUrl = LinkedInService.getAuthUrl()
        window.location.href = authUrl
      } catch (err) {
        this.error = 'Failed to initialize LinkedIn Login'
        console.error( err )
      } finally {
        this.isLoading = false
      }
    }
  }
} )
</script>

<style scoped>
.linkedin-login {
  margin: 20px 0;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>