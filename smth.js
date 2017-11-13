'use strict';

const a = [];
a.push(-1);
for (let i = 0; i < 5; i++) {
  a.push(i);
}
console.log(a.unshift(10));
//console.log(a.shift());
console.log(a[5]);
console.log(a);
