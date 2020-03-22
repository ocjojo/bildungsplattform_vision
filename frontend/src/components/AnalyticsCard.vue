<template>
 <div class="card card-lg analytics">
    <div class="card-body">
        <div class="analytics-col">
            <div class="course-wrapper">
                <div class="course-info">
                    <div class="course-info-value">3</div>
                    <div class="course-info-desc">offene Kurse</div>
                </div>
                <div class="course-info">
                    <div class="course-info-value">15</div>
                    <div class="course-info-desc">abgeschlossene Kurse</div>
                </div>
            </div>
        </div>
        <div class="analytics-col">
            <div class="course-progess-wrapper">
                <div>Kurs 1</div>
                <div class="progressbar"><div class="progress" style="width: 40%"></div></div>
                <div>Kurs 2</div>
                <div class="progressbar"><div class="progress" style="width: 80%"></div></div>
                <div>Kurs 3</div>
                <div class="progressbar"><div class="progress" style="width: 70%"></div></div>
                <div>Kurs 4</div>
                <div class="progressbar"><div class="progress" style="width: 90%"></div></div>
                <div>Kurs 5</div>
                <div class="progressbar"><div class="progress" style="width: 10%"></div></div>
            </div>
        </div>
    </div>
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
  background-position: -250px -140px;
  height: 350px;
  width: 900px;
}

.analytics > .card-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    height: 100%;
}

.analytics-col {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    width: 100%;
}

.analytics-col .course-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.analytics-col .course-info {
    text-align: center;
    cursor: pointer;
    padding: 20px;
    transition: all .5s ease-in-out;
}

.course-info:hover {
     background: white;
     box-shadow: 0px 10px 15px 2px #ddd;
     transform: scale(1.1);
}

.course-info-value {
    font-size: 2.75rem;
    color: $color-analytics-course-count;
}

.course-info-desc {
    margin-top: 10px;
    font-size: 1.25rem;
}

.course-progess-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-row-gap: 10px;
}

.progressbar {
    width: 100%;
    position: relative;
    height: 15px;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: $primary-gradient;
}
</style>
