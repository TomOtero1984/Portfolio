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
    </div>
    <ContentCard class="terminal-content">
      <div id="screen_container">
        <div style="white-space: pre; font: 14px monospace; line-height: 14px">If you see this, try refreshing...</div>
        <canvas style="display: none">If you see this, try refreshing...</canvas>
      </div>
    </ContentCard>
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

#screen_container {
  display: block;
  background: black;
}
</style>