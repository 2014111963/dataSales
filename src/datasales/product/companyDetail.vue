<template>
  <div>
    <Drawer
      title="企业工商详情"
      v-model="showDetail"
      width="900px"
      :mask-closable="false"
    >
      <div style="font-size: 17px">
        <span>{{companyDetails.name}}</span>
        <div style="font-size: 18px">
          <Icon style="color: red" type="md-remove-circle"/>
          <Strong> 基础资料 </Strong>
        </div>
        <div style="padding-top: 10px">
          <hr/>
        </div>
        <div style="padding-top: 10px; font-size: 15px">
          <div class="companyDetail">
            <Row>
              <p>
                <i-col span="3">
                  客户名称:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.name}}</span><span v-if="!companyDetails.name">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  所属地区:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.province}}</span><span v-if="!companyDetails.province">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  行业类型:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.category}}</span><span v-if="!companyDetails.category">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  联系电话:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.tel}}</span><span v-if="!companyDetails.tel">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  人员规模:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.number_of_staff}}</span><span v-if="!companyDetails.number_of_staff">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  注册资本:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.capital}}</span><span v-if="!companyDetails.capital">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  注册时间:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.established}}</span><span v-if="!companyDetails.established">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  客户地址:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.address}}</span><span v-if="!companyDetails.address">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  经营范围:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.business_scope}}</span><span v-if="!companyDetails.business_scope">未知</span>
                </i-col>
              </p>
            </Row>
          </div>
        </div>
      </div>
      <div style="font-size: 18px">
        <div style="font-size: 16px;padding-top: 20px">
          <Icon style="color: red" type="md-remove-circle"/>
          <Strong> 企业关键人及联系方式 </Strong>
        </div>
        <div style="padding-top: 10px">
          <hr/>
        </div>
        <div style="padding-top: 10px; font-size: 15px">
          <div class="companyDetail">
            <Row>
              <p>
                <i-col span="3">
                  姓名:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.contact}}</span><span v-if="!companyDetails.contact">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  职位:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.position}}</span><span v-if="!companyDetails.position">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  固定电话:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.fixed_telephone}}</span><span v-if="!companyDetails.fixed_telephone">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  手机号:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.tel}}</span><span v-if="!companyDetails.tel">未知</span>
                </i-col>
              </p>
            </Row>
            <Row>
              <p>
                <i-col span="3">
                  邮箱:
                </i-col>
                <i-col span="17">
                  <span>{{companyDetails.email}}</span><span v-if="!companyDetails.email">未知</span>
                </i-col>
              </p>
            </Row>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script>
  export default {
    name: 'companyDetail',
    data () {
      return {
        showDetail: false,
        companyDetails: {}
      }
    },
    methods: {
      showCompanyDetail (data) {
        this.companyDetails = data
        console.log(data)
        this.showDetail = true
      }
    }
  }
</script>

<style scoped>
  .companyDetail {
    padding-top: 4px;
  }

  .companyDetail p {
    padding-top: 10px;
  }

</style>
