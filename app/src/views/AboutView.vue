<script setup lang="ts">
import {ref} from 'vue';

import ImaginationText from '@/components/animations/ImaginationText.vue';
import ContentCard from "@/components/ContentCard.vue";

const hover = ref(false);
</script>

<template>
  <div class="about">
    <h1 class="about-title">About Me </h1>
    <div class=about-header>
      <h3 class="about-welcome" style="align-content: center;">
        Hello and welcome to my
        <ImaginationText> About Me </ImaginationText>
        page!
      </h3>
    </div>
    <ContentCard class="about-body">
      <section class="about-intro">
        <p>
          My name is Tom Otero and I am an engineer. While the career path I've chosen
          has specialized in software, my passion for engineering stems from an
          unending curiosity of the world around me, and the inevitable rabbit holes that
          form when asking:
        </p>
        <div style="align-items: center; align-content: center; text-align: center;">
          <p>"how does this work?"</p>
          <p>"I wonder what would happen?"</p>
          <p>"wouldn't it be cool if we could..."</p>
        </div>
        <div style="text-align: center; justify-content: center;">
          <a href="https://github.com/TomOtero1984/ConC.GPT">
            <i style="color: var(--monokai-pink);">
              &#123;&#123;
              <span @mouseover="hover = true" @mouseleave="hover = false">
                  {{ hover ? 'https://github.com/TomOtero1984/ConC.GPT' : 'insert projects here' }}
            </span>
              &#125;&#125;
            </i>
          </a>
        </div>
        <br><br>
        <h3>
          Background
        </h3>
        <p>
          I started college as a Fine Arts student studying music theory and eventually graduated from Portland State
          University
          (2019) with a B.S. in Mechanical Engineering. The jump sounds extreme, but beneath the jargon, sheet music and
          circuitry are both just natural systems of math and patterns. During my upper-division robotics courses, a
          crucial insight emerged: I love coding.
        </p>

        <h4>From Hardware to Software</h4>
        <p>
          At Novus Labs, I started by doing machine design but quickly gravitated toward automation. That aptitude led to a
          contract with Cruise GM as an Embedded Systems Software Test Engineer, working on autonomous vehicles.
        </p>
        <p>
          During the pandemic, I moved to the East Coast and joined Rockstar Games as an Associate Build & Release
          Engineer. I navigated decade-old legacy code, migrated web apps to Docker, configured cross-platform OpenSSH
          networks, and managed reliable deployments for a massive infrastructure leading up to GTA 6.
        </p>
        <p>
          Most recently, I've been contracting at Google via Yoh as a Senior Build and Release Engineer, where I just
          committed the CMake build system for the LiteRT-LM project.
        </p>
        <h3>And now...</h3>
        <p style="text-align: center;">
          Today, you'll find me in Los Angeles, enjoying the sun, designing CI/CD infrastructure, and studying the complex systems that make up this crazy world.
          <br>
          🌊🏝️☀️
        </p>

      </section>
    </ContentCard>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  display: grid;
  grid-template-areas:
    "about-title"
    "about-header"
    "about-body"
    "about-links";
  gap: 1rem;
}

.about-title {
  display: grid;
  grid-area: about-title;
  font-size: 4rem;
  font-weight: lighter;
  text-align: center;
  margin: 0
}

.about-header {
  grid-area: about-header;
  display: flex;
  align-items: center;
}

.about-header {
  grid-area: about-header;
  display: flex;
  align-items: center;
}

.about-photo {
  display: flex;
  align-items: center;
  justify-content: left;
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
  background: var(--bg);
}

.about-welcome {
  display: flex;
  align-items: center;
  padding-left: 1rem;
}

.about-body {
  grid-area: about-body;
}

.about-links {
  list-style: none;
  padding: 0;
  margin-top: 1.25rem;
  display: flex;
  gap: 1.5rem;
}

.about-links a {
  text-decoration: none;
  color: #1976d2;
  font-weight: 500;
  transition: color 0.2s;
}

.about-links a:hover {
  color: #0d47a1;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .about-hero {
    flex-direction: column;
    align-items: center;
  }

  .about-photo {
    margin-bottom: 1rem;
  }
}

p {
  text-indent: 2em;
}
</style>
