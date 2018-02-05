import Vue from 'vue'
import Router from 'vue-router'
import AllCanteen from '@/components/AllCanteen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllCanteen',
      component: AllCanteen
    }
  ]
})
