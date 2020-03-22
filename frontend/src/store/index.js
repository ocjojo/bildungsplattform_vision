import Vue from "vue";
import AsyncComputed from "vue-async-computed";
import api from "@/api";
Vue.use(AsyncComputed);

export const store = Vue.observable({
  loggedIn: false
});

store.set = function(property, value) {
  Vue.set(store, property, value);
};

const getters = {
  async user() {
    if (store.user) {
      return store.user;
    } else {
      return api.loggedIn().then(user => {
        if (user.error) {
          store.loggedIn = false;
        } else {
          store.loggedIn = true;
          Vue.set(store, "user", user);
        }
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
