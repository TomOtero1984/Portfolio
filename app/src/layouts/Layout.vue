<script setup lang="ts">
import { onMounted } from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { applyTheme } from "@/theme/themes";

onMounted(() => {
  applyTheme("gruvbox")
})

</script>

<template class="layout">
  <Header class="header"/>
  <main class="main">
    <slot/>
  </main>
  <Footer class="footer"/>
</template>

<style scoped>
.layout {
  grid-template-areas:
  "header"
  "main"
  "footer";

;
}
Header {
  max-height: 10%;
}

main {
  min-height: 80%;
}

Footer {
  max-height: 10%;
}
</style>
