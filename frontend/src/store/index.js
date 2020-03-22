import Vue from "vue";
import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

export const store = Vue.observable({
  loggedIn: false
});

const getters = {
  async user() {
    if (store.user) {
      return store.user;
    } else {
      // replace with actual ajax
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            email: "max@muster.de",
            firstname: "Max",
            lastname: "Muster",
            profileImgTarget: require("../assets/logo.svg")
          });
        }, 5000);
      }).then(user => {
        store.loggedIn = true;
        Vue.set(store, "user", user);
        return store.user;
      });
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

  return asyncComputed;
}
