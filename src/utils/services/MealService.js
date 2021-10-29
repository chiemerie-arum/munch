import apiClient from "./apiClient";

export default {
  getMeals() {
    return apiClient("/meals");
  },
};
