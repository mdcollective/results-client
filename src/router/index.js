import Vue from "vue";
import VueRouter from "vue-router";
import Leagues from "../components/League/Leagues.vue";
import Seasons from "../components/League/Seasons.vue";
import Races from "../components/League/Races.vue";
import Results from "../components/League/Results.vue";
import Result from "../components/League/Result.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Leagues",
    component: Leagues
  },
  {
    path: "/seasons",
    name: "Seasons",
    component: Seasons
  },
  {
    path: "/races",
    name: "Races",
    component: Races
  },
  {
    path: "/results",
    name: "Results",
    component: Results
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;