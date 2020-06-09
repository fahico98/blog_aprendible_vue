
<template>

   <div>

      <v-app-bar color="blue darken-4" flat dark>

         <v-toolbar-title class="chelsea-market">Blog Spot (co)</v-toolbar-title>
         
         <v-spacer></v-spacer>
         <v-btn class="text-capitalize mr-2" v-on:click="goTo('home')" text>inicio</v-btn>
         <v-btn class="text-capitalize mr-2" v-on:click="goTo('about')" text>nosotros</v-btn>
         <v-btn class="text-capitalize mr-2" v-on:click="goTo('archive')" text>archivo</v-btn>
         <v-btn class="text-capitalize mr-2" v-on:click="goTo('contact')" text>contacto</v-btn>
         
         <!--
         <v-tabs right>
            <v-tab class="text-capitalize mr-2" v-on:click="goTo('/')">inicio</v-tab>
            <v-tab class="text-capitalize mr-2" v-on:click="goTo('/nosotros')">nosotros</v-tab>
            <v-tab class="text-capitalize mr-2" v-on:click="goTo('/archivo')">archivo</v-tab>
            <v-tab class="text-capitalize mr-2" v-on:click="goTo('/contacto')">contacto</v-tab>
         </v-tabs>
         -->

      </v-app-bar>

   </div>

</template>

<script>

   export default{

      name: 'HomeAppBar',

      components: {
         //
      },

      data: () => ({
         //
      }),

      methods: {
         goTo(routeName){
            this.$router.push({name: routeName});
         }
      }
   }

</script>

<style scoped>

   @import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Mukta+Vaani&display=swap');

   .chelsea-market{
      font-family: "Chelsea Market", "Roboto";
   }

</style>

