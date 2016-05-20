var mergeA = [5, 10, 3, 6, 1, 0, 56, 32, 90, 34];
count = 0;

var MergeSort = function(array) {
	console.log(count++);

	if (array.length < 2) {
		return array;
	}

	var mid = Math.floor(array.length/2);

	var left=array.slice(0,mid);
	var right=array.slice(mid);
	console.log(left);
	console.log(right);

	return merge(MergeSort(left), MergeSort(right));
}

var merge = function(left,right) {

	var aux = [],
	leftpart = 0,
	rightpart = 0;

	while (leftpart < left.length && rightpart < right.length) {
		if (left[leftpart] < right[rightpart]) {
			aux.push(left[leftpart++]);
		}
		else {
			aux.push(right[rightpart++]);
		}
	}
	return aux.concat(left.slice(leftpart)).concat(right.slice(rightpart));
}

var Msort = function(array) {

	var count = 0;

	MergeSort(array, aux, 0, array.length - 1)
}

var less = function(v1, v2) {
	if (v1 < v2) {
		return true;
	}
	else {
		return false;
	}
}

var exch = function(array,v1,v2) {
	var swap = array[v1];
	array[v1] = array[v2];
	array[v2] = swap;
}

console.log(MergeSort(mergeA));