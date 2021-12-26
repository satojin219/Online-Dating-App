<template>
<div class="d-flex justify-content-center">
  <div class="m-5 p-5  shadow text-center ">
<div class="rounded-circle p-4 bg-dark">a</div>
<h4 class="my-3 font-weight-bold">FatihBolath</h4>
<p class="detail">fatih.bolatli@example.com</p>

  <button class="btn  btn-success text-white col-12"><i class="fas fa-comment"></i> Message</button>

<table class="table mt-5">
  <tbody>
    <tr>
      <th scope="row">Gender</th>
      <td>male</td>
    </tr>
    <tr>
      <th scope="row">Age</th>
      <td>47</td>
    </tr>
    <tr>
      <th scope="row">Country</th>
      <td>Trukey</td>
    </tr>
    <tr>
      <th scope="row">state</th>
      <td>Diyarbakır</td>
    </tr>
    <tr>
      <th scope="row">City</th>
      <td>Yozgat</td>
    </tr>
 
  </tbody>
</table>
</div>
</div>


</template>

<script>
export default {
  name: "userDetail",
  
}
</script>

<style scoped>
  .detail{
  font-size: 0.9rem;
  opacity: .6;
}
</style>