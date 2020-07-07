<template>
    <van-tabbar v-model="active" route  active-color="#D2A85E">
      <van-tabbar-item v-for='item in icon' :key='item.id' :to='item.path'>
        <span>{{item.title}}</span>
        <template slot="icon" slot-scope="props" >
          <img :src="props.active ? item.inactive : item.active" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon:[
        {
          id:1,
          title: '首页',
          active: require('Assets/img/footer-icon/index-icon.png'),
          inactive: require('Assets/img/footer-icon/index-icon-active.png'),
          path:'/home'
        },
        {
          id:2,
          title:'社区',
          active: require('Assets/img/footer-icon/community-icon.png'),
          inactive: require('Assets/img/footer-icon/community-icon-active.png'),
          path:'/community'
        },
        {
          id:3,
          title:'拍卖',
          active: require('Assets/img/footer-icon/auction-icon.png'),
          inactive: require('Assets/img/footer-icon/auction-icon-active.png'),
          path:'/auction'
        },
        {
          id:4,
          title:'消息',
          active: require('Assets/img/footer-icon/message-icon.png'),
          inactive: require('Assets/img/footer-icon/message-icon-active.png'),
          path:'/message'
        },
        {
          id:5,
          title:'我的',
          active: require('Assets/img/footer-icon/myfile-icon.png'),
          inactive: require('Assets/img/footer-icon/myfile-icon-active.png'),
          path:'/myfile'
        }
      ] 
    };
  },
};
</script>

<style lang='scss' scoped>
 .van-tabbar{
    img{
      height: .24rem;
      width: .24rem;
    }
    .van-tabbar-item:nth-of-type(3){
      position: relative;
      top:-16px;
      img{
        height: .4rem;
        width: .4rem;
      }
    }
  }
</style>