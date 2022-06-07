function getDivisors(n) {
  try {
    let arr = [];
    if (n <= 0) {
      throw new RangeError("Number must be greater than 0");
    } else if (typeof n === "string") {
      throw new TypeError("it must be a number");
    } else {
      for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
          arr.push(i);
        }
      }
      arr.push(n);
    }
    return arr;
  } catch (err) {
    console.log(err.message);
  }
}

console.log(getDivisors(0));
