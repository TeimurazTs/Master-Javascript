function rotate(nums, k, direction = "right") {
  if (
    !Array.isArray(nums) ||
    typeof k !== "number" ||
    typeof direction !== "string"
  ) {
    throw new TypeError(
      "first parameter required and has to be only array; second parameter required and has to be number; third parameter optional and has to be only string"
    );
  }
  if (direction === "right") {
    let part = nums.splice(nums.length - k, nums.length - 1);
    part.reverse();
    part.forEach((el) => {
      nums.unshift(el);
    });
    console.log(nums);
  } else {
    let part = nums.splice(0, k);
    part.forEach((el) => {
      nums.push(el);
    });
    console.log(nums);
  }
}

// tests

// rotate([1, 2, 3], 1, "left");
// rotate([1, 2, 3], 1);
// rotate([1, 2, 3], 2);
// rotate([1, 2, 3, 4, 5, 6], 3, "left");
