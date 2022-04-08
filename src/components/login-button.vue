<template>
  <button
      :class="{
        'disabled-button': disabled,
        'active-button': !disabled,
        'button': true,
      }"
    :disabled="disabled"
    @click="login"
  >
    Login
  </button>
</template>
<script>
export default {
  name: 'login-button',
  emits: ['login'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
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
.active-button {
  background-color: #3D1CBA;
  cursor: pointer;
}

.active-button:hover {
  opacity: 0.8;
}

.disabled-button {
  background-color: grey;
  opacity: 0.5;
}

.button {
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 16px;
  padding: 10px;
}

</style>