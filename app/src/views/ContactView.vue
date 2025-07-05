<script setup lang="ts">
import ContentCard from "@/components/ContentCard.vue";
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>
    <ContentCard>
      <p class="contact-intro">
        If you'd like to connect about engineering roles, automation, or collaborating on
        build infrastructure projects, feel free to reach out!
      </p>
      <div class="contact-details">
        <div class="contact-row">
          <span class="contact-label">Email:</span>
          <a href="mailto:tomotero1984@gmail.com" class="link"
          >tomotero1984@gmail.com</a
          >
        </div>
        <div class="contact-row">
          <span class="contact-label">Phone:</span>
          <a href="tel:+15039270633" class="link">(503) 927-0633</a>
        </div>
        <div class="contact-row">
          <span class="contact-label">LinkedIn:</span>
          <a
            href="https://linkedin.com/in/tomotero1984"
            class="link"
            target="_blank"
            rel="noopener"
          >linkedin.com/in/tomotero1984</a
          >
        </div>
        <div class="contact-row">
          <span class="contact-label">Location:</span>
          <span>Brooklyn, NY</span>
        </div>
      </div>
    </ContentCard>
  </div>
</template>

<style scoped>
.contact {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2.5rem 2rem;
  border-radius: 12px;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: var(--accent);
}

.contact-intro {
  margin-bottom: 2.5rem;
  color: var(--text);
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
  color: var(--text);
}

.contact-link {
  color: var(--monokai-blue);
  text-decoration: none;
  transition: color 0.22s;
}

.contact-link:hover {
  color: var(--monokai-pink);
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
