<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/navbar.vue'
export default {
  name: 'App',
  components:{ Navbar }
}
</script>

<style>

</style>
