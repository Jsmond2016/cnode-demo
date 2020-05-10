<!--
 * @Description:底部状态栏
 * @Date: 2020-05-10 11:47:35
 * @Author: HJ <jinhuang02@hand-china.com>
 * @Copyright: Copyright (c) 2018, Hand
 -->

<template>
  <footer>
    <p><a href="https://github.com/Jsmond2016/cnode-demo">源代码地址</a></p>
    <p>
      CNode 社区提供 API
      <a href="https://cnodejs.org">
        <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="CNode社区">
      </a>
      gitee-pages提供网站托管
      <a href="http://gitee.com/">
        <img src="https://gitee.com/static/images/logo-black.svg?t=158106664" alt="gitee">
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    width: 100%;
    background: white;
    padding: 30px 68px;
    box-sizing: border-box;
  }
  footer a {
    text-decoration: none;
    color: black;
    margin-right: 20px;
  }
  p {
    margin: 20px 0;
  }
  p img {
    width: 100px;
    height: 24px;
    margin-left: 20px;
  }
</style>
