<template>
  <div class="home">
    <div class="card">
      <h2 class="dark-bg">Nachhaltiges Konsummieren</h2>
      <p>Du hast bereits 83% des Kurses abgeschlossen!</p>
    </div>
    <div class="card card-lg">
    </div>
    <div class="card">
      <h2>Empfohlen für dich</h2>
    </div>
    <div class="card">
      <h2>Meine Top Lehrer</h2>
    </div>
    <div class="card">
      <h2>Beliebteste Kurse</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
}
.card {
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgba(119, 109, 160, 0.25);
  width: 280px;
  min-height: 250px;
  margin: 10px;
}
.card-lg {
  width: 580px;
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
}
</style>
