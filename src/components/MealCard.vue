<template>
  <div class="restaurant mb-2" :class="{ active: meal.isActive }" ref="card">
    <div @click="toggleSideDishes" class="restaurant__details ml-3">
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
    <div v-if="meal.isActive" class="side-dish" ref="sideDish">
      <div class="side-dish-container">
        <v-container>
          <div
            v-for="(sideDish, index) in meal.sideDishes"
            :key="sideDish.name + index"
            class="mb-5"
          >
            <label>{{ sideDish.name }}</label>
            <span
              ><v-checkbox
                class="my-checkbox"
                v-for="option in sideDish.options"
                :key="meal.id + option.name"
                dense
                hide-details
                v-model="extras"
                :label="
                  option.name +
                  `  ${option.price === 0 ? `` : `(${option.price}€)`} `
                "
                :value="option.name"
              >
                <span v-if="option.price">
                  ({{ option.price }})</span
                ></v-checkbox
              >
            </span>
          </div>
        </v-container>
        <div class="quantity-price mb-10">
          <div class="quantity">
            <v-icon @click="decrementQuantity" right> mdi-minus </v-icon>
            <span>{{ quantity }}</span>
            <v-icon @click="incrementQuantity" right> mdi-plus </v-icon>
          </div>
          <v-btn dark width="415" height="38" color="#125fca">
            {{ tempPrice }}€</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

export default {
  name: "MealCard",
  data() {
    return {
      extras: [],
      selectedElement: null,
      quantity: 1,
      tempPrice: 0,
    };
  },
  props: {
    meal: {
      type: Object,
      requied: true,
    },
  },
  mounted() {
    this.tempPrice = this.meal.price;
  },
  methods: {
    toggleSideDishes() {
      if (this.meal.sideDishes.length) {
        // const el = this.$refs.card;
        let currState = this.meal.isActive;
        this.$store.dispatch("meal/setMealsInactive");
        this.meal.isActive = !currState;
        // if (this.selectedElement !== el) {
        //   this.scrollToTargetAdjusted(el);
        //   this.selectedElement = el;
        // }
      }
    },
    incrementQuantity() {
      this.tempPrice = math.round(this.tempPrice + this.meal.price, 2);
      return (this.quantity += 1);
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.tempPrice = math.round(this.tempPrice - this.meal.price, 2);
        return (this.quantity -= 1);
      }
    },
    scrollToTargetAdjusted(el) {
      var element = el;
      var headerOffset = 65;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
    width: 100%;
    &:hover {
      background-color: rgb(145, 184, 207, 0.2);
      cursor: pointer;
    }
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
  .side-dish-container {
    width: 600px;
    margin: auto;
  }
  .side-dish {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 18px;
    transition: max-height 0.2s ease-out;
    overflow: hidden;
    background-color: #f8f5f2;
    width: 100%;
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
    content: "\02716"; /* Unicode character for "minus" sign (x) */
  }

  ::v-deep .my-checkbox .v-label {
    font-size: 12px;
    display: inline-block;
  }

  .quantity-price {
    display: flex;
    justify-content: space-around;

    .quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 110px;
      height: 38px;
      border: 1px solid #d7d7d7;
      background-color: white;

      span {
        color: #125fca;
        font-weight: bold;
      }
    }
  }
}
</style>
