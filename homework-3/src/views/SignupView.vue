<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const signupAttempted = ref(false)

const isLengthValid = computed(() => {
  return password.value.length >= 8 && password.value.length < 15
})

const hasUppercase = computed(() => {
  return /[A-Z]/.test(password.value)
})

const hasTwoLowercase = computed(() => {
  return (password.value.match(/[a-z]/g) || []).length >= 2
})

const hasNumber = computed(() => {
  return /[0-9]/.test(password.value)
})

const startsWithUppercase = computed(() => {
  return /^[A-Z]/.test(password.value)
})

const hasUnderscore = computed(() => {
  return password.value.includes('_')
})

const isPasswordValid = computed(() => {
  return isLengthValid.value &&
    hasUppercase.value &&
    hasTwoLowercase.value &&
    hasNumber.value &&
    startsWithUppercase.value &&
    hasUnderscore.value
})
function handleSignup() {
  signupAttempted.value = true

  if (isPasswordValid.value) {
    router.push('/')
  }
}
</script>

<template>
  <main class="login-main">
    <section class="page-intro">
      <p class="eyebrow">WELCOME TO POSTIT</p>
      <h1>Sign Up</h1>
      <p>Create your PostIt account.</p>
    </section>

    <form
      class="login-form"
      @submit.prevent="handleSignup"
      @invalid.capture="signupAttempted = true"
    >
      <div class="form-row">
        <label for="username">Username</label>
        <input id="username" type="text" autocomplete="username" required />
      </div>

      <div class="form-row">
        <label for="email">Email</label>
        <input id="email" type="email" autocomplete="email" required />
      </div>

      <div class="form-row">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          autocomplete="new-password"
          :aria-invalid="signupAttempted && !isPasswordValid"
          :aria-describedby="signupAttempted && !isPasswordValid ? 'password-errors' : undefined"
          required
        />
      </div>

      <div
        v-if="signupAttempted && !isPasswordValid"
        id="password-errors"
        class="password-errors"
        role="alert"
      >
        <p>The password is not valid:</p>

        <ul>
          <li v-if="!isLengthValid">Use 8 to 14 characters.</li>
          <li v-if="!hasUppercase">Include at least one uppercase letter.</li>
          <li v-if="!hasTwoLowercase">Include at least two lowercase letters.</li>
          <li v-if="!hasNumber">Include at least one number.</li>
          <li v-if="!startsWithUppercase">Start with an uppercase letter.</li>
          <li v-if="!hasUnderscore">Include the character "_".</li>
        </ul>
      </div>

      <button class="button button-primary" type="submit">Sign Up</button>
    </form>
  </main>
</template>
