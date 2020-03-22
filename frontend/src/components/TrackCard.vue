<template>
  <div class="card card-md">
    <div class="track-img"></div>
    <div class="track-info">
      <h5>{{ track.Name }}</h5>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: Object
  },
  computed: {
    description() {
      const shortened = this.track.Description.substring(0, 160);
      return shortened.length === this.track.Description.length
        ? shortened
        : shortened + "...";
    }
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

    h5 {
      font-weight: 900;
      font-size: 1.6rem;
    }
  }
}
</style>
