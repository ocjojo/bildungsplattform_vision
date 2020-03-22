import Vue from "vue";
import AsyncComputed from "vue-async-computed";
import api from "@/api";
import deepmerge from "deepmerge";
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
  },
  async tracks() {
    if (store.tracks) {
      return store.tracks;
    } else {
      return api.tracks().then(tracks => {
        if (!tracks.error) {
          Vue.set(store, "tracks", tracks);
        }
        return store.tracks;
      });
    }
  },
  async track(id) {
    if (store.tracks && store.tracks.length > 0) {
      const track = store.tracks.find(track => track.ID == id);
      if (track) {
        return track;
      }
    }
    return api.track(id).then(track => {
      if (!track.error) {
        Vue.set(store, "tracks", deepmerge([track], store.tracks));
      }
      return track;
    });
  },
  async rooms() {
    if (store.rooms) {
      return store.rooms;
    } else {
      return api.rooms().then(rooms => {
        if (!rooms.error) {
          Vue.set(store, "rooms", rooms);
        }
        return store.rooms;
      });
    }
  },
  async room(id) {
    if (store.rooms && store.rooms.length > 0) {
      const room = store.rooms.find(room => room.ID == id);
      if (room) {
        return room;
      }
    }
    return api.room(id).then(room => {
      if (!room.error) {
        Vue.set(store, "rooms", deepmerge([room], store.rooms));
      }
      return room;
    });
  },
  async roomMessages(id) {
    if (store.roomMessages && store.roomMessages[id]) {
      return store.roomMessages[id];
    }
    return api.roomMessages(id).then(roomMessages => {
      if (!roomMessages.error) {
        Vue.set(
          store,
          "roomMessages",
          deepmerge({ [id]: roomMessages }, store.roomMessages || {})
        );
      }
      return store.roomMessages[id];
    });
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
