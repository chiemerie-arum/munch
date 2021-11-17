import apiClient from "./apiClient";

export default {
  getSideDishes() {
    return apiClient("/side-dish");
  },
};
