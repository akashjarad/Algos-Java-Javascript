// Insertion Sort

var a = [4,3,7,5,10,65,1,9,2];

var b = ["c", "z", "aa", "b", "g", "a"];

console.log(a);

function InsertionSort(arr) {
	
	for (i = 0; i < arr.length; i++) {

		var j = i;
		while (j >= 0) {
			if (arr[j+1] < arr[j]) {
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
			}
		j = j-1;
		}
	}
}

InsertionSort(a);
console.log(a)

function exch(a, v1, v2) {
	var swap = a[v1];
	a[v1] = a[v2];
	a[v2] = swap;
}

function InsertionSort2(arr) {
	var a = arr.length;

	for (i = 0; i < a; i++) {
		for (j = i; j >= 0; j--) {
			if (arr[j] > arr[j+1])
				exch(arr, j, j+1);
		}
	}
}

InsertionSort2(a);

console.log(a);
console.log(b);

InsertionSort2(b);

console.log(b);