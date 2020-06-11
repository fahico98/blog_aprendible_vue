
<template>
   
   <div class="mt-12">

      <category-chip :category="post.category"></category-chip>

      <p class="display-1 font-weight-medium ma-0 pa-0 mt-10">{{ post.title }}</p>
      <p class="ma-0 pa-0 body-2 font-weight-normal">
         {{ post.formated_published_at }}&nbsp;-&nbsp;{{ post.owner.name }}
      </p>

      <p class="ma-0 pa-0 mt-6" v-html="post.excerpt"></p>

      <tags-chips-list class="mt-10" :tags="post.tags"></tags-chips-list>

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

      props: ["url"],

      mounted(){
         this.$http.get("http://homestead.test/api/blog/" + this.url)
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
