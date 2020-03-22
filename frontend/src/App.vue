<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.svg" alt="logo" />
      <router-link to="/" class="dashboard">Dashboard</router-link>
      <router-link to="/kurse">Kurse</router-link>
      <router-link to="/raeume">Räume</router-link>
      <router-link to="/hilfe">Hilfe</router-link>
      <input type="search" />
      <router-link to="/profil">
        Dein Profil
        <img src="./assets/defaultAvatar.svg" alt="avatar" />
      </router-link>
    </div>
    <SideBar />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";

export default {
  components: {
    SideBar
  }
};
</script>

<style lang="scss">
.nav {
  box-shadow: 0px 4px 11px $color-shadow;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .dashboard:before {
    font-icon: url("@/assets/logo.svg");
  }

  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;

    img {
      margin-left: 10px;
    }

    &.router-link-exact-active {
      background: $primary-gradient;
      color: #fff;
    }
  }
}

.content-container {
  position: absolute;
  left: 270px;
  top: 60px;
  width: calc(100vw - 270px);
  height: calc(100vh - 60px);
}
</style>
