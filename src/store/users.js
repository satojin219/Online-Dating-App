// import { ssrContextKey } from "vue";

export default{
  state: {
    users:[]
  },
  getter:{
    getUserById(id){
      return this.state.users.find(user => user[id] === id);
    }
  },
  mutations: {
    setUsers : function(state,payload){
      state.users = payload;
    }
  },
  actions: {
    fetchUsers(context){
      let users = [];
      fetch("https://randomuser.me/api/?results=50").then(res => res.json()).then(data =>{
        data.results.forEach(user => {
          users.push({
            id: user.login.uuid,
            name: user.name.first + user.name.last,
            gender: user.gender,
            age: user.dob.age,
            country: user.location.country,
            state: user.location.state,
            city: user.location.city,
            email: user.email,
            picture: user.picture
          })
        
      });
      context.commit("setUsers",users);
      })
    }
  },
  modules: {
  }
}
