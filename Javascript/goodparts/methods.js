//ARRAY METHODS

var a = [1,2,3,4,5];

var b = ["a", "b", "c", "d"]

//array.concat(items);

var c = a.concat(b);

console.log(c);
console.log(a);

//array.join(seperator);

var d = b.join('');

console.log(d);
console.log(b);

var e = a.join('+')

console.log(eval(e));

console.log(typeof e);

var f = parseInt(e);

console.log(f);
console.log(e);

var addArr = function(arr) {
  return arr.reduce( function(a, b) {
    return a + b;
  })
}

addArr(a);