<script setup>
import { ref, computed } from 'vue'
import Hello from './components/Hello.vue'
import Page01 from './components/Page01.vue'
import Page02 from './components/Page02.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': Hello,
  '/page01': Page01,
  '/page02': Page02,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="text-center p-4">
    <a href="#/">Hello</a>
    | <a href="#/page01">Page01</a>
    | <a href="#/page02">Page02</a>
  </div>
  <component :is="currentView" />
</template>
