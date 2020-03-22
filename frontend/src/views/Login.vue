<template>
  <div class="login-container">
    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Melde dich an</h1>
      <form @submit.prevent="submit">
        <p v-if="error">{{ error }}</p>
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          v-model="email"
          debounce="300"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          v-model="password"
          debounce="300"
          required
        />
        <input class="btn" type="submit" value="Anmelden" />
      </form>
      <p>
        Noch nicht registriert?
        <router-link to="/register">Hier entlang</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Login",
  data() {
    return {
      error: "",
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      api.login(this.email, this.password).then(resp => {
        if (resp.error) {
          this.error = resp.error;
        } else {
          this.$router.push({ name: "Dashboard" });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  h1 {
    margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
