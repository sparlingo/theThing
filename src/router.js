import Vue from 'vue'
import Router from 'vue-router'

import People from './views/People.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'people',
      component: People
    },
  ]
})
