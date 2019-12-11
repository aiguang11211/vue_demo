<template>
  <div class="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
// 1.引入组件
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
// 2.映射组件标签
  components: {
    Add,
    List
  },
  data () {
    return {
      comments: [
        {name: 'xiaoming', value: 'nihao'},
        {name: 'lisi', value: 'buhao'},
        {name: 'wangwu', value: 'chaohao'}
      ]
    }
  },
  methods: {
    addComment (comment) {
      this.comments.unshift(comment)
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
