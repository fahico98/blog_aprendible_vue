
<template>
   
   <div>

      <v-card v-for="post in posts" :key="post.id" class="my-5" outlined>
         <div class="my-5 mx-8">

            <p class="headline font-weight-medium ma-0 pa-0 mt-5">{{ post.title }}</p>
            <p class="ma-0 pa-0 body-2 font-weight-normal">
               {{ post.formated_published_at }}&nbsp;-&nbsp;{{ post.owner.name }}
            </p>

            <p class="ma-0 pa-0 mt-5" v-html="post.excerpt"></p>

            <div class="mt-3">
               <v-chip v-for="tag in post.tags" :key="tag.id" color="blue lighten-4" light small>#{{ tag.name }}</v-chip>
            </div>

            <div class="mt-3">
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

   export default {

      mounted(){
         this.$http.get("http://homestead.test/api/category/" + this.$route.params.category)
            .then(response => {
               this.posts = response.data.data;
            })
            .catch(error => {
               console.log(error.response.data);
            });
      },

      data(){
         return {
            posts: []
         }
      }
   }

</script>
