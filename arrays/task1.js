let sum = 0;

function f(arr) {
  if (arr === "undefined" || !Array.isArray(arr)) {
    throw new TypeError("There must be a paramether that is an array");
  }
  if (f.caller.name !== "f") {
    sum = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && typeof arr[i] !== "object") {
      throw new TypeError("There was neither array nor number on deeper level");
    }
    if (typeof arr[i] === "number") {
      sum = sum + arr[i];
    } else {
      f(arr[i]);
    }
  }
  return sum;
}

let testFArray = [];

function testF() {
  testFArray.push(f([[[1, 2],[1, 2],],[[2, 1],[1, 2],],]));
  testFArray.push(f([[[[[1, 2]]]]]));
  testFArray.push(f([[[[[1, 2]]], 2], 1]));
  testFArray.push(f([[[[[]]]]]));
  testFArray.push(f([[[[[], 3]]]]));
  console.log(testFArray);
}

testF();

// f()
