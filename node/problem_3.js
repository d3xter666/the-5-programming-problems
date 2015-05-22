exports.problem3 = function () {
  'use strict';

  console.log('Iterative solution...');
  var fibList = [0, 1],
    limit = 100;

  for (var i = 1; i <= limit - 2; i++) {
    fibList.push(fibList[i] + fibList[i - 1]);
  }
  console.log('First ', fibList.length, ' Fibonacci numbers are: ', fibList.join(' ,'));


  console.log('Recursive solution...');
  fibList = [];
  function fibonacci(nthFibNum, cache) {
    if (typeof cache[nthFibNum] !== 'undefined') {
      return cache[nthFibNum];
    }

    var calc;
    if (nthFibNum === 1) {
      calc = 0;
    } else if (nthFibNum < 2) {
      calc = 1;
    } else {
      calc = fibonacci(nthFibNum - 1, cache) + fibonacci(nthFibNum - 2, cache);
    }

    cache[nthFibNum] = calc;
    return calc
  }

  fibonacci(limit, fibList);
  fibList.shift();

  console.log('First ', fibList.length, ' Fibonacci numbers are: ', fibList.join(' ,'));
};
