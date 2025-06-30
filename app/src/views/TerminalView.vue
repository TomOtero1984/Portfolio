<script setup lang="ts">
import V86 from "../v86/build/libv86.mjs";
window.onload = function () {
  var emulator = new V86({
    wasm_path: "../v86/build/v86.wasm",
    memory_size: 512 * 1024 * 1024,
    vga_memory_size: 8 * 1024 * 1024,
    screen_container: document.getElementById("screen_container"),
    bios: {url: "../v86/bios/seabios.bin"},
    vga_bios: {url: "../v86/bios/vgabios.bin"},
    cdrom: {url: "../../images/linux4/linux4.iso"},
    filesystem: {
      baseurl: "../../images/linux4",
      basefs: "../../images/linux4/fs.json",
    },
    autostart: true,
    cmdline: "rw root=host9p rootfstype=9p rootflags=trans=virtio,cache=loose modules=virtio_pci tsc=reliable",
  });
};
</script>
<template>
    <div id="screen_container">
      <div style="white-space: pre; font: 14px monospace; line-height: 14px">If you see this, try refreshing...</div>
      <canvas style="display: none">If you see this, try refreshing...</canvas>
    </div>
</template>

<style scoped>
#screen_container {
  display: block;
  background: black;
}
</style>