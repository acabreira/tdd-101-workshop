<template>
  <div class="container">
    <input v-model="state.username" data-test-id="username" />
    <input v-model="state.password" data-test-id="password" type="password" />

    <login-button data-test-id="login_button" @login="login" />
    <p class="error" data-test-id="error_message" v-if="state.error">{{ state.error }}</p>
  </div>
</template>
<script>
import { reactive } from 'vue'
import LoginButton from './login-button'
import validateUserAPI from '@/composables/validateUserAPI';

export default {
  name: 'login-component',
  components: {
    LoginButton
  },
  setup() {
    const state = reactive({
      username: '',
      password: '',
      error: ''
    })

    async function login() {
      const result = await validateUserAPI(state.username, state.password)
      if (!result.success) {
        state.error = result.msg
      } else {
        state.error = ''
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
}
.error {
  color: red;
}
</style>