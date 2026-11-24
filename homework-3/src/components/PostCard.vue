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
      <span class="post-avatar" aria-hidden="true">👤</span>
      <div>
        <strong>{{ post.author }}</strong>
        <time :datetime="post.createdAt">{{ post.createdAt }}</time>
      </div>
    </header>

    <p>
      {{ post.text }}<template v-if="post.linkUrl">: <a :href="post.linkUrl">{{ post.linkText }}</a></template>
    </p>

    <img v-if="post.image" class="post-image" :src="post.image" :alt="post.imageAlt" />

    <div class="post-actions">
      <button class="button button-primary" type="button" @click="likePost">Like</button>
      <span aria-live="polite">{{ post.likes }} {{ post.likes === 1 ? 'like' : 'likes' }}</span>
    </div>
  </article>
</template>
