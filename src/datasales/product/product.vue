<template>
  <div class="all">
    <div class="back"></div>
    <div class="body">
      <div class="body-left"></div>
      <div class="filter">
        <div class="base-filter">
          <div class="filterChild">
            <span>行业选择：</span>
            <Dropdown>
              <a @click="modal1 = true">
                全行业
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <Modal @on-ok="businessOk" v-model="modal1" title="行业筛选" :styles="{top: '140px'}">
                <h3>最多筛选5项</h3>
                <span>{{selectBusinessArr.length === 0 ? '':selectBusinessArr}}</span>
                <div class="modalBoxContent">
                  <CheckboxGroup @on-change="showBusinessSelect" v-model="selectBusinessArr" class="selectGroup">
                    <Checkbox label="IT互联网行业"></Checkbox>
                    <Checkbox label="制造业"></Checkbox>
                    <Checkbox label="机械行业"></Checkbox>
                    <Checkbox label="IT互联网行业1"></Checkbox>
                    <Checkbox label="制造业1"></Checkbox>
                    <Checkbox label="机械行业1"></Checkbox>
                    <Checkbox label="IT互联网行业2"></Checkbox>
                    <Checkbox label="制造业2"></Checkbox>
                    <Checkbox label="机械行业2"></Checkbox>
                    <Checkbox label="IT互联网行业3"></Checkbox>
                    <Checkbox label="制造业3"></Checkbox>
                    <Checkbox label="机械行业3"></Checkbox>
                    <Checkbox label="IT互联网行业4"></Checkbox>
                    <Checkbox label="制造业4"></Checkbox>
                    <Checkbox label="机械行业5"></Checkbox>
                  </CheckboxGroup>
                </div>
              </Modal>
            </Dropdown>
          </div>
          <div class="filterChild">
            <Row>
              <i-col span="12">
                <span>地区选择：</span>
              </i-col>
              <i-col span="12">
                <div style="padding-top: 11px">
                  <areaList></areaList>
                </div>
              </i-col>
            </Row>
          </div>
          <div class="filterChild" style="font-size: 14px">
            <span>为您找到：{{this.count}}客户资源</span>
          </div>
        </div>
        <div class="high-filter">
          <Button type="primary" @click="exportData" style="margin-right: 20px;">数据导出</Button>
          <Button type="primary" @click="drawer = true" style="cursor:pointer">高级筛选</Button>
          <Drawer title="筛选条件" :closable="false" v-model="drawer" width="600px">
            <div class="filterCondition">
              <div class="filterTitle">
                <span>成立时间：</span>
              </div>
              <CheckboxGroup class="selectGroup" @on-change="selectAllCreateTime" v-model="selectCreatetimeArr">
                <Checkbox label="全部"></Checkbox>
                <Checkbox label="1年内"></Checkbox>
                <Checkbox label="1-5年"></Checkbox>
                <Checkbox label="5-10年"></Checkbox>
                <Checkbox label="10-15年"></Checkbox>
                <Checkbox label="15年以上"></Checkbox>
              </CheckboxGroup>
            </div>
            <div class="filterCondition">
              <div class="filterTitle">
                <span>注册资本：</span>
              </div>
              <CheckboxGroup class="selectGroup" @on-change="selectAllRegisterMoney" v-model="selectRegisterMoneyArr">
                <Checkbox label="全部"></Checkbox>
                <Checkbox label="1-100万"></Checkbox>
                <Checkbox label="100-200万"></Checkbox>
                <Checkbox label="200-500万"></Checkbox>
                <Checkbox label="500-1000万"></Checkbox>
                <Checkbox label="1000万以上"></Checkbox>
              </CheckboxGroup>
            </div>
            <div class="filterCondition">
              <div class="filterTitle">
                <span>联系方式：</span>
              </div>
              <CheckboxGroup class="selectGroup" @on-change="selectAllContactMethod" v-model="selectContactMethodArr">
                <Checkbox label="全部"></Checkbox>
                <Checkbox label="手机"></Checkbox>
                <Checkbox label="固话"></Checkbox>
                <Checkbox label="邮箱"></Checkbox>
              </CheckboxGroup>
            </div>
            <div class="demo-drawer-footer">
              <Button style="margin-right: 8px" @click="drawer = false">取消</Button>
              <Button type="primary" @click="highSelect">确定</Button>
            </div>
          </Drawer>
        </div>
      </div>
      <div class="content">
        <Table @on-row-click="showCompanyDetail" ref="table" :max-height="tableHeight" border :columns="columns" :data="companyData"></Table>
      </div>
    </div>
    <div class="footer">
      <div style=";overflow: hidden;float: right;">
        <Page :total="count" :current="currentPage" show-sizer show-elevator show-total :page-size="pageSize"
              @on-change="pageChange" @on-page-size-change="sizeChange" style="float: right;"></Page>
      </div>
    </div>
    <company-detail ref="CompanyDetail"></company-detail>
  </div>
