<template>
  <div>
    <div>
      <Row>
        <i-col span="18" offset="4">
          <div style="padding-top: 60px;padding-right: 200px">
            <div class="user-level" v-if="this.$store.state.isLogin">
              <span style="font-size: 18px;">您当前的会员等级为：</span>
              <div class="upgrade-now-vip">
                <img src="https://file.iviewui.com/dist/3eb78a60b677c55480495de82d69c8bc.png"/>
                <span style="font-weight: 700;">{{this.memberLevel.value}}</span>
              </div>
              <p style="font-size: 16px;margin-top: 10px;">到期时间：{{this.$store.state.expirationDate}}</p>
            </div>
            <div class="user-level" v-if="!this.$store.state.isLogin">
              <span style="font-size: 18px;"><router-link :to="{name: 'login'}">登录</router-link>，免费获取会员权限</span>
            </div>
          </div>
          <Row>
            <i-col span="8" style="padding-right: 8px;padding-left: 8px;">
              <Card class="upgrade-item free" :padding="0">
                <div class="upgrade-item-tail bg"></div>
                <div class="upgrade-item-name">普通用户</div>
                <div class="upgrade-item-icon">
                  <img src="https://file.iviewui.com/dev-dist/3eb78a60b677c55480495de82d69c8bc.png">
                </div>
                <div class="upgrade-item-coast color"><b>永久免费</b></div>
                <div class="upgrade-item-line"></div>
                <div class="upgrade-item-buy bg">永久有效</div>
                <div class="upgrade-item-line"></div>
                <div class="upgrade-list color">
                  <li>
                    <a href="#privilege">查看更多权限</a>
                    <Icon type="ios-arrow-forward"/>
                  </li>
                </div>
              </Card>
            </i-col>
            <i-col span="8" style="padding-right: 8px;padding-left: 8px;">
              <Card class="upgrade-item diamond" :padding="0">
                <div class="upgrade-item-tail bg"></div>
                <div class="upgrade-item-name">VIP会员</div>
                <div class="upgrade-item-icon"><img
                  src="https://file.iviewui.com/dev-dist/3eb78a60b677c55480495de82d69c8bc.png"></div>
                <div class="upgrade-item-coast color">
                  <span>¥</span> <b>19</b> <em>/月</em>
                </div>
                <div class="upgrade-item-line"></div>
                <div class="upgrade-item-buy bg">购买</div>
                <div class="upgrade-item-line"></div>
                <div class="upgrade-list color">
                  <li>
                    <a href="#privilege">查看更多权限</a>
                    <Icon type="ios-arrow-forward"/>
                  </li>
                </div>
              </Card>
            </i-col>
            <i-col span="8" style="padding-right: 8px;padding-left: 8px;">
              <Card class="upgrade-item supremacy" :padding="0">
                <div class="upgrade-item-tail bg"></div>
                <div class="upgrade-item-name">尊享会员</div>
                <div class="upgrade-item-icon"><img
                  src="https://file.iviewui.com/dev-dist/3eb78a60b677c55480495de82d69c8bc.png"></div>
                <div class="upgrade-item-coast color">
                  <span>¥</span> <b>59</b> <em>/月</em>
                </div>
                <div class="upgrade-item-line"></div>
                <div class="upgrade-item-buy bg">购买</div>
                <div class="upgrade-item-line"></div>
                <div class="upgrade-list color">
                  <li>
                    <a href="#privilege">查看更多权限</a>
                    <Icon type="ios-arrow-forward"/>
                  </li>
                </div>
              </Card>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </div>
    <div style="padding-top: 20px">
      <hr/>
    </div>
    <div style="padding-top: 50px" id="privilege">
      <p style="color: red; font-size: 30px; padding-bottom: 20px">客户堂会员特权</p>
      <div style="margin-right: 200px; margin-left: 200px; height: 500px;">
        <div style="padding-top: 20px; background-color: whitesmoke">
          <Row class="privilege">
            <i-col span="6">
              <span>特权</span>
            </i-col>
            <i-col span="6">
              <span>普通用户</span>
            </i-col>
            <i-col span="6">
              <span>VIP会员</span>
            </i-col>
            <i-col span="6">
              <span>超级会员</span>
            </i-col>
          </Row>
        </div>
        <div style="padding-top: 20px;">
          <Row class="privilege1">
            <i-col span="6">
              <span>全国工商信息无限查询</span>
            </i-col>
            <i-col span="6">
              <Icon type="ios-close" size="30" color="red"/>
            </i-col>
            <i-col span="6">
              <Icon type="ios-close" size="30" color="red"/>
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
          </Row>
        </div>
        <div style="padding-top: 20px; background-color: whitesmoke">
          <Row class="privilege1">
            <i-col span="6">
              <span>数据下载</span>
            </i-col>
            <i-col span="6">
              <Icon type="ios-close" size="30" color="red"/>
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
          </Row>
        </div>
        <div style="padding-top: 20px;">
          <Row class="privilege1">
            <i-col span="6">
              <span>按行业、地区筛选客户</span>
            </i-col>
            <i-col span="6">
              <Icon type="ios-close" size="30" color="red"/>
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
          </Row>
        </div>
        <div style="padding-top: 20px; background-color: whitesmoke">
          <Row class="privilege1">
            <i-col span="6">
              <span>新更新客户资源自由查看</span>
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
            <i-col span="6">
              <img src="../../assets/images/checked.png">
            </i-col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headNav from '../../components/headNav'
  import {memberLevel} from '../../utils/enum'

  export default {
    components: {
      headNav
    },
    name: 'member',
    data () {
      return {
        memberLevel: memberLevel[this.$store.state.memberLevel]
      }
    }
  }
