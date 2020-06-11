
<template>
   
   <div>
      <v-chip v-for="tag in tags" :key="tag.id" @click="goToTag(tag.url)" class="mr-2" color="blue lighten-4" link light small>
         #{{ tag.name }}
      </v-chip>
   </div>

</template>

<script>
   
   export default {
      
      props: ["tags"],

      methods: {
         goToTag(url){
            if(this.$route.name == "show_tags_posts"){
               if(url != this.$route.params.tag){
                  this.$router.push({name: "show_tag_posts", params: {tag: url}});
               }
            }else{
               this.$router.push({name: "show_tag_posts", params: {tag: url}});
            }
         }
      }
   }

</script>
