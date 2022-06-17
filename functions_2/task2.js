let data = {
  errors: [{ name: "", message: "", stack: "", level: null }],
  value: null,
};
function mix(...cb) {
  try {
    let passit = data.value;
    for (let i = 0; i < cb.length; i++) {
      if (typeof cb[i] !== "function") {
        data.errors[0].level = i;
        data.value = passit;
        throw new TypeError("its not a function");
      }
      passit = cb[i](passit);
    }
    data.value = passit;
  } catch (error) {
    data.errors[0].name = error.name;
    data.errors[0].message = error.message;
    data.errors[0].stack = error.stack;
    let newArray = cb.slice(data.errors[0].level + 1, cb.length);
    mix(...newArray);
  }
  return data;
}

// esec dzalian kargi task iko :nice-one:

mix(
  () => {
    return 0;
  },
  5,
  (prev) => {
    return prev + 1;
  },
  (prev) => {
    return prev + 3;
  },
  (prev) => {
    return prev + 5;
  },
  (prev) => {
    return prev + 5;
  }
);
