import { default } from './Header.vue';
<!--
 * @Description: 列表数据页
 * @Date: 2020-05-01 10:00:17
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->

<template>
  <div class="PostList"
   v-loading="isLoading"
  >
    <div class="posts">
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
        <li v-for="(topic, index) in topics" :key="index">
          <!-- 头像 -->
          <img :src="topic.author.avatar_url" alt="">
          <!-- 回复，浏览 -->
          <span class="reply-wrapper">
            <span class="reply_count">{{`${topic.reply_count}` + '/' +`${topic.visit_count}`}}</span>
          </span>
          <span :class="classChangeFormat(topic)">
            {{topic | tabFormatter}}
          </span>
          <!-- 标题 -->
          <router-link :to="{
            name:'article',
            params:{
              id:topic.id,
              name:topic.author.loginname
            }
            }"
          >
            <span>{{topic.title}}</span>
          </router-link>
          <span class="last_reply">
            {{topic.last_reply_at | formatDate}}
          </span>
        </li>
        <li>
          <el-pagination
            background
            :style="{'text-align': 'right'}"
            layout="prev, pager, next"
            :total="pagination.total"
            @current-change="getTopicsData"
            :pager-count="pagination.pageCount"
            >
          </el-pagination>
        </li>
      </ul>
      <!-- <pagination @onSearch="getTopicsData"></pagination> -->
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination'
import { mapState } from 'vuex'
export default {
  name: 'PostList',
  computed: {
    ...mapState(['topics', 'userinfo', 'isLoading'])
  },
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
      // isLoading: false,
      tabName: 'all',
      pagination: {
        pageCount: 5, // 每页数量
        total: 100 // 总数量
      }
    }
  },
  methods: {
    test (cc) {
      console.log(cc)
    },
    getTopicsData (page = 1, tab) {
      this.$store.dispatch('changeLoadingStatus', true)
      this.$store.dispatch('getTopicsData', {page, tab}).then(res => {
        this.$store.dispatch('changeLoadingStatus', false)
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
      this.getTopicsData(1, typeName)
    }
  },
  beforeMount () {
    this.getTopicsData(1, 'all')
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

  .reply-wrapper {
    display: inline-block;
    width: 50px;
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
