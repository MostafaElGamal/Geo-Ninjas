<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="SignUp">
      <h2 class="center deep-purple-text">SignUp</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <p class="red-text center" v-if="feedback"> {{ feedback }}</p>
      <div class="field center">
       <button class="btn deep-purple">SignUp</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data () {
    return {
      email:null,
      password:null,
      alias:null,
      slug:null,
      feedback:null,
    }
  },
  methods:{
    SignUp(){
      if(this.alias && this.email && this.password){
        this.slug = slugify(this.alias, {
          replacement:'-',
          remove:/[!@#$%^&*()'"~|\-:@_+]/g,
          lower:true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then( doc => {
          if(doc.exists){
            this.feedback = "This alias already exists"
          }else{
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then( res => {
              ref.set({
                alias:this.alias,
                geolocation:null,
                user_id:res.user.uid
              })
              this.$router.push({name:'gmap'})
            })
            .catch(err => {
              this.feedback = err.message
            })
            this.feedback = 'Thos alias is free to use'
          }
        })
      }else{
        this.feedback = "You must Enter all fields"
      }
    }
  }
}
</script>

<style>
  .signup{
    max-width: 400px;
    margin-top:60px;
  }
  .signup h2{
    font-size: 2.4em;
  }
  .signup .field{
    margin-bottom:60px
  }
</style>
