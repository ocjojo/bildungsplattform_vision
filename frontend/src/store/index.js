import Vue from "vue";
import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

const store = Vue.observable({
  user: {
    email: "max@muster.de",
    firstname: "Max",
    lastname: "Muster",
    profileImgTarget: require("../assets/logo.svg")
  }
});

const getters = {
  async user() {
    if (store.user) {
      return store.user;
    } else {
      // replace with actual ajax
      return Promise.resolve(store.user);
    }
  }
};

export function mapGetters(definition) {
  const asyncComputed = {};
  definition.forEach(requestedGetter => {
    if (typeof requestedGetter === "string") {
      asyncComputed[requestedGetter] = getters[requestedGetter];
    } else {
      const key = Object.keys(requestedGetter)[0];
      const defaultValue = requestedGetter[key];
      asyncComputed[key] = {
        get: getters[key],
        default: defaultValue
      };
    }
  });

  return { asyncComputed };
}
