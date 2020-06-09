
<template>

   <v-app>

      <home-app-bar/>
      
      <v-container>
         <router-view></router-view>
      </v-container>

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

