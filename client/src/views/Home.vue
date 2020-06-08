
<template>

   <div>
      <h1>This is the home page...!</h1>
   </div>
   
</template>

<script>

   export default {
      
      name: "home-component",
      
      mounted(){
         this.$http.get("http://homestead.test/api/posts")
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
      }
   }

</script>
