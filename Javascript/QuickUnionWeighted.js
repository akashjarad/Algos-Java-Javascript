//QuickUnion
//QuickUnion: is faster with union (N), slower with find (N)
//QuickFind: finds the index value (1) by making the union method slower (N
//QuickUnionWeighted: is faster with union (log N), and find (log N) in log base 10

var QuickUnion = {
	array: [],
	subsize: 0,
	init: function(size) {
		for (i = 0; i < size; i++)
			this.array[i] = i;
	},
	root: function(i) {
		this.subsize = 0;
		while (i != this.array[i]) { //chase the root til i is equal an array index
			i = this.array[i]; //tricky. set i equal to whatever is at array[i]
			this.subsize++;
			}
		return i;
	},
	find: function(n1, n2) {
		return this.root(n1) == this.root(n2);
	},
	union: function(n1, n2) {
		var root1 = this.root(n1);
		var sz1 = this.subsize;
		var root2 = this.root(n2);
		var sz2 = this.subsize;
		if (sz1 < sz2) //make small component child of big component to make flat, short trees
			this.array[root1] = root2; 
		else
			this.array[root2] = root1;
	}
}

console.log(QuickUnion.array);
QuickUnion.init(10);
console.log(QuickUnion.array);
QuickUnion.union(1,5);
QuickUnion.union(2,4);
QuickUnion.union(9,0);
QuickUnion.union(0,3);
QuickUnion.union(4,8);
QuickUnion.union(4,9);
console.log(QuickUnion.array);

console.log(QuickUnion.find(2,8));
console.log(QuickUnion.find(9,3));
console.log(QuickUnion.find(3,9));
console.log(QuickUnion.find(5,1));