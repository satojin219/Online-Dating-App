export default{
  state:{
    message:{}
  },
  getter:{
    getMessageById: (id)=>{
      this.state.message[id]
    }
  },
  multation:{
    setMessages(state,payload){
      state.message[payload.id].push(payload.message);
    }
  }
}