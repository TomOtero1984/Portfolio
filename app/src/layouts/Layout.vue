<script setup lang="ts">
import { onMounted } from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { applyTheme } from "@/theme/themes";

onMounted(() => {
  applyTheme("gruvbox")
})

</script>

<template>
  <Header/>
  <main>
    <slot/>
  </main>
  <Footer/>
</template>

<style scoped>
Header {
  max-height: 10%;
}

main {
  min-height: 75%;
}

Footer {
  max-height: 10%;
}
</style>