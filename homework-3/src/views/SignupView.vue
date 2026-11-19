
<template>
  <section class="signup">
    <h2>Sign Up</h2>
    <p>Create your PostIt account.</p>

    <form @submit.prevent>
      <label for="username">Username:</label>
      <input id="username" type="text" required />

      <label for="email">Email:</label>
      <input id="email" type="email" required />

      <label for="password">Password:</label>
      <input id="password" type="password" required />

      <button type="submit">Sign Up</button>
    </form>
  </section>
</template>

<style scoped>
.signup {
  max-width: 400px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 12px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

