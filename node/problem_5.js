exports.problem5 = function () {
  'use strict';

  var target = 100;

  function solveIt(range) {
    if (range === 9) {
      return [9];
    } else {
      var result = [],
        back = solveIt(range + 1);

      for (var k = 0; k < back.length; k++) {
        result = result.concat([
          range + ' + ' + back[k],
          range + ' - ' + back[k],
          range + '' + back[k]
        ]);
      }

      return result;
    }
  }

  var result = solveIt(1);
  for (var i = 0; i < result.length; i++) {
    if (eval(result[i]) === target) {
      console.log(result[i], '=', target);
    }
  }
};