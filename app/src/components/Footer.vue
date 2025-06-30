<script setup lang="ts">
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        &copy; {{ new Date().getFullYear() }} Tom Otero
      </div>
      <div class="footer-links">
        <a href="mailto:tomotero1984@gmail.com" title="Email" aria-label="Email">
          <span class="footer-icon">📧</span>
        </a>
        <a href="https://linkedin.com/in/tomotero1984" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
          <span class="footer-icon">💼</span>
        </a>
        <a href="tel:+15039270633" title="Phone" aria-label="Phone">
          <span class="footer-icon">📱</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--accent);
  color: var(--bg);
  padding: 1.2em 0 1em 0;
  font-size: 1rem;
  box-shadow: 0 -2px 15px black;
  margin-top: 4em;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
}
.footer-left {
  font-size: 1.02em;
  letter-spacing: 0.01em;
  color: var(--bg);
}
.footer-links {
  display: flex;
  gap: 1em;
}
.footer-links a {
  color: #f6f8fa;
  background: #2258ae16;
  border-radius: 7px;
  padding: 0.27em 0.44em;
  transition: background 0.14s, color 0.14s;
  text-decoration: none;
  font-size: 1.18em;
  display: flex;
  align-items: center;
}
.footer-links a:hover {
  background: var(--text);
  color: #fff;
  box-shadow: 0 2px 8px #1a509025;
}
@media (max-width: 650px) {
  .footer-content {
    padding: 0 0.6rem;
    flex-direction: column;
    gap: 0.55em;
  }
  .footer-left {
    font-size: 0.97rem;
  }
}
</style>
