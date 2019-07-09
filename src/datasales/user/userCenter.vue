<template>
  <Dropdown trigger="click" style="float: right;margin-right: 0" @on-click="personalCenterClick"
            class="common-dropdown-large">
    <Avatar style="background-color: #2d8cf0" icon="ios-person" />
    <DropdownMenu slot="list" class="header-dropdown-user">
      <DropdownItem name="personalCenter">
        <strong class="header-aside-name">{{this.$store.state.userProfile.username}}</strong>
        <div class="header-aside-vip">
          <span>{{vipLevelDisplay}}</span>
        </div>
      </DropdownItem>
      <DropdownItem name="personalCenter" :divided="true">
        <Icon type="ios-person-outline" class="normal"/>
        <span>个人中心</span>
      </DropdownItem>
      <DropdownItem name="updatePassword" :divided="true">
        <Icon type="ios-compass-outline" class="normal"/>
        <span>修改密码</span>
      </DropdownItem>
      <DropdownItem name="logout">
        <Icon type="ios-log-out" class="normal"/>
        <span>退出登录</span>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {
    name: 'userCenter',
    methods: {
      personalCenterClick (name) {
        switch (name) {
          case 'logout': {
            this.$store.commit('clearUserProfile')
            this.$router.push('/')
            break
          }
          case 'updatePassword': {
            this.$router.push('/updatePassword')
            break
          }
          case 'personalCenter': {
            this.$router.push('/product')
            break
          }
        }
      }
    },
    computed: {
      vipLevelDisplay () {
        return this.$store.state.userProfile.vipLevel.display
      }
    }
  }
</script>

<style scoped>
  .header-dropdown-user {
    width: 140px;
  }

  .header-dropdown-user .ivu-dropdown-item {
    font-size: 14px !important;
    padding: 8px 16px;
  }

  .common-dropdown-large {
    font-size: 14px !important;
  }

  .common-dropdown-large .ivu-icon.normal {
    display: inline-block;
    width: 16px;
    font-size: 16px;
  }

  .common-dropdown-large span {
    vertical-align: middle;
  }

  .header-aside-name {
    font-size: 16px;
  }

  .header-aside-vip {
    margin-top: 3px;
  }

  .header-aside-vip span {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
  }

  .header-aside-vip img {
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }
</style>
