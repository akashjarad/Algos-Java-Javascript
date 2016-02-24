Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

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
	}

	that.get_name = function() {
		return spec.name + ' ' + that.purr(6) + ' ' + that.says();
	}
  return that;
}

var myCat = cat({name: 'milo'});

myCat.get_name();

Object.method('superior', function(name) {
	var that = this;

	method = that[name];

	return function() {
		return method.apply(that, arguments);
	};
});

var coolcat = function(spec) {
	var that = cat(spec);

	super_get_name = that.superior('get_name');

	that.get_name = function (n) {
		return 'like ' + super_get_name() + ' baby'; 
	};

	return that;
};

var myCoolCat({name: 'Bixnood'});
var name = myCoolCat.get_name();
