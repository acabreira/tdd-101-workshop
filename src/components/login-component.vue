<template>
  <div className="container">
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