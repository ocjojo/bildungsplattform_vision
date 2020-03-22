<template>
  <div class="card card-md">
    <div class="track-img"></div>
    <!-- <img
      v-if="track.path !== undefined && track.path !== ''"
      :src="track.path"
      :alt="track.name"
    />
    <img v-else src="../assets/defaultTrack.jpg" :alt="track.name" /> -->
    <div class="track-info">
      <h5>{{ track.Name }}</h5>
      <p>{{ track.Description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: Object
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 200px;
  display: flex;
  flex-direction: row;
  min-height: 200px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  .track-img {
    width: 200px;
    background: url("../assets/defaultTrack.jpg");
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 15px 0 0 15px;
  }
  .track-info {
    width: 300px;
    padding-top: 0;
    padding: 20px;
    margin-bottom: 5px;
    overflow: hidden;
    padding-top: 0;
    text-overflow: ellipsis;

    h5 {
      font-weight: 900;
      font-size: 1.6rem;
    }
  }
}
</style>
