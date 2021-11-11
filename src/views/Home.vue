<template>
  <div>
    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </div>
</template>

<script>
import RestaurantCard from "../components/RestaurantCard.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    RestaurantCard,
  },
  mounted() {
    this.$store.dispatch("restaurant/fetchRestaurants");
  },

  computed: {
    ...mapState("restaurant", ["restaurants"]),
  },
};
</script>

<style lang="scss" scoped></style>
