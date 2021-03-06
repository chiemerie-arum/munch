import MealService from "../../utils/services/MealService";
import SideDishService from "../../utils/services/SideDishService";
import { Meal } from "../../models/meal";

export default {
  namespaced: true,
  state: {
    meals: [],
    meal: {},
    sideDishes: [],
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
        const sideDishes = await SideDishService.getSideDishes();
        let meals = allMeals.data.filter(
          (meal) => meal.restaurantId === Number(restaurantId)
        );
        meals = Meal.toList(meals, sideDishes.data);

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
    setMealsInactive({ state }) {
      state.meals.forEach((meal) => {
        meal.isActive = false;
      });
    },
  },
  getters: {
    getAllMeals: (state) => {
      return state.meals;
    },
  },
};
