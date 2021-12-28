<template>
  <div class="d-flex justify-content-center">
    <div class="m-5 p-5 shadow text-center">
      <img v-bind:src="user.picture.large" alt="" class="rounded-circle">
      <h4 class="my-3 font-weight-bold">{{user.name}}</h4>
      <p class="detail">{{user.email}}</p>

      <button class="btn btn-success text-white col-12">
        <i class="fas fa-comment"></i> Message
      </button>

      <table class="table mt-5">
        <tbody>
          <tr>
            <th scope="row">Gender</th>
            <td>{{user.gender}}</td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td>{{user.age}}</td>
          </tr>
          <tr>
            <th scope="row">Country</th>
            <td>{{user.country}}</td>
          </tr>
          <tr>
            <th scope="row">state</th>
            <td>{{user.state}}</td>
          </tr>
          <tr>
            <th scope="row">City</th>
            <td>{{user.city}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "userDetail",
  computed: {
    user() {
    return this.$store.getters.getUserById(this.$route.params.id);
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