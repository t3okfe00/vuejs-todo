<script lang="ts" setup>
import { computed } from 'vue'
import { type Todo, TodoStatus } from '../types'
interface Props {
  status: TodoStatus
}
const props = defineProps<Props>()

const pendingTodos: Todo[] = [
  {
    id: 1,
    title: 'Learn Vue.js',
    description: 'Learn the basics of Vue.js',
    status: TodoStatus.Pending
  },
  {
    id: 2,
    title: 'Build a Vue.js App',
    description: 'Learn how to build a Vue.js app',
    status: TodoStatus.Pending
  }
]

const groupLabel = computed(() => {
  switch (props.status) {
    case TodoStatus.Pending:
      return 'Todos'
    case TodoStatus.InProgress:
      return 'In Progress'
    case TodoStatus.Completed:
      return 'Completed'
    default:
      return ''
  }
})
</script>

<template>
  <div>
    <h3>{{ groupLabel }}</h3>
    <ul>
      <li v-for="todo in pendingTodos" v-bind:key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>
