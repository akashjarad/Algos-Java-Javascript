//Artificial global object

var OverObject = {}

OverObject.person = {
	student: 'true',
	first: 'john',
	last: 'smith',
	occupation: 'student',
	'good_standing': 'true'
}

OverObject.policies = {
	network: 'Student',
	'port_access': 'true',
	'library_access': 'true'
	'read_policy': function() {
		if (this.port_access == true)
			return 'list of ports';
		else {
			return false;
		}
	}
}

console.log(add(2,9));
console.log(OverObject['library_access']);
console.log(OverObject.occupation);

// Method invocation pattern
// 'this' is attached to object context
ExObject = {};

ExObject.innerObj = {
	value: 0,
	increment: function(inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
}

//function invocation pattern
// 'this' is attached to global context, which is bad
var add = function(a, b) {
	return a + b;
}
//workaround is to make a value = object's this and pass it as argument

ExObject.anotherInner = {
	value: 0,
	double: function() {
		var that = this;

		var helper = function() {
			that.value = add(that.value, that.value);
		}
		helper();
	}
}

//constructor invocation pattern
// 'this' is attached to new object if 'new' is used to create object
//not recommened use case

var Quo = function(string) {
	this.status = string;
}

Quo.prototype.get_status = function() {
	return this.status;
}

var QuoStat = new Quo("protypical");

QuoStat.get_status()

//apply invocation pattern
//apply lets us construct array of arguments to use when invoking function

var arrayNumbers = [2,9];

var sum = add.apply(null, arrayNumbers);

//we can invoke get_status on a new object that isn't constructed with new Quo by using apply

var statusObject = {
	status: "Feelin' Fine"
}

var status = Quo.prototype.get_status.apply(statusObject);

//hidden arguments array of every function

var summa = function() {
	var i, sum = 0;

	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

//'arguments' is technically not an array, just an array-like object with a length property

//Throwing exceptions
var addit = function(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add only takes number types'
		};
	}
	else {
	return a + b;
	}
}

//try_it function calls new add incorrectly
//try/catch catch(e) where e is the throw object

var try_it = function() {
	try {
		addit("seven")
		}
	catch(e) {
		console.log("error " + e.name + ":" + e.message);
	}
}

try_it();

//lets augment the basic atomic types of javascript
//lets add a method to the function prototype so all functions have it

Function.prototype.newMeth = function() {
	return "ayyyy lmao meth";
}

var sup = function() {

}

sup.newMeth();

//better yet, lets augment javascript and fix the function type problem where we now dont have to
//type the function of the prototype property

Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

//add integer extractor method by augmenting the Number type
//we can just call the method because Number is a function type and we fixed the prototype

Number.method('integer', function() {
	return Math[this < 0 ? 'cieling' : 'floor'](this);
});

//defend against adding methods arbitrarily

Function.prototype.method = function(name, func) {
	if (!this.prototype[name])
		this.prototype[name] = func;
}

//recursiveness and recursive functions

//hanoi recursive function, no disc larger on top of smaller

var hanoi = function(dsc, src, aux, dst) {
	if (dsc > 0) {
		hanoi(dsc - 1, src, aux, dst);
		console.log('move disc ' + dsc + 'from' + src + 'to' + dst);
		hanoi(dsc-1, arc, aux, dst);
	};
}

hanoi(3, 'src', 'aux', 'dst');

//walk the DOM example

var walk_the_dom = function(node,func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk_the_dom(node,func);
		node = node.nextSibling;
	}
}

//looks for attribute name in node using walk_the_node
// and push to an array, the returns the array

var getElementsAttribute = function(attr, value) {
	var results = [];
	walk_the_dom(document.body, function(node) {
		var actual = node.nodeType === 1 && node.getAttribute(attr);
		if (typeof actual === 'string' &&
			(actual === value || typeof value !== 'string')) {
				results.push(node)
		}
	})
	return results;
}

//tail recursion, factorial example
//does ECMA6 optimize tail recursion? maybe

var factorial = function(i, a) {
	a = 1 || a;

	if (i < 2)
		return a;

	return factorial(a - 1, a * i);
}

//scope
//provides modularizaiton and auto memory management
//reduces naming collisions

var foo = function() {
	var a=7, b=3;

	var bar = function() {
		var b=20, c=11;

	//here a = 7 and b = 20 and c = 11

	a += b + c;

	//here a = 21, b = 7, c = 11

	}

	//here a =7, b = 3, and c is undefined

	bar();

	//here a=21, b = 3
}

