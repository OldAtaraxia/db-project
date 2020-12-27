<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          :to="item.link"
          v-for="item in items"
          :key="item.text"
          
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">订阅</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>


        <v-list-item
          class="mt-4"
          v-if="$store.state.auth.user"
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">{{$store.state.auth.user.username}}</v-list-item-title>
        </v-list-item>
        <v-list-item
          class="mt-4"
          @click="isShowLoginForm=!isShowLoginForm"
          v-else
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">用户登录</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Gensokyo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout
        row
        align-center
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="搜索..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-app-bar>

    <v-content>
      <nuxt-child />
    </v-content>

    <v-dialog
      v-model="isShowLoginForm"
      width="600"
    >
    <v-card>
        <v-card-title class="headline grey lighten-2">
          用户登录
        </v-card-title>
      <v-form class="pa-4" @submit.prevent="login" v-if="!reveal">
          <v-text-field
            label="用户名"
            v-model="loginModel.username"
            outlined
          ></v-text-field>
          <v-text-field
            label="密码"
            v-model="loginModel.password"
            type="password"
            outlined
          ></v-text-field>

          <v-btn color="success" type="sbumit">登录</v-btn>
          <v-btn color="warning" @click="reveal = true">立刻注册</v-btn>
        </v-form>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >

          <v-form class="pa-4" @submit.prevent="register">
            <v-text-field
              label="用户名"
              v-model="registerModel.username"
              outlined
            ></v-text-field>
            <v-text-field
              label="密码"
              v-model="registerModel.password"
              type="password"
              outlined
            ></v-text-field>
            <v-text-field
              label="邮箱地址"
              outlined
            ></v-text-field>
            <v-btn color="success" type="submit">注册</v-btn>
            <v-btn color="warning" @click="reveal=false">返回</v-btn>
        </v-form>
           
          </v-card>
      </v-expand-transition>
        
      </v-card>
    </v-dialog>

   
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      reveal: false,
      isShowLoginForm: true,
      loginModel: {},
      registerModel: {},
      drawer: null,
      items: [
        { icon: 'home', text: '首页', link: '/'},
        { icon: 'trending_up', text: '视频列表', link: '/animes' },
        { icon: 'subscriptions', text: '正在热议', link: '/comments' },
        
      ],
      items2: [
        
      ],
    }),
    methods: {
      async login(){
        await this.$auth.loginWith('local', {
          data: this.loginModel
        })
        this.$message.success('登录成功')
        this.isShowLoginForm = false
      },
      async register(){
        console.log(this.registerModel)
        await this.$axios.post('auth/register', this.registerModel);
        console.log('注册成功')
      }
    },
    created () {
      this.$vuetify.theme.dark = false
    },
  }
</script>

