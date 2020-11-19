import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path: "/user",
      //component: RenderRouterView,
      component: () => 
      import(/* webpackChunkName: "layout" */ ""),
      children: [
          {
            path: '/user',
            redirect: '/user/login'
          },
          {
              path: "/user/login",
              name: "login",
              component: () =>
                  import(/* webpackChunkName: "user" */ "")
          },
          {
              path: "/user/register",
              name: "login",
              component: () =>
                  import(/* webpackChunkName: "user" */ "")
          },
      ]
    },
    {
      path: "/home",
      component: () => 
      import(/* webpackChunkName: "layout" */ ""),
      children:[
          {
            path: "home",
            redirect: "home/bangumi"
          },
          {
              path: "/home/bangumi",
              name: "bangumi",
              component: () => import()
          }
          {
            path: "/home/discuss",
            name: "discuss",
            component: () => import()
          },
        {
        path: "/home/bgm/:id",
        name: "bgm",
        component: () => 
            import()

        },
      ]
    },
    {
        path: "/dashtable",
        name: "dashtable",
        componemt: () => import(),
        children:[
            {
                path:"/dashtable/bgm",
                name: "dt-bgm",
                component: () => import()
            },
            {
                path: "dashtable/discuss",
                name: "dt-dis",
                component: () => import()
            },
            {
                path: "/dashtable/user",
                name: "dt-user",
                componemt: () => import()
            }
        ]
    },
    {
      path: "*",
      name: "404",
      component: NotFound
        
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "")
    },
    
  ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  
  export default router;
  