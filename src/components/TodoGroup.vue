<script lang="ts" setup>
import { TodoStatus } from '../types'
import { useTodosStore } from '@/store/useTodos'
import CreateToDo from './CreateToDo.vue'
interface Props {
  status: TodoStatus
}
const props = defineProps<Props>()

const { getTodosByStatus } = useTodosStore()

const todoList = getTodosByStatus(props.status)

const groupLabel = {
  [TodoStatus.Pending]: 'ToDos',
  [TodoStatus.InProgress]: 'In Progress',
  [TodoStatus.Completed]: 'Completed'
}
</script>

<template>
  <div>
    <h3>{{ groupLabel[props.status] }}</h3>
    <ul>
      <li v-for="todo in todoList" v-bind:key="todo.id">{{ todo.title }}</li>
    </ul>

    <CreateToDo></CreateToDo>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 1rem;

  padding: 2rem; /* Padding inside the card */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  flex: 1; /* Allows each column to grow equally */
  margin: 1rem; /* Space between the cards */
  transition:
    transform 0.3s,
    box-shadow 0.3s; /* Transition for hover effects */
  border: 3.5px solid var(--color-primary-green);
  opacity: 0.7;
}

h3 {
  margin-bottom: 1rem;
  text-decoration: underline;
  text-decoration-color: var(--color-primary-green);
  text-decoration-thickness: 5px;
}
li {
  margin-left: 1rem;
}
</style>
