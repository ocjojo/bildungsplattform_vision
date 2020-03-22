<template>
  <div class="tracks">
    <header>
      <div class="title-container">
        <h2>Kurse Durchsuchen</h2>
      </div>
      <div class="track-search-description">
        <div>
          <h2>Willkommen auf der Kurssuche!</h2>
          <p>
            Hier kannst du alle Verfügbaren Kurse durchsuchen. Wähle einfach
            einen Filter aus, um schnell das zu finden, was du suchst!
          </p>
          <div class="search">
            <input type="search" placeholder="Suchbegriff eingeben..." />
          </div>
        </div>
        <div class="filter-container">
          <div class="filter-item">Kategorie</div>
          <div class="filter-item">Kompetenzbereich</div>
          <div class="filter-item">Schwierigkeitsstufe</div>
        </div>
      </div>
    </header>
    <section>
      <template v-for="track of tracks">
        <router-link
          v-bind:key="track.id"
          :to="{
            name: 'kurs',
            params: {
              routeName: track.ID + '-' + getRouterString(track.Name)
            }
          }"
        >
          <TrackCard v-bind:key="track.id" :track="track"></TrackCard>
        </router-link>
      </template>
    </section>
  </div>
</template>

<script>
import TrackCard from "@/components/TrackCard";
import { mapGetters } from "@/store";
import { slugify } from "@/util";

export default {
  components: {
    TrackCard
  },
  asyncComputed: {
    ...mapGetters(["tracks"])
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
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
}
h2 {
  font-weight: 200;
}

.title-container {
  background: url("../assets/track-search.svg");
  width: 320px;
  height: 240px;
  position: relative;
  background-size: cover;
  background-position: center;
  margin: 20px;
  padding-right: 40px;

  h2 {
    position: absolute;
    bottom: 0px;
    color: $primary;
    margin-bottom: 0;
  }
}

.track-search-description {
  padding-left: 20px;
  flex-grow: 2;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  p {
    max-width: 400px;
  }
}

.filter-container {
  display: flex;
  justify-content: space-between;
  .filter-item {
    margin-right: 10px;
    &:after {
      font-size: 1.2rem;
      cursor: pointer;
      margin-left: 5px;
    }
  }
}

section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.search {
  position: relative;
  max-width: 350px;
  input {
    width: 100%;
    margin-left: 0;
  }
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
</style>
