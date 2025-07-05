<template>
  <div class="wave-wrapper">
    <span
        v-for="(char, index) in letters"
        :key="index"
        class="wave-letter"
        :style="{animationDelay: `${index * 0.2}s`}"
        v-html="char === ' ' ? '&nbsp;' : char"
    >
    </span>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useSlots} from 'vue'

const slots = useSlots()
const text = computed(() => (slots.default ? slots.default()[0].children : 'Imagination'))

const letters = computed(() => text.value.split(''))
</script>

<style scoped>
.wave-wrapper {
  display: inline-flex;
  gap: 0.02em;
}

.wave-letter:hover {
  display: inline-block;
}

.wave-wrapper:hover .wave-letter {
  animation: rainbow 6s linear reverse infinite,
  wave-in 1s ease-in-out 1s infinite alternate;
  color: white;
}

@keyframes wave-in {
0%{
  transform: translateY(0em);
}
50%{
  transform: translateY(-1em);
}
100% {
  transform: translateY(0em);
}

}
@keyframes rainbow {
  0% {
    color: red;
  }
  16.6% {
    color: orange;
  }
  33.3% {
    color: yellow;
  }
  0.5% {
    color: green;
  }
  66.6% {
    color: blue;
  }
  83.3% {
    color: indigo;
  }
  100% {
    color: violet;
  }
}



</style>
