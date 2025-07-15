<script setup lang="ts">
import { ref } from 'vue'

import ImaginationText from '@/components/animations/ImaginationText.vue'
import ContentCard from "@/components/ContentCard.vue";

const hover = ref(false);
</script>

<template>
  <div class="about">
    <h1 class="about-title">About Me</h1>
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
          unending curiosity of the world around me; and, the inevitable rabbit holes that
          form when asking "how does this work?", "I wonder what would happen?", and

          "wouldn't it be cool if we could..."
        </p>
        <div style="text-align: center; justify-content: center;">
        <a href="https://github.com/TomOtero1984/ConC.GPT" >
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
          If someone were to track my trajectory starting from my first classes at Santa Fe College, I do not think
          they would've expected a 3.0-ish Fine Arts, Music major to end up working on embedded systems for a company
          developing a self driving car.
          <br>
          However, to the keen observer, the step from studying patterns in music theory to the architectural patterns common
          in software development is really not so big. I have always been fascinated with understanding how things work,
          then applying that knowledge to create something new. Enrolling in the Mechanical Engineering program at Portland
          State University was the natural progression for a music major who realized they were actually pretty good at math
          and science, once they started to see the patterns.
        </p>
        <h5>Novus Labs & Cruise GM</h5>
        <p>
          I graduated Portland State University with a Bachelor of Science in Mechanical Engineering in 2019. My upper
          division course focused on Robotics and Control Theory. While, of course, I learned quite a few things over the
          four years I spent at PSU, one particular insight began to emerge: I love coding!
          <br>
          At this time I was employed at Novus Labs as a Mechanical Engineer, and while my job responsibilities we're initially
          focused on machine design and mechanical testing, I began to pursue tasks to improve my understanding of
          software engineering. Initially, these tasks were to run scripts other people made, but as my aptitude
          for coding became more apparent, I started to recieve assignments to refactor legacy code, contribute to
          established software test frameworks, and eventually create new automation frameworks.
          <br>
          When Cruise GM contacted Novus Labs for contractors, I was one of the first candidates selected. My title with Cruise
          was an Embedded Systems Software Test Engineer. Despite this role being a departure from my education and direct title
          within Novus Labs, my managers were confident in my ability to learn the new systems and technology, then
          deliver high quality software. After the initial 90 day evaluation period, Cruise expressed such high levels of
          satisfaction that they not only extended their contract but expanded with the request for
          additional contracted employees.
        </p>
        <h5>The Pandemic</h5>
        <p>
          Unfortunately, this story takes a turn, as did many during the pandemic. The strain during those long years eventually
          lead to the decision that I needed to move closer to family, back to the East Coast. I started to apply for jobs and
          was lucky enough to be hired by Rockstar Games!
        </p>
        <h5>Rockstar Games</h5>
        <p>
          Rockstar Games! How incredible to contribute to the release of GTA 6!
          <br>
          But, beyond the excitement of working for a major title release like that, this job was a major step forward in
          my career. A decisive step to being a Software Engineer.
          While most of my job responsibilities at Rockstar resembled some form of my prior work experience, this position
          brought it all to a new scale.
        </p>
        <p>
          Rockstar hired me for a Software Engineer Support role on the Build and Release Applications team. My responsibilities
          were to ensure reliable deployments of various projects across a multi-stage environment; or in English, I published
          their website for internal development and staging servers and to outward facing production servers.
          <br>
          This role introduced me to one of the most extensive codebases I'd ever seen. Legacy code dating back more than
          a decade, mixed with modern frameworks, design patterns, and technologies. Making sense of it all was quite the challenge,
          but not only did I meet the challenge I exceeded it! In short time, I was promoted to an Associate Build & Release Engineer.
          <br>
          During my employment with Rockstar Games, I made contributions to every step of the deployment pipeline (including documentation).
          </p>

        <h5>Brief list of work examples:</h5>
        <ul>
            <li>Configured an Akamai CDN, then wrote custom build tasks and helper function to migrate legacy projects to use
              modern content delivery systems.</li>
            <li>Configured Windows and Linux VMs to support a cross platform OpenSSH network spanning isolated domains.</li>
            <li>Wrote encryption scripts to secure sensitive information.</li>
            <li>Wrote services for Windows and Linux to automatically restore necessary programs in the event that the
              server needs to be reloaded.</li>
            <li>Migrated Python modules to pypi.</li>
            <li>Migrated web apps to Docker</li>
          </ul>
        <br><br>
        <p>
          Life is full of unexpected twists and turns; and, at times hard decisions.
          <br><br>
          Recently, I had to choose between my career and family. That was not a hard decision.
          <br><br>
          While it is unfortunate that Rockstar Games denied my request to work from the San Diego studio, I am grateful
          for the time I spent with them in NYC. I am grateful to support the health of my family.
        </p>
        <h3>And now...</h3>
        <h2 style="text-align: center; color: var(--gruvbox-green);">
          Back to the West Coast! Los Angeles, California!
        </h2>
        <br>
        <p>

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
</style>
