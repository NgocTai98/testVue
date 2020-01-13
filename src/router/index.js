import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/components/Category'
import listUser from '@/components/listUser'
import EditStudent from '@/components/EditStudent'
import AddStudent from '@/components/AddStudent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listUser',
      component: listUser
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/editStudent',
      name: 'EditStudent',
      component: EditStudent
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent
    },
  ]
})
