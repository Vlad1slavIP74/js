'use strict';

const obj1 = {z: '0', x: '9'};
const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['1', '2', '3', '4', '5', '6', '7'];

class Map {
  constructor(object) {
    this.obj = object || {};
  }
  unite(arr1, arr2) {
    let i;
    for(i = 0; i < arr1.length; i++) {
      this.obj[arr1[i]] = arr2[i];
    }
    console.log(this.obj);
    return this.obj
  }
}

const object = new Map();
object.unite(array1, array2);
const object2 = new Map(obj1);
object2.unite(array1, array2);
