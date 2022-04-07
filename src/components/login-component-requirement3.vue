<template>
  <div className="container">
    <p>Username:</p>
    <input v-model="state.username" data-test-id="username"/>
    <p>Password:</p>
    <input v-model="state.password" data-test-id="password" type="password"/>

    <login-button data-test-id="login_button" @login="login"/>
    <p class="error" data-test-id="error_message" v-if="state.error">{{ state.error }}</p>
    <p class="success" data-test-id="success_message" v-if="state.success">Logged in successfully</p>
  </div>
</template>
<script>
import {reactive} from 'vue'
import LoginButton from './login-button'
import validateUserAPI from '@/composables/validateUserAPI';
import router from '@/composables/router'

export default {
  name: 'login-component',
  components: {
    LoginButton
  },
  setup() {
    const state = reactive({
      username: '',
      password: '',
      error: '',
      success: false
    })

    async function login() {
      const result = await validateUserAPI(state.username, state.password)
      if (!result.success) {
        state.success = false
        state.error = result.msg
      } else {
        state.error = ''
        state.success = true
        router(result.permission === 'Admin' ? '/adminHomepage' : '/homepage')
      }
    }

    function toggleModal() {
      state.showModal = !state.showModal
    }

    return {
      state,
      login,
      toggleModal
    }
  }
}
</script>
<style scoped>
.container {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
}

p {
  margin: 0 0 5px 0;
  text-align: left;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
}

.error {
  color: #AF1105;
  font-weight: 900;
  margin-top: 10px;
  text-align: center;
}

.success {
  color: #00891E;
  font-weight: 900;
  margin-top: 10px;
  text-align: center;
}
</style>