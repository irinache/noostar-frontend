import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import ForgotPasswordFormStep1 from './components/ForgotPasswordFormStep1.vue'
import ForgotPasswordFormStep2 from './components/ForgotPasswordFormStep2.vue'
import ForgotPasswordFormStep3 from './components/ForgotPasswordFormStep3.vue'
import Register from './components/Register.vue'
import RegisterFormStep1 from './components/RegisterFormStep1.vue'
import RegisterFormStep2 from './components/RegisterFormStep2.vue'

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
        name: 'forgot-password-step-1',
        component: ForgotPasswordFormStep1
      },
      {
        path: '/forgot-password/step-2',
        name: 'forgot-password-step-2',
        component: ForgotPasswordFormStep2
      },
      {
        path: '/forgot-password/step-3',
        name: 'forgot-password-step-3',
        component: ForgotPasswordFormStep3
      },  

      ]
    },  
    {
      path: '/register',
      name: 'register',
      component: Register,
      children:[
      {
        path: '/register/step-1',
        name: 'register-step-1',
        component: RegisterFormStep1
      },
      {
        path: '/register/step-2',
        name: 'register-step-2',
        component: RegisterFormStep2
      },
      ]
    },

   

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
