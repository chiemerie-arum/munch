<template>
  <h1>Restaurant {{ restaurant.id }}</h1>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Restaurant",
  props: ["id"],
  created() {
    this.setRestaurant(this.id);
  },
  computed: mapState({
    restaurant: (state) => state.restaurant.restaurant,
  }),
  methods: mapActions("restaurant", ["setRestaurant"]),
};
</script>

<style lang="scss" scoped></style>
