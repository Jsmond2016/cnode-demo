<!--
 * @Description: 回到顶部
 * @Date: 2020-05-10 14:42:04
 * @Author: HJ <jinhuang02@hand-china.com>
 * @Copyright: Copyright (c) 2018, Hand
 -->

<template>
  <div class="back-to-top">
    <a href="#">
      <span>回</span>
      <span>顶</span>
      <span>部</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackToTop'
}
</script>

<style scoped>
 .back-to-top {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: fixed;
   right: 20px;
   bottom: 20px;
   color: gray;
   width: 40px;
   height: 80px;
   background: white;
   border: 1px solid #e1e1e1;
   border-radius: 5px;
 }
 .back-to-top span {
   display: flex;
   align-items: center;
 }
 a {
   text-decoration: none;
   color: #666;
 }
</style>
