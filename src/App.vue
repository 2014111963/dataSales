<template>
  <div id="app">
    <head-nav :index="index"></head-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import headNav from './components/headNav'

  export default {
    name: 'App',
    components: {
      headNav
    },
    data () {
      return {
        index: this.judgeIndex()
      }
    },
    methods: {
      judgeIndex: function () {
        if (this.$route.path === '/') {
          return 1
        } else if (this.$route.path === '/product') {
          return 2
        } else if (this.$route.path === '/exportData') {
          return 3
        } else if (this.$route.path === '/member') {
          return 4
        } else if (this.$route.path === '/login') {
          return 5
        }
      }
    },
    created () {
      if (localStorage.userProfile) {
        var userProfile = JSON.parse(localStorage.userProfile)
        this.$store.commit('setUserProfile', userProfile)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
