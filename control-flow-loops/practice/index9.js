let numsArray = [];
let num;
let count = 0;

for (let i = 0; i < 50; i++) {
  num = 5 - Math.floor(Math.random() * 10);
  if(num !== 0) {
    numsArray.push(num);
  }
}

for(let i = 0; i < numsArray.length; i++) {
  if(numsArray[i] > 0) {
    count++;
  }
}

console.log(count)