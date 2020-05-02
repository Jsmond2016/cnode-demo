<!--
 * @Description: 文章内容组件
 * @Date: 2020-05-01 14:33:41
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->
<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">
          <h2>{{post.title}}</h2>
        </div>
        <ul>
          <li>• 发布于：{{post.create_at | formatDate}}</li>
          <li>• 作者 {{post.author.loginname}}</li>
          <li>• {{post.visit_count}} 次浏览</li>
          <li>•最后一次编辑是 {{post.last_reply_at | formatDate}}</li>
          <li>•来自 {{post.tab | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <div class="reply">
        <div class="topbar">{{post.replies.length}} 回复：</div>
        <div v-for="(reply, index) in post.replies" :key="index" class="replySec">
          <div class="replyUp">
            <router-link :to="{
              name:'userinfo',
              params:{
                name: reply.author.loginname
              }
            }">
              <img class="avatar" :src="reply.author.avatar_url">
            </router-link>
            <router-link :to="{
              name:'userinfo',
              params:{
                name: reply.author.loginname
              }
            }">
              <span>{{reply.author.loginname}}</span>
            </router-link>
            <span>#{{index+1}}楼</span>
            <span v-if="reply.ups.length > 0">
             ☝ {{reply.ups.length}}
            </span>
            <span v-else=""></span>
            <p class="reply-content" v-html="reply.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      isLoading: false,
      post: {}
    }
  },
  methods: {
    getArticleData () {
      const searchId = this.$route.params.id
      this.$http.get(`https://cnodejs.org/api/v1/topic/${searchId}`).then(res => {
        if (res.data.success) {
          this.post = res.data.data
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
    this.getArticleData()
  }
}
</script>
<style>
@import url('../assets/markdown-github.css');
/* 这里，如果要引用外部的 css ，必须去掉 style 中的 scope */
/* 关于原因，参考这里 【vue中style下scope的使用和坑】 https://blog.csdn.net/margin_0px/article/details/83014024 */
/* 关于原因，参考这里 【element-ui的样式改变不了】https://www.cnblogs.com/asusdell/p/12461948.html */
 /*关于原因，参考这里 【Vue style 深度作用选择器 >>> 与 /deep/（sass/less）】 https://www.cnblogs.com/CyLee/p/10006065.html  */
  .article {
      margin: 20px 418px 20px  65px;
    }
  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 14px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 418px;
    margin-top: 15px;
  }

  .reply, .topic_header {
    background-color: #fff;
  }

  .reply {
    margin-top: 15px;
  }

  .reply img.avatar {
    width: 30px;
    height: 30px;
    border-radius: 2px;
    position: relative;
    bottom: -9px;
  }

  .reply a, .reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:10px 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .reply .reply-content {
    padding-top: 5px;
  }

  .reply  .reply-content > .markdown-text {
    padding-left: 36px;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
