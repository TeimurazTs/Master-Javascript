let sum = 0;

function f(arr) {
  if(f.caller.name === 'testF') {
    sum = 0;
  }
  for (let i = 0; i < arr.length; i++) {
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
  testFArray.push(
    f([[[1, 2],[1, 2],],[[2, 1],[1, 2],],]));
  testFArray.push(f([[[[[1, 2]]]]]));
  testFArray.push(f([[[[[1, 2]]], 2], 1]));
  testFArray.push(f([[[[[]]]]]));
  testFArray.push(f([[[[[], 3]]]]));
  console.log(testFArray);
}

testF();

// This task almost killed me!!!