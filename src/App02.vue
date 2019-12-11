<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"/>
        <todo-list :todos="todos" />
        <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
// 1.引入组件
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import PubSub from 'pubsub-js'
import storageUtil from './util/storageUtil.js'
export default {
// 2.映射组件标签
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todos: storageUtil.readTodos()
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    delTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete = check)
    }
  },
  mounted () {
    PubSub.subscribe('delTodo', (msg, index) => {
      this.delTodo(index)
    })
  },
  watch: { // 深度监视
    todos: {
      deep: true,
      // handler: function (value) {
      //   // 将todos最新的值得json数据，保存到LocalStorage
      //   storageUtil.saveTodos(value)
      // }
      handler: storageUtil.saveTodos
    }
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
