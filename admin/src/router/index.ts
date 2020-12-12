import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import VideoList from '../views/videos/VideoList.vue'
import VideoEdit from '../views/videos/VideoEdit.vue'
import UserList from '../views/users/UserList.vue'
import UserEdit from '../views/users/UserEdit.vue'
import EpisodeEdit from '../views/episodes/EpisodeEdit.vue'
import EpisodeList from '../views/episodes/EpisodeList.vue'


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
        name: 'video-episodes',
        path: 'videos/episodes/:id',
        component: EpisodeList
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
        name: 'videos-edit-create',
        path: '/videos/edit/create/:id',
        component: EpisodeEdit,
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
      },
      {
        name: 'episodes-list',
        path: '/episodes/list',
        component: EpisodeList
      },
      {
        name: 'episodes-edit',
        path: '/episodes/edit/:id',
        component: EpisodeEdit,
        props: true
      },
      {
        name: 'episodes-create',
        path: '/episodes/create',
        component: EpisodeEdit
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