function foo() {
  var x = 3;
  
  if (x) {
    
    (function () {
      var x = 7;
      console.log(x);
    }());
    
  }
  
  console.log(x);
}

foo();

function test() {
  try {
  foo();
  }
  
  catch(e) {
    console.log(e);
  }
  console.log(foo);
  bar();
  
  var foo = function() {
    console.log("i am foo but I'm not run because only"
  + "the declaration is hoisted, not the function assignment");
  }
  
  function bar() {
    console.log('hello from bar');
    var x = 1;
  }
  
}

test()


//block scope
//variables in a block can be released upon exiting the block
//javascript originally didnt have blocks scope
//but ecma6 does: let = 5

var newObject = function() {
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}();

//closure with quo

var quo = function(status) {
	return {
		get_status: function() {
		return status;
		}
	};
};

var newQuo = quo('sleepy');

//fade runs, the inner function steps gets passed the level value by reference...
//the actual variable itself

var fade = function(node) {
	var level = 1;

	var step = function() {
		var hex = level.toString(16);
		node.style.backgroundColor = "#FFFF" + hex + hex;
		if (level < 15) {
			level++;
			setTimeout(step, 100);
			}
		};
	setTimeout(step, 100);
	}

setInterval(function () {
	fade(document.getElementById('js'));
}, 2000);

var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (e) {
		alert(i);
		};
	}
};

//function returns only the total number of nodes
//it fails because the alert(i) is bound to the i value when its complete
//not when the function is created

var add_the_handlers_improved = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (i) {
			return function (e) {
			alert(e);
			};
		}(i);
	}
}

//we pass in i at the time of function creation by
//invoking the function at the same time with (){}(i)
//attaching the variable i at the same time the function is created and invoked

//synchronous function freezes the server until it returns the reponse

var request = get_info();
var response = return_info_synchronously(request);
display(response);

//asynchronous functions allow server and webpage to be in communication while
//the response is rendered without blocking the server from responding to other requests

var request = get_info();

return_info_asynchronously(request, function(response) {
	display(response);
});

/************** MODULES *****************/

//use functions and closures to make modules
//modules hide state and implementation while presenting an interface
//mitigates need for global variables which are evil

String.method('deentityify', function() {
	//entity table. maps entites to characters

	var entity = {
		quot: '""',
		lt: '<',
		rt: '>'
	}

	return function () {
		return this.replace(/&([^&;]+);/g,
			function (a,b) {
				var r = entity[b];
				return typeof r === 'string' ? r : a
			}
		);
	};
}());


//produce an object that produces 2 unique strings

/********* PRIVATE VARIABLES WITH CLOSURES *************/

var serial_maker = function () {
	var prefix = "";
	var seq = 0;

	return {
		set_prefix: function(p) {
			prefix = String(p);
		},
		set_seq: function(s) {
			seq = s;
		},
		gen_sym: function() {
			var result = prefix + seq;
			seq++;
			return result;
		}
	};
}

//error in book
//seqer.set_prefix = ('Q';) is
//seqer.set_prefix('Q');
//seqer.set_seq = (2000) should be seqer.set_seq(2000);

/***************** CASCADING ****************/

//typical for methods that change or set state to return nothing

//if those methods return 'this' instead of nothing, we can enable Cascades
//aka "method-chaining"

getElement(boxDiv)
	.move(350, 150)
	.backgroundColor('blue')
	.padding('1em')
	.color('black')
	.box-shadow(etc)
	.etc(etcparam);

//each method returns the object

//Cascading can alos enable currying

/************ CURRYING *****************/

//Currying produces a new function by combining a function and an argument

var add1 = add.curry(1);
console.log(add1(6)) // = 7

//curry...carry...it carries the value with it to the new function invocation

