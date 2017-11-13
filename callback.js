function some_function(arg1, arg2, callback) {

    var my_number = (arg1 - arg2) * arg2;

    callback(my_number);
}
// вызываем функцию
let b = function (num) {
  console.log(num)
}
some_function(5, 20, b);
