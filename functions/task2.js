function f(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new TypeError("parameter type should be an array;");
    } else if (!arr.length) {
      throw new Error("Array may not be empty");
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
          throw new TypeError("Parameter type should be array of numbers");
        }
      }
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Testers

// f([1,2,3,4,5]);
// f([1, 2, 3, 4, "content"]);
// f([]);
f(5);
