import { default } from './Header.vue';
<!--
 * @Description: 列表数据页
 * @Date: 2020-05-01 10:00:17
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->

<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="toobar" @click="changeTab">
            <span
              v-for="(tab, index) in tabs"
              :key="index"
              :name="tab.name"
              :class="tab.name === tabName ? 'tab' : ''"
            >
              {{tab.desc}}
            </span>
          </div>
        </li>
        <li v-for="(post, index) in posts" :key="index">
          <!-- 头像 -->
          <img :src="post.author.avatar_url" alt="">
          <!-- 回复，浏览 -->
          <span>
            <span class="reply_count">{{`${post.reply_count}` + '/' +`${post.visit_count}`}}</span>
          </span>
          <span :class="classChangeFormat(post)">
            {{post | tabFormatter}}
          </span>
          <!-- 标题 -->
          <router-link :to="{
            name:'article',
            params:{
              id:post.id,
              name:post.author.loginname
            }
            }"
          >
            <span>{{post.title}}</span>
          </router-link>
          <span class="last_reply">
            {{post.last_reply_at | formatDate}}
          </span>
        </li>
      </ul>
      <pagination @onSearch="getData"></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'PostList',
  data () {
    return {
      tabs: [
        {
          name: 'all',
          desc: '全部'
        },
        {
          name: 'good',
          desc: '精华'
        },
        {
          name: 'share',
          desc: '分享'
        },
        {
          name: 'ask',
          desc: '问答'
        },
        {
          name: 'job',
          desc: '招聘'
        },
        {
          name: 'dev',
          desc: '客户端测试'
        }
      ],
      isLoading: false,
      posts: {},
      tabName: 'all'
    }
  },
  methods: {
    getData (page = 1, tab) {
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page,
          limit: 20,
          tab
        }
      }).then(res => {
        if (res) {
          this.posts = res.data.data
        }
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        console.log('finish')
        this.isLoading = false
      })
    },
    classChangeFormat (post) {
      const styles = []
      if (post.good) styles.push('put_good')
      if (post.top) styles.push('put_top')
      if (!post.good && !post.top) styles.push('topiclist-tab')
      return styles
    },
    changeTab (e) {
      const typeName = e.target.getAttribute('name') || 'all'
      this.tabName = typeName
      this.isLoading = true
      this.getData(1, typeName)
    }
  },
  beforeMount () {
    this.isLoading = true
    this.getData(1, 'all')
  },
  components: {
    Pagination
  }
}
</script>

<style scoped>
  .PostList{
    background-color: #e1e1e1;
    margin: 20px 68px;
  }
  .posts {
    margin-top: 10px;
  }

  .PostList .posts span.tab {
    background: #80bd01;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
  }

  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
