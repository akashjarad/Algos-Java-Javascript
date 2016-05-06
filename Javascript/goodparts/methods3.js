//do not confuse splice with slice

var arr = [1, 5, 7, 99, 4, 0, -2, 5];

arr.splice(1, 2, 'inserted additional argument');

console.log(arr);

//implement splice function

Array.method('splice', function (start, deletecount) {
	var max = Math.max,
		min = Math.min,
		delta,
		element,
		insertCount = max(arguments.length - 2, 0),
		k = 0;
		len = this.length,
		new_len,
		result = [];
		shift_count;

		start = start || 0;
		if (start < 0) {
			start += len;
		}
		start = max(min(start,len), 0);
		deleteCount = max(min(typeof deleteCount === 'number' ?
			deleteCount : len, len - start), 0);
		delta = insertCount - deleteCount;
		new_len = len + delta;
		while (k < deleteCount) {
			element = this[start + k];
			if (element !== undefined) {
				result[k] = element;
			}
			k += 1;
		}
		shift_count = len - start - deleteCount;
		if (delta < 0) {
			k = start + insertCount;
			while (shift_count) {
				this[k] = this[k - delta];
				k += 1;
				shift_count -= 1;
			}
			this.length = new_len;
		}
		else if (delta > 0) {
			k -= 1;
			while (shift_count) {
				this[new_len - k] = this[len-k];
				k += 1;
				shift_count -=1;
			}
		}
		for (k = 0; k < insertCount; k += 1) {
			this[start + k] = arguments[k+2];
		}
		return result;
})

//Array.unshift
// like push, except it shoves the items onto the front
//of this Array instead of at the end. returns length

var arr1 = ['b', 'd', 'f', 'y'];

var r = a.unshift('?', 'A');

//unshift implementation

Array.method('unshift', function() {
	this.splice.apply(this,
		[0,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

//FUNCTION METHODS

//function.apply(thisArg, argArray)

//apply method invokes a function, passing in the object
//thatll be bound to 'this' and an optional array of args

Function.method('bind', function (that) {
	//return a function
	//that will call this function
	//as a method of that object
	var method = this,
		slice = Array.prototype.slice,
		args = slice.apply(arguments, [1]);
	return function () {
		return method.apply(that,
			args.concat(slice.apply(arguments, [0])));
	};
});

var x = function () {
	return this.value;
}.bind({value: 888});
alert(x()); // 888

//NUMBER METHODS

//number.toExponential(fractionDigits);
//converts number to string in exponential form

Math.PI.toExponential(); // 3e+0;
Math.Pi.toExponential(5); // 3.14159e+0
