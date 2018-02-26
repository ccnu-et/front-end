import Vue from 'vue'
import Router from 'vue-router'
import AllCanteen from '@/components/AllCanteen'
import StuCanteen from '@/components/StuCanteen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllCanteen',
      component: AllCanteen
    },
    {
      path: '/stu',
      name: 'StuCanteen',
      component: StuCanteen
    }
  ]
})
