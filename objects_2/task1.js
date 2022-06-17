Object.defineProperty(Object.prototype, "mergeDeepRight", {
  value: function mergeDeepRight(obj) {
    let propArray = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < propArray.length; i++) {
      if (typeof this[propArray[i]] !== "object") {
        this[propArray[i]] = obj[propArray[i]];
      } else if (Array.isArray(this[propArray[i]])) {
        this[propArray[i]] = this[propArray[i]].concat(obj[propArray[i]]);
      } else {
        this[propArray[i]].mergeDeepRight(obj[propArray[i]]);
      }
    }
  },
  enumerable: false,
});

const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

data.mergeDeepRight({
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
});

console.log(data);
