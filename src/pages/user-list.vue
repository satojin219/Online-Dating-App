<template>
  <div class="d-flex justify-content-around flex-wrap col-12">
    <div
      v-for="user in listUsers"
      :key="user.id"
      class="m-3 p-5 shadow text-center"
      style="width:250px; height:350px"
    >
        <img v-bind:src="user.picture.large"  class="rounded-circle" alt=""/>
      <h5 class="my-3 font-weight-bold">{{ user.userName }}</h5>
      <p class="detail">
        <i class="fas fa-map-marker-alt"></i> {{ user.country }} / Age:{{
          user.age
        }}
      </p>
      <div class="d-flex justify-content-between col-12">
        <router-link :to="{name :'user',params: {id : user.id}}">
        <button class="btn btn-success text-white">Profile</button>
        </router-link>
        <router-link :to="'/user/'+user.id+'/chat'">
        <button class="btn btn-light">
          <i class="fas fa-comment-dots"></i>
        </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",

  computed: {
    listUsers() {
      return this.$store.state.users.users;
    },
  },
};
</script>

<style scoped>
.detail {
  font-size: 0.9rem;
  opacity: 0.6;
}
</style>