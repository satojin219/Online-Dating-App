<template>

  <div v-for="user in getMessageList" :key="user.id" >
    <router-link :to="'/user/' + user.id + '/chat'" class="text-dark">
      <div class="d-flex justify-content-around p-4 border-bottom border-light">
        <img v-bind:src="user.picture" alt="" class="rounded-circle">
        <div class="d-flex flex-column">
          <div class="font-weight-bold">{{ user.name }}</div>
          <div class="message">{{ user.message }}</div>
        </div>
        <div class="time">{{ user.time }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "messageList",

  computed: {
    ...mapGetters(["getUserById","getMessages"]),

    getMessageList(){
      let users = [];
      let messages = this.getMessages;
      for (let userId in messages) {
        let user = this.getUserById(userId);
        let lastMessage = messages[userId].slice(-1)[0];
        // if(lastMessage !== undefined){
          users.push({
            id: userId,
            name: user.userName,
            picture: user.picture.thumbnail,
            time: lastMessage.time,
            message: lastMessage.message,
          });
            // }
        
      }
      users.sort((a, b) => {
        return b.time - a.time;
      });
      return users;
    },
  },
};
</script>

<style scoped>
.time {
  font-size: 0.8rem;
  opacity: 0.6;
}
.message {
  font-size: 1rem;
  opacity: 0.6;
}
</style>