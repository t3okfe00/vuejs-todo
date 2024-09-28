<script lang="ts" setup>
import { computed } from 'vue'
import { TodoStatus } from '../types'
import useTodos from '@/store/useTodos'
interface Props {
  status: TodoStatus
}
const props = defineProps<Props>()

const { getTodosByStatus } = useTodos()

const todoList = getTodosByStatus(props.status)

const groupLabel = computed(() => {
  switch (props.status) {
    case TodoStatus.Pending:
      return 'ToDos'
    case TodoStatus.InProgress:
      return 'In Progress'
    case TodoStatus.Completed:
      return 'Completed'
    default:
      return 'Todo Group'
  }
})
</script>

<template>
  <div>
    <h3>{{ groupLabel }}</h3>
    <ul>
      <li v-for="todo in todoList" v-bind:key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>
