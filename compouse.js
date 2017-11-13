'use strict';
const compose = (...funcs) => (...args) => (
  funcs.reduce((args, fn) => [fn(...args)], args)
);

const str2arr = str => str.split('');
const arrReverse = arr => arr.reverse();
const arr2str = arr => arr.join('');

const log = s => {
  console.log(s);
  return s;
};

const strReverse = compose(str2arr, log, arrReverse, log, arr2str);

console.log(strReverse('Hello')[0]);
