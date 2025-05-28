<script setup lang="ts">
// If you want, you can define project data or fetch it from an external source here.
</script>

<template>
  <div class="projects">
    <h1>Selected Projects</h1>
    <p class="projects-intro">
      My work bridges build engineering, CI/CD automation, and reliable delivery for diverse teams across gaming, fintech, and open source. Below are some key projects and achievements from my recent roles.
    </p>

    <ul class="project-list">
      <li class="project-item">
        <h2>Rockstar Games – CI/CD Platform Revamp</h2>
        <ul>
          <li>Managed and modernized cross-platform deployment pipelines for complex asset-driven game builds (Windows & Linux).</li>
          <li>Refactored brittle legacy workflows into reusable, automated processes using TeamCity, Python, and MSBuild.</li>
          <li>Introduced Docker-based containerization to promote developer consistency and scalable, reproducible releases.</li>
          <li>Collaborated with QA, engineering, and release teams to ensure high-velocity, low-defect delivery cycles.</li>
        </ul>
      </li>

      <li class="project-item">
        <h2>Cruise (via Novus Labs) – Embedded Automation & Test Infra</h2>
        <ul>
          <li>Designed Jenkins and Buildkite pipelines to validate custom Linux driver builds for automotive platforms.</li>
          <li>Implemented Python-driven test automation frameworks to enhance reproducibility and test coverage.</li>
          <li>Streamlined binary artifact delivery and storage with JFrog Artifactory, improving traceability and compliance.</li>
        </ul>
      </li>

      <li class="project-item">
        <h2>Canonical – Cloud-Native CI/CD Orchestration</h2>
        <ul>
          <li>Led multi-service CI/CD design for open source and commercial cloud software (Kubernetes, Docker-based microservices).</li>
          <li>Automated end-to-end build, test, and release pipelines driven by best practices (“build-on-push, deploy-on-merge”).</li>
          <li>Improved monitoring and observability for distributed deployments; drove adoption of DevOps culture change across teams.</li>
        </ul>
      </li>

      <li class="project-item">
        <h2>Large Scale Gaming Infrastructure – EA & The Game Company</h2>
        <ul>
          <li>Upgraded and maintained build farms supporting Windows, Xbox, and PlayStation; achieved zero-downtime rollout for migration projects.</li>
          <li>Accelerated release cadence through workflow automation, cross-disciplinary team alignment, and artifact management upgrades.</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.projects {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background: #fafbfc;
  box-shadow: 0 2px 14px rgba(0,0,0,0.06);
}
.projects-intro {
  margin-bottom: 2rem;
  color: #182430;
  font-size: 1.1rem;
}
.project-list {
  list-style: none;
  padding: 0;
}
.project-item {
  margin-bottom: 2.25rem;
  background: #fff;
  border-radius: 8px;
  padding: 1.2rem 1.6rem;
  box-shadow: 0 0 0.5px #0002;
}
.project-item h2 {
  margin-bottom: 0.8rem;
  color: #1976d2;
  font-size: 1.4rem;
}
.project-item ul {
  list-style: disc inside;
  padding-left: 1rem;
  color: #223050;
}
@media (max-width: 700px) {
  .projects {
    padding: 1rem;
  }
  .project-item {
    padding: 1rem;
  }
}
</style>