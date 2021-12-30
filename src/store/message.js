
export default{
  state:{
    messages:[]
  },
  getters:{

    getMessageById: state => id =>{
      if(state.messages[id] == undefined) return null;
      return state.messages[id];

    }
  },
  mutations:{
    setMessages:(state,payload)=>{
      let messages = state.messages;
      if(messages[payload.id] == undefined) messages[payload.id] = [];
      messages[payload.id].push({
      message: payload.message,
      time: payload.time
    });
      
    
    }
  }
}