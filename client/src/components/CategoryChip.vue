
<template>
   
   <div>
      <v-chip color="blue darken-4" @click="goToCategory(category.url)" link dark>
         {{ category.name }}
      </v-chip>
   </div>

</template>

<script>
   
   export default {

      props: ["category"],

      methods: {
         goToCategory(url){
            if(this.$route.name != "show_category_posts"){
               this.$router.push({name: "show_category_posts", params: {category: url}});
            }
         }
      }
   }

</script>
