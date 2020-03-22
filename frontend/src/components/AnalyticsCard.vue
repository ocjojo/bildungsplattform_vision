<template>
 <div class="card card-lg analytics">
      <div class="card-body">
        <h2>Analytics2</h2>
      </div>
      <div class="card-body"></div>
      <div class="card-footer"></div>
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
.analytics {
  background: url("../assets/form-blue.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -150px -80px;
}
</style>
