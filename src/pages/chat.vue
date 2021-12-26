<template>

<header class="bg-success d-flex flex-row text-white">
<h3 class="m-3">Online Dating App</h3>
<button class="btn text-white">
  <i class="fas fa-users my-2 fa-2x"></i>
</button>
<button class="btn text-white">
<i class="fas fa-comments my-2 fa-2x"></i>
</button>
</header>

<div class="d-flex justify-content-center flex-column  p-5 m-3">
<div style="overflow-x: auto; height:500px">

<div class="d-flex justify-content-start my-3">
  <div class="rounded-circle bg-dark p-">fa</div>
  <div class="rounded  mx-4 p-2 bg-light">こんにちは、私は佐藤仁です</div>
</div>
<div class="font-weight-bold text-secondary time  mx-4 px-2 ">12/25 21:10</div>


<div class="d-flex  flex-row-reverse my-3">
  <div class="rounded  mx-4 p-2 bg-success text-white">はじめまして佐藤さん</div>
</div>
<div class="font-weight-bold text-secondary time d-flex  flex-row-reverse  mx-4 px-2">12/25 21:10</div>


</div>

</div>



<div class="input-group d-flex footer justify-content-center p-5 ">
  <input type="text" class="form-control" placeholder="メッセージを作成" >
  <div class="input-group-append">
    <button class="input-group-text"><i class="fas fa-paper-plane"></i></button>
  </div>
</div>

</template>

<script>
export default {
  name: "chat",
  
}
</script>
<style scoped>
.footer {
    position: absolute;
    bottom: 0;
}
.time{
  font-size: 0.8rem;
  opacity: .6;
}
</style>