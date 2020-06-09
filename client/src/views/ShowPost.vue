
<template>
   
   <div class="mt-12">

      <v-chip color="blue darken-4" link dark>{{ post.category.name }}</v-chip>

      <p class="display-1 font-weight-medium ma-0 pa-0 mt-6">{{ post.title }}</p>
      <p class="ma-0 pa-0 body-2 font-weight-normal">
         {{ post.formated_published_at }}&nbsp;-&nbsp;{{ post.owner.name }}
      </p>

      <p class="ma-0 pa-0 mt-6" v-html="post.excerpt"></p>
   </div>

</template>

<script>
   
   export default {

      mounted(){
         this.$http.get("http://homestead.test/api/blog/" + this.$route.params.url)
            .then(response => {
               this.post = response.data;
            })
            .catch(error => {
               console.log(error.response.data);
            });
      },

      data(){
         return {
            post: {
               owner: {},
               category: {},
               tags: [],
               photos: []
            }
         }
      },

   }

</script>
