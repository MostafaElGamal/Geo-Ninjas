<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{ name:'gmap' }" class="brand-logo left">Geo Ninjas</router-link>
        <ul class="right">
          <li>
            <router-link :to="{ name: 'SignUp'}">Signup</router-link>
          </li>
           <li>
            <router-link :to="{ name:'login' }">Login</router-link>
          </li>
          <li>
            <a @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  data () {
    return {

    }
  },
  methods:{
    logout(){
      firebase.auth().signOut()
      .then( () => {
        this.$router.push( {name:'login'} )
      })
    }
  }
}
</script>

<style>

</style>
