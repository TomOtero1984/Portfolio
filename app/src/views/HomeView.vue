<script setup lang="ts">
import { ref } from 'vue'
import ExplodingText from '@/components/animations/ExplodingText.vue'
import ImaginationText from '@/components/animations/ImaginationText.vue'
import ContentCard from "@/components/ContentCard.vue";
import FloatingMarkdown from '@/components/FloatingMarkdown.vue'

const showMarkdown = ref(false)

const markdownURL = "https://raw.githubusercontent.com/TomOtero1984/ConC.GPT/refs/heads/main/docs/conc/concgpt_project_summary.txt"
</script>

<template>
  <section class="home">
    <div class="home-header">
      <h1 class="hm-hdr-title">
        <ExplodingText>Tom Otero</ExplodingText>
      </h1>
      <img class="hm-hdr-headshot" style="align-content: center" src="../assets/headshot.png" alt="Tom Otero headshot"/>
      <h2 class="hm-hdr-subtitle" style="text-align: center">
        <ExplodingText>Software</ExplodingText>
        •
        <ExplodingText>Mechanical</ExplodingText>
        •
        <ExplodingText>Embedded</ExplodingText>
      </h2>
      <h3 class="hm-hdr-subtitle2" style="text-align: center">
        <ExplodingText>E N G I N E E R</ExplodingText>
      </h3>
    </div>
    <ContentCard class="home-content">
      <h4 class="hc-greeting" style="padding-left: 4rem">Hello and welcome!</h4>
      <p class="hc-intro">
        As a
        <ImaginationText>Software Engineer</ImaginationText>
        with a diverse technical background, I bring a unique
        perspective to the conversation.
        <br><br>
        Educated in Mechanical Engineering, my career has spanned machine design, embedded Linux software testing, and
        building CI/CD pipelines for databases, web applications, and more.
        <br><br>
        Having designed solutions and shipped products across such a wide range of domains, I’ve honed a systematic,
        creative, and domain-agnostic approach to problem solving.
        <br><br>
        <strong>The roles I am best suited for value
          <i class="hc-intro-flmd" @click="showMarkdown=true">first-principles thinking, architectural problem
            solving</i>, and teams
          that embrace diversity, adaptability, and curiosity.
        </strong>
        <FloatingMarkdown :url="markdownURL" :visible="showMarkdown" @close="showMarkdown = false"/>
      </p>
      <div class="hc-highlights">
        <h3 class="hc-quoted-title">
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
      <blockquote class="hc-motivational-quote" style="text-align: left; justify-content: center">
        <h3>”__repr__ is love. __getitem__ is life.”</h3>
        <p style="text-align: left; padding-left: 4rem;">——ChatGPT</p>
        <p style="padding-left: 8rem;">...after I compared TypeScript to Python</p>
      </blockquote>
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
    "home-content";
  gap: 1rem;
  justify-content: center;
}

.home-header {
  grid-area: home-header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hm-hdr-title {
  font-size: 5rem;
  margin: 5px;
}

.hm-hdr-headshot {
  display: flex;
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
  background: var(--bg);
  animation: BIGphoto 1s ease-in-out infinite alternate;
}

.hm-hdr-subtitle {
  padding: 0;
  margin: 5px;
}

.hm-hdr-subtitle2 {
  padding: 0;
  margin: 5px;
}

.home-content {
  grid-area: home-content;
  justify-content: center;
  text-align: left;
  align-items: center;
  display: grid;
  grid-template-areas:
    "hc-greeting"
    "hc-intro"
    "hc-highlights"
    "hc-motivation-quote";
  gap: 1rem;
}

.hc-greeting {
  grid-area: hc-greeting;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
}

.hc-intro {
  grid-area: hc-intro;
  padding-top: 0;
  margin-top: 0;
}

.hc-intro-flmd {
  color: var(--monokai-purple);
  transition: color 0.2s ease;
}

.hc-intro-flmd:hover {
  color: var(--monokai-green);
  cursor: pointer;
}

.hc-motivational-quote {
  grid-area: hc-motivation-quote;
  display: grid;
  grid-template-rows: auto auto auto;
  text-align: left;
  font-family: "TerminessNerdFont-Regular", Arial, sans-serif;
  margin: 0;
  gap: 0;
  padding: 0;
}

.hc-motivational-quote h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
}

.hc-motivational-quote p {
  font-size: 0.8rem;
  margin: 0;
}

.hc-highlights {
  grid-area: hc-highlights;
  display: grid;
  grid-template-rows: auto auto auto;
  text-align: left;
  font-family: "TerminessNerdFont-Regular", Arial, sans-serif;
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
