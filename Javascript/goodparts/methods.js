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

b.pop();

console.log(b);

b.slice(0,4);

c.reverse();

console.log(c);

var d = b.shift();

a.reverse();

console.log(a);

console.log(d);
console.log(b);

var e = b.concat([0,1,2,3]);

var shallow = e.slice(1,3);

console.log(shallow);
console.log(e);
console.log('sort funciton');

console.log(e.sort());

console.log(e.reverse());

console.log('passed in sort');

e.sort( (a,b) => { return a-b } )

var m = ["mm", "cc", "C", "A", "b", "B", 4, 45, 32, 2, 8];

m.sort( (a,b) => {
       if (a === b)
         return 0;
  if (typeof a === typeof b)
    return a < b ? -1 : 1;
  return typeof a < typeof b ? -1: 1;
})