var numList = require('../test-inputs/problem1/1.json');

var i, sum;

sum = 0;
for (i = 0; i < numList.length; i++) {
  sum += numList[i];
}
console.log('For loop: ', sum);

sum = i = 0;
while (i < numList.length) {
  sum += numList[i++];
}
console.log('While loop: ', sum);


function sumRecursively(list, index) {
  if (list[index + 1]) {
    return list[index] + sumRecursively(list, index + 1);
  } else {
    return list[index];
  }
}
console.log('Recursion: ', sumRecursively(numList, 0));