<template>
  <div id="app">
    <div class="nav">
      <img src="@/assets/logo.svg" alt="logo" />
      <router-link to="/" class="dashboard">Dashboard</router-link>
      <router-link to="/kurse" class="track">Kurse</router-link>
      <router-link to="/raeume" class="community">Räume</router-link>
      <router-link to="/hilfe" class="help">Hilfe</router-link>
      <div class="search"><input type="search" /></div>
      <router-link to="/profil">
        Dein Profil
        <div v-if="user" class="profile-img-container">
          <img  :src="user.profileImgTarget" alt="avatar" />
        </div>
          <img v-else src="@/assets/defaultAvatar.svg" alt="avatar" />
      </router-link>
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

export default {
  asyncComputed: {
    ...mapGetters(["user"])
  },
  components: {
    SideBar
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  width: 100%;
  top:0;
  box-shadow: 0px 4px 11px $color-shadow;
  font-weight: 200;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  background: #ffffffc7;
  backdrop-filter: blur(3px);

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
    padding: 15px;

    &:before {
      margin-right: 5px;
      color: $primary;
    }
    &.router-link-exact-active {
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
  img{
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
</style>
