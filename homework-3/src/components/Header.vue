
<template>
  <header class="header">
    <h1>PostIt</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #e8e8e8;
}

h1 {
  color: #333;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

