<template>
  <div class="side-bar">
    <SidebarList
      :heading="'Meine Kurse'"
      :list="tracks"
      :type="'kurs'"
    ></SidebarList>
    <SidebarList
      :heading="'Meine Räume'"
      :list="rooms"
      :type="'room'"
    ></SidebarList>
    <SidebarList
      :heading="chat.heading"
      :list="chat.list"
      :type="chat.type"
    ></SidebarList>
  </div>
</template>

<script>
import SidebarList from "./SidebarList";
import { mapGetters } from "@/store";

export default {
  components: {
    SidebarList
  },
  asyncComputed: {
    ...mapGetters(["tracks", "rooms"])
  },
  data() {
    return {
      rooms: {
        heading: "Meine Räume",
        type: "room",
        list: ["Klasse 5a", "Nachhilfe Mathe", "Random"]
      },
      chat: {
        heading: "Chat",
        type: "chat",
        list: ["Paula", "Tosten", "Oscar", "Madlen", "Kim", "Jessica", "Emilia"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  width: 270px;
  height: calc(100vh - 60px);
  left: 0px;
  top: 60px;
  background: $color-sidebar-background;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
