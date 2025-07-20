<script setup>
</script>

<template>
  <nav class="nav-links">
    <router-link to="/" exact-active-class="active">Home</router-link>
    <router-link to="/about" exact-active-class="active">About</router-link>
    <router-link to="/blog" exact-active-class="active">Blog</router-link>
    <router-link to="/projects" exact-active-class="active">Projects</router-link>
    <router-link to="/terminal" exact-active-class="active">Terminal</router-link>
    <router-link to="/debug" exact-active-class="active">Debug</router-link>
    <router-link to="/contact" exact-active-class="active">Contact</router-link>
  </nav>
</template>


<!--.nav-links {-->
<!--display: flex;-->
<!--gap: 1rem;-->
<!--flex-direction: column;-->
<!--}-->

<style scoped>

@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
  }
}

.nav-links {
  grid-column: 2;
  display: flex;
  position: relative;
  width: inherit;
  height: inherit;
  align-items: center;
  padding-right: 10px;
  gap: 1.4em;
}

.nav-links a {
  color: var(--gruvbox-bg);
  font-weight: 500;
  text-decoration: none;
  font-size: 1.07rem;
  padding: 0.25em 0;
  transition: color 0.15s;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--monokai-pink);
  border-bottom: 2px solid var(--monokai-pink);
}

</style>
