export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    for (const prop of this.members.entries()) {
      prop.forEach((item) => {
        if (JSON.stringify(item) === JSON.stringify(character)) {
          throw new Error('Такой персонаж уже есть в команде');
        }
      });
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
  }

  toArray() {
    this.arr = [];
    for (const prop of this.members) {
      this.arr.push(prop);
    }
    return this.arr;
  }
}
