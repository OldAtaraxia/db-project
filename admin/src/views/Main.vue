<template>
  <el-container :direction="vertical">
      <el-header height="">
          <h3>Gensokyo后台</h3>
      </el-header>
      <el-container :direction="horizontal">
          <el-aside width="200px">
              
              <el-menu mode="vertical" style="height: 100vh" :default-active="$route.path" router >
                  <el-submenu v-for="(submenus, index) in menu.items"
                      :index="index + 1"
                      :key="`menu-key-${index}`">
                      <template slot="title">{{submenus.title}}</template>
                      <el-menu-item v-for="(item, subIndex) in submenus.items"
                          :index="item.path"
                          :key="`menu-key-${index}-${subIndex}`">
                              {{item.title}}
                      </el-menu-item>
                  </el-submenu>
              </el-menu>
              
              
          </el-aside>
          <el-container :direction="vertical">
              <el-main height="">
                  <router-view :key="$route.path"></router-view>
              </el-main>
              <el-footer height="">
                  <!-- Footer content -->
              </el-footer>
          </el-container>
      </el-container>
  </el-container>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
})
export default class Main extends Vue {
    menu={
        items: [
            {
                title:'内容管理',
                items:[
                    {
                        title: '首页',
                        path: '/'
                    },
                    {   
                        title: '视频管理',
                        path: '/videos/list'
                     },
                    {
                        title: '分集管理',
                        path: '/episodes/list'
                    }
                ]
            },
            {
                title:'运营管理',
                items:[
                    {   
                        title: '用户管理',
                        path: '/users/list'
                     },
                ]
            },
        ]
    }
}
</script>

<style>
body{
    margin: 0;
}
</style>