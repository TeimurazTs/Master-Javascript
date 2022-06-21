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
}

const db = new DB();

const person = {
  name: "Pitter", // required field with type string
  age: 21, // required field with type number
  country: "ge", // required field with type string
  salary: 500, // required field with type number
};

const person2 = {
  name: "Parker", // required field with type string
  age: 21, // required field with type number
  country: "ge", // required field with type string
  salary: 500, // required field with type number
};


const id2 = db.create(person2);
const customer2 = db.read(id2);
const customers2 = db.readAll(); // array of users

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
