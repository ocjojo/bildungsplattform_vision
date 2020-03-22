<template>
  <div class="register-container">
    <div class="register">
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Erstelle einen Account</h1>
      <form @submit.prevent="submit">
        <p v-if="error">{{ error }}</p>
        <input
          type="text"
          name="username"
          placeholder="Nutzername"
          v-model="username"
          debounce="300"
          required
        />
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
        <input
          type="text"
          name="fullname"
          placeholder="Name, e.g. Max Mustermann"
          v-model="fullname"
          debounce="300"
          required
        />
        <select v-model="groupid" name="groupid" required>
          <option disabled selected value="">Gruppe</option>
          <option value="3">Schüler</option>
          <option value="2">Lehrer</option>
        </select>
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
  name: "Register",
  data() {
    return {
      error: "",
      username: "",
      groupid: "",
      fullname: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async submit() {
      const resp = await api.register({
        username: this.username,
        groupid: this.groupid,
        fullname: this.fullname,
        mail: this.email,
        password: this.password
      });
      if (resp.success) {
        await api.login(this.username, this.password).then(() => {
          this.$router.push({ name: "Dashboard" });
        });
      } else {
        this.error = resp.error;
      }
    }
  }
};
</script>

<style lang="scss">
.register-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register {
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
