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
Math.PI.toExponential(5); // 3.14159e+0

//number.toFixed(fractionDigits)
// toFixed method converts this number to a string
// in the decimal form. fractionDigits = # of decimal places

Math.PI.toFixed() // 3
Math.PI.toFixed(2) // 3.14
Math.PI.toFixed(7) // 3.1415927

//number.toPrecision(precision)
//converts number to string in decimal form
//precision parameter controls number of digits of precision

Math.PI.toPrecision(7) // 3.1415923

//number.toString(radix)
//converts number to a string
//radix parameter controls radix, or base (2 -> 36)
//default radix is 10 (base 10)

Math.PI.toString(2) // 11.001010010101001010100101
Math.PI.toString() // 3.141592785481370835679

//OBJECT METHODS

//object.hasOwnProperty(name)
//returns true of object has property with name
//does NOT look up prototype chain

var a = {customer: true};
var b = Object.create(a);

var t = a.hasOwnProperty('customer'); // true

var u = b.hasOwnProperty('customer'); // false, 2 prototypes up

var v = b.member // v is true

//REGEXP METHODS

//regexp.exec(string)

//most powerful AND SLOWESSSTT of methods
//if it matches regexp and string, it returns array
//the 0 element will contain the substring that matched regexp
// the 1 element is the text captured by group 1
// the 2 element is text captured by group 2
//if match fails, null is returned

//Break simple html text into tags and texts

//For each tag or text, produce an array containing
// [0] the full matched tag or text
// [1] the tag name
// [2] the /, if there is one 
// [3] the attributes, if any

var text = '<html><body bgcolor=linen><p>' +
	'This is <b>bold<\/b>!<\/p><\/body><\/html>';

var tags = /[^<>]+|<(\/?)(A-Za-z)+)([^<>]*)>/g;
var a,i;

while ((a = tags.exec(text))) {
	for (i = 0; i < a.length; i+=1) {
		document.writeln(('// [' + i + '] ' + a[i]).entityify());
	}
	document.writeln();
}

//result
//[0] <body bgcolor=linen>
//[1]
//[2] body
//[3] bgcolor=linen
//
//
//
//[0] <p>
//[1]
//[2] p
//[3]
//etc

//regexp.test(string)

//fasted method on regexp, compared to exec, the SLOWESSSTT
//if it matches return true, otherwise returns false
//dont use /g flag

var b = /&.+;/.test('fark &amp; beens');
//b is true

//could be implemented as

RegExp.method('test', function(string) {
	return this.exec(string) !== null;
})

//STRING METHODS