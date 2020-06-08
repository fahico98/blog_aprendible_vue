
<template>

   <v-app>

      <home-app-bar/>

      <router-view></router-view>

   </v-app>
   
</template>

<script>

   import HomeAppBar from "./components/AppBar";

   export default {

      name: 'App',

      components: {
         HomeAppBar,
      },

      data: () => ({
         //
      }),

      methods: {
         //
      }
   };
   
</script>

