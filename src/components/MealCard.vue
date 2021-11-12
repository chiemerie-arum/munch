<template>
  <div
    class="restaurant mb-2"
    @click="toggleSideDishes"
    :class="{ active: isActive }"
  >
    <div class="restaurant__details ml-3">
      <div>
        <h3 class="font-weight-bold restaurant__title">
          {{ meal.name }}
        </h3>
        <p
          v-if="!!meal.description"
          class="font-weight-light restaurant__description mb-2"
        >
          {{ meal.description }}
        </p>
        <p class="font-weight-light restaurant__description mb-2">
          Choice of:
          <span v-for="(choice, index) in meal.choiceOf" :key="index">
            {{ choice.name }},</span
          >
        </p>
        <h3 class="font-weight-bold meal__price pb-3">
          {{ meal.price }}
        </h3>
      </div>
    </div>
    <div v-if="meal.isActive" class="side-dish">
      {{ meal.choiceOf }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MealCard",
  data() {
    return {
      sideDish: null,
      mealId: `side-dish-${this.meal.id}`,
    };
  },
  props: {
    meal: {
      type: Object,
      requied: true,
    },
  },
  mounted() {
    this.sideDish = document.querySelector(".side-dish");
  },
  methods: {
    toggleSideDishes() {
      let currState = this.meal.isActive;
      this.$store.dispatch("meal/setMealsInactive");
      this.meal.isActive = !currState;
    },
  },
};
</script>

<style lang="scss" scoped>
.restaurant {
  display: flex;
  align-items: center;
  width: 890px;
  min-height: 130px;
  border-radius: 2px;
  border: 1px solid #ebebeb;
  position: relative;

  margin-bottom: 20px;
  color: #0a3847;

  &:hover {
    background-color: rgb(145, 184, 207, 0.2);
    cursor: pointer;
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
  .meal__price {
    color: #f86600;
  }
  .side-dish {
    padding: 0 18px;
    transition: max-height 0.2s ease-out;
    background-color: #f8f5f2;
  }
  .restaurant:after {
    content: "\02795"; /* Unicode character for "plus" sign (+) */
    font-size: 20px;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: 5px;
    align-self: flex-end;
    border: 1px solid #ebebeb;
  }

  .active:after {
    content: "\02716"; /* Unicode character for "minus" sign (-) */
  }
}
</style>
