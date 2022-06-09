function rotate(nums, k, direction = 'right') {
  if (direction === "right") {
    let part = nums.splice(nums.length - k, nums.length - 1);
    let toReturn = part.concat(nums);
    console.log(toReturn);
    return toReturn;
  } else {
    let part = nums.splice(0, k);
    let toReturn = nums.concat(part);
    console.log(toReturn);
  }
}

// tests

rotate([1, 2, 3], 1);
rotate([1, 2, 3], 2);
rotate([1,2,3], 1, 'left');
