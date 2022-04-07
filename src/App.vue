<template>
  <login-component></login-component>
</template>

<script>
import LoginComponent from './components/login-component-requirement3'

export default {
  name: 'App',
  components: {
    LoginComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>