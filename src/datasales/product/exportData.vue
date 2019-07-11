<template>
  <div class="all">
    <div class="searchclass">
      <Row>
        <i-col span="16" offset="8">
          <div style="padding-top: 40px; padding-bottom: 60px;">
            <Card style="width: 600px">
              <h1>数据筛选下载</h1>
              <p style="text-align: left; font-size: 15px">
                <span>为你查找出</span><span style="color: red">{{searchCount}}</span><span>条数据</span>
              </p>
              <div>
                <p style="font-size: 18px; padding-top:20px; text-align: left;padding-bottom: 10px">
                  <Strong>地区选择：</Strong></p>
                <div style="text-align: left">
                  <areaList></areaList>
                </div>
              </div>
              <div>
                <p style="font-size: 18px; padding-top:20px; text-align: left;padding-bottom: 10px">
                  <Strong>行业选择：</Strong></p>
                <div style="text-align: left">
                  <Select v-model="area">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </div>
              <div style="text-align: left; padding-top: 20px;">
                <Row>
                  <i-col span="8" offset="6">
                    <Button size="large" type="primary">数据筛选</Button>
                  </i-col>
                  <i-col span="10">
                    <Button @click="salePrice = true" size="large" type="error">立即下载</Button>
                    <div>
                      <Modal footer-hide="true" v-model="salePrice" width="800">
                        <div style="text-align:center;width:780px">
                          <h2 style="padding-top: 12px; text-align: left">购买价格计算</h2>
                          <div style="padding-top:6px;padding-bottom: 6px">
                            <hr/>
                          </div>
                          <div>
                            <Row style="font-size: 16px; padding-top: 12px; text-align: left">
                              <i-col span="3">
                                <p>
                                  <Strong>购买条数：</Strong>
                                </p>
                              </i-col>
                              <i-col span="16">
                                <Tabs type="card">
                                  <TabPane label="2万条"><p style="font-size: 16px; padding-top: 12px; text-align: left">
                                    <Strong>购买价格：</Strong> <span style="color:red ;font-size: 36px">￥100</span>
                                  </p></TabPane>
                                  <TabPane label="5万条"><Strong>购买价格：</Strong> <span style="color:red ;font-size: 36px">￥250</span>
                                  </TabPane>
                                  <TabPane label="10万条"><Strong>购买价格：</Strong> <span
                                    style="color:red ;font-size: 36px">￥500</span></TabPane>
                                  <TabPane label="20万条"><Strong>购买价格：</Strong> <span
                                    style="color:red ;font-size: 36px">￥1000</span></TabPane>
                                  <TabPane label="100万条"><Strong>购买价格：</Strong> <span
                                    style="color:red ;font-size: 36px">￥5000</span></TabPane>
                                  <TabPane label="自定义">
                                    <label> <Strong>请输入购买条数：</Strong></label>
                                    <i-input style="width: 130px" v-model="count"></i-input>
                                    <span v-if="totalCount" style="font-size: 8px; color: red">必须大于2万条</span>
                                    <br/>
                                    <Strong>购买价格：</Strong>
                                    <span style="color:red ;font-size: 36px">¥ {{totalPrice}}</span>
                                  </TabPane>
                                </Tabs>
                              </i-col>
                            </Row>
                            <div style="padding-bottom: 10px">
                              <Button @click="test" type="primary">确认支付</Button>
                            </div>
                            <div>
                              <p><Strong>支付后可开具发票</Strong></p>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </i-col>
                </Row>
              </div>
              <div>
                <p style="text-align: left">
                  导出提示：
                </p>
                <p style="text-align: left">
                  1、客户堂为您提供数据整合服务，定期收录和更新数据；
                </p>
                <p style="text-align: left">
                  2、获取数据额度后长期有效，额度使用完前都可下载；
                </p>
                <p style="text-align: left">
                  3、您可按行业，地区、关键词筛选，支持不同条件组合筛选；
                </p>
                <p style="text-align: left">
                  4、单次下载上限5000条，数据量较大时，可以分批多次下载；
                </p>
                <p style="text-align: left">
                  5、分批下载时系统会自动排除已下载过的数据，不会重复下载；
                </p>
              </div>
            </Card>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="service">
      <div>
        <h1 style="padding-top: 30px; font-size: 30px">
          数据购买规则
        </h1>
      </div>
      <div>
        <Row style="padding-top: 10px">
          <i-col span="6" offset="7">
            <Card style="width:780px">
              <div style="text-align:center">
                <h2 style="padding-top: 12px; text-align: left">购买价格计算</h2>
                <div style="padding-top:6px;padding-bottom: 6px">
                  <hr/>
                </div>
                <div>
                  <Row style="font-size: 16px; padding-top: 12px; text-align: left">
                    <i-col span="3">
                      <p>
                        <Strong>购买条数：</Strong>
                      </p>
                    </i-col>
                    <i-col span="16">
                      <Tabs type="card">
                        <TabPane label="2万条"><p style="font-size: 16px; padding-top: 12px; text-align: left">
                          <Strong>购买价格：</Strong> <span style="color:red ;font-size: 36px">￥100</span>
                        </p></TabPane>
                        <TabPane label="5万条"><Strong>购买价格：</Strong> <span style="color:red ;font-size: 36px">￥250</span>
                        </TabPane>
                        <TabPane label="10万条"><Strong>购买价格：</Strong> <span
                          style="color:red ;font-size: 36px">￥500</span></TabPane>
                        <TabPane label="20万条"><Strong>购买价格：</Strong> <span
                          style="color:red ;font-size: 36px">￥1000</span></TabPane>
                        <TabPane label="100万条"><Strong>购买价格：</Strong> <span
                          style="color:red ;font-size: 36px">￥5000</span></TabPane>
                        <TabPane label="自定义">
                          <label> <Strong>请输入购买条数：</Strong></label>
                          <i-input style="width: 130px" v-model="count"></i-input>
                          <span v-if="totalCount" style="font-size: 8px; color: red">必须大于2万条</span>
                          <br/>
                          <Strong>购买价格：</Strong>
                          <span style="color:red ;font-size: 36px">¥ {{totalPrice}}</span>
                        </TabPane>
                      </Tabs>
                    </i-col>
                  </Row>
                  <div style="padding-bottom: 10px">
                    <Button type="primary">确认支付</Button>
                  </div>
                  <div>
                    <p><Strong>支付后可开具发票</Strong></p>
                  </div>
                </div>
              </div>
            </Card>
          </i-col>
        </Row>
      </div>
    </div>

    <div>
      <Row>
        <i-col span="16" offset="4">
          <div style="text-align: left">
            <p style="padding-top: 40px; font-size: 24px">
              <strong>数据下载格式</strong>
            </p>
          </div>
          <div style="text-align: left">
            <p style="padding-top: 16px; font-size: 16px">
              下载字段包括：公司名称、行业类型、所在地区、人员规模、注册资本、注册时间、详细地址、公司简介、企业关键人、职位、企业联系方式、固话、邮箱地址
            </p>
          </div>
          <div style="text-align: left">
            <p style="padding-top: 6px; font-size: 14px">
              (注：图示仅为清晰表达导出格式，公司数据为虚构，非企业真实信息）
            </p>
          </div>
          <div style="padding-top: 20px; padding-bottom: 30px;">
            <img src="../../assets/images/exportData.jpg" style=" width: 900px;display:block;margin-left: 100px">
          </div>
        </i-col>
      </Row>
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
  import areaList from '../area/areaList'
  import headNav from '../../components/headNav'

  export default {
    components: {
      areaList,
      headNav
    },
    name: 'exportData',
    data () {
      return {
        area: '',
        telphone: '',
        searchCount: 562341,
        totalPrice: 0,
        count: null,
        totalCount: true,
        salePrice: false,
        cityList: [
          {
            value: 'New York',
            label: '北京'
          },
          {
            value: 'London',
            label: '四川'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ]
      }
    },
    created () {
      this.$store.state.activePage = 3
    },
    watch: {
      count () {
        if (this.count < 20000) {
          this.totalCount = true
        } else {
          this.totalCount = false
          this.totalPrice = 0.005 * this.count
        }
      }
    },
    methods: {
      test: function () {
        alert(123)
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

  .footer {
    background-color: black;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .service {
    padding-bottom: 30px;
    background-color: whitesmoke;
  }

  .searchclass {
    background: url("../../assets/images/home-bg.png") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin-top: 55px;
  }

  .home-Header-logo img {
    height: 46px;
    vertical-align: middle;
  }

</style>
