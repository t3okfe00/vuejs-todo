<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types'
import { ref, reactive } from 'vue'
import { useTodosStore } from '@/store/useTodos'
import AppButton from './AppButton.vue'
const shouldDisplayForm = ref(false)

interface Props {
  status: TodoStatus
}
const props = defineProps<Props>()

const { addNewTodo } = useTodosStore()

const newTodo = reactive<Omit<Todo, 'id'>>({
  title: '',
  description: '',
  status: props.status
})

const resetForm = () => {
  newTodo.title = ''
  newTodo.description = ''
  shouldDisplayForm.value = false
  console.log('reset Form')
}

function handleOnSubmit() {
  addNewTodo({ id: Date.now(), ...newTodo })
  console.log('Submitted')
  resetForm()
}
function handleDelete() {
  console.log('Delete runs')
}

const openForm = () => {
  shouldDisplayForm.value = true
}
</script>

<template>
  <div>
    <h3 v-if="!shouldDisplayForm">
      <AppButton :label="'Create new Todo'" :size="'medium'" @click="openForm"
        >Create new Todo</AppButton
      >
    </h3>
    <template v-else>
      <form @submit.prevent="handleOnSubmit">
        <div>
          <input type="text" placeholder="Title" v-model="newTodo.title" />
        </div>
        <div>
          <textarea type="text" placeholder="Description" v-model="newTodo.description" />
        </div>
        <AppButton :label="'Submit'" :size="'small'"></AppButton>
        <AppButton :label="'Reset'" :size="'small'" @click="resetForm"></AppButton>
      </form>
    </template>
  </div>
</template>

<style scoped>
input[type='text'],
textarea {
  background-color: antiquewhite;
  color: black;
  caret-color: black;
}

input[type='text']:hover,
textarea:hover {
  border-color: var(--color-primary-green); /* Change border color on hover */
  background-color: rgba(255, 228, 196, 0.8); /* Slightly change background color */
}
</style>
