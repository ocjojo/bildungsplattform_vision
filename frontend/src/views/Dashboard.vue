<template>
  <div class="home">
    <div class="card latest-course">
      <div class="card-header">
        <h2 class="dark-bg">Nachhaltiger Konsum</h2>
      </div>
      <div class="card-body">
        <p>Du hast bereits 83% des Kurses abgeschlossen!</p>
      </div>
      <div class="card-footer">
        <button class="btn">Kurs fortführen</button>
      </div>
    </div>
    <div class="card card-lg analytics">
      <div class="card-body">
        <h2>Analytics</h2>
      </div>
      <div class="card-body"></div>
      <div class="card-footer"></div>
    </div>
    <div class="card recommendations">
      <div class="card-header">
        <h2>Empfohlen für dich</h2>
      </div>
      <div class="card-body">
        <ul>
          <li>
            <div class="track-description">
              <h5>Random Kurs Name 1</h5>
              <div class="descr">Eine tolle Beschreibung für den Kurs</div>
            </div>
            <button class="btn btn-action play"></button>
          </li>
          <li>
            <div class="track-description">
              <h5>Random Kurs Name 2</h5>
              <div class="descr">Eine tolle Beschreibung für den Kurs</div>
            </div>
            <button class="btn btn-action play"></button>
          </li>
          <li>
            <div class="track-description">
              <h5>Random Kurs Name 3</h5>
              <div class="descr">Eine tolle Beschreibung für den Kurs</div>
            </div>
            <button class="btn btn-action play"></button>
          </li>
        </ul>
      </div>
      <div class="card-footer"></div>
    </div>
    <div class="card top-teachers">
      <div class="card-body">
        <h2>Meine Top Lehrer</h2>
      </div>
      <div class="card-body">
        <ul>
          <li>1. Herr Jung</li>
          <li>2. Frau Bär</li>
          <li>1. Frau Schönbrunn</li>
        </ul>
      </div>
      <div class="card-footer"></div>
    </div>
    <div class="card favorites">
      <div class="card-header">
        <h2>Deine beliebtesten Kurse</h2>
      </div>
      <div class="card-body">
        <ul>
          <li>
            <div class="track-description">
              <h5>Random Kurs Name 1</h5>
              <div class="descr">Eine tolle Beschreibung für den Kurs</div>
            </div>
            <button class="btn btn-action play"></button>
          </li>
          <li>
            <div class="track-description">
              <h5>Random Kurs Name 2</h5>
              <div class="descr">Eine tolle Beschreibung für den Kurs</div>
            </div>
            <button class="btn btn-action play"></button>
          </li>
          <li>
            <div class="track-description">
              <h5>Random Kurs Name 3</h5>
              <div class="descr">Eine tolle Beschreibung für den Kurs</div>
            </div>
            <button class="btn btn-action play"></button>
          </li>
        </ul>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
}

.latest-course {
  background: linear-gradient(#0000009c, #4d4848bd), $latest-course-img;
  background-size: cover;
  background-blend-mode: luminosity, saturation;
}
h2 {
  font-size: 1.8rem;
  margin: 0;
  padding: 26px 5px;
  font-weight: 200;
  text-align: center;
}

h2.dark-bg {
  background: rgba(37, 37, 37, 0.5);
  color: #fff;
  border-radius: 15px;
}

.latest-course p {
  padding: 1rem;
  margin: 20px 0;
  text-align: center;
  color: #fff;
}

ul {
  margin: 0;
  padding: 0;
  li {
    display: flex;
    margin: 12px 20px;
    justify-content: space-between;
    align-items: center;
    .track-description {
      width: 80%;
      h5 {
        font-size: 1.6rem;
        font-weight: 200;
        margin: 5px 0;
      }
      .descr {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }
}
.recommendations {
  background: url("../assets/form-red.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -100px;
}
.top-teachers {
  background: url("../assets/form-green.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -2px;
}
.favorites {
  background: url("../assets/form-purple.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100px -100px;
}
.analytics {
  background: url("../assets/form-blue.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -150px -80px;
}
</style>
