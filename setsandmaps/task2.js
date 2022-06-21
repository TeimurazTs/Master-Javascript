class DB {
  constructor() {
    this.data = new Map();
  }

  create(object) {
    if (
      typeof object !== "object" ||
      object.name == undefined ||
      object.age === undefined ||
      object.country === undefined ||
      object.salary === undefined
    ) {
      throw new TypeError("Must be an object");
    }

    let unique = Math.random().toString();
    this.data.set(unique, object);

    return unique;
  }

  read(id) {
    if (typeof id !== "string" || id === undefined) {
      throw new TypeError("need a string");
    }
    if (this.data.get(id) === undefined) return null;
    return this.data.get(id);
  }

  readAll(param) {
    if (param !== undefined) throw new TypeError("no param");
    let returnArray = [];
    this.data.forEach(function (value) {
      returnArray.push(value);
    });
    return returnArray;
  }

  update(id, object) {
    if (this.data.get(id) === undefined) throw new Error("there is no id");
    if (typeof id !== "string") throw new TypeError("must be a string");
    let key = Object.keys(object)[0];
    this.data.get(id)[key] = object[key];
  }

  delete(id) {
    if (this.data.get(id) === undefined) throw new Error("No such ID");
    this.data.delete(id);
  }

  find(object) {
    let toreturn = [];
    this.data.forEach(function (value) {
      if (
        value.country === object.country &&
        (value.age > object.age.min || value.age < object.age.max) &&
        (value.salary > object.salary.min || value.salary < object.salary.max)
      ) {
        toreturn.push(value);
      }
    });
    return toreturn;
  }
}
