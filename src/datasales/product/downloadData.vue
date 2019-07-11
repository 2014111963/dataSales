<template>
  <div style="background-color: #f8f8f9;">
    <div>
      <Row style="padding-bottom:10px;">
        <i-col span="8" offset="6">
          <Input v-model="keyword" search clearable placeholder="请输入线索名称" @on-click="showCompanies" @on-enter="showCompanies"/>
        </i-col>
        <i-col span="2" offset="6" >
          <Dropdown trigger="click" style="margin-left: 20px; float: right" @on-click="importAndExport">
            <Button type="primary">
              更多
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="import">导入数据</DropdownItem>
              <DropdownItem name="export" divided>导出数据</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </i-col>
      </Row>
      <Row>
        <i-col span="24">
          <i-table stripe ref="table" :height="tableHeight" :columns="leadColumns" :data="leadData" :loading="tableLoading"
                   @on-row-click="showLeadDetail">
          </i-table>
        </i-col>
      </Row>
      <Row style="padding-top:10px;">
        <i-col span="24">
          <div style=";overflow: hidden;float: right;">
            <Page :total="leadCount" :current="currentPage" show-sizer show-elevator show-total :page-size="pageSize"
                  :page-size-opts="[20, 30, 50, 100]" @on-change="pageChange" @on-page-size-change="sizeChange" style="float: right;"></Page>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import {getcompanyDataAPI} from '../../api/companyDataAPI'

  export default {
    name: 'downloadData',
    data () {
      return {
        formChoices: {},
        tableHeight: null,
        companyColumns: [],
        companyData: [],
        companyCount: undefined,
        currentPage: 1,
        pageSize: 20,
        createDrawer: false,
        tableLoading: false,
        keyword: '',
        timer: null
      }
    },
    mounted () {
      this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 155
      this.showCompanies()
    },
    watch: {
      keyword () {
        this.currentPage = 1
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.showCompanies()
        }, 400)
      }
    },
    methods: {
      importAndExport (name) {
        if (name === 'export') {
          this.$refs.table.exportCsv({
            filename: 'The original data'
          })
        } else if (name === 'import') {
          this.$refs.ImportLead.showImportLeadModel()
        }
      },
      showCompanies (params = {}) {
        this.tableLoading = true
        params.page = this.currentPage
        params.size = this.pageSize
        params.keyword = this.keyword
        getcompanyDataAPI(params).then(res => {
          this.leadData = res.results
          this.leadCount = res.count
          this.leadColumns = [
            {
              title: '公司名称',
              key: 'name'
            },
            {
              title: '联系人',
              key: 'position'
            },
            {
              title: '联系电话',
              key: 'company'
            },
            {
              title: '邮箱',
              key: 'tel'
            },
            {
              title: '地址',
              key: 'fixed_phone'
            }
          ]
          this.tableLoading = false
        }).catch(error => {
          console.log(error)
        })
      },
      pageChange (page) {
        this.currentPage = page
        this.showCompanies()
      },
      sizeChange (size) {
        this.pageSize = size
        this.showCompanies()
      }
    }
  }
</script>

<style scoped>

</style>
