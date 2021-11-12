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
    async fetchMeals({ commit }, restaurantId) {
      try {
        const allMeals = await MealService.getMeals();
        const meals = allMeals.data.filter(
          (meal) => meal.restaurantId === Number(restaurantId)
        );

        await commit("SET_MEALS", meals);
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
