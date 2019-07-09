import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {
    },
    isLogin: false,
    activePage: undefined,
    memberLevel: 2,
    expirationDate: '2019/06/29'
  },
  mutations: {
    setUserProfile (state, data) {
      localStorage.userProfile = JSON.stringify(data)
      this.state.userProfile = data
      this.state.isLogin = true
    },
    clearUserProfile (state) {
      localStorage.removeItem('userProfile')
      state.userProfile = {}
      this.state.isLogin = false
    }
  }
})
