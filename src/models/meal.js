export class Meal {
  constructor(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
    this.isActive = false;
    this.sideDishes = [];
  }

  static toList(values, sideDishes) {
    const newArray = [];
    values.forEach((value) => {
      const meal = new this(value);
      meal.sideDishes = sideDishes.filter((dish) => {
        return meal.id === dish.mealId;
      });
      newArray.push(meal);
    });
    return newArray;
  }
}
