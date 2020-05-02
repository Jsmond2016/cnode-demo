import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'
import SlideBar from '@/components/SlideBar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'cnode-demo',
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
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      name: 'userinfo',
      path: '/user/:name',
      components: {
        main: UserInfo,
        slidebar: SlideBar
      }
    }
  ]
})
