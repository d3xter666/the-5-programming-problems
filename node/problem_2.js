exports.problem2 = function () {
  'use strict';

  var mergedList = [],
    list1 = require('../test-inputs/problem2/1.json'),
    list2 = require('../test-inputs/problem2/2.json'),
    l = list1.length > list2.length ? list1.length : list2.length;

  console.log('List 1: ', list1.join(', '));
  console.log('List 2: ', list2.join(', '));

  for (var i = 0; i < l; i++) {
    if (typeof list1[i] !== 'undefined') {
      mergedList.push(list1[i]);
    }
    if (typeof list2[i] !== 'undefined') {
      mergedList.push(list2[i]);
    }
  }

  console.log('Merged list:', mergedList.join(', '));
};