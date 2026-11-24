<script setup>
import { useStore } from 'vuex'
import PostCard from '../components/PostCard.vue'

const store = useStore()
</script>

<template>
  <main class="feed">
    <section class="posts" aria-label="Posts">
      <PostCard v-for="post in store.state.posts" :key="post.id" :post-id="post.id" />
    </section>
    <button
      class="button button-primary"
      type="button"
      @click="store.commit('resetLikes')"
    >
      Reset all likes
    </button>
  </main>
</template>
