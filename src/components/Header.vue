<!--
 * @Description: 头部组件
 * @Date: 2020-05-01 09:41:08
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->

<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li>
        <a href="">首页</a>
      </li>
      <li>
        <a href="">新手</a>
      </li>
      <li>
        <a href="">API</a>
      </li>
      <li>
        <a href="">关于</a>
      </li>
      <li>
        <a href="">注册</a>
      </li>
      <li>
        <a href="">登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
 .header {
   background-color: #5a5555;
   height: 50px;
 }
 img {
   max-width: 120px;
   margin-left: 50px;
   margin-top: 10px;
 }
  ul {
    list-style: none;
    float: right;
    margin: 4px;
  }
  li {
    display: inline-block;
    padding: 10px 15px;
  }
  a {
    text-decoration: none;
    color: #cccccc;
    font-size: 14px;
    text-shadow: blur;
   }

</style>
