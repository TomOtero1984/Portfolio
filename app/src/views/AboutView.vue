<script setup lang="ts">
// If you have a profile photo, import it here, e.g.:
// import profilePic from '@/assets/profile.jpg'
</script>

<template>
  <div class="about">
    <h1>About Me</h1>
    <div class="about-hero">
      <!-- Replace with local profile photo if you like -->
      <img
        class="about-photo"
        src="../assets/headshot.png"
        alt="Tom Otero headshot"
      />
      <section class="about-intro">
        <p>
          Hi! I'm <strong>Tom Otero</strong>, a Build & Release Engineer with a background in embedded systems and mechanical engineering. I specialize in automating developer workflows, scaling CI/CD infrastructure, and supporting teams across gaming, embedded hardware, and Linux-based systems. Based in Brooklyn, NY, I’ve worked in both high-velocity environments and deeply technical domains, always focused on making builds reproducible, deployments reliable, and engineering smoother for everyone involved.
        </p>

        <p>
          At <strong>Rockstar Games</strong>, I maintain and extend TeamCity-driven CI/CD pipelines supporting a broad set of internal tools and developer workflows. My work includes deploying assets across isolated networks via SSH and rsync, managing Perforce/Git integrations, and supporting Windows and Linux infrastructure. I’ve replaced legacy servers, migrated systems to WSL2-backed environments, and documented build and release processes to make onboarding and incident resolution easier for the whole team. When things go sideways, I coordinate with developers, QA, project leads, and NOC to keep builds moving and unblock teams during high-stakes releases.
        </p>

        <p>
          Before that, I worked at <strong>Novus Labs</strong>, first as a mechanical engineer, then as an embedded systems test engineer on the Cruise GM contract. My mechanical work included designing RF testbeds for Alexa Bluetooth Mesh certification and building firmware-synchronized microcontroller systems using ATmega328P. I wrote automation scripts in Python and Bash to control USB-over-SSH devices, Telnet power switches, and voice-triggered test scenarios using sox and Google TTS. Later, I transitioned to embedded Linux validation—developing Pytest frameworks for low-level drivers, building latency-sensitive test harnesses with Raspberry Pi and Arduino, and managing nightly CI pipelines using Jenkins and Buildkite. I delivered reproducible test logs, regression data, and system-level benchmarks that helped firmware teams move faster and break less.
        </p>

        <p>
          Across every role, my focus is on improving reliability, maintainability, and team productivity—whether that means refactoring flaky pipelines, automating a testbed, or helping devs understand their build failures. I work best when I can be hands-on with both the system and the people using it, bridging gaps between engineering layers to keep teams moving.
        </p>

        <p>
          I’m currently open to new roles in build systems, infrastructure engineering, or embedded toolchains—especially in industries where reliability and iteration speed both matter. If you're solving interesting problems at scale and need someone to help your developers move faster without breaking things, I’d love to talk.
        </p>
        </p>
        <ul class="about-links">
          <li>
            <a href="mailto:tomotero1984@gmail.com" target="_blank" rel="noopener">
              📧 Email
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tomotero1984" target="_blank" rel="noopener">
              💼 LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fcfcfc;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.about-hero {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
}
.about-photo {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e2e2e2;
  background: #fff;
}
.about-intro {
  flex: 1 1 300px;
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