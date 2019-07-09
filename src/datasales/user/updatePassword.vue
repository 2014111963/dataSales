<template>
  <div>
    <div class="register-bg">
      <h1 @click="index" style="font-size: 38px; color: red;padding-top: 150px; cursor:pointer">DataSales</h1>
      <Card dis-hover class="updatepasswordcenter">
        <p slot="title" style="text-align: center; font-size: 20px">客户堂修改密码</p>
        <Form :model="updatePasswordForm" :rules="ruleInline">
          <FormItem prop="oldPassword">
            <i-input size="large" type="password" v-model="updatePasswordForm.oldPassword" placeholder="旧密码">
              <Icon type="ios-lock" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem prop="newPassword">
            <i-input size="large" type="password" v-model="updatePasswordForm.newPassword" placeholder="新密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem prop="repassword">
            <i-input size="large" type="password" v-model="updatePasswordForm.repassword" placeholder="重复新密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem style="text-align: center">
            <Button style="width: 100%" type="primary" @click="updatePassword">确定</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
  import {updatePasswordAPI} from '../../api/userAPI'
  export default {
    name: 'updatePassword',
    data () {
      return {
        updatePasswordForm: {
          oldPassword: '',
          newPassword: '',
          repassword: ''
        },
        ruleInline: {
          oldPassword: [
            {required: true, message: '请填写旧密码', trigger: 'blur'},
            {type: 'string', min: 3, message: '密码长度不能低于8位', trigger: 'blur'}
          ],
          newPassword: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
            {type: 'string', min: 8, message: '密码长度不能低于8位', trigger: 'blur'}
          ],
          repassword: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {type: 'string', min: 8, message: '密码长度不能低于8位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      index () {
        this.$router.push('/')
      },
      updatePassword () {
        if (this.updatePasswordForm.newPassword === this.updatePasswordForm.repassword) {
          if (this.updatePasswordForm.oldPassword !== '' || this.updatePasswordForm.newPassword !== '') {
            updatePasswordAPI(this.updatePasswordForm).then(res => {
              if (res.code === 200) {
                this.$Message.success('更新成功')
                this.updatePasswordForm = {
                  oldPassword: '',
                  newPassword: '',
                  repassword: ''
                }
              } else {
                this.$Message.error(res.msg)
              }
            }).catch(error => {
              this.$Message.error('服务错误')
              console.log(error)
            })
          } else {
            this.$Message.warning('必填项不可为空')
          }
        } else {
          this.$Message.warning('两次密码输入不一致')
        }
      }
    }
  }
</script>

<style scoped>
  .updatepasswordcenter {
    width: 320px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .register-bg {
    background-image: url('../../assets/images/register-bg.svg');
    background-color: #f8f8f9;
    height: 100vh;
    overflow: hidden;
  }
</style>
