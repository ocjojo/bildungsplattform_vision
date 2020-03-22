<template>
  <div>
    <header>
      <div class="track-info">
        <div class="track-title">{{ $route.params.trackName }}</div>
        <div class="track-detailed-info">
          <div class="track-users group">23</div>
          <div class="track-rating rating">4,5</div>
        </div>
      </div>
    </header>
    <section class="material">
      <div class="video"><button class="btn btn-action play"></button></div>
      <div class="description">{{ trackDescription }}</div>
    </section>
    <section class="forum">
      <h2>Forum - {{ $route.params.trackName }}</h2>
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
export default {
  data() {
    return {
      trackDescription:
        "Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen."
    };
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

section.material {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  .video {
    width: 500px;
    height: 280px;
    background: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .description {
    max-width: 600px;
    padding: 10px;
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
