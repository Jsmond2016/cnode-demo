<!--
 * @Description: 侧边栏
 * @Date: 2020-05-01 21:07:34
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->

<template>
  <div class="authorinfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="authorsummary" v-else>
      <div class="topbar">作者</div>
      <router-link :to="{
        name: 'userinfo',
        params: {
          name: userinfo.loginname
        }
        }">
        <img :src="userinfo.avatar_url" >
        <span class="loginname">{{userinfo.loginname}}</span>
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="(list, index) in topicLimitBy5" :key="index">
          <router-link :to="{
            name: 'article',
            params: {
              id: list.id,
              name: list.loginname
            }
          }">
          {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="(list, index) in replyLimitby5" :key="index">
          <router-link :to="{
            name: 'article',
            params: {
              id: list.id,
              name: list.loginname
            }
          }">
          {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideBar',
  data () {
    return {
      userinfo: {},
      isLoading: false
    }
  },
  methods: {
    getUserInfo () {
      const { name } = this.$route.params
      this.$http.get(`https://cnodejs.org/api/v1/user/${name}`).then(res => {
        if (res.data.success) {
          this.userinfo = res.data.data
        }
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  computed: {
    topicLimitBy5 () {
      if (this.userinfo.recent_topics) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.userinfo.recent_topics.splice(0, 5)
      }
      return this.userinfo.recent_topics
    },
    replyLimitby5 () {
      if (this.userinfo.recent_replies) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.userinfo.recent_replies.splice(0, 5)
      }
      return this.userinfo.recent_replies
    }
  },
  watch: {
    // 同路由跳转，检测路由参数的变化，更新页面数据
    '$route' () {
      this.getUserInfo()
    }
  },
  beforeMount () {
    this.isLoading = true
    this.getUserInfo()
  }
}
</script>

<style scoped>
  .authorsummary, .recent_replies, .recent_topics {
    background-color: #fff;
    padding-bottom: 10px;
  }
  .authorinfo {
    width: 328px;
    float: right;
    margin-top: -10px;
    margin-right: 65px;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  .authorsummary img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .authorsummary span.loginname {
    height: 48px;
    vertical-align: top;
    color: #778087;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authorsummay .topbar {
    margin-top: 0px;
  }
</style>
