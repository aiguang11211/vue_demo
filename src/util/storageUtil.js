/*  数据存储和读取 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todo) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todo))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
