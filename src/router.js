import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import ForgotPasswordFormStep1 from './components/ForgotPasswordFormStep1.vue'
import ForgotPasswordFormStep2 from './components/ForgotPasswordFormStep2.vue'
import ForgotPasswordFormStep3 from './components/ForgotPasswordFormStep3.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },    
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
      children:[
      {
        path: '/forgot-password/step-1',
        name: 'step-1',
        component: ForgotPasswordFormStep1
      },
      {
        path: '/forgot-password/step-2',
        name: 'step-2',
        component: ForgotPasswordFormStep2
      },
      {
        path: '/forgot-password/step-3',
        name: 'step-3',
        component: ForgotPasswordFormStep3
      },  

      ]
    },    
   

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
