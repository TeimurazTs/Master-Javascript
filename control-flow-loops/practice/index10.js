let numsArray = [];

for (let i = 0; i < 10; i++) {
  num = Math.floor(Math.random() * 10);
  numsArray.push(num);
}

for (let i = 0; i < numsArray.length; i++) {
  if (numsArray[i] === 4) {
    console.log("Exist!");
    break;
  }
}
