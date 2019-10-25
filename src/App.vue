<template>
  <div id="app">
    <router-view/> 
    <ModalAvailableCourses /> 
    <Event />
  </div>
</template>

<script>
import ModalAvailableCourses from './components/ModalAvailableCourses.vue'
import Event from './components/Event.vue'

// <Event />

export default {
  name: 'App',
  components: {   
    ModalAvailableCourses,   
    Event,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
body{
	font-family: Muller;
}
</style>
