<!--
 * @Description: 用户信息页
 * @Date: 2020-05-01 15:51:41
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->
<template>
  <div class="userinfo">
    <div class="userInfomation">
      <div class="loading" v-if="isLoading">
        <img src="../assets/loading.gif">
      </div>
      <div class="userinfo-inner" v-else>
        <section>
          <img :src="userinfo.avatar_url">
          <span> {{userinfo.loginname}}</span>
          <p>{{userinfo.score}} 积分</p>
          <p v-if="userinfo.githubUsername">github: {{userinfo.githubUsername}}</p>
          <p>注册时间 {{userinfo.create_at | formatDate }}</p>
        </section>
        <div class="replies">
          <p>回复的主题：</p>
          <ul>
            <li v-for="(item,index) in userinfo.recent_replies" :key="index">
              <router-link :to="{
                name: 'article',
                params: {
                  id: item.id
                }
              }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="topics">
          <p>创建的主题：</p>
          <ul>
            <li v-for="(item,index) in userinfo.recent_topics" :key="index">
              <router-link :to="{
                name: 'article',
                params: {
                  id: item.id
                }
              }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <slide-bar
      :userinfo="userinfo"
    >
    </slide-bar>
  </div>
</template>

<script>
import SlideBar from './SlideBar'

export default {
  name: 'UserInfo',
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
  components: {
    SlideBar
  },
  beforeMount () {
    this.isLoading = true
    this.getUserInfo()
  }
}
</script>
<style scoped>

  .userinfo {
    padding: 20px 65px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .userInfomation {
    background: white;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 20px;
  }
  .userInfomation section {
    width: 100%;
    padding: 12px;
    font-size: 14px;
    color: #778087;
  }

  .userInfomation > div {
    width: 100%;
  }

  .userInfomation section span{
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    vertical-align: top;
  }

  .userInfomation section p {
    padding: 4px 0;
  }
  .userInfomation img {
    width: 30px;
    border-radius: 10%;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation  div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation  div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation  div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
