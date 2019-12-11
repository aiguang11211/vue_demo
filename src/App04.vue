<template>
  <div class="container">
    <Search/>
    <user-main/>
  </div>
</template>

<script>
// 1.引入组件
import axios from 'axios'
import Search from './components/Search'
import Main from './components/Main'
export default {
// 2.映射组件标签
  components: {
    Search,
    UserMain: Main
  },
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    // 使用vue-resourse发送ajax请求获取数据
    // this.$http.get(url).then(
    //   response => {
    //     const result = response.data
    //     this.repoUrl = result.items[0].html_url
    //     this.repoName = result.items[0].name
    //   },
    //   response => {
    //     alert('请求失败')
    //   }
    // )
    // 使用axios发送ajax请求
    axios.get(url).then(
      response => {
        const result = response.data
        this.repoUrl = result.items[0].html_url
        this.repoName = result.items[0].name
      }
    ).catch(error => {
      alert('请求失败' + error)
    })
  }
}
</script>

<style>

</style>
