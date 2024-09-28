<script lang="ts" setup>
import TodoGroup from './TodoGroup.vue'
import { TodoStatus } from '@/types'
</script>

<template>
  <div>
    <TodoGroup :status="TodoStatus.Pending"></TodoGroup>
    <TodoGroup :status="TodoStatus.InProgress"></TodoGroup>
    <TodoGroup :status="TodoStatus.Completed"></TodoGroup>
  </div>
</template>
