<template>
  <div>
    <header>
      <div class="track-info">
        <div class="track-title">{{ track.Name }}</div>
        <div class="track-detailed-info">
          <div class="track-users group">23</div>
          <div class="track-rating rating">4,5</div>
        </div>
      </div>
    </header>
    <Unit v-for="unit of units" v-bind:key="unit.ID" :unit="unit"> </Unit>
    <section class="forum">
      <h2>Forum - {{ track.Name }}</h2>
      <div class="new-post-container">
        <textarea
          name="newComment"
          placeholder="Einen neuen Kommentar verfassen..."
        ></textarea>
        <button class="btn">Posten</button>
      </div>
    </section>
  </div>
</template>

<script>
import Unit from "@/components/Unit";
import { mapGetters } from "@/store";
export default {
  components: {
    Unit
  },
  data() {
    return {
      track: {},
      units: []
    };
  },
  methods: {
    getData(routeName) {
      const getters = mapGetters(["track", "trackUnits"]);
      const id = routeName.split("-", 2)[0];

      getters.track(id).then(track => {
        this.track = track;
      });
      getters.trackUnits(id).then(units => {
        this.units = units;
      });
    }
  },
  created() {
    this.getData(this.$route.params.routeName);
  },
  beforeRouteUpdate(to, from, next) {
    this.getData(to.params.routeName);
    next();
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 320px;
  background: $latest-course-img;
  background-size: cover;
  background-position: center;
  position: relative;
  .track-info {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: rgba(37, 37, 37, 0.5);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .track-title {
      padding-left: 30px;
      font-size: 2.4rem;
      font-weight: 200;
    }
    .track-detailed-info {
      padding-right: 30px;
      div {
        margin: 5px 0;
      }
    }
  }
}

.group:before,
.rating:before {
  margin-right: 10px;
}

section {
  padding: 20px;
}

section.forum {
  .new-post-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 700px;
    button {
      margin-top: 10px;
    }
  }
  h2 {
    font-weight: 200;
  }
}

textarea {
  width: 700px;
  height: 100px;
  resize: none;
  border: solid 1px #cecaca;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px;
  :focus {
    outline: none;
  }
}
</style>
