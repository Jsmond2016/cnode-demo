<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    PostList,
    Footer,
    BackToTop
  },
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>

<style>
</style>
