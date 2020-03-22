<template>
  <div class="login-container">
    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Melde dich an</h1>
      <input type="email" name="email" placeholder="E-Mail" />
      <input type="password" name="password" placeholder="Passwort" />
      <p>
        Noch nicht registriert?
        <router-link to="/register">Hier entlang</router-link>
      </p>
    </div>
  </div>
</template>

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
}
</style>
