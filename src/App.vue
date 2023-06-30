<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen min-w-screen text-black dark:bg-black dark:text-white ">
    <RouterView />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

</style>