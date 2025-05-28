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
        src="https://avatars.githubusercontent.com/u/your-github-id"
        alt="Tom Otero headshot"
      />
      <section class="about-intro">
        <p>
          Hi! I'm <strong>Tom Otero</strong>, a Build & Release Engineer based in Brooklyn, NY. I’m passionate about automating developer workflows, scaling CI/CD infrastructure, and improving engineering productivity across diverse teams and industries.
        </p>
        <p>
          My experience spans fintech, gaming, and open source. At Rockstar Games, I manage asset-driven CI/CD pipelines for both Windows and Linux, lead infrastructure upgrades, transform legacy processes into reusable automation, and champion containerization with Docker for reliable deployments. I collaborate closely with QA, developers, and release managers to deliver stable builds quickly and efficiently.
        </p>
        <p>
          Previously, I worked at Novus Labs (contracted to Cruise), where I built automated pipelines in Jenkins and Buildkite, developed Python test automation for embedded Linux systems, and maintained artifact management using JFrog Artifactory. Across every environment, I focus on reproducibility, testability, and enabling teams to ship with confidence.
        </p>
        <p>
          I’m passionate about developer experience, CI/CD best practices, and helping teams modernize their workflows—whether for games, cloud-native services, or enterprise apps.
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