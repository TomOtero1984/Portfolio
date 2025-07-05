<script setup lang="ts">

</script>

<template>
  <section class="content-card">
    <slot/>
  </section>
</template>

<style scoped>
.content-card {
  margin-bottom: 2.25rem;
  background: var(--gruvbox-bg-light);
  border-radius: 8px;
  padding: 1.2rem 1.6rem;
  box-shadow: var(--box-shadow);
}
</style>
