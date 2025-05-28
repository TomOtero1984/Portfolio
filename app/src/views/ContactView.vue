<script setup lang="ts">
// If you wish, you can add interactivity, e.g. a contact form or copy-to-clipboard button here.
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>
    <p class="contact-intro">
      If you'd like to connect about engineering roles, automation, or collaborating on build infrastructure projects, feel free to reach out!
    </p>
    <div class="contact-details">
      <div class="contact-row">
        <span class="contact-label">Email:</span>
        <a href="mailto:tomotero1984@gmail.com" class="contact-link">tomotero1984@gmail.com</a>
      </div>
      <div class="contact-row">
        <span class="contact-label">Phone:</span>
        <a href="tel:+15039270633" class="contact-link">(503) 927-0633</a>
      </div>
      <div class="contact-row">
        <span class="contact-label">LinkedIn:</span>
        <a href="https://linkedin.com/in/tomotero1984" class="contact-link" target="_blank" rel="noopener">linkedin.com/in/tomotero1984</a>
      </div>
      <div class="contact-row">
        <span class="contact-label">Location:</span>
        <span>Brooklyn, NY</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2.5rem 2rem;
  background: #f6f8fa;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(30,32,36,0.07);
}
h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #1976d2;
}
.contact-intro {
  margin-bottom: 2.5rem;
  color: #26324a;
  font-size: 1.1rem;
}
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.contact-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
}
.contact-label {
  font-weight: 600;
  min-width: 92px;
  color: #26324a;
}
.contact-link {
  color: #1976d2;
  text-decoration: none;
  transition: color 0.22s;
}
.contact-link:hover {
  color: #0e3a78;
  text-decoration: underline;
}
@media (max-width: 600px) {
  .contact {
    padding: 1.2rem 0.7rem;
  }
  .contact-label {
    min-width: 72px;
  }
}
</style>