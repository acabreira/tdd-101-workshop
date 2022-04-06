<template>
  <button @click="login">Login</button>
</template>
<script>
export default {
  name: 'login-button',
  emits: ['login'],
  setup(props, {emit}) {
    function login() {
      emit('login')
    }
    return {
      login
    }
  }
}
</script>