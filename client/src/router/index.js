
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../views/Home";
import About from "../views/About";
import Archive from "../views/Archive";
import Contact from "../views/Contact";
import ShowPost from "../views/ShowPost";
import ShowCategoryPosts from "../views/ShowCategoryPosts";
import ShowTagPosts from "../views/ShowTagPosts";

import Component404 from "../views/Component404";

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/nosotros',
      name: 'about',
      component: About
   },
   {
      path: '/archivo',
      name: 'archive',
      component: Archive
   },
   {
      path: '/contacto',
      name: 'contact',
      component: Contact
   },
   {
      path: '/blog/:url',
      name: 'show_post',
      component: ShowPost,
      props: true
   },
   {
      path: '/categorias/:category',
      name: 'show_category_posts',
      component: ShowCategoryPosts,
      props: true
   },
   {
      path: '/etiquestas/:tag',
      name: 'show_tag_posts',
      component: ShowTagPosts,
      props: true
   },
   {
      path: '*',
      component: Component404
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
   linkExactActiveClass: "v-tab--active"
})

export default router
