import apiClient from "./apiClient";

export default {
  getRestaurants() {
    return apiClient("/restaurants");
  },
};
