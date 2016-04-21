// Selection sort JS implementation

var a = [];

a.push('1', '2', '3', '4', '9', '0', '8', '5');

console.log(a);
a = a.map(Number);

console.log(a);

var b = a.map(function(numbah) {
	return numbah + 1
});

console.log(b);

//a[2] = parseInt(a[2]);

//console.log(Number.isInteger(a[2]));

function SelectionSort(array) {

for (var i = 0; i < array.length; i++) {
	var min = i;

	for (var j = i+1; j < array.length; j++) { //loop through remaining values for a min

	if (array[j] < array[min]) { // assuming we find a specific min value
		min = j; //set that minimum
		}
	}
	//if that min is less than our original leftmost index array value a[i], swap them
	if (array[min] < array[i]) {
	var temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	}
}

console.log(SelectionSort(a));
console.log(a);