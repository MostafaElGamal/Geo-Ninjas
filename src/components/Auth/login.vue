<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="Login">
      <h2 class="center deep-purple-text">Login</h2>
       <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
       <button class="btn deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      email:null,
      password:null,
      feedback:null,
    }
  },
  methods:{
    Login(){
      if(this.email && this.password){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password )
        .then( res => {
          this.$router.push({name:'gmap'})
        })
        .catch( err=> {
          this.feedback = err.message
        })
        this.feedback = null
      }else{
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>

<style>
	.login{
    max-width:400px;
    margin-top:60px;
	}
  .login h2{
    font-size:2.4em;
  }
  .login .field{
    margin-bottom:60px;
  }
</style>
