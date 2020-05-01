import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList // 显示在 router-view 名字为 main 的路由容器中
      }
    },
    {
      name: 'article',
      path: '/topic/:id',
      components: {
        main: Article
      }
    },
    {
      name: 'userinfo',
      path: '/user/:name',
      components: {
        main: UserInfo
      }
    }
  ]
})
