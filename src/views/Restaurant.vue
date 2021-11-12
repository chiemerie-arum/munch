<template>
  <div class="restaurant">
    <div class="details ml-7">
      <h2>{{ restaurant.name }}</h2>
      <div class="rating">
        <StarRating
          read-only
          active-color="#f86600"
          :star-size="16"
          :show-rating="false"
          :increment="0.1"
          :rating="restaurant.ratingAverage"
        />
        <span class="rating-total mb-0"
          >({{ restaurant.ratingsNumber }} Reviews)</span
        >
      </div>
    </div>
    <div class="menucard"></div>
    <MealCard class="ml-7" v-for="meal in meals" :key="meal.id" :meal="meal" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating";
import MealCard from "../components/MealCard.vue";
export default {
  name: "Restaurant",
  props: ["id"],
  components: {
    MealCard,
    StarRating,
  },
  mounted() {
    this.$store.dispatch("meal/fetchMeals", this.id);
    this.$store.dispatch("restaurant/setRestaurant", this.id);
  },
  computed: mapState({
    ...mapState("meal", ["meals"]),
    ...mapState("restaurant", ["restaurant"]),
  }),
};
</script>

<style lang="scss" scoped>
.restaurant {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.menucard {
  display: flex;
  justify-content: flex-start;
}
.rating {
  display: flex;
  font-size: 11px;
  color: #f86600;
  align-items: center;
}
</style>
