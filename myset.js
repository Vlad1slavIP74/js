'use strict';

const association = (my, yours) => new Set([...my, ...yours]);

const sum = (my, yours) => (
  [...my, ...yours].reduce (function(plus, curent) {
    return plus + curent;
  })
); // 1+2+3+4+5+6+7+8+9 = 45

const mult = (my, yours) =>  (
  [...my, ...yours].reduce (function(first, curent) {
    return first * curent;
  })
); // 1*2*3*4*5*6*7*8*9 = 362880
const operations = [association, sum, mult];

const numberMy = new Set([1, 2, 3, 4, 4]);
const numberYours = new Set([5, 6, 7, 8, 9, 9]);

const final = operations.map(operation => ({
  [operation.name]: operation(numberMy, numberYours)
}));

console.log(final);
console.log();
console.dir(final);
