import Vue from 'vue'
import VueRouter from 'vue-router'
import listUser from '@/components/listUser'

import EditStudent from '@/components/EditStudent'
import AddStudent from '@/components/AddStudent'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
     
    {
      path: '/',
      name: 'listUser',
      component: listUser,      
    },
    {
      path: '/editStudent/:idStudent',
      name: 'EditStudent',
      component: EditStudent,
      props: true
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent,
      
    },
    
  ]
})
