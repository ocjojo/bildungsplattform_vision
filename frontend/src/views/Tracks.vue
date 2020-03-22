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
        </div>
        <div class="filter-container">
          <div class="filter-item">Kategorie</div>
          <div class="filter-item">Kompetenzbereich</div>
          <div class="filter-item">Schwierigkeitsstufe</div>
        </div>
      </div>
    </header>
    <section>
      <template v-for="track of availableTracks">
        <router-link
          :to="{
            name: 'kurs',
            params: {
              routeName: getRouterString(track.name),
              trackName: track.name
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
import TrackCard from "../components/TrackCard";

export default {
  components: {
    TrackCard
  },
  data() {
    return {
      availableTracks: [
        {
          id: 0,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        },
        {
          id: 1,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        },
        {
          id: 2,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        },
        {
          id: 3,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        },
        {
          id: 4,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        },
        {
          id: 5,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        },
        {
          id: 6,
          name: "Nachhaltiger Konsum",
          description:
            "Dies ist ein Blindtest, in dem eine Beschreibung vom Kurs steht. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht."
        }
      ]
    };
  },
  methods: {
    getRouterString(item) {
      return item
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[\s\W-]+/g, "-")
        .replace(/-$/, ""); // Remove last floating dash if exists
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
</style>
