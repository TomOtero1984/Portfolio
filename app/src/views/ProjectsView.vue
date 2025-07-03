<script setup lang="ts">
</script>

<template>
  <section class="projects">
    <h2 class="projects-intro">Selected Projects</h2>
    <article class="project-entry">
      <h3>Rockstar Games</h3>
      <p>
        During my time at Rockstar Games, I served as a Build & Release Engineer
        supporting the deployment of internal developer tools and infrastructure used
        across studio sites. My work focused on maintaining and extending TeamCity CI/CD
        pipelines, with responsibilities including build automation, deployment strategy,
        and multi-network artifact distribution. I orchestrated deployments between
        isolated network domains using a combination of rsync and SSH tunneling.
      </p>
      <p>
        I contributed to infrastructure upgrades including replacing legacy Windows Server
        environments with WSL2-powered Linux configurations and configuring
        systemd-managed services to support resilient and restartable deployments. A
        critical aspect of my role was authoring internal deployment and incident response
        documentation, which enabled faster onboarding and more consistent troubleshooting
        across the team.
      </p>
      <p>
        I routinely supported studio-wide releases by coordinating with developers,
        infrastructure teams, and QA, providing hands-on resolution for blocking issues
        and managing deployment readiness across complex build chains.
      </p>
    </article>
    <article class="project-entry">
      <h3>Novus Labs – Cruise GM Contract</h3>
      <p>
        I transitioned into embedded systems test engineering as part of a contract
        supporting Cruise’s autonomous vehicle development. My role focused on validating
        embedded Linux drivers through both automated and hardware-in-the-loop testing.
      </p>
      <p>
        I built Pytest-based frameworks to validate behavior of low-level drivers for
        audio codecs, GPIO, RF modules, and power systems. Depending on the hardware under
        test, I wrote Python wrappers for sysfs and serial interfaces or controlled
        external lab equipment (RF injectors, signal generators, audio playback systems)
        to simulate physical inputs.
      </p>
      <p>
        A standout project involved building a latency-sensitive test harness for
        voice-activated systems using Arduino and Raspberry Pi. This harness captured
        end-to-end timing from an audio trigger to a log or GPIO response, with
        sub-millisecond accuracy ensured through NTP synchronization and a custom
        TCP-style handshake protocol between the lab computer and devices under test.
      </p>
      <p>
        I supported regression and performance testing by managing nightly CI pipelines
        using Jenkins and Buildkite, storing artifacts in JFrog Artifactory, and triaging
        C/C++ driver failures from system logs and behavior traces. My contributions
        helped scale embedded validation across devices and firmware branches.
      </p>
    </article>
    <article class="project-entry">
      <h3>Novus Labs – Mechanical Engineering</h3>
      <p>
        My initial role at Novus Labs focused on mechanical engineering support for
        hardware validation and prototype bring-up. I worked cross-functionally with EE
        and software teams to design and fabricate test fixtures, RF enclosures, and
        environmental setups used in consumer electronics testing.
      </p>
      <p>
        One major effort involved developing a Bluetooth Mesh Hop RF testbed for Alexa
        certification. I designed RF-shielded chambers with managed attenuators and noise
        generators, each housing a smart bulb or device under test. I wrote Bash and
        Python automation to control Telnet-based power switches, SSH-connected
        attenuators, and USB-over-SSH interfaces to reboot and monitor DUTs.
      </p>
      <p>
        I built a Raspberry Pi-based voice simulator using Google TTS, ffmpeg, and sox to
        run scripted Alexa trigger phrases across devices. This setup allowed us to
        evaluate system behavior in synchronized, reproducible conditions.
      </p>
      <p>
        Additionally, I tuned firmware sampling rates and improved timing synchronization
        across ATmega328P microcontrollers used for multi-point sensing. I managed
        documentation, part drawings, and lab test plans, establishing repeatable systems
        for cross-discipline use.
      </p>
    </article>
  </section>
</template>

<style scoped>
.projects {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
}

.projects-intro {
  margin-bottom: 2rem;
  color: var(--accent);
  font-size: 1.1rem;
}

.project-list {
  list-style: none;
  padding: 0;
}

.project-entry {
  margin-bottom: 2.25rem;
  background: var(--gruvbox-bg-light);
  border-radius: 8px;
  padding: 1.2rem 1.6rem;
  box-shadow: var(--box-shadow);
}

.project-entry h3 {
  margin-bottom: 0.8rem;
  color: var(--accent);
  font-size: 1.4rem;
}

.project-entry ul {
  list-style: disc inside;
  padding-left: 1rem;
  color: var(--accent);
}

@media (max-width: 700px) {
  .projects {
    padding: 1rem;
  }

  .project-entry {
    padding: 1rem;
  }
}
</style>