Function.method('curry', function() {
	var slice = Array.prototype.slice;
	var args = slice.apply(arguments);
	//var args = arguments
	var that = this;

	return function() {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
}); //but something isnt right...

//arguments array is not actually an array, so it doesnt have the concat method
//we have to add it manually to the method with array prototypes slice method

/*********** MEMOIZATION **********/
//using objects to remember the results of previous operations

//fibonacci example

var fibo = function(n) {
	return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
	}

for (i = 0; i < 20; i++) {
	console.log(i + " : " + fibo(i));
}

//lots of unnecessary work
//fibo calls itself 400+ times for values its already computed

//better fibo version using MEMOIZATION

var fibonacci = function() {
	var memo = [0,1];
	var fib = function(n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fibo(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}(); // <--- remember the closure for the function to maintain access to inner variable's state

fibonacci(10);
//works, the argument is passed through to fib() because its a closure, a function invoked;

//closure example

function makeAdder(x) {
	return function(y) {
		return x + y;
	}
}

var add10 = makeAdder(7);

console.log(add10(3));

//nested function returns, multiple closures that maintain state of last return function environment

function makeAdder(x) {
  return function(y) {
	return function(z) {
		return x + y + z;
    	}
	}
}

var add10 = makeAdder(7);

var addAgain = add10(3);

console.log(addAgain);

var add3times = addAgain(5);

console.log(add3times);

var fibonacci = function() {
	var memo = [0,1];
	var fib = function(n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fibo(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();

//memoizer function

var memoizer = function(memo, fundamental) {
	var shell = function (n) {
		var result = memo[n]; 

		if (typeof result !== 'number') {
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	}
	return shell;
}

var fibonacci = memoizer([0, 1], function (shell, n) { //shell()
    return shell(n - 1) + shell(n - 2);
});

var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            console.log("Hence 'shell(n-1)+shell(n-2)' results in the assignment memo["+n+"]="+result);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};
var fibonacci = memoizer([0, 1], function (shell, n) {
    console.log("shell is called, and 'n' is equal to --> " + n + "\n" + "At this point shell(n-1)="+shell(n-1)+" AND shell(n-2)="+shell(n-2));
    return shell(n - 1) + shell(n - 2);    
});

//factorial using memoization function

var factorial = memoizer([1, 1], function (shell, n) {
return n * shell(n - 1);
});


// CHAPTER 5 INHERITANCE

Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

Function.method('new', function() {

	var that = Object.create(this.prototype);
  
	var other = this.apply(that, arguments);

	return (typeof other === 'object' && other || that);
})

var object1 = function() {
  return {
    "numba": 1234,
    "words": "words and stuff"
  }
}
var object2 = new(object1);
console.log(something) //object('numba: 1234, words: words and stuff')

/*** Define a constructor and augment it's prototype ***/

var Mammal = function(name) {
	this.name = name;
}

Mammal.prototype.get_name = function() {
	return this.name;
}

Mammal.prototype.says = function() {
	return this.saying || '';
}

//now make an instance

var Squirrel = Mammal('larry');

var squname = Squirrel.get_name();

//now make a psuedoclass

var Cat = function(name) {
	this.name = name;
	this.saying = 'meow';
}

Cat.prototype = new Mammal();

//augment the new cat->mammal prototype with Cat methods

Cat.prototype.purr = function(n) {
	var s = '';

	for (i = 0; i < n; i++)
		s += 'r';

	return s;
}

Cat.purr(8);

//use method 'method' to define an inherits method to make the object-orientedness less 'alien'

Function.method('inherits', function(Parent) {

	this.prototype = new Parent();
	return this;
})

//since method and inherits both return 'this', we can cascade the function calls
//into a method-chaining

var Panther = function(name) {
	this.name = name;
	this.saying = 'MEOW';
}.
	inherits(Mammal).
	method('purr', function(n) {
		var s;

		for (i = 0; i < n; i++)
			s += 'R';

		return s;
	}).
		method('get_name', function() {
			return this.name;
		});

var lenny = new Panther('lenny');

var name = lenny.get_name();
var purr = lenny.purr(19);
var sayings = lenny.saying;

problems with new:
	no runtime or compile time errors about this and global variable if you forget new
	no private variables, all public

instead of using the psuedoclassical model, which is mainly composed to focus on static type checking
javascript is free of static type constraints

"Much of the complexity of class hierarchies is motivated by the constraints of static type checking"
javascript doesnt need to use classes for code reuse

/**************** OBJECT SPECIFIERS *********************/

//help to remember the order of arguments in constructor

//so instead of 

var newObjectX = maker(f, l, m, c, s);

//use object identifier

var newObjectY = maker({
	first: f,
	last: l,
	middle: m,
	city: c,
	state: s
})

//create a useful object with an object literal

var Cat = {
	name: "Carey the Cat",

	get_name: function() {
		return this.name;
	}

	purr: function(n) {
		for (i = 0; i < n; i++)
			s += 'r';
		return 'pu' + s;
	},

	says: function() {
		return this.saying || '';
	}
}

console.log(Cat.get_name())

var Panther = Object.create(Cat);

Cat.name = "Pete the Panther";

//DIFFERENTIAL INHERITANCE

//customize a new object with different properties than the object its inherited from

//block scoping
//when a block is called it is enclosed with its own private variables
//it inherits from its outer scope, in a sense

var block = function() {

	//remember the current scope
	//make new scope with everything from current scope

	var oldScope = scope;
	scope = Object.create(scope);

	//advance past the left curly brace

	advance('{');

	//parse using the new scope

	parse(scope);

	//advance past the right curly brace
	//discard the new scope and restore the outer old scope

	var scope = OldScope;

}

/************ FUNCTIONAL PATTERN ****************/

weakness of prototypal inheritance: NO PRIVACY

fix: make function that produces objects

the function:

1. Creates a new object
	-can make an object literal
	-use new prefix with a constructor function
	-use Object.create(existing_object) to make new instance of existing object
	-or call any function that returns an object

2. Optionally defines private instance variables and methods
	-just vars

3. Augment that new object with methods.
	-these methods have privileged access to the parameters and vars in step 2

4. Returns the new object

/*** psuedo code template for functional constructor ***/

var constructor = function(spec, my) {

	var that, //other private instance variables

	var my = my || {}

	//add shared variables and functions to 'my'

	that = new object;

	//add priviledged methods to 'that'

	return that;

}

//add share secrets to my object

my.member = value;

//augment that, assign new functions to members of that

var methodical = function() {

}

that.methodical = methodical;

2 steps
private that.methodical can be replaced by changing its instance but not affect
other objects that call methodical function

var mammal = function(spec) {
	var that = {};

	that.get_name = function() {
		return spec.name;
	};

	that.says = function() {
		return spec.saying || ' ';
	};

	return that;
}

var myMammal = mammal({name: 'Herbert'});


var cat = function(spec) {
	spec.saying = spec.saying || "meow";

	var that = mammal(spec);

	that.purr = function(s) {
		var purring = 'pu';
		for (i = 0; i < s; i++)
			purring += 'r';
		return purring;
	};

	that.get_name = function() {
		return spec.name + ' ' + that.purr(6) + ' ' + that.says();
	};
	return that;
}


Object.method('superior', function(name) {
	var that = this;

	method = that[name];

	return function() {
		return method.apply(that, arguments);
	}
});

var coolcat = function(spec) {
	var that = cat(spec);

	super_get_name = that.superior('get_name');

	that.get_name = function (n) {
		return 'like ' + super_get_name() + ' baby'; 
	};

	return that;
};

var myCoolCat({name: 'Biso'});
var name = myCoolCat.get_name();

//we made durable objects
//durable means that dont make use of this or that, and are tamperproof

//parts. compose parts into an object

var eventuality = function(that) {
	var registry = {};

	//fire and event on an object

	that.fire = function(event) {
		var array,
			func,
			handler,
			i,
			type = typeof event === 'string' ? event : event.type

	//if array of handlers exist, loop through and execute the handlers in order

	if (registry.hasOwnProperty(type)) {
		array = registry.type;

		for (i=0; i < array.length; i++) {
			handler = array[i];

	//a handler record contains a method and an optional array of parameters
	//if the method is a name, look up the function

			func = handler.method;
			if (typeof func === 'string') {
				func = this.func;
			}

	//invoke a handler, if the record contains parameters pass them on. otherwise, pass event object

			func.apply(this, handler.parameters || [event] )

			}
		}

	return this;
	} // end of this.fire method definition

	that.on = function(type, method, parameters) {

		//register an event 
		//make a handler record
		//put it in an array

		var handler = {
			method: method,
			parameters: parameters
		};

		if (registry.hasOwnProperty(type)) {
			registry[type].push(handler);
		}

		else {
			registry[type] = [handler];
		}

		return this;
		};

	return that;

}; //end of eventuality function constructor parts definition

//we can call eventuality on any object, giving it event handling methods 

eventuality(that);

/******* END CHP5: INHERITANCE *********/

/****** START CHP6: ARRAYS ***********/

Array Literal: gets array.prototype. with useful properties for numbers. including length 

var array_numbers = ['zero', 'one', 'two'];

Object literal. gets object.prototype

var object_numbers = {
	'1': 'one',
	'2': 'two',
	'3': 'three'
}

//IN java array members need to all be of same type
// in javascript, arrays can have members of any type

var misc = ['string', 98.7, undefined, null,
            ['nested', 'array', 123], {'ayy': 'lmao'}, true,
            Infinity, NaN ]


misc.length // 9