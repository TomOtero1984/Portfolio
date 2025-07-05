<script setup lang="ts">
import ExplodingText from '@/components/animations/ExplodingText.vue'
import ImaginationText from '@/components/animations/ImaginationText.vue'
import ContentCard from "@/components/ContentCard.vue";
</script>

<template>
  <section class="home">
    <div class="home-header">
      <h1 class="home-title">
        <ExplodingText>Tom Otero</ExplodingText>
      </h1>
      <img class="home-headshot" style="align-content: center" src="../assets/headshot.png" alt="Tom Otero headshot"/>
      <h2 class="home-subtitle" style="text-align: center">Software • Mechanical • Embedded</h2>
      <h3 class="home-subtitle2" style="text-align: center"> E N G I N E E R</h3>
    </div>
    <ContentCard>
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
    </ContentCard>
  </section>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  display: grid;
  grid-template-areas:
    "home-header"
    "home-body"
    "home-links";
  gap: 1rem;
}

.home-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.home-title {
  font-size: 5rem;
  margin: 5px;
}

.home-headshot {
  display: flex;
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
  background: var(--bg);
}
.home-subtitle {
  padding: 0;
  margin: 5px ;
}
.home-subtitle2 {
  padding: 0;
  margin: 5px ;
}
</style>
