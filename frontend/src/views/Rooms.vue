<template>
  <div class="rooms">
    <header>
      <div class="title-container">
        <h2>Deine Räume</h2>
      </div>
    </header>
  </div>
</template>

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
</style>
