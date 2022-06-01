let primeNumbersArray = [];

for (let i = 2; i <= 300; i++) {
  let count = i;
  for (let j = 2; j <= i / 2; j++) {
    if (Math.floor(i / j) == i / j) {
      count--;
    }
  }
  if (count === i) {
    primeNumbersArray.push(i);
  }
}

console.log(primeNumbersArray);

// Hi Dear Mentor. By changing i in the first for loo[], the code can generate an array with prime numbers up to i. I did it for 300 and my laptop died :D.
