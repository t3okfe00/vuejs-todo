<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header><h1>Vue.js Todo App</h1></header>
  <TodoList></TodoList>
</template>

<style scoped>
header {
  opacity: 0.7;
  text-align: center;
  color: var(--color-primary-green);
  margin-bottom: 5rem;
}
</style>
