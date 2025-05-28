<template>
  <footer class="main-footer">
    <div class="footer-content">
      <p>&copy; 2025 Tom Otero's Portfolio. All rights reserved.</p>
      <ul class="footer-links">
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent( {
  name: 'Footer',
  components: {}
} );
</script>

<style scoped lang="scss">
.main-footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 2rem 0;

  .footer-links {
    list-style: none;
    padding: 0;
    display: inline-flex;
    gap: 1.5rem;
    margin: 1rem 0 0 0;

    a {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>