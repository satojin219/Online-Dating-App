<template>



<div class="d-flex justify-content-center flex-column  p-5 m-3">
  <h3 class="font-weight-bold">{{ user.userName }}</h3>
<div style="overflow-x: auto; height:500px">

<div v-for="chat in messages" :key="chat.id">

<div class="d-flex  flex-row-reverse my-3">
  <div class="rounded  mx-4 p-2 bg-success text-white">{{chat.message}}</div>
</div>
<div class="font-weight-bold text-secondary time d-flex  flex-row-reverse  mx-4 px-2">{{chat.time}}</div>


<div class="d-flex justify-content-start my-3">
       <img v-bind:src="user.picture.thumbnail"  class="rounded-circle" alt=""/>
  <div class="rounded  mx-4 p-2 bg-light">こんにちは</div>
</div>
<div class="font-weight-bold text-secondary time  mx-4 px-2 text-left">{{chat.time}}</div>
</div>




</div>

</div>



<div class="input-group d-flex footer justify-content-center p-5 ">
  <input v-on:keyup.enter="sendMessage" v-model="inputMessage" type="text" class="form-control" placeholder="メッセージを作成" >
  <div class="input-group-append">
    <button v-on:click="sendMessage" class="input-group-text"><i class="fas fa-paper-plane"></i></button>
  </div>
</div>

</template>

<script>
export default {
  name: "chat",
  data(){
    return{
      inputMessage:""

    }
  },
  methods:{

    sendMessage(){
      let today = new Date();
      let years = today.getFullYear();
      let month = ("0" + today.getMonth()).slice(-2);
      let days = ("0" + today.getDay()).slice(-2);
      let hours = ("0" + today.getHours()).slice(-2);
      let minutes = ("0" + today.getMinutes()).slice(-2);
      let seconds = ("0" + today.getSeconds()).slice(-2);
      let nowTime = years+ "-" + month+ "-" + days+ " " + hours+ ":" + minutes+ ":" + seconds;      
    
      this.$store.commit('setMessages',{
        id: this.$route.params.id,
        message:this.inputMessage,
        time:nowTime,
        })

      this.inputMessage = "";
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUserById(this.$route.params.id);
    },
    messages(){
      return  this.$store.getters.getMessageById(this.$route.params.id);
    }
  }
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