import Vue from 'vue'
import Router from 'vue-router'

import Persons from './views/Persons.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'persons',
      component: Persons
    },
  ]
})
