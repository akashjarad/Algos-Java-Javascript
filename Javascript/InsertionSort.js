// Insertion Sort

var a = [4,3,7,5,10,65,1,9,2];

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

console.log(a);