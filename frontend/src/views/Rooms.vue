<template>
  <div class="rooms">
    <header>
      <div class="title-container">
        <h2>Deine Räume</h2>
      </div>
    </header>

    <section>
      <template v-for="room of rooms">
        <router-link
          v-bind:key="room.id"
          :to="{
            name: 'room',
            params: {
              routeName: room.ID + '-' + getRouterString(room.Name)
            }
          }"
        >
          <RoomCard v-bind:key="room.ID" :room="room"></RoomCard>
        </router-link>
      </template>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "@/store";
import { slugify } from "@/util";
import RoomCard from "@/components/RoomCard";
export default {
  components: {
    RoomCard
  },
  asyncComputed: {
    ...mapGetters(["rooms"])
  },
  methods: {
    getRouterString(item) {
      return slugify(item);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/rooms.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 320px;
  position: relative;
  .title-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 80px;
    background: rgba(37, 37, 37, 0.5);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px;
    h2 {
      font-size: 2.4rem;
      font-weight: 200;
      margin: 10px;
    }
  }
}

section {
  padding: 12px;
}
</style>
