import { createStore } from 'vuex'
import posts from '../../../res/json/posts.json'

// Let Vite bundle the previous homework's images for both dev and production.
const postImages = import.meta.glob('../../../res/image/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export default createStore({
  state: () => ({
    posts: posts.map((post) => ({
      ...post,
      image: post.image ? postImages[`../../../${post.image}`] : null,
      likes: 0,
    })),
  }),
  getters: {
    postById: (state) => (id) => state.posts.find((post) => post.id === id),
  },
  mutations: {
    likePost(state, id) {
      const post = state.posts.find((post) => post.id === id)

      if (post) {
        post.likes += 1
      }
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0
      })
    },
  },
})
