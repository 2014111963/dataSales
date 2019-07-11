<template>
    <div class="home-Header">
  <Row>
    <i-col span="12" offset="2">
      <a class="home-Header-logo" href="/">
        <img src="/static/kehutang_logo.png" style="margin-top: 3px">
      </a>
      <div class="home-Header-menu">
        <span @click="backToMain" v-bind:class="{active: this.$store.state.activePage===1}" class="menuItem">首页</span>
        <span @click="product" v-bind:class="{active: this.$store.state.activePage===2}" class="menuItem">数据预览</span>
        <span @click="downloadData" v-bind:class="{active: this.$store.state.activePage===3}" class="menuItem">数据下载</span>
      </div>
    </i-col>
    <i-col span="8">
      <div class="head-right">
        <span @click="showVipPrivilege" class="title-right" v-bind:class="{active: this.$store.state.activePage===4}" style="color: red">会员特权</span>
        <span class="title-right">|</span>
        <span @click="login" class="title-right" v-bind:class="{active: this.$store.state.activePage===5}" v-if="!this.$store.state.isLogin">登录/注册</span>
          <user-center v-if="this.$store.state.isLogin"></user-center>
      </div>
    </i-col>
  </Row>
</div>
</template>

<script>
  import userCenter from '../datasales/user/userCenter'
  export default {
    name: 'headNav',
    components: {
      userCenter
    },
    data () {
      return {
        activePage: Number(this.$props.index)
      }
    },
    props: ['index'],
    methods: {
      downloadData () {
        this.$store.state.activePage = 3
        this.$router.push('exportData')
      },
      product () {
        this.$store.state.activePage = 2
        this.$router.push('/product')
      },
      backToMain: function () {
        this.$store.state.activePage = 1
        this.$router.push('/')
      },
      login () {
        this.$store.state.activePage = 5
        this.$router.push('/login')
      },
      showVipPrivilege: function () {
        this.$store.state.activePage = 4
        this.$router.push('/member')
      }
    }
  }
</script>

<style scoped>
  .menuItem:hover{
    cursor: pointer;
    color:#2d8cf0;
  }
  .active{
    color: #2d8cf0;
  }
  .personalCenter .personalCenter-content {
    display: none;
  }

  .personalCenter:hover .personalCenter-content {
    display: block;
    position: fixed;
    top: 55px;
    right: 140px;
    width: 150px;
    z-index: 99;
  }
  .head-right {
    float: right;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
  }
  .title-right {
    font-size: 15px;
    line-height: 55px;
    margin: auto 10px;
  }
  .title-right:hover {
    color:#2d8cf0;
    cursor: pointer;
  }
  .home-Header {
    width: 100%;
    height: 55px;
    padding: 0 40px;
    box-sizing: border-box;
    z-index: 1000;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    font-size: 14px;
  }

  .home-Header-menu {
    float: left;
    padding-top: 3px;
    margin-left: 15px;
  }

  .home-Header-menu span {
    height: 55px;
    font-size: 15px;
    line-height: 48px;
    margin-right: 20px;
  }

  .home-Header-logo {
    float: left;
    height: 50px;
    line-height: 48px;
  }

  .home-Header-logo img {
    height: 46px;
    vertical-align: middle;
  }

</style>
