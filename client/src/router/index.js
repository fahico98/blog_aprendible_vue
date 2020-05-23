
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'home',
      component: {
         template: "<div><h4>Inicio...</h4></div>"
      }
   },
   {
      path: '/nosotros',
      name: 'Nosotros',
      component: {
         template: "<div><h4>Nosotros...</h4></div>"
      }
   },
   {
      path: '/archivo',
      name: 'Archivo',
      component: {
         template: "<div><h4>Archivo...</h4></div>"
      }
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
