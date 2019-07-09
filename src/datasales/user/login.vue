<template>
  <div class="register-bg">
    <div style="padding-top: 150px;" >
    <span @click="index" style="font-size: 38px; color: red; cursor:pointer">
      客户堂</span>
    </div>
    <p>8888</p>
    <Card dis-hover v-show="cardStatus.login" class="center">
      <p slot="title" style="text-align: center; font-size: 20px">登录客户堂</p>
      <Form ref="formInline" :model="loginForm" :rules="loginRuleInline">
        <FormItem prop="username">
          <i-input size="large" type="tel" v-model="loginForm.username" placeholder="请输入手机号码">
            <Icon type="ios-person" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password">
          <i-input size="large" type="password" v-model="loginForm.password" placeholder="请输入密码">
            <Icon type="ios-lock" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem style="text-align: center">
          <Button size="large" style="float:left;" @click="iWantRegister">注册帐号？</Button>
          <a @click="resetPassword" style="font-size: 15px;">忘记密码？</a>
          <Button size="large" type="primary" @click="handleLoginClick" style="float: right">登录</Button>
        </FormItem>
      </Form>
    </Card>

    <Card dis-hover v-show="cardStatus.register" class="center">
      <p slot="title" style="text-align: center; font-size: 20px">DataSales账号注册</p>
      <Form ref="registerForm" :model="registerForm" :rules="registerRuleInline">
        <FormItem prop="username">
          <i-input size="large" type="tel" v-model="registerForm.username" placeholder="手机号码">
            <Icon type="ios-phone-portrait" slot="prepend"/>
          </i-input>
        </FormItem>
        <FormItem prop="smsCode">
          <Row>
            <i-col span="14">
              <i-input size="large" v-model="registerForm.smsCode" placeholder="短信验证码">
                <Icon type="logo-codepen" slot="prepend"></Icon>
              </i-input>
            </i-col>
            <i-col span="9" offset="1">
              <Button size="large" style="width: 100%" @click="sendSMSCode" :disabled="sendSMSButton.disable" :loading="sendSMSButton.loading">{{this.sendSMSButton.msg}}</Button>
            </i-col>
          </Row>
        </FormItem>
        <FormItem prop="password">
          <i-input size="large" type="password" v-model="registerForm.password" placeholder="密码">
            <Icon type="ios-lock" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="repassword">
          <i-input size="large" type="password" v-model="registerForm.repassword" placeholder="重复密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem style="text-align: center">
          <Button size="large" style="float:left;" @click="iWantLogin">已有帐号？</Button>
          <Button size="large" style="float: right" @click="handleRegisterClick" type="primary">注册</Button>
        </FormItem>
      </Form>
    </Card>

  </div>
</template>
<script>
  import {loginAPI, registerAPI, sendSMSCodeAPI} from '../../api/userAPI'
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: '12',
          password: ''
        },
        registerForm: {
          username: '',
          password: '',
          repassword: '',
          smsCode: ''
        },
        registerRuleInline: {
          username: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          smsCode: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 3, message: '密码长度不能低于8位', trigger: 'blur'}
          ]
        },
        loginRuleInline: {
          username: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 3, message: '密码长度不能低于8位', trigger: 'blur'}
          ]
        },
        cardStatus: {
          login: true,
          register: false
        },
        sendSMSButton: {
          disable: false,
          msg: '获取验证码',
          loading: false,
          countDown: 60
        }
      }
    },
    created () {
      this.$store.state.activePage = 5
    },
    mounted () {
      this.loginForm.username = this.$route.params.telephone
      this.registerForm.username = this.$route.params.telephone
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
      sendSMSCode () {
        let mobile = this.registerForm.username
        if (!(/^1[3456789]\d{9}$/.test(mobile))) {
          this.$Message.error('手机号码有误，请重填')
          return
        } else {
          this.sendSMSButton.msg = '发送中'
          this.sendSMSButton.loading = true
        }
        this.captcha().then(token => {
          let data = {'recaptchaToken': token, 'mobile': mobile, 'action': 'register'}
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
                  }
                }
              }, 1000)
            } else {
              this.$Message.error(res.msg)
            }
            this.sendSMSButton.msg = '获取验证码'
            this.sendSMSButton.disable = false
            this.sendSMSButton.countDown = 60
          }).catch(error => {
            this.sendSMSButton.loading = false
            this.sendSMSButton.msg = '获取验证码'
            this.sendSMSButton.disable = false
            this.sendSMSButton.countDown = 60
            this.$Message.error('服务端错误')
            console.log(error)
          })
        }).catch(error => {
          this.$Message.error('网络错误，请刷新页面后重试')
          console.log(error)
        })
      },
      resetPassword () {
        this.$router.push('/resetPassword')
      },
      handleLoginClick () {
        if (this.loginForm.username !== '' && this.loginForm.password !== '') {
          loginAPI(this.loginForm).then(res => {
            console.log(res)
            if (res.code === 200) {
              this.$Message.success('登录成功')
              this.$store.state.isLogin = true
              this.$store.commit('setUserProfile', res.data)
              console.log(res.data)
              if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect)
              } else {
                this.$router.push('/')
              }
            } else {
              this.$Message.error(res.msg)
            }
          }).catch(error => {
            this.$Message.error('服务端错误')
            console.log(error)
          })
        } else {
          this.$Message.warning('帐号或者密码不能为空')
        }
      },
      handleRegisterClick () {
        if (this.registerForm.password === this.registerForm.repassword) {
          if (this.registerForm.username !== '' && this.registerForm.password !== '') {
            registerAPI(this.registerForm).then(res => {
              if (res.code === 200) {
                this.$Message.success('注册成功')
                this.iWantLogin()
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
      },
      iWantRegister () {
        this.cardStatus.register = true
        this.cardStatus.login = false
      },
      iWantLogin () {
        this.cardStatus.login = true
        this.cardStatus.register = false
      }
    }
  }
</script>

<style scoped>
  .center {
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
