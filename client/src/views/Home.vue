
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

   // import format from 'date-fns/format';

   import CategoryChip from "../components/CategoryChip";
   import TagsChipsList from "../components/TagsChipsList";

   export default {
      
      name: "home-component",

      components: {
         CategoryChip,
         TagsChipsList
      },

      mounted(){
         this.$http.get("http://homestead.test/api/posts")
            .then((response) => {
               this.posts = response.data.data;
            })
            .catch((error) => {
               console.log(error);
            });
      },

      data(){
         return {
            posts: [],
         }
      },

      methods: {
         /*
         parsePublishedAt(strDate){
            return format(new Date(strDate), 'MMM dd');
         }
         */
      }
   }

</script>
