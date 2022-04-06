<template>
  <div class="container">
    <input data-test-id="username" />
    <input data-test-id="password" type="password" />
    <login-button data-test-id="login_button"/>
  </div>
</template>
<script>
import LoginButton from './login-button'

export default {
  name: 'login-component',
  components: {
    LoginButton
  },
}
</script>
<style scoped>
.container {
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
}
</style>