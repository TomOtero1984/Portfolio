<script setup lang="ts">

</script>

<template>
  <section class="projects-summary" id="projects">
    <h2>Selected Projects</h2>
    <ul>
      <li>
        <strong>Rockstar Games</strong>: Revamped multi-platform CI/CD with TeamCity, Docker; enabled rapid, reliable asset delivery for Windows & Linux.
      </li>
      <li>
        <strong>Cruise/Novus Labs</strong>: Automated embedded Linux build/test pipelines with Jenkins and Buildkite.
      </li>
      <li>
        <strong>Canonical</strong>: Docker/K8s orchestration for open-source CI/CD, driving “build-on-push, deploy-on-merge” workflow.
      </li>
      <li>
        <strong>EA & Game Studios</strong>: Migrated large-scale Windows/Xbox/PlayStation build farms, accelerated delivery cycles.
      </li>
    </ul>
    <router-link to="/projects" class="see-more">See all Projects →</router-link>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.projects-summary {
  /* Your styles here */
}
</style>