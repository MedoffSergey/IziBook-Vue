import Vue from 'vue'
import Router from 'vue-router'

import vLogin from '../components/login/v-login'


Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: vLogin
    }

  ]
})

export default router;
