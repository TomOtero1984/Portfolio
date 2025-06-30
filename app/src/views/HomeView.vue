<script setup lang="ts">
</script>

<template>
  <section class="home">
    <div class="home-content">
      <h1>Hey, I’m Tom Otero</h1>
      <h2>Software Engineer • Embedded Systems • Build & Release</h2>

      <p class="intro">
        I build systems that make other systems easier to build. Whether
        it’s embedded Linux, CI/CD pipelines, or symbolic compression
        for LLMs, I like wiring things up, tearing them down, and
        automating the boring parts.
      </p>

      <div class="quick-highlights">
        <h3 class="quoted-title">
          “What Is and What Should Never Be”
          <span class="cite">— Led Zeppelin</span>
        </h3>
        <p class="section-subtle">
          Or: what I actually do with my time.
        </p>
        <ul>
          <li>
            Design testbeds for voice/RF hardware using Raspberry Pi
            and Python.
          </li>
          <li>
            Automate multi-platform releases with TeamCity, MSBuild,
            and Perforce.
          </li>
          <li>
            Write symbolic compression tools in Rust (because why
            not).
          </li>
          <li>
            Build containers that talk to each other better than
            most teams do.
          </li>
        </ul>
      </div>

      <p class="home-actions">
        <router-link class="cta-link" to="/projects"
        >Explore My Projects
        </router-link
        >
        <span>or</span>
        <router-link class="cta-link" to="/contact"
        >Say Hello
        </router-link
        >
      </p>
    </div>
  </section>
</template>

<style scoped>

</style>
