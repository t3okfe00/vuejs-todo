<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types'
import { ref, reactive } from 'vue'

const shouldDisplayForm = ref(false)

const newTodo = reactive<Omit<Todo, 'id'>>({
  title: '',
  description: '',
  status: TodoStatus.Pending
})

const resetForm = () => {
  newTodo.title = ''
  newTodo.description = ''
  shouldDisplayForm.value = false
}

const openForm = () => {
  shouldDisplayForm.value = true
}
</script>

<template>
  <div>
    <h3 v-if="!shouldDisplayForm"><button @click="openForm">Create new Todo</button></h3>
    <template v-else>
      <form>
        <div>
          <input type="text" placeholder="Title" v-model="newTodo.title" />
        </div>
        <div>
          <textarea type="text" placeholder="Description" v-model="newTodo.description" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" @click="resetForm">Cancel</button>
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

textarea:hover {
  border-color: var(--color-primary-green); /* Change border color on hover */
  background-color: rgba(255, 228, 196, 0.8); /* Slightly change background color */
}
</style>
