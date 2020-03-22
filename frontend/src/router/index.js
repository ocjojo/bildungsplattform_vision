import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "@/store";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "tracks" */ "@/views/Dashboard.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: "/kurse",
    name: "Tracks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tracks" */ "@/views/Tracks.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/kurs/:routeName",
    name: "kurs",
    component: () =>
      import(/* webpackChunkName: "tracks" */ "@/views/Track.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/raum/:routeName",
    name: "room",
    component: () =>
      import(/* webpackChunkName: "tracks" */ "@/views/Room.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/raeume",
    name: "rooms",
    component: () =>
      import(/* webpackChunkName: "tracks" */ "@/views/Rooms.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/hilfe",
    name: "heup",
    component: () =>
      import(/* webpackChunkName: "tracks" */ "@/views/Help.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: "Dashboard" });
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.loggedIn) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.loggedIn) {
      next();
    } else {
      next({ name: "Dashboard" });
    }
  } else {
    next();
  }
});

router.onError(console.error);

export default router;
