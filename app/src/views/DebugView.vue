<script setup lang="ts">
import MiniEngine from "@/components/MiniEngine/MiniEngine.vue";
</script>

<template>
  <div class="debug">
    <div class="debug-header">
      <h1>Debug View</h1>
      <p>
        This page was initially being used to debug the physics engine I strapped to my logo (yes I know it's overkill),
        but I figured I'd leave it up because why not show you all what I'm working on! It also seemed like a place (not
        sure
        if it's a <i>good</i> place, but certainly <i><b>a</b></i> place) to list future plans.
      </p>
    </div>

    <div class="debug-content">
      <MiniEngine/>
    </div>

    <div class="debug-description">
      <h4>
        Next time on Tom-Otero.com:
      </h4>
      <ul>
        <li> Add interactive, drag and drop controls for CatRobot.</li>
        <li> Add interactive, drag and drop controls to terminal? 🤔</li>
        <li> Test new animations: idle, jump, crouch, etc...</li>
        <li> Add more animations to the terminal (this one was AI generated but I agree).</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.debug {
  background-color: black;
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-template-areas:
  "debug-header"
  "debug-content"
  "debug-description";
  grid-template-rows: auto 2fr auto;
}
.debug-header {
  grid-area: debug-header;
  width: 75%;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  text-align: left;
}
.debug-header h1 {
  text-align: center;
}

.debug-content{
  grid-area: debug-content;
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  border: 1px solid var(--monokai-pink);
  box-shadow: var(--monokai-pink) 0 0 20px 20px;
}
MiniEngine {
  width: 100%;
  height: 100%;
}
.debug-description {
  grid-area: debug-description;
  justify-content: center;
  align-items: center;
  text-align: left;
}

</style>
