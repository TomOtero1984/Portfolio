<script setup lang="ts">
import { ref, onMounted } from 'vue'

import V86 from "@/assets/v86/build/libv86.mjs";


import wasmURL from "@/assets/v86/build/v86.wasm?url";
import biosURL from "@/assets/v86/bios/seabios.bin?url";
import vgaBiosURL from "@/assets/v86/bios/vgabios.bin?url";
import ContentCard from "@/components/ContentCard.vue";

const bzimageURL = "/bzimage.bin";
const initrdURL = "/initrd";


onMounted(() => {
  console.log("mounted");
  var emulator = new V86({
    wasm_path: wasmURL,
    memory_size: 512 * 1024 * 1024,
    vga_memory_size: 8 * 1024 * 1024,
    screen_container: document.getElementById("screen_container"),
    bios: { url: biosURL },
    vga_bios: { url: vgaBiosURL },

    bzimage: { url: bzimageURL, },
    initrd: { url: initrdURL },
    cmdline: "rw root=/dev/ram init=/init, rdinit=/bin/sh",
    autostart: true,
  });
});

</script>
<template>
  <section class="terminal">
    <div class="terminal-header">
      <h1>Embedded Linux Kernel</h1>
      <p>
        The application below is a fully functional Linux kernel running in the browser. This application is purely
        client-side and does not communicate with any servers. As in, yes! You are currently running an operating system
        entirely in your browser.
      </p>
    </div>
    <!--    <hr>-->
    <!--    <br><br>-->
    <ContentCard class="terminal-content">
      <div id="screen_container">
        <div style="white-space: pre; font: 14px monospace; line-height: 14px">If you see this, try refreshing...</div>
        <canvas style="display: none">If you see this, try refreshing...</canvas>
      </div>
    </ContentCard>
    <!--    <br><br>-->
    <!--    <hr>-->

    <div class="credits">
      <h4 style="padding-bottom: 0; margin-bottom: 0;">Credits:</h4>
      <ul>
        <li>
          This application is made possible by the <a href="https://github.com/copy/v86">V86 emulator</a>, an
          x86 PC emulator and x86-to-wasm JIT, running in the browser.
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.terminal {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    "terminal-header"
    "terminal-content";
}

.terminal-header {
  grid-area: terminal-header;
  max-width: 800px;
  align-content: center;
  justify-content: center;
  text-align: left;
  padding: 10px;
}
.terminal-header h1 {
  text-align: center;
}

.terminal-content {
  grid-area: terminal-content;
  max-width: 800px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  text-align: center;
}

#screen_container {
  display: block;
  background: black;
  align-self: center;
}

hr {
  width: 90%;
  color: var(--gruvbox-green);
  box-shadow: 0 0 10px var(--gruvbox-green);
}
</style>
