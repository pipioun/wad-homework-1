<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  postId: {
    type: Number,
    required: true,
  },
})

const store = useStore()
const post = computed(() => store.getters.postById(props.postId))

function likePost() {
  store.commit('likePost', props.postId)
}
</script>

<template>
  <article class="post">
    <header class="post-header">
      <span aria-hidden="true">👤</span>
      <strong>{{ post.author }}</strong>
      <time :datetime="post.createdAt">{{ post.createdAt }}</time>
    </header>

    <p class="post-text">
      {{ post.text }}<template v-if="post.linkUrl">: <a :href="post.linkUrl">{{ post.linkText }}</a></template>
    </p>

    <img v-if="post.image" class="post-image" :src="post.image" :alt="post.imageAlt" />

    <div class="post-actions">
      <button type="button" @click="likePost">Like</button>
      <span aria-live="polite">{{ post.likes }} {{ post.likes === 1 ? 'like' : 'likes' }}</span>
    </div>
  </article>
</template>

<style scoped>
.post {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
}

.post-header,
.post-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.post-header time,
.post-actions span {
  margin-inline-start: auto;
}

.post-text {
  overflow-wrap: anywhere;
}

.post-image {
  display: block;
  max-width: 100%;
  max-height: 28rem;
  border-radius: 0.5rem;
}
</style>
