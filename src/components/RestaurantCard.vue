<template>
  <router-link
    class="text-decoration-none"
    :to="{ name: 'Restaurant', params: { id: restaurant.id } }"
  >
    <div class="restaurant mb-2">
      <div class="restaurant__logo">
        <img src="../assets/restaurant-logos/logo.jpeg" alt="" />
        <div class="rating">
          <StarRating
            read-only
            active-color="#f86600"
            star-size="13"
            :show-rating="false"
            :increment="0.1"
            :rating="restaurant.ratingAverage"
          />
          <span class="rating-total">({{ restaurant.ratingsNumber }})</span>
        </div>
      </div>
      <div class="restaurant__details ml-3">
        <div>
          <h3 class="font-weight-bold restaurant__title">
            {{ restaurant.name }}
          </h3>
          <p class="font-weight-light restaurant__description">
            {{ restaurant.description }}
          </p>
        </div>
        <div class="restaurant__delivery">
          <div>
            <p class="mb-1 mr-5">
              <v-icon size="15"> mdi-clock-time-five </v-icon> 30min
            </p>
          </div>
          <div>
            <p class="mb-1 mr-5">
              <v-icon size="15"> mdi-bicycle </v-icon> Free
            </p>
          </div>
          <div>
            <p class="mb-1 mr-5">
              <v-icon size="15"> mdi-basket </v-icon> Min.
              {{ restaurant.minimumOrderAmount }},00 €
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "RestaurantCard",
  components: {
    StarRating,
  },
  props: {
    restaurant: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.restaurant {
  display: flex;
  align-items: center;
  width: 890px;
  height: 120px;
  border-radius: 2px;
  border: 1px solid #ebebeb;
  margin: auto;
  margin-bottom: 20px;
  color: #0a3847;

  &:hover {
    background-color: rgb(145, 184, 207, 0.2);
  }

  &__description {
    color: #666;
    font-size: 13px;
    margin-top: -2px;
  }

  &__delivery {
    display: flex;
    font-size: 13px;
    color: #666;
  }

  &__details {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: nowrap;
    width: 140px;
    height: 95%;
    border-right: 1px solid #ebebeb;

    img {
      width: 80px;
      height: 55px;
      margin-bottom: 10px;
    }

    .rating {
      display: flex;
      justify-content: center;
      font-size: 11px;
      color: #666;
    }
  }
}
</style>
