//Quick Find
//In an array, find the parent node of a given index
//union n^2, find 1

var QuickFind = {
	
	array: [],

	init: function(size) {
		for (i = 0; i < size; i++)
			this.array[i] = i;
	},

	find: function(n1, n2) {
		return this.array[n1] == this.array[n2];
	},

	union: function(n1, n2) {
		var node = this.array[n1];
		for (i = 0; i < this.array.length; i++)
			if (this.array[i] == node)
				this.array[i] = this.array[n2];
	}
}

console.log(QuickFind.array);
QuickFind.init(10);
console.log(QuickFind.array);
QuickFind.union(1,5);
QuickFind.union(2,4);
QuickFind.union(9,0);
QuickFind.union(0,3);
console.log(QuickFind.array);

console.log(QuickFind.find(2,8));
console.log(QuickFind.find(9,3));
console.log(QuickFind.find(3,9));
console.log(QuickFind.find(5,1));

