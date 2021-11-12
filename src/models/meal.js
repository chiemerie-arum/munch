export class Meal {
  constructor(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
    this.isActive = false;
  }

  static toList(values) {
    const newArray = [];
    values.forEach((value) => {
      newArray.push(new this(value));
    });
    return newArray;
  }
}
