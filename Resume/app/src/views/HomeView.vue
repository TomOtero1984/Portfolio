<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Welcome>
      <template #default>
        <div>
          <h1>Tom Otero</h1>
          <h6>Software Engineer</h6>
        </div>
      </template>
    </Welcome>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
