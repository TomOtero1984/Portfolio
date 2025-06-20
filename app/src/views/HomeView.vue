<script setup lang="ts">
// Nothing to import here for now!
import PageLayout from "@/components/PageLayout.vue";
</script>

<template>
  <PageLayout>
    <h1>Hi, I’m Tom Otero</h1>
    <h2>Build & Release / Software Engineer</h2>
    <p class="intro">
      I design and automate scalable build, test, and release infrastructure for teams that ship at scale.
      My journey spans embedded systems, hardware automation, CI/CD operation and design, containerization, virtualization, and much much more! Always excited for a new tech challenge whether it's supporting legacy products or designing LLM applications.
    </p>

    <div class="quick-highlights">
      <h3>What I Do:</h3>
      <ul>
        <li>Architect and maintain CI/CD for complex, multi-platform delivery.</li>
        <li>Automate and optimize developer and release workflows.</li>
        <li>Deploy scalable, repeatable systems with Docker, Kubernetes, and cloud-native tools.</li>
        <li>Champion testability, traceability, and continuous improvement.</li>
      </ul>
    </div>

    <p class="home-actions">
      <router-link class="cta-link" to="/projects">See My Projects</router-link>
      <span>or</span>
      <router-link class="cta-link" to="/contact">Contact Me</router-link>
    </p>
  </PageLayout>
</template>


<style scoped>
/* Typography */
h1 {
  font-size: 2.4rem;
  color: #1976d2;
  margin-bottom: 0.4em;
}

h2 {
  font-size: 1.4rem;
  color: #3d4450;
  margin-bottom: 1.3em;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.intro {
  font-size: 1.13rem;
  color: #182430;
  margin-bottom: 2.4em;
}

/* Highlights box */
.quick-highlights {
  text-align: left;
  margin: 0 auto 1.8em auto;
  max-width: 510px;
  background: #f6f8fa;
  border-radius: 10px;
  padding: 1rem 1.3rem;
  box-shadow: 0 0 2px #0001;
}

.quick-highlights h3 {
  margin-bottom: 0.7em;
  color: #1976d2;
  font-size: 1.12rem;
}

.quick-highlights ul {
  margin: 0;
  padding-left: 1.1em;
  color: #26324a;
  font-size: 1rem;
  line-height: 1.7;
}

/* Call to Action */
.home-actions {
  margin-top: 2.5em;
  font-size: 1.1rem;
  color: #26324a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
}

.cta-link {
  color: #1976d2;
  background: #e3edf7;
  border-radius: 8px;
  padding: 0.55em 1.25em;
  margin: 0 0.2em;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.04em;
  box-shadow: 0 1px 4px #1a509020;
  transition: background 0.18s, color 0.18s;
}

.cta-link:hover {
  background: #1976d2;
  color: #fff;
}

/* Responsive tweaks */
@media (max-width: 650px) {
  .home-content {
    padding: 1.2rem 0.7rem;
  }

  .quick-highlights {
    font-size: 0.98rem;
    padding: 0.8rem 0.7rem;
  }
}
</style>
