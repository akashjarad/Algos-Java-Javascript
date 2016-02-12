//linked lists in javascript
//a linked list in FIFO: First In, First Out

var Node = {
	data: null,
	next: null
}

var node1 = Object.create(Node);
var node2 = Object.create(Node);
var node3 = Object.create(Node);

node1.data = "data1";
node1.next = node2;

node2.data = "data2";
node2.next = node3;

node3.data = "data3";
node3.next = null;

console.log(node1);
console.log(node2);
console.log(node3);



