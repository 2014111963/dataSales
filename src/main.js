// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuex from 'vuex'
import store from './store/index'
import {VueReCaptcha} from 'vue-recaptcha-v3'
import cascaderMulti from 'cascader-multi'

Vue.use(cascaderMulti)
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuex)
Vue.use(VueReCaptcha, {
  siteKey: '6Lc7y6oUAAAAACBDK21voUVFYNql-sT46JT_TkhQ',
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }

})
