<script lang="ts" setup>
import useCounterStore from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="pt-44 text-center">
    <h1 class="text-primary text-7xl">
      {{ counter.count }}
    </h1>
    <div class="text-xl">Welcome to Redish101 Vue Starter !</div>
    <button
      @click="counter.increment()"
      type="button"
      class="inline-block min-h-9 cursor-pointer rounded border-none bg-primary px-7.5 py-2.5 text-3.6 font-semibold text-white transition hover:shadow-active mt-8"
    >
      Button
    </button>
  </div>
</template>
