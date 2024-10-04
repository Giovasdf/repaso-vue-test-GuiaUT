<script setup>
import Todo from './components/TodoApp.vue'
</script>

<template>
  <div class="container">
    <img src="https://vuejs.org/images/logo.png" alt="Vue Logo" class="logo" />
    <Todo />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.logo {
  width: 250px;
  margin-bottom: 20px;
}
</style>
