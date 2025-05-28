<script setup lang="ts">
// No special logic unless you want to pass in props
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <router-link to="/" class="brand">
        <!-- You can replace this emoji or use a local SVG/photo/logo if you prefer -->
        <img class="logo-img" src="@/assets/robot_cat_engineer_true_silhouette_white.png" alt="logo"/>
        <span class="brand-name">Tom Otero</span>
        <span class="brand-role">Build & Release Engineer</span>
      </router-link>
      <nav class="nav">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/about" exact-active-class="active">About</router-link>
        <router-link to="/projects" exact-active-class="active">Projects</router-link>
        <router-link to="/contact" exact-active-class="active">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: #1976d2;
  color: #fff;
  box-shadow: 0 2px 12px #11234410;
  position: sticky; /* stays at top */
  top: 0;
  z-index: 50;
  padding: 0.5rem 0;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
}
.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.7em;
}
.logo {
  font-size: 1.9em;
  line-height: 1;
}
.brand-name {
  font-size: 1.32rem;
  font-weight: bold;
  letter-spacing: 0.01em;
}
.brand-role {
  font-size: 0.98rem;
  margin-left: 0.8em;
  color: #e3edf7;
  font-weight: 400;
  letter-spacing: 0.00em;
}
.nav {
  display: flex;
  gap: 1.4em;
}
.nav a {
  color: #e3edf7;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.07rem;
  padding: 0.25em 0;
  transition: color 0.15s;
  border-bottom: 2px solid transparent;
}
.nav a:hover,
.nav a.active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
@media (max-width: 700px) {
  .header-content { padding: 0 0.5rem; }
  .brand-name { font-size: 1.1rem; }
  .brand-role { display: none; }
  .nav { gap: 0.9em; }
  .logo { font-size: 1.4em; }
}

.logo-img {
  max-width: 42px;  /* or whatever size you want */
  height: auto;
  display: block;
}

</style>
