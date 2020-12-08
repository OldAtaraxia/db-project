import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import VideoList from '../views/videos/VideoList.vue'
import VideoEdit from '../views/videos/VideoEdit.vue'
import UserList from '../views/users/UserList.vue'
import UserEdit from '../views/users/UserEdit.vue'


Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'videos-list',
        path: '/videos/list',
        component: VideoList
      },
      {
        name: 'videos-edit',
        path: '/videos/edit/:id',
        component: VideoEdit,
        props: true
      },
      {
        name: 'videos-create',
        path: '/videos/create',
        component: VideoEdit
      },
      {
        name: 'users-list',
        path: '/users/list',
        component: UserList
      },
      {
        name: 'users-edit',
        path: '/users/edit/:id',
        component: UserEdit,
        props: true
      },
      {
        name: 'users-create',
        path: '/users/create',
        component: UserEdit
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
