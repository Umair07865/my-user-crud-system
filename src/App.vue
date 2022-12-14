<template >
  <div id="app" class="col-md-6 mx-8 text-light ">
    
   
    

  <router-view></router-view>


    
  </div>
</template>

<script>


export default {
  name: 'App',
   
  components: {
    
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: fit-content;
  /* margin-left: 40%;
  */
  padding: 2rem;
}
</style>
