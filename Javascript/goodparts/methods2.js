var by = function (name) {
	return function (o, p) {
		var a, b;

		if (typeof o === 'object' && typeof p === 'object' && o && p) {
			a = o[name];
			b = p[name];

			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1: 1;
			}
			return typeof a < typeof b ? -1: 1;
		}

		else {
			throw {
				name: 'Error',
				message: 'Expected an object when sorting by ' + name
			}
		}
	}
}

var s = [
{first: 'Joe',
last: 'Besser'},
{first: 'Moe',
last: 'Howard'},
{first: 'Joe',
last: 'DeRita'},
{first: 'Shemp', last: 'Howard'},
{first: 'Larry', last: 'Fine'},
{first: 'Curly', last: 'Howard'}
];

console.log(s.sort(by('first')));

//not stable

// s.sort(by('first')).sort(by('last')) cant do that

var newby = function (name, minor) {
	return function (o, p) {
		var a, b;

		if (o && p && typeof o === 'object' && typeof p === 'object') {
			a = o[name];
			b = p[name];

			if (a === b) {
				return typeof minor === 'function' ? minor(o,p) : 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		}
		else {
			throw {
				name: 'Error',
				message: 'Expected an object when sorting by ' + name
			};
		}
	}
}

console.log(s.sort(newby('last', newby('first'))));

//SPLICE METHOD

n = [1,2,3,4,5];

var b = n.splice(3, 1, 'number');

console.log(n);
console.log(b);