</template>
<script>
  import areaList from '../area/areaList'
  import headNav from '../../components/headNav'
  import companyDetail from './companyDetail'
  import test from '../../testJSON/test'
  import {getcompanyDataAPI} from '../../api/companyDataAPI'
  export default {
    components: {
      areaList,
      headNav,
      companyDetail
    },
    name: 'product',
    data () {
      return {
        currentPage: 1,
        count: undefined,
        pageSize: 10,
        tableHeight: window.innerHeight - 170,
        modal1: false,
        modal2: false,
        drawer: false,
        personalCard: false,
        select: [],
        selectBusinessArr: [],
        selectAreaArr: [],
        selectCreatetimeArr: [],
        selectRegisterMoneyArr: [],
        selectContactMethodArr: [],
        testVal: 123,
        value: true,
        totalItem: !this.$route.params.tableData ? 0 : JSON.parse(this.$route.params.tableData).length,
        columns: [
          {
            title: '公司名称',
            key: 'name',
            width: 350
          },
          {
            title: '行业类型',
            key: 'category',
            width: 200
          },
          {
            title: '企业关键人',
            key: 'contact',
            width: 200
          },
          {
            title: '联系方式',
            key: 'tel',
            width: 200
          },
          {
            title: '邮箱',
            key: 'email',
            width: 200
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        companyData: ''
      }
    },
    created () {
      this.companyData = test.data
      this.$store.state.activePage = 2
      this.count = this.companyData.length
    },
    mounted () {
      window.onresize = () => {
        this.tableHeight = window.innerHeight - 170
      }
    },
    methods: {
      getCompanyData (params = {}) {
        params.page = this.currentPage
        params.size = this.pageSize
        params.keyword = this.keyword
        getcompanyDataAPI(params).then(res => {
          this.companyData = res.results.data
        }).catch(error => {
          console.log(error)
        })
      },
      pageChange (page) {
        this.currentPage = page
        // 调用请求数据接口
      },
      sizeChange (size) {
        this.pageSize = size
        // 调用请求数据接口
      },
      showCompanyDetail: function (data) {
        console.log(data)
        this.$refs.CompanyDetail.showCompanyDetail(data)
      },
      exportData: function () {
        console.log(window.document.location.href)
        this.$store.state.activePage = 3
        this.$router.push('/exportData')
      },
      showBusinessSelect: function () {
        if (this.selectBusinessArr.length > 5) {
          alert('选择了超过5个的筛选条件')
          this.selectBusinessArr.pop()
        }
      },
      selectAllCreateTime: function (event) {
        if (event[event.length - 1] === '全部') {
          const len = this.selectCreatetimeArr.length
          const arr = this.selectCreatetimeArr.reverse()
          for (let i = 0; i < len - 1; i++) {
            arr.pop()
          }
          this.selectCreatetimeArr = arr
        }
        if (event.length === 2 && event[0] === '全部') {
          this.selectCreatetimeArr.reverse().pop()
        }
      },
      selectAllRegisterMoney: function (event) {
        if (event[event.length - 1] === '全部') {
          const len = this.selectRegisterMoneyArr.length
          const arr = this.selectRegisterMoneyArr.reverse()
          for (let i = 0; i < len - 1; i++) {
            arr.pop()
          }
          this.selectRegisterMoneyArr = arr
        }
        if (event.length === 2 && event[0] === '全部') {
          this.selectRegisterMoneyArr.reverse().pop()
        }
      },
      selectAllContactMethod: function (event) {
        if (event[event.length - 1] === '全部') {
          const len = this.selectContactMethodArr.length
          const arr = this.selectContactMethodArr.reverse()
          for (let i = 0; i < len - 1; i++) {
            arr.pop()
          }
          this.selectContactMethodArr = arr
        }
        if (event.length === 2 && event[0] === '全部') {
          this.selectContactMethodArr.reverse().pop()
        }
      },
      showVipPrivilege: function () {
        this.$router.push('/member')
      },
      backToMain: function () {
        this.$router.push('/')
      },
      loginOut: function () {
        this.$store.state.isLogin = false
        this.$router.push('/')
      },
      businessOk: function () {
        // 调用查询接口，参数为选择的行业
        alert(this.selectBusinessArr)
        // 需要向后端传参数，数字格式，约定1，2，3代表什么意义，this.selectBusinessArr
        this.$Message.info('服务端错误')
      },
      areaOk: function () {
        alert(this.selectAreaArr)
        this.$Message.info('服务端错误')
      },
      highSelect: function () {
        alert(this.selectCreatetimeArr)
        alert(this.selectRegisterMoneyArr)
        alert(this.selectContactMethodArr)
        this.$Notice.info({title: 'Tips', desc: '服务端错误'})
        this.drawer = false
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

  .back {
    background-color: #e6e9f0;
    width: 100%;
    height: 10px;
    position: fixed;
    top: 55px;
    z-index: -999;
  }

  .body {
    height: 100%;
    width: 100%;
    position: relative;
    top: 65px;
  }

  .body-left {
    height: 100vh;
    width: 10px;
    background-color: #e6e9f0;
    position: fixed;
    left: 0;
    top: 65px;
  }

  .filter {
    position: fixed;
    top: 65px;
    height: 55px;
    width: 99%;
    background-color: white;
    border-bottom: 1px solid #00aaef;
    font-size: 16px;
    text-align: center;
    line-height: 55px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    z-index: -999;
  }

  .base-filter {
    display: flex;
  }

  .high-filter {
    margin-right: 30px;
  }

  .filterChild {
    margin-left: 70px;
  }

  .footer {
    border: 1px solid #e1e1e6;
    background-color: white;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    right: 0;
    line-height: 50px;
    text-align: end;
    padding-right: 30px;
  }

  .filterCondition {
    margin-top: 20px;
  }

  .filterTitle {
    margin-bottom: 10px;
  }

  .demo-drawer-footer {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .content {
    position: absolute;
    width: 100%;
    z-index: -1000;
    top: 55px;
  }

  .personalCenter .personalCenter-content {
    display: none;
  }

  .personalCenter:hover .personalCenter-content {
    display: block;
    position: fixed;
    top: 55px;
    right: 0;
    width: 230px;
    z-index: 99;
  }
</style>
