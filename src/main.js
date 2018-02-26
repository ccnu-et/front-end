// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
window.router = router
import store from './store'
window.store = store
import VModal from 'vue-js-modal'
import SuiVue from 'semantic-ui-vue'

require('./assets/style.styl')

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.component('all-canteen', require('./components/AllCanteen'))
Vue.use(VModal, { componentName: 'navbar-modal' })
Vue.use(SuiVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
