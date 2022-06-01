const arr = [1, 2, 3, 4];

let sumForLoop = 0;

// Using for loop

for (let i = 0; i < arr.length; i++) {
  sumForLoop = sumForLoop + arr[i];
}

console.log(sumForLoop);

// using reducer

let sumForReduce = arr.reduce((a, b) => a + b, 0);

console.log(sumForReduce);
