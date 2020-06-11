
<template>
   
   <div>

      <v-card v-for="post in posts" :key="post.id" class="my-5" outlined>
         <div class="my-5 mx-8">

            <category-chip :category="post.category"></category-chip>

            <p class="headline font-weight-medium ma-0 pa-0 mt-5">{{ post.title }}</p>
            <p class="ma-0 pa-0 body-2 font-weight-normal">
               {{ post.formated_published_at }}&nbsp;-&nbsp;{{ post.owner.name }}
            </p>

            <p class="ma-0 pa-0 mt-5" v-html="post.excerpt"></p>

            <tags-chips-list class="mt-4" :tags="post.tags"></tags-chips-list>

            <div class="mt-4">
               <!--
               <v-btn :to="`/post/${post.url}`" color="blue darken-4" class="text-capitalize" text dark depressed>
                  Leer mas</v-btn>
               -->
               <router-link :to="{name: 'show_post', params: {url: post.url}}" class="blue--text text--darken-4 body-2">
                  Leer mas</router-link>
            </div>

         </div>
      </v-card>
      
   </div>

</template>

<script>

   import CategoryChip from "../components/CategoryChip";
   import TagsChipsList from "../components/TagsChipsList";

   export default {

      components: {
         CategoryChip,
         TagsChipsList
      },

      props: ["tag"],

      mounted(){
         this.getPosts();
      },

      // Metodo de Vue Router: Se ejecuta antes de que la ruta se actualize. En este caso utilizado
      // para actualizar la variable "posts".
      beforeRouteUpdate(to, from, next){
         this.tag = to.params.tag;
         this.getPosts();
         next();
      },

      data(){
         return {
            posts: []
         }
      },

      methods: {
         getPosts(){
            return this.$http.get("http://homestead.test/api/tag/" + this.tag)
               .then(response => {
                  this.posts = response.data.data;
               })
               .catch(error => {
                  console.log(error.response.data);
               });
         }
      }
   }

</script>
