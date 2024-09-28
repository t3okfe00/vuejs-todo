import { TodoStatus, type Todo } from '@/types'
import { computed, reactive } from 'vue'

interface TodoStore {
  [TodoStatus.Pending]: Todo[]
  [TodoStatus.InProgress]: Todo[]
  [TodoStatus.Completed]: Todo[]
}

const defaultVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: 'Learn Vue.js',
      description: 'Learn the basics of Vue.js',
      status: TodoStatus.Pending
    }
  ],
  [TodoStatus.InProgress]: [
    {
      id: 1,
      title: 'Progressing Vue.js',
      description: 'Learning Vue.js concepts',
      status: TodoStatus.InProgress
    }
  ],
  [TodoStatus.Completed]: [
    {
      id: 2,
      title: 'Build a Vue.js App',
      description: 'Learn how to build a Vue.js app',
      status: TodoStatus.Completed
    }
  ]
}
const todoStore = reactive<TodoStore>(defaultVal)

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => todoStore[todoStatus])
  }

  return { getTodosByStatus }
}
