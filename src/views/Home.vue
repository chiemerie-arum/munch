<template>
  <div>
    <RestaurantCard />
    <!-- <div class="card"></div> -->
  </div>
</template>

<script lang="ts">
import RestaurantCard from "../components/RestaurantCard.vue";
export default {
  name: "Home",
  components: {
    RestaurantCard,
  },
  created() {
    this.$store.dispatch("restaurant/fetchRestaurants");
  },
};
</script>

<style lang="scss" scoped></style>
