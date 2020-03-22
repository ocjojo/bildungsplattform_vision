<template>
  <div>
    <router-view v-if="$route.meta.guest" />
    <Main v-else></Main>
  </div>
</template>

<script>
import Main from "@/views/Main";
import { mapGetters, store } from "@/store";

export default {
  asyncComputed: {
    ...mapGetters(["user"])
  },
  watch: {
    user: function() {
      if (store.loggedIn) {
        this.$router.push({ name: "Dashboard" }).catch(() => {});
      }
    }
  },
  components: {
    Main
  }
};
</script>
