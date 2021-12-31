
export default {
  state: {
    messages: []
  },
  getters: {
    getMessageById: state => id => {
      if (state.messages[id] == undefined || state.messages[id] == null) return  state.messages[id] = null;
      return state.messages[id];

    },
    getLastMessageById: (state, getters) => id => {
      return getters.getMessageById(id).slice(-1)[0];
    },
    getMessages: state => {
      return state.messages;
    }
  },
  mutations: {
    setMessages: (state, payload) => {
      let messages = state.messages;
      if (messages[payload.id] == null) messages[payload.id] = [];
      messages[payload.id].push({
        message: payload.message,
        time: payload.time,
        id:payload.id
      });


    }
  }
}