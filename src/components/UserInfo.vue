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
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userinfo: [],
      isLoading: false
    }
  },
  methods: {
    getUserInfo () {
      this.$http.get('').then(res => {
        if (res) {
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

</style>
