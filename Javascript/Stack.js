//stack in javascript
// a stack is LIFO. Last in, First Out

//Stack object created using constructor function
function Stack() {
	this.stackNum = stackNum;
	this.sPush = sPush;
	this.sPop = sPop;
	this.init = init;
	this.array = [];
}

function init(number) {
	var array = this.array;

	for (i = 0; i < number; i++) {
		array[i] = i;
	}

	return array;
}

function stackNum(initNum) {
	console.log(this);
	console.log(initNum);
	console.log(this.stackNum);
}

function sPush() {
	var array = this.array;
	var length = array.length;

	array[length] = length;

	return array;
}

function sPop() {
	var array = this.array;

	array.length -= 1;

	return array;
}

var Stacker = new Stack();

//stack object created using object initializer

var stackCreator = {

	init: function(number) {
		var array = this.array;
		for (i=0; i < number; i++)
			array[i] = i;
		return array;
	},

	array: [],

	cPush: function() {
	var array = this.array;
	var length = array.length;

	array[length] = length;

	return array;

	},

	cPop: function() {
		var array = this.array;

		array.length -= 1;

		return array;
	}
}

var Stacker2 = Object.create(stackCreator);
Stacker2.notice = "I created this new stack object using Object.create(stackobj)";

console.log(Stacker.array);
console.log(Stacker.init(10));
console.log(Stacker.array);
console.log(Stacker.sPush());
console.log(Stacker.sPush());
console.log(Stacker.sPop());
console.log(Stacker.sPop());
console.log(Stacker.sPop());
console.log('-----------------------------------------');

//makes the stacker2 instance of stackCreator point to its own array instead of the prototype's
Stacker2.array = [];

console.log(Stacker2.init(10));
console.log(stackCreator.init(5));
console.log(Stacker2.cPush());
console.log(Stacker2.cPush());
console.log(Stacker2.cPush());
console.log(Stacker2.cPush());
console.log(Stacker2.cPop());
console.log(Stacker2.cPop());
console.log(Stacker2.array);
console.log(stackCreator.array);

//old fashioned object initilization

var stack = new Object();

stack.push = function(array) {
	this.array = array;
	
	var length = array.length;

	array[length] = length+1;

	return array;
}

console.log('-----------------------------------------');

console.log(stack.push([1,2,3,4,5]));


function fillStack(rows) {
	var stack = [];

	for (i = 0; i < rows; i++) {
		stack[i] = i;
	}
	return stack
}

function push(stack) {
	var last = stack.length;
	stack[last] = last+1;
	return stack;
}

function pop(stack) {
	var popOne = stack.length - 1;
	stack.length = popOne;
	return stack;
}


console.log(fillStack(10));
console.log(push(push([1,2,3,4,5])));
console.log(pop(pop([1,2,3,4,5])));