<template>

    <header class="bg-success d-flex flex-row text-white">
<h3 class="m-3">Online Dating App</h3>
<router-link to="/Online-Dating-App">
<button class="btn text-white">
  <i class="fas fa-users my-2 fa-2x"></i>
</button>
</router-link>

<router-link to="/message-List">
  <button class="btn text-white">
<i class="fas fa-comments my-2 fa-2x"></i>
</button>  
</router-link>


</header>

    


  <router-view/>
</template>

<script>
export default {
  created: function(){
    this.$store.dispatch("fetchUsers");
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
