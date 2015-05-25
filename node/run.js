'use strict';

var problems = [
  require('./problem_1'),
  require('./problem_2'),
  require('./problem_3'),
  require('./problem_4')
  //require('./problem_5')
];

for (var i = 0; i < problems.length; i++) {
  console.log('Solving "Problem ', (i + 1), '"');
  problems[i]['problem' + (i + 1)]();
  console.log('-----------------------------');
}