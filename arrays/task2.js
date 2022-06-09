function reverseArr(arr) {
  let popArr = [];
  for (let i = 0; i < arr.length + popArr.length; i++) {
    popArr.push(arr.pop());
  }
  popArr.forEach((el) => {
    arr.push(el);
  });
  console.log(arr);
}

// reverseArr([1, 2, 3, 4, 5]);
// reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
