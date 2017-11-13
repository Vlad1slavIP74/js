'use strict'
function pow(n) {
  let s = 0;
  if (n != 0){
    return n + pow(n-1);
  }
  else {
    return s;
  }
};
console.log(pow(3))
