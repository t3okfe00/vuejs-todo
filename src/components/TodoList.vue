<script lang="ts" setup>
import TodoGroup from './TodoGroup.vue'
import { TodoStatus } from '@/types'
</script>

<template>
  <section>
    <TodoGroup :status="TodoStatus.Pending"></TodoGroup>
    <TodoGroup :status="TodoStatus.InProgress"></TodoGroup>
    <TodoGroup :status="TodoStatus.Completed"></TodoGroup>
  </section>
</template>

<style scoped>
section {
  justify-content: center;
  display: flex;
  justify-content: space-evenly;
}

@media (max-width: 768px) {
  section {
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
