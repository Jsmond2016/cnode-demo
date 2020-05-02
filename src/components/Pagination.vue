<!--
 * @Description: 分页器
 * @Date: 2020-05-02 09:37:16
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 -->
<template>
  <div class="pagination">
    <button @click="changeCurrentPage(1)">首页</button>
    <button @click="changeCurrentPage(currentPage - 1)">上一页</button>
    <button v-if="currentPage >= 4" class="pagebtn">......</button>
    <button @click="changeCurrentPage(btn)" v-for="(btn, index) in pagebtns" :key="index" :class="activeClass(btn)">
      {{btn}}
    </button>
    <button @click="changeCurrentPage(currentPage + 1)">下一页</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      pagebtns: [1, 2, 3, 4, 5, '.....'],
      currentPage: 1
    }
  },
  methods: {
    activeClass (currentBtn) {
      return currentBtn === this.currentPage ? 'currentPage' : 'pagebtn'
    },
    changeCurrentPage (currentPage) {
      if (currentPage < 1 || currentPage === '.....') return
      if (currentPage === this.pagebtns[4]) {
        // 移除第一个，在倒数第二个加上
        this.pagebtns.shift()
        this.pagebtns.splice(4, 0, this.pagebtns[3] + 1)
      }
      if (currentPage === this.pagebtns[0] && currentPage !== 1) {
        // 移除导数第二个，在最前面加上
        this.pagebtns.unshift(this.pagebtns[0] - 1)
        this.pagebtns.splice(5, 1)
      }
      if (currentPage === 1) {
        this.pagebtns = [1, 2, 3, 4, 5, '.....']
      }
      this.currentPage = currentPage
      // 父子通信
      this.$emit('onSearch', this.currentPage)
    }
  }
}
</script>

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>
