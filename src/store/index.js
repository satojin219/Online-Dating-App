// import { VueElement } from 'vue'
import { createStore } from 'vuex'
import users from "./users"
import message from "./message";


export default createStore({

  modules: {
    users,
    message
  }
})
