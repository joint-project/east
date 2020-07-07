<template>
  <div id="app">
    <!-- 中间内容是要切换的  - vue-router  -->
    <router-view></router-view>
    <tab-bar-comp></tab-bar-comp>
  </div>
</template>

<script>

import TabBarComp from 'Comp/TabBarComp'
export default {
  components: {
    TabBarComp
  }
}
</script>

<style lang="scss">
  #app{
    display: flex;
    flex-direction: column;
  }
</style>
