<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="">
    <h1 class="text-3xl text-center p-4">
      {{ msg }} {{ count > 0 ? count : '...' }}
    </h1>
    <div class="text-center pb-16">
      <button type="button" @click="count+=1">
        <div class="p-4" :class="`rotate-${count % 8}`">
          <img class="mx-auto" alt="Yik" width="256" height="256" src="../assets/logo.png" />
        </div>
      </button>
    </div>
  </div>
  <div class="invisible">
    <div class="rotate-0"></div>
    <div class="rotate-1"></div>
    <div class="rotate-2"></div>
    <div class="rotate-3"></div>
    <div class="rotate-4"></div>
    <div class="rotate-5"></div>
    <div class="rotate-6"></div>
    <div class="rotate-7"></div>
  </div>
</template>
