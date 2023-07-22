import Vue from 'vue'
import Router from 'vue-router'
import HelloHwy from '@/components/HelloHwy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hellohwy',
      component: HelloHwy
    }
  ]
})
