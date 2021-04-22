"use strict";

class FoodModel {
  constructor() {
    this.id = 0;
    this.db = [
      {
        id: 1,
        record: {
          name: "apple",
          type: "fruit",
        },
      },
      {
        id: 2,
        record: {
          name: "orange",
          type: "fruit",
        },
      },
      {
        id: 3,
        record: {
          name: "onion",
          type: "fruit",
        },
      },
    ]; // this represents an "in-memory" database
  }

  create(obj) {
    // save the new object to the "db" here
    let record = {
      id: ++this.id,
      record: obj,
    };

    this.db.push(record);
    return record;
  }

  read(id) {
    // grab an item from the "db", given it's id
    if (id) {
      return this.db.find((record) => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    // update an item in the "db" with a new item
    // PLACEHOLDER
    if (id) {
      let itemToReplace = this.db.find((record) => record.id === id);
      const index = this.db.indexOf(itemToReplace);
      this.db[index] = {
        id: id,
        record: obj,
      };
      return obj;
    }
  }

  delete(id) {
    // find an item in the "db" via it's id, and delete
    // PLACEHOLDER
    let removed;
    if (id) {
      let itemToRemove = this.db.find((record) => record.id === id);
      const index = this.db.indexOf(itemToRemove);

      if (index > -1) {
        removed = this.db.splice(index, 1);
      }
    }
    return `This item was successully delete ${removed}`;
  }
}

module.exports = FoodModel;
