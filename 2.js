'use strict'
const arrObject = [ Person = {
    name: 'Pidor',
    age: 1988
}, {
    name: 'Hui',
    age: 1346
}, {
    name: 'Hownuk',
    age: 1990
}];

const name2 = arrObject.map(function(arrObject) {
    return arrObject.name
} );

const age2 = arrObject.map(function(arrObject) {
    return arrObject.age
});

console.log('Hi,' + name2);
console.log('I have heard that you born in' + age2);
