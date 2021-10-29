import Vue from "vue";
import Vuex from "vuex";
import restaurant from "./modules/restaurant";
import meal from "./modules/meal";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    restaurant,
    user,
    meal,
  },
});
