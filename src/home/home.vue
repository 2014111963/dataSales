<template>
  <div class="all">
    <div class="searchclass">
      <div style="width: 100%; color: white; padding-top: 200px;">
        <p style="font-size: 40px">客户堂 客户垂直搜索系统</p>
        <p style="font-size: 30px"> 挖掘海量企业数据，高效获取新客户</p>
      </div>
      <Row style="padding-top: 16px;">
        <i-col span="24">
          <Input v-model="telphone" size="large" placeholder="请输入手机号" style="width: 300px ;padding-left: 50px"/>
          <Button type="primary" size="large" @click="login">立即体验</Button>
          <div style="padding-bottom: 200px"></div>
        </i-col>
      </Row>
    </div>
    <div class="service" id="about">
      <div>
        <h1 style="padding-top: 40px; font-size: 35px">
          我们的服务
        </h1>
      </div>
      <div>
        <Row style="padding-top: 30px">
          <i-col span="6" offset="7">
            <Card style="width:280px">
              <div style="text-align:center">
                <img src="../assets/images/search.png">
                <h2 style="padding-top: 12px">全国工商信息无限查询</h2>
                <p style="padding-top: 12px">汇集全国34个省市，超过20个不同行业
                  的几千万家的客户名录资源，给销售员提供稳定的客户来源</p>
              </div>
            </Card>
          </i-col>
          <i-col span="8">
            <Card style="width:280px">
              <div style="text-align:center">
                <img src="../assets/images/data.png">
                <h2 style="padding-top: 12px">数据下载</h2>
                <p style="padding-top: 12px">汇集全国34个省市，超过20个不同行业的客户资源，为您提供源源不断的精准客源，批量下载大额度数据</p>
              </div>
            </Card>
          </i-col>
        </Row>
      </div>
      <div style="padding-bottom: 20px;padding-top: 25px; font-size: 20px">
        <p>
          客户堂整合客户资源、数据分析，打造销售团队的一体化工作平台
        </p>
      </div>
    </div>
    <div class="service1" id="about0">
      <div>
        <h1 style="margin-top: 20px; font-size: 35px">
          简单，让工作轻松起来
        </h1>
      </div>
      <div style="margin-top: 15px; font-size: 20px">
        <p>
          按行业、地区筛选客户
        </p>
        <p style="margin-top: 10px">
          新更新客户资源自由查看
        </p>
      </div>
    </div>
    <div class="footer">
      <Row>
        <i-col span="8">
          <div>
            <p style="color: white;font-size: 20px">联系我们</p>
            <div style="color: white;font-size: 20px">
              <p>联系方式&nbsp;：15528342825</p>
              <p>招募渠道&nbsp;：2446522301@qq.com</p>
            </div>
          </div>
        </i-col>
        <i-col span="8">
          <div style="color: white;font-size: 20px">
            <p class="item_title">客户堂</p>
            <div>
              <p href="/product/" target="_blank">产品</p>
              <p href="/company/" target="_blank">公司名录</p>
            </div>
          </div>
        </i-col>
        <i-col span="8">
          <div class="info_item info_item-us">
            <p style="color: white;font-size: 20px">关于我们</p>
            <div style="color: white;font-size: 20px">
              <p href="/about" target="_blank">公司介绍</p>
              <p href="/name/" target="_blank">联系人名录</p>
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import headNav from '../components/headNav'
  export default {
    components: {
      headNav
    },
    name: 'home',
    data () {
      return {
        telphone: ''
      }
    },
    created () {
      this.$store.state.activePage = 1
    },
    methods: {
      login () {
        this.$router.push({name: 'login', params: {telephone: this.telphone}})
      }
    }
  }
</script>

<style scoped>
  .all {
    width: 100%;
    min-width: 1300px;
    min-height: 600px;
    position: absolute;
    z-index: -9999;
  }

  .product:hover, .mainPage:hover, .produce:hover, .example:hover {
    color: #2d8cf0;
  }

  .service2 {
    background-color: #808695;
    color: white;
  }

  .footer {
    background-color: black;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .service1 {
    padding-top: 30px;
    padding-bottom: 40px;
    background-color: aliceblue;
  }

  .service {
    background-color: white;
  }

  .searchclass {
    background: url("../assets/images/home-bg.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin-top: 55px;
  }

  .home-Header-menu a {
    height: 55px;
    font-size: 15px;
    line-height: 48px;
    color: #808695;
    margin-right: 20px;
  }

  .home-Header-logo img {
    height: 46px;
    vertical-align: middle;
  }

</style>
