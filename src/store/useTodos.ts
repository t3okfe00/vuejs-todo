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
    },
    {
      id: 4,
      title: 'Learn Java for backend',
      description: 'Learn the basics of Java',
      status: TodoStatus.Pending
    }
  ],
  [TodoStatus.InProgress]: [
    {
      id: 11,
      title: 'Progressing Vue.js',
      description: 'Learning Vue.js concepts',
      status: TodoStatus.InProgress
    },
    {
      id: 11,
      title: 'Progressing Java backend!',
      description: 'Learning Java concepts',
      status: TodoStatus.InProgress
    }
  ],
  [TodoStatus.Completed]: [
    {
      id: 2,
      title: 'Build a Vue.js App',
      description: 'Learn how to build a Vue.js app',
      status: TodoStatus.Completed
    },
    {
      id: 7,
      title: 'Built a little app with Java',
      description: 'Built Java app',
      status: TodoStatus.Completed
    }
  ]
}

const todoStore = reactive<TodoStore>(defaultVal)

export const useTodosStore = () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => todoStore[todoStatus])
  }

  return { getTodosByStatus }
}
