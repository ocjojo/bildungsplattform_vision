<template>
  <div class="side-bar">
    <SidebarList
      :heading="tracks.heading"
      :list="tracks.list"
      :type="tracks.type"
    ></SidebarList>
    <SidebarList
      :heading="rooms.heading"
      :list="rooms.list"
      :type="rooms.type"
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
export default {
  components: {
    SidebarList
  },
  data() {
    return {
      tracks: {
        heading: "Meine Kurse",
        type: "kurs",
        list: [
          "Nachhaltiger Konsum",
          "Nachhaltigkeit einfach erklärt",
          "Digitale Werkstatt - Kunststudio",
          "Mathekurs Stufe 4"
        ]
      },
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
