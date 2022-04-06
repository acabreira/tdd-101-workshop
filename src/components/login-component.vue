<template>
  <div className="container">
    <input v-model="state.username" data-test-id="username"/>
    <input v-model="state.password" data-test-id="password" type="password"/>
    <a data-test-id="forgot_password_link" href="#index" @click="toggleModal"> Forgot password? </a>
    <login-button data-test-id="login_button" @login="login"/>
    <p className="error" v-if="state.error">{{ state.error }}</p>
    <div data-test-id="forgot_password_modal" v-if="state.showModal"> Forgot Password Modal </div>
  </div>
</template>
<script>
import {reactive} from 'vue'
import LoginButton from './login-button'
import mockLoginAPI from '@/composables/mockLoginAPI';
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
      showModal: false
    })

    async function login() {
      const result = await mockLoginAPI(state.username, state.password)
      console.log('result', result)
      if (!result.success) {
        state.error = result.msg
      } else {
        state.error = ''
        router(result.permission === 'Admin' ? '/adminHomepage' : '/homepage')
      }
    }

    function toggleModal() {
      state.showModal = !state.showModal;
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
}

.error {
  color: red;
}
</style>