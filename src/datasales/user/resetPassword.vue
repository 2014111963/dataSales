<template>
  <div>
    <head-nav></head-nav>
    <div class="register-bg">
      <h1 @click="index" style="font-size: 38px; color: red;padding-top: 150px; cursor:pointer">DataSales</h1>
      <Card dis-hover class="resetpasswordcenter">
        <p slot="title" style="text-align: center; font-size: 20px">DataSales重置密码</p>
        <Form ref="resetPasswordForm" :model="resetPasswordForm" :rules="ruleInline" >
          <FormItem prop="username">
            <i-input size="large" type="tel" v-model="resetPasswordForm.username" placeholder="手机号码">
              <Icon type="ios-phone-portrait" slot="prepend"/>
            </i-input>
          </FormItem>
          <FormItem prop="smsCode">
            <Row>
              <i-col span="14">
                <i-input size="large" v-model="resetPasswordForm.smsCode" placeholder="短信验证码">
                  <Icon type="logo-codepen" slot="prepend"></Icon>
                </i-input>
              </i-col>
              <i-col span="9" offset="1">
                <Button size="large" style="width: 100%" @click="sendSMSCode" :disabled="sendSMSButton.disable" :loading="sendSMSButton.loading">{{this.sendSMSButton.msg}}</Button>
              </i-col>
            </Row>
          </FormItem>
          <FormItem prop="password">
            <i-input size="large" type="password" v-model="resetPasswordForm.password" placeholder="新密码">
              <Icon type="ios-lock" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem prop="repassword">
            <i-input size="large" type="password" v-model="resetPasswordForm.repassword" placeholder="重复新密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem style="text-align: center">
            <Button size="large" style="width: 100%;" type="primary" @click="handleResetPassword">确定</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
  import {sendSMSCodeAPI, resetPasswordAPI} from '../../api/userAPI'
  import headNav from '../../components/headNav'
  export default {
    components: {
      headNav
    },
    name: 'resetPassword',
    data () {
      return {
        resetPasswordForm: {
          username: '',
          password: '',
          repassword: '',
          smsCode: ''
        },
        ruleInline: {
          username: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          smsCode: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {type: 'string', min: 8, message: '密码长度不能低于8位', trigger: 'blur'}
          ],
          repassword: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {type: 'string', min: 8, message: '密码长度不能低于8位', trigger: 'blur'}
          ]
        },
        sendSMSButton: {
          disable: false,
          msg: '获取验证码',
          loading: false,
          countDown: 60
        }
      }
    },
    methods: {
      index () {
        this.$router.push('/')
      },
      captcha () {
        return new Promise((resolve, reject) => {
          this.$recaptcha('sendSMS').then((token) => {
            resolve(token)
          }).catch((error) => {
            reject(error)
          })
        })
      },
      resetSendSMSButton () {
        this.sendSMSButton.msg = '获取验证码'
        this.sendSMSButton.loading = false
        this.sendSMSButton.disable = false
        this.sendSMSButton.countDown = 60
      },
      sendSMSCode () {
        let mobile = this.resetPasswordForm.username
        if (!(/^1[3456789]\d{9}$/.test(mobile))) {
          this.$Message.error('手机号码有误，请重填')
          return
        } else {
          this.sendSMSButton.msg = '发送中'
          this.sendSMSButton.loading = true
        }
        this.captcha().then(token => {
          let data = {'recaptchaToken': token, 'mobile': mobile, 'action': 'resetPassword'}
          sendSMSCodeAPI(data).then(res => {
            this.sendSMSButton.loading = false
            this.sendSMSButton.disable = true
            this.sendSMSButton.msg = '重新发送(' + this.sendSMSButton.countDown + ')'
            if (res.code === 200) {
              this.$Message.success('验证码发送成功')
              let timer = setInterval(() => {
                if (this.sendSMSButton.countDown > 0 && this.sendSMSButton.countDown <= 60) {
                  this.sendSMSButton.countDown--
                  if (this.sendSMSButton.countDown !== 0) {
                    this.sendSMSButton.msg = '重新发送(' + this.sendSMSButton.countDown + ')'
                  } else {
                    clearInterval(timer)
                    this.resetSendSMSButton()
                  }
                }
              }, 1000)
            } else {
              this.resetSendSMSButton()
              this.$Message.error(res.msg)
            }
          }).catch(error => {
            this.resetSendSMSButton()
            this.$Message.error('服务端错误')
            console.log(error)
          })
        }).catch(error => {
          this.resetSendSMSButton()
          this.$Message.error('网络错误，请刷新页面后重试')
          console.log(error)
        })
      },
      handleResetPassword () {
        if (this.resetPasswordForm.password === this.resetPasswordForm.repassword) {
          if (this.resetPasswordForm.username !== '' && this.resetPasswordForm.password !== '' && this.resetPasswordForm.smsCode !== '') {
            resetPasswordAPI(this.resetPasswordForm).then(res => {
              if (res.code === 200) {
                this.$Message.success('重置成功')
                this.$router.push('/login')
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
  .resetpasswordcenter {
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
