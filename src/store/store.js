import Vue from "vue";
// import { ssrContextKey } from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allUsers: [],
  },

  mutations: {
    setusers(state, user) {
      state.allUsers = user;
    },
    // deleting users
    deleteusers(state, id) {
      fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          store.state.allUsers = store.state.allUsers.filter(function (object) {
            return object.id !== id;
          });
          alert("deleted");
          console.log("these are id ");
          console.log(id);
        });
    },
  
    updateusers(state, userData) { 
      let arrayindex=state.allUsers.findIndex((user)=>{
        return user.id==userData[1].id;
      });
      // Vue.set(state.allUsers,arrayindex,userData[0]);
      console.log("this isii : " , userData);

state.allUsers[arrayindex].id=userData[0].updateid;
state.allUsers[arrayindex].firstName=userData[0].updatefname;
state.allUsers[arrayindex].lastName=userData[0].updatelname;
state.allUsers[arrayindex].age=userData[0].updateage;
state.allUsers[arrayindex].username=userData[0].updateuname;
state.allUsers[arrayindex].gender=userData[0].updategen;
    },
   
  
    adduser(state, obj) {
      this.state.allUsers.unshift(obj);

      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
      
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    },
  },
  

  actions: {
    // fething users alll
    fetchusers(context) {
      var Access_Token = localStorage.getItem("token");
      fetch("https://dummyjson.com/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Access_Token} `,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.users);
          context.commit("setusers", data.users);
        });
    },
    deleteuserapi(context, cat) {
      context.commit("deleteusers", cat);
    },

    Addapi(context, obj) {
      console.log(obj);
      context.commit("adduser", obj);
    },
   async  updateuser(context, userData) {
     
    

     await fetch(`https://dummyjson.com/users/1`, {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         
        }),
      })
        .then((res) => res.json())
        .then((data)=>{
          console.log("below is the data of the edting users")
          console.log(data);
        
          context.commit("updateusers",userData);
        });

    
    },

   
    // getters: {
    // getallusers: (state) => state.allUsers,
  },
});
