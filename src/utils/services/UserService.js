import apiClient from "./apiClient";

export default {
  getUsers() {
    return apiClient("/users");
  },
};
