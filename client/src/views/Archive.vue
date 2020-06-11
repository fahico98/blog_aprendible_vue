
<template>
   
   <div class="mt-12">

      <v-container>
         
         <p class="display-1 font-weight-medium ma-0 pa-0">Archivo</p>
         <p class="ma-0 pa-0 mb-6 body-2 font-weight-normal">Esta es la pagina de los archivos</p>

         <v-row>
            <v-col>
               <div class="ma-0 mr-2 pa-0">
                  <p class="title blue--text text--darken-4">Autores</p>
                  <div class="ma-0 pa-0 mt-2">
                     <p v-for="author in authors" :key="author.id" class="ma-0 pa-0 body-2 font-weight-normal">
                        {{ author.name }}
                     </p>
                  </div>
               </div>
            </v-col>
            <v-col>
               <div class="ma-0 mr-2 pa-0">
                  <p class="title blue--text text--darken-4">Ultimas publicaciones</p>
                  <p v-for="post in posts" :key="post.id" class="ma-0 pa-0 mb-4">
                     <router-link :to="{name: 'show_post', params: {url: post.url}}"
                        class="blue--text text--darken-4 body-2 font-weight-normal">
                        {{ post.title }}
                     </router-link>
                  </p>
               </div>
            </v-col>
         </v-row>
         <v-row>
            <v-col>
               <div class="ma-0 mr-2 pa-0">
                  <p class="title blue--text text--darken-4">Categorias</p>
                  <p v-for="category in categories" :key="category.id" class="ma-0 pa-0">
                     <a href="#" class="blue--text text--darken-4 body-2 font-weight-normal"
                        @click.prevent="goToCategory(category.url)">{{ category.name }}</a>
                  </p>
               </div>
            </v-col>
            <v-col>
               <div class="ma-0 mr-2 pa-0">
                  <p class="title blue--text text--darken-4">Publicaciones por mes</p>
                  <p v-for="date in archive" :key="date.posts" class="ma-0 pa-0 body-2 font-weight-normal">
                     {{ date.month }}&nbsp;{{ date.year }}&nbsp;({{ date.posts }})
                  </p>
               </div>
            </v-col>
         </v-row>

      </v-container>

   </div>

</template>

<script>

   export default {

      name: "archive-component",

      data(){
         return {
            authors: [],
            categories: [],
            posts: [],
            archive: []
         }
      },

      mounted(){
         this.$http.get("http://homestead.test/api/archive")
            .then(response => {
               this.authors = response.data.authors;
               this.categories = response.data.categories;
               this.posts = response.data.posts;
               this.archive = response.data.archive;
            })
            .catch(error => {
               console.log(error.reponse.data);
            });
      },

      methods: {
         goToCategory(url){
            if(this.$route.name != "show_category_posts"){
               this.$router.push({name: "show_category_posts", params: {category: url}});
            }
         }
      }
   }

</script>
