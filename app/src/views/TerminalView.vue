<script setup lang="ts">
import { ref, onMounted } from 'vue'

import V86 from "@/assets/v86/build/libv86.mjs";


// These resolve to strings like `/assets/v86/build/v86-abc123.wasm`
import wasmURL from "@/assets/v86/build/v86.wasm?url";
import biosURL from "@/assets/v86/bios/seabios.bin?url";
import vgaBiosURL from "@/assets/v86/bios/vgabios.bin?url";
import cdromURL from "@/assets/v86/image/linux4/linux4.iso?url";
import basefsURL from "@/assets/v86/image/linux4/fs.json?url";

onMounted(() => {
  console.log("mounted");
  var emulator = new V86({
    wasm_path: wasmURL,
    memory_size: 512 * 1024 * 1024,
    vga_memory_size: 8 * 1024 * 1024,
    screen_container: document.getElementById("screen_container"),
    bios: { url: biosURL },
    vga_bios: { url: vgaBiosURL },
    cdrom: { url: cdromURL },
    filesystem: {
      baseurl: basefsURL.replace(/fs\.json$/, ""), // removes fs.json if needed
      basefs: basefsURL,
    },
    autostart: true,
    cmdline: "rw root=host9p rootfstype=9p rootflags=trans=virtio,cache=loose modules=virtio_pci tsc=reliable",
  });
});

</script>
<template>
  <section class="terminal">
    <div id="screen_container">
      <div style="white-space: pre; font: 14px monospace; line-height: 14px">If you see this, try refreshing...</div>
      <canvas style="display: none">If you see this, try refreshing...</canvas>
    </div>
  </section>
</template>

<style scoped>
#screen_container {
  display: block;
  background: black;
}
</style>