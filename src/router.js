import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/TheHome';
import Default from './pages/TheDefaultPage';
import ThePageNotFound from './pages/ThePageNotFound';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: '',
      component: Default
    },
    {
      path: '/pagenotfound',
      name: 'pagenotfound',
      component: ThePageNotFound
    },

  ]
})


// Vue.use(Router);

//   const routers=[
//     {path:'/',component: Default},
//     {path:'/home',component: home},
//     {path:'/PageNotPage',component: ThePageNotFound},
    
//   ];

//   export default new Router({
//       routers,
//       mode:'history'
//     });