</script>

<style scoped>
  .privilege {
    font-size: 30px;

  }

  .privilege1 {
    font-size: 16px;
  }

  .upgrade-list li {
    list-style-type: none;
    padding-left: 16px;
    margin-bottom: 10px;
  }

  .user-level {
    margin: 16px 0 32px;
  }

  .upgrade-now-vip {
    display: inline-block;
    font-size: 18px;
  }

  .upgrade-now-vip img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }

  .article-main {
    padding-top: 60px;
    width: 100%;
    min-width: 1300px;
    min-height: 600px;
    position: absolute;
    z-index: -9999;
  }

  .upgrade-item {
    width: 250px;
    position: relative;
    padding-bottom: 16px;
  }

  .upgrade-item-tail {
    width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px 4px 0 0;
  }

  .upgrade-item.free .bg {
    background-color: #808695;
  }

  .upgrade-item.gold .bg {
    background-color: #ffa820;
  }

  .upgrade-item.diamond .bg {
    background-color: #ef4868;
  }

  .upgrade-item.supremacy .bg {
    background-color: #676ee5;
  }

  .upgrade-item.free .color {
    color: #808695;
  }

  .upgrade-item.gold .color {
    color: #ffa820;
  }

  .upgrade-item.diamond .color {
    color: #ef4868;
  }

  .upgrade-item.supremacy .color {
    color: #676ee5;
  }

  .upgrade-list li.no {
    color: #c5c8ce;
  }

  .upgrade-list li span {
    color: #515a6e;
  }

  .upgrade-item-name {
    text-align: center;
    padding: 20px 0 10px;
    font-size: 20px;
    font-weight: 200;
  }

  .upgrade-item-icon {
    text-align: center;
  }

  .upgrade-item-icon img {
    width: 50px;
  }

  .upgrade-item-coast {
    text-align: center;
  }

  .upgrade-item-coast b {
    font-size: 20px;
  }

  .upgrade-item-line {
    width: 60%;
    height: 1px;
    background: hsla(0, 0%, 59%, .1);
    margin: 20px auto;
  }

  .upgrade-item-buy {
    display: block;
    width: 120px;
    height: 32px;
    line-height: 32px;
    margin: 0 auto;
    text-align: center;
    border-radius: 32px;
    color: #fff;
    cursor: pointer;
  }

</style>
