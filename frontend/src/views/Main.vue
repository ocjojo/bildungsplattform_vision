<template>
  <div id="app">
    <div class="nav">
      <img src="@/assets/logo.svg" alt="logo" />
      <div class="nav-item">
        <router-link to="/" class="dashboard">Dashboard</router-link>
        <router-link to="/kurse" class="track">Kurse</router-link>
        <router-link to="/raeume" class="community">Räume</router-link>
        <!-- <router-link to="/hilfe" class="help">Hilfe</router-link> -->
      </div>
      <div class="search"><input type="search" /></div>
      <a class="profile-menu" tabindex="0">
        <span class="profile">Dein Profil</span>
        <div v-if="user && user.profileImgTarget" class="profile-img-container">
          <img :src="user.profileImgTarget" alt="avatar" />
        </div>
        <img v-else src="@/assets/defaultAvatar.svg" alt="avatar" />
        <div class="context-menu">
          <div class="context-menu-item">Username: {{ user.Fullname }}</div>
          <div class="context-menu-item">Bild ändern</div>
          <div class="context-menu-item" @click="logOut()">Ausloggen</div>
        </div>
      </a>
    </div>
    <SideBar />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import { mapGetters } from "@/store";
import api from "@/api";

export default {
  asyncComputed: {
    ...mapGetters(["user"])
  },
  components: {
    SideBar
  },
  methods: {
    logOut() {
      api.logout().then(resp => {
        this.$router.push({ name: "Login" });
      });
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0px 4px 11px $color-shadow;
  font-weight: 200;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  background: #ffffffc7;
  backdrop-filter: blur(3px);
  .nav-item {
    display: flex;
    height: 100%;
  }
  .search {
    position: relative;
  }
  .search:before {
    font-icon: url("@/assets/icons/search.svg");
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: $primary;
  }

  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    cursor: pointer;

    &:before {
      margin-right: 5px;
      color: $primary;
    }
    &.router-link-exact-active,
    &:hover {
      background: $primary-gradient;
      color: #fff;
      &:before {
        color: inherit;
      }
    }
  }
}
.profile-img-container {
  border: solid 1px #ededed;
  margin-left: 10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  img {
    max-width: 30px;
  }
}

.content-container {
  margin-left: 270px;
  margin-top: 60px;
  width: calc(100vw - 270px);
  height: calc(100vh - 60px);
  // overflow: auto;
}

span.profile {
  margin-right: 10px;
}

.context-menu {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  background: $primary-gradient;
  width: 100%;
  .context-menu-item {
    padding: 8px 15px;
    border-bottom: solid 1px rgba(186, 154, 210, 0.8);
    &:hover {
      background: #fff;
      color: $primary;
    }
  }
}

a.profile-menu {
  position: relative;
  &:focus,
  &:hover {
    outline: none;
    background: $primary-gradient;
    color: #fff;
    .context-menu {
      display: block;
    }
  }
}
</style>
