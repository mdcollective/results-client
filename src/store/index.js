import Vue from "vue";
import Vuex from "vuex";

import leagues from "./leagues";
import results from "./results";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    leagues,
    results
  }
});
