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
    <div class="authorsummary">
      <div class="topbar">作者</div>
      <router-link class="message" :to="{
        name: 'userinfo',
        params: {
          name: userinfo.loginname
          }
        }"
      >
        <img :src="userinfo.avatar_url" >
        <span class="loginname">{{userinfo.loginname}}</span>
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="(list, index) in (userinfo.recent_topics || []).slice(0, 5)" :key="index">
          <router-link :to="{
            name: 'article',
            params: {
              id: list.id || '',
              name: list.author && list.author.loginname
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
        <li v-for="(list, index) in (userinfo.recent_replies || []).slice(0, 5)" :key="index">
          <router-link :to="{
            name: 'article',
            params: {
              id: list.id,
              name: list.author ? list.author.loginname : ''
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
  props: {
    userinfo: {
      type: Object,
      default () {
        return {}
      }
    },
    isLoading: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  beforeMount () {
    console.log(this.userinfo)
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
    display: flex;
    flex-flow: column;
  }
  li{
    padding: 3px 0 ;
  }
  .message {
    display: flex;
    justify-content: row;
    text-decoration: none;
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
