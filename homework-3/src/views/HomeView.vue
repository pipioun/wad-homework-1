<script setup>
import { useStore } from 'vuex'
import PostCard from '../components/PostCard.vue'

const store = useStore()
</script>

<template>
  <section class="posts" aria-label="Posts">
    <PostCard v-for="post in store.state.posts" :key="post.id" :post-id="post.id" />
  </section>
</template>

<style scoped>
.posts {
  display: grid;
  gap: 1rem;
  max-width: 40rem;
  margin-inline: auto;
}
</style>
