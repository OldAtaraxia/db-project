import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path: "/user",
      //component: RenderRouterView,
      component: () => import(/* webpackChunkName: "layout" */ "./Layout/UserLayout"),
      children: [
          {
              path: "/user/login",
              name: "login",
              component: () =>
                  import(/* webpackChunkName: "user" */ "./view/user/Login")
          },
          {
              path: "/user/register",
              name: "login",
              component: () =>
                  import(/* webpackChunkName: "user" */ "./view/user/Register")
          },
          {
              path: "/user/myspace",
              componemt: () => import(/* webpackChunkName: "user" */ "./view/user/Myspace"),
              children: [
                  
              ]
          }
      ]
    },
    {
      path: "/home",
      component: () => 
      import(/* webpackChunkName: "layout" */ "./Layout/HomeLayout"),
      children:[
          {
            path: "home",
            redirect: "home/bangumi"
          },
          {
              path: "/home/bangumi",
              name: "bangumi",
              component: () => import(/* webpackChunkName: "user" */ "./view/home/Bangumi")
          },
          {
            path: "/home/discuss",
            name: "discuss",
            component: () => import(/* webpackChunkName: "user" */ "./view/home/Discuss")
          },
        {
        path: "/home/bgm/:id",
        name: "bgm",
        component: () => 
            import(/* webpackChunkName: "user" */ "./view/home/Bgm")

        },
      ]
    },
    {
        path: "/dashtable",
        name: "dashtable",
        componemt: () => import(/* webpackChunkName: "layout" */ "./Layout/Dashtable"),
        children:[
            {
                path:"/dashtable/bgm",
                name: "dt-bgm",
                component: () => import(/* webpackChunkName: "user" */ "./view/dashtable/Bgm")
            },
            {
                path: "dashtable/discuss",
                name: "dt-dis",
                component: () => import(/* webpackChunkName: "user" */ "./view/dashtable/Discuss")
            },
            {
                path: "/dashtable/user",
                name: "dt-user",
                componemt: () => import(/* webpackChunkName: "user" */ "./view/dashtable/User")
            }
        ]
    },
    {
      path: "*",
      name: "404",
      component: () => 
        import(/* webpackChunkName: "user" */ "./view/404")
        
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "./view/About")
    },
    {
        path: "/",
        redirect: "/home/bangumi"
    }
    
  ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  
  export default router;
  