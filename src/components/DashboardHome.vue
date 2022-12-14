<template>
  <div class="tableouterdiv">
     <div class="text-center mb-4 mt-3">
        <h1 class="text-center bg-warning text-muted">{User Crud Operations}</h1>
      <div class="w-100 d-flex  justify-content-center p-2 bg-dark">
            
    
           <span>
          <div class="d-block text-center">
            <h3> New User</h3>
          </div>
          <div class="addnew p-2  ">
            <label for="">id</label>
            <div>
              <input type="text" v-model="id" />
            </div>
            <label for="">FirstName</label>
            <div>
              <input type="text" v-model="fname" />
            </div>
            <label for="">LastName</label>
            <div>
              <input type="text" v-model="lname" />
            </div>
            <label for="">Gender</label>
            <div>
              <input type="text" v-model="gen" />
            </div>
            <label for="">Age</label>
            <div>
              <input type="text" v-model="age" />
            </div>
             <label for="">User Name</label>
            <div>
              <input type="text" v-model="uname" />
            </div>
          </div> 
           <button
            class="mt-3 bg-info p-2 rounded cursor-pointer" @click="addusers"  > 
             Add Users
          </button>
        <!-- </b-modal> -->
        </span>
         <button class="btn btn-danger mx-4" >Logout</button> 
      

 <!-- <b-modal ref="editmodel" hide-footer title="Adding User Data" id="editing " v-show="displays">  -->
   <span id="editing " v-show="displays">
          <div class="d-block text-center">
            <h3> Edit User</h3>
          </div>
          <div class="addnew p-2  ">
            <label for="">id</label>
            <div>
              <input type="text" v-model="userUpdation.updateid" />
            </div>
            <label for="">FirstName</label>
            <div>
              <input type="text" v-model="userUpdation.updatefname" />
            </div>
            <label for="">LastName</label>
            <div>
              <input type="text" v-model="userUpdation.updatelname" />
            </div>
            <label for="">Gender</label>
            <div>
              <input type="text" v-model="userUpdation.updategen" />
            </div>
            <label for="">Age</label>
            <div>
              <input type="text" v-model="userUpdation.updateage" />
            </div>
             <label for="">User Name</label>
            <div>
              <input type="text" v-model="userUpdation.updateuname" />
            </div>
          </div> 
           <button
            class="mt-3 bg-info p-2 rounded cursor-pointer" @click="updateUserField"   > 
             Add Edit Users
          </button>
        <!-- </b-modal> -->
        </span>
        </div>
      



    </div>

    <table class="table text-light">
      <thead>
        <tr class="text-light">
          <th scope="col">id</th>

          <th scope="col">FirstName</th>
          <th scope="col ">LastName</th>
          <th scope="col">Age</th>
          <th>User Name</th>
          <th scope="col">Gender</th>

          <th scope="col " colspan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>

          <td>{{ user.firstName }}</td>

          <td>{{ user.lastName }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.gender }}</td>
          <td>
            <button type="button" class="btn btn-success" @click="editusers(user),allUserslistt=user" >edit</button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteuser(user.id)"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "DashboardHome",
  data: () => ({
    id: "",
    fname: "",
    lname: "",
    gen: "",
    age: "",
    uname:"",
    index: "",
    // updateid: "",
    // updatefname: "",
    // updatelname: "",
    // updategen: "",
    // updateage: "",
    // updateuname:"",
    displays:false,

    userUpdation:{
     
   updateid: "",
    updatefname: "",
    updatelname: "",
    updategen: "",
    updateage: "",
    updateuname:"",
    },
    allUserslistt:{}

  }),
  //   data(){
  // return {
  //   allUsers
  //   }
  //   },
  computed: {
    users() {
      return store.state.allUsers;
    },
  },
  created() {
    store.dispatch("fetchusers");
    store.dispatch("updateuser");
  },
  methods: {
    // del: function (id, index) {
    //   console.log(index);
    //  store.dispatch("deleteapi", id);
    // },
    deleteuser: function (id) {
      store.dispatch("deleteuserapi", id);
    },
    Logout: function () {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    addusers:function(){
      store.dispatch("Addapi", {
        id: this.id,
        firstName: this.fname,
        lastName: this.lname,
        gender: this.gen,
        age: this.age,
        username:this.uname,
      })
    },

    editusers(udata){
       this.displays=true;

       this.index=udata.id;
     
    },
    updateUserField(){
   
      console.log("testing");
    console.log(this.userUpdation);
   
      store.dispatch("updateuser",[this.userUpdation,this.allUserslistt]);
       this.displays=false;
      //  alert(this.updatefname);
    }
   
  },
};
</script>


<style scoped>
.addnew {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
table td {
  border: 1px solid white;
  background-color: black;
  width: fit-content;
}
table th {
  border: 1px solid white;
  background-color: orange;
}

</style>
