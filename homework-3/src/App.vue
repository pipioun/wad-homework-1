
<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
}
</style>
