import RestaurantService from "../../utils/services/RestaurantService";

export default {
  namespaced: true,
  state: {
    restaurants: [],
    restaurant: {},
  },
  mutations: {
    SET_RESTAURANTS(state, restaurants) {
      state.restaurants = restaurants;
    },
    SET_RESTAURANT(state, restaurant) {
      state.restaurant = restaurant;
    },
  },
  actions: {
    async fetchRestaurants({ commit }) {
      try {
        const restaurants = await RestaurantService.getRestaurants();
        await commit("SET_RESTAURANTS", restaurants.data);
        console.log(restaurants.data);
      } catch (error) {
        console.log(error);
      }
    },
    async setRestaurant({ commit, getters }, id) {
      try {
        const restaurant = getters.getRestaurantById(id);
        if (restaurant) {
          await commit("SET_RESTAURANT", restaurant);
        } else {
          const restaurants = await RestaurantService.getRestaurants();
          const restaurant = getters.getRestaurantById(id);
          await commit("SET_RESTAURANTS", restaurants.data);
          await commit("SET_RESTAURANT", restaurant);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getAllRestaurants: (state) => {
      return state.restaurants;
    },
    getRestaurantById: (state) => (id) => {
      return state.restaurants.find((restaurant) => restaurant.id === id);
    },
  },
};
