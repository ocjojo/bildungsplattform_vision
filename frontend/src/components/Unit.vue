<template>
  <section class="material">
    <div v-if="unit.Category == 'youtube'" class="video">
      <div class="iframe-container">
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          width="780"
          height="440"
          type="text/html"
          :src="embedYoutube(unit.Target)"
        ></iframe>
      </div>
    </div>
    <div class="description">
      <h3>{{ unit.Title }}</h3>
      <p>{{ unit.Description }}</p>
      <div v-if="unit.Category == 'link'" class="link">
        <a :href="unit.Target">Mehr Infos</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Unit",
  props: {
    unit: Object
  },
  methods: {
    embedYoutube(link) {
      const url = link.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      const ytID =
        url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
      return `https://www.youtube.com/embed/${ytID}?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`;
    }
  }
};
</script>

<style scoped lang="scss">
section.material {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;

  > * {
    flex: 1 1;
  }

  .iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background: #f3f3f3;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    max-width: 600px;
    padding: 10px;
  }
}
</style>
