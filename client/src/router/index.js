
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home";
import About from "../views/About";
import Archive from "../views/Archive";
import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/nosotros',
      name: 'nosotros',
      component: About
   },
   {
      path: '/archivo',
      name: 'archivo',
      component: Archive
   },
   {
      path: '/contacto',
      name: 'contacto',
      component: Contact
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
   linkExactActiveClass: "v-tab--active"
})

export default router
