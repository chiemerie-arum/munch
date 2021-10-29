import MealService from "../../utils/services/MealService";

export default {
  namespaced: true,
  state: {
    meals: [],
    meal: {},
  },
  mutations: {
    SET_MEALS(state, meals) {
      state.meals = meals;
    },
    SET_MEAL(state, meal) {
      state.meal = meal;
    },
  },
  actions: {
    async fetchMeals({ commit }) {
      try {
        const meals = await MealService.getMeals();
        await commit("SET_MEAL", meals.data);
      } catch (error) {
        console.log(error);
      }
    },
    async setMeal({ commit }, meal) {
      try {
        await commit("SET_MEAL", meal);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getAllMeals: (state) => {
      return state.meals;
    },
  },
};
