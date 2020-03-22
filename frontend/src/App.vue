<template>
  <div id="app">
    <div class="nav">
      <img src="./assets/logo.svg" alt="logo" />
      <router-link to="/" class="dashboard">Dashboard</router-link>
      <router-link to="/kurse" class="track">Kurse</router-link>
      <router-link to="/raeume" class="community">Räume</router-link>
      <router-link to="/hilfe" class="help">Hilfe</router-link>
      <input type="search" />
      <router-link to="/profil">
        Dein Profil
        <img :src="user.profileImgTarget" alt="avatar" />
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
import { mapGetters } from "@/store";

export default {
  ...mapGetters([{ user: require("./assets/defaultAvatar.svg") }]),
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
    font-icon: url("@/assets/icons/dashboard.svg");
  }
  .community:before {
    font-icon: url("@/assets/icons/community.svg");
  }
  .help:before {
    font-icon: url("@/assets/icons/help.svg");
  }
  .search:before {
    font-icon: url("@/assets/icons/search.svg");
  }
  .track:before {
    font-icon: url("@/assets/icons/track.svg");
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
    &:before {
      margin-right: 5px;
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
