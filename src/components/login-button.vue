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
<style scoped>
button {
  padding: 10px;
  border-radius: 10px;
  background-color: #3D1CBA;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>