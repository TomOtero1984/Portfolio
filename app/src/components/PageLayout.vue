<script setup lang="ts">

</script>

<template>
  <section class="wrapper">
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  flex: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 1rem 4rem;
  background: linear-gradient(100deg, #e3edf7 0%, #f6f8fa 80%);
  width: 100%;
  box-sizing: border-box;
}

.content {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 16px;
  background: #fffefd;
  box-shadow: 0 3px 16px rgba(20, 40, 80, 0.11);
  text-align: center;
}

</style>