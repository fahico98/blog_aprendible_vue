
<template>
   
   <div class="mt-12">
      <p class="display-1 font-weight-medium mt-12">{{ post.title }}</p>
      <p class="ma-0 pa-0 mt-8" v-html="post.excerpt"></p>
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
            post: {}
         }
      },

   }

</script>
