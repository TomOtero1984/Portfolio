<script setup lang="ts">
import { ref } from "vue";
import ContentCard from "@/components/ContentCard.vue";
import MarkdownPlayground from "@/components/MarkdownPlayground.vue";

const initial = `# ConC-ish

I was going to work on this but instead I decided to bake the conc_cli app into my terminal page

Go check it out!

Try something like:
conc_cli search-by-word "apple" "natural"

and see the ConC representation of the word apple 🍎

`;
const mdText = ref(initial);
</script>

<template>
  <div class="conc">
   <h1 class="title">C    o    n    C</h1>
    <p>Conversation Compression, aka ConC, is a language born from the completely rational urge to shove
      the entirety of binutils source code into ChatGPT's context window.</p>
    <br>
    <ContentCard>
      <p>
        Something kind of like a DSL for ChatGPT because I wasn't able to fit
        everything in to the
        <code>Custom Instructions</code> box.
      </p>
      <p>
        Below are the instructions and syntax that define ConC-ish.
        Additionally, GPT-5 mini, I have context information just for you!
      </p>
    </ContentCard>
    <ContentCard>
      <h2>Syntax</h2>
      <MarkdownPlayground :text="mdText" />
    </ContentCard>
  </div>
</template>

<style scoped>
.conc {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2.5rem 2rem;
  border-radius: 12px;
}
.title {
  text-align: center;
  font-size: 64px;
  /*box-shadow: 0 0 20px 5px var(--monokai-pink);
  border-radius: 12px*/
}
</style>
