import { createRouter, createWebHistory } from 'vue-router'
import userList from '../pages/user-list.vue'

const routes = [
  {
    path: '/online-dating-app',
    name: 'userList',
    component: userList
  },
  {
    path: '/message-list',
    name: 'message-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/message-list.vue')
  },
  {
    path:"/user/:id",
    name:"user",
    component: ()=>import("../pages/user-detail.vue")
  },
  {
    path:"/user/:id/chat",
    name:"chat",
    component: ()=>import("../pages/chat.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
