exports.problem4 = function () {
  'use strict';

  var input = require('../test-inputs/problem4/1.json');

  console.log('Input', input.join((', ')));

  input.sort(function (a, b) {
    return a.toString() < b.toString();
  });

  console.log('Largest possible number', input.join(''));
};
