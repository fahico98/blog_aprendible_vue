
<template>
   
   <div>

      <v-card v-for="post in posts" :key="post.id" class="my-5" outlined>
         <div class="my-5 mx-8">

            <v-chip color="blue darken-4" @click="goToCategory(post.category.url)" link dark>
               {{ post.category.name }}
            </v-chip>

            <p class="headline font-weight-medium ma-0 pa-0 mt-5">{{ post.title }}</p>
            <p class="ma-0 pa-0 body-2 font-weight-normal">
               {{ post.formated_published_at }}&nbsp;-&nbsp;{{ post.owner.name }}
            </p>

            <p class="ma-0 pa-0 mt-5" v-html="post.excerpt"></p>

            <div class="mt-3">
               <v-chip v-for="tag in post.tags" :key="tag.id" @click="goToTag(tag.url)" color="blue lighten-4" link light small>
                  #{{ tag.name }}
               </v-chip>
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
         this.$http.get("http://homestead.test/api/tag/" + this.$route.params.tag)
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
      },

      methods: {
         goToCategory(url){
            this.$router.push({name: "show_category_posts", params: {category: url}});
         },
         goToTag(url){
            if(url != this.$route.params.tag){
               this.$router.push({name: "show_tag_posts", params: {tag: url}});
            }
         }
      }
   }

</script>
