<script setup>
import { ref, reactive, toRefs } from "vue";
import useAuth from "../composables/auth.js";

const { login: handleLogin } = useAuth();

const loginForm = reactive({
  username: "",
  password: "",
});

const { username, password } = toRefs(loginForm);
const loginFormRef = ref(null);
const login = () => {
  if (loginFormRef.value.checkValidity()) {
    handleLogin(loginForm);
  } else {
    console.log("Form is invalid");
  }
};
</script>

<template>
  <div
    id="auth-container"
    class="w-full h-screen flex justify-center items-center"
  >
    <div
      id="red-filter"
      class="bg-[var(--color-red)] opacity-60 absolute w-screen h-screen"
    />
    <div
      id="auth-card"
      class="w-[30vw] h-auto bg-[var(--color-cream)] py-10 px-12 rounded-xl z-10"
    >
      <div id="logo" class="flex justify-center items-center">
        <img
          src="../assets/img/logo-kanemura.png"
          alt="logo kanemura"
          class="w-[70%]"
        />
      </div>
      <div
        id="title"
        class="text-center text-xl font-semibold text-[var(--color-blue)] tracking-wider mb-3"
      >
        Authentication Form
      </div>
      <form ref="loginFormRef" @submit.prevent="login">
        <div id="form" class="px-10">
          <div id="username" class="mb-3">
            <div
              id="label"
              class="text-[var(--color-red)] font-semibold mb-1 tracking-wide"
            >
              Username
            </div>
            <div id="input">
              <el-input
                v-model="username"
                placeholder="Masukan username"
                required
              />
            </div>
          </div>
          <div id="password" class="mb-3">
            <div
              id="label"
              class="text-[var(--color-red)] font-semibold mb-1 tracking-wide"
            >
              Password
            </div>
            <div id="input">
              <el-input
                v-model="password"
                placeholder="Masukan password"
                type="password"
                required
              />
            </div>
          </div>
          <div
            id="forgot-pw"
            class="text-xs text-[var(--color-blue)] font-[650] mb-5"
          >
            <a href="" class="underline">Forgot Password?</a>
          </div>
          <div id="btn-auth" class="flex justify-center items-center">
            <button
              class="bg-[var(--color-red)] px-20 py-2 rounded-full text-[var(--color-cream)] font-semibold tracking-wider"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scope>
#auth-container {
  background-image: url("../assets/img/bg-auth.png");
  background-size: cover;
}

#title {
  font-family: var(--font-japanese2020);
}

#form .el-input__wrapper {
  box-shadow: none !important;
  border: 1.5px solid var(--color-blue);
}

#form .el-input__inner {
  padding: 8px 0;
  font-size: 13px;
  color: var(--color-blue);
  font-weight: 600;
  letter-spacing: 0.025em;
}
</style>
