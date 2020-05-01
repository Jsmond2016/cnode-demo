<!--
 * @Description: 用户信息页
 * @Date: 2020-05-01 15:51:41
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->
<template>
  <div class="userinfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="userInfomation" v-else>
      <section>
        <img :src="userinfo.avatar_url">
        <span> {{userinfo.loginname}}</span>
        <p>{{userinfo.score}} 积分</p>
        <p v-if="userinfo.githubUsername">{{userinfo.githubUsername}}</p>
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
</template>

<script>
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
  beforeMount () {
    this.isLoading = true
    this.getUserInfo()
  }
}
</script>
<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation img {
    width: 30px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
