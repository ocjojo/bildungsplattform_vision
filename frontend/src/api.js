import deepmerge from "deepmerge";
import { store } from "@/store";
const baseUrl = window.location.origin + "/api";

function base(path, options = {}) {
  return fetch(
    baseUrl + path,
    deepmerge(options, {
      headers: {
        accept: "application/json",
        "cache-control": "no-cache"
      }
    })
  ).then(resp => resp.json());
}

function get(path, options = {}) {
  return base(
    path,
    deepmerge(options, {
      method: "GET"
    })
  );
}

function post(path, data, options = {}) {
  return base(
    path,
    deepmerge(options, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
  );
}

export default {
  loggedIn() {
    return get("/users/loggedIn");
  },
  login(username, password) {
    return post("/users/login", {
      username,
      password
    }).then(resp => {
      if (!resp.error) {
        store.set("user", resp);
        store.set("loggedIn", true);
      }
      return resp;
    });
  },
  logout() {
    return get("/users/logout").then(resp => {
      store.set("user", null);
      store.set("loggedIn", false);
    });
  },
  register(user) {
    return post("/users/register", user);
  },
  tracks() {
    return get("/tracks/");
  },
  track(id) {
    return get("/tracks/" + id);
  },
  trackUnits(id) {
    return get(`/tracks/${id}/units`);
  },
  rooms() {
    return get("/rooms/");
  },
  room(id) {
    return get("/rooms/" + id);
  },
  roomMessages(id) {
    return get(`/rooms/${id}/messages`).then(messages => {
      return messages.error ? [] : messages;
    });
  }
};
