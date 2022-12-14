<template >

  <!-- the below div is the main outer div-->
  <div class="p-5 outerdiv fit-content">
    
    <i class="fa-brands fa-phoenix-framework icon"></i>
    <h1>Login</h1>
    <!-- our input field for user-->
    <div class="d-flex justify-content-center flex-column my-4 fit-content">
      <label for="username" class="text-start"
        ><span><i class="fa-solid fa-user"></i></span> User Name</label
      >
      <input
        type="text"
        name="username"
        id="username"
        class="w-100 rounded p-2"
        placeholder=" enter user name"
        v-model="username"
      />
    </div>
    <!-- our input field for password-->
    <div class="d-flex justify-content-center flex-column my-4">
      <label for="userpass" class="text-start"
        ><span><i class="fa-solid fa-key"></i></span> User Password</label
      >
      <input
        type="text"
        name="password"
        id="userpass"
        class="w-100 rounded p-2"
        placeholder="enter password"
        v-model="userpass"
      />
    </div>
    <!-- our submit button for the  user-->

    <button type="button" class="btn btn-light" @click="loginvalidations">
      Submit
    </button>
  </div>
  
</template>
<script>
export default {
//   name: "LoginInputs",

  data() {
    return {
      username:'',
      userpass:'',
    };
  },
  methods: {
    loginvalidations() {
    
      console.log(`thiss is the username: ${this.username}`);
      console.log(`this is the user pass : ${this.userpass}`);

      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.userpass,
          // expiresInMins: 60, // optional
        }),
      })
        .then((response) => {
            
          return response.json();
        })
        .then((data) => {
          console.log(data);
         
           if(data.message=="Invalid credentials")
           {
   alert("Access Denied Invalid Inputs");
           }
           else{
                 alert("Access Granted");
                 console.log(data.email);
                 localStorage.setItem("useremail",data.email);

                 localStorage.setItem("firstName",data.firstName);

                 localStorage.setItem("gender",data.gender);

                 localStorage.setItem("image",data.image);

                 localStorage.setItem("usertoken",data.token);

                 localStorage.setItem("username",data.username);

                 localStorage.setItem("lastname",data.lastName);

                 this.$router.push("/Home");
           
           }
          
    
        }).catch((error)=>{
            console.log(" error : "+error.message)
         
        })
    },
  },
};
</script>
<style>
body {
  background-image: url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80");
}
.icon {
  font-size: 50px;
}
</style>
