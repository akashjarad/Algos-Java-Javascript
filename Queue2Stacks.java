/*Queue with two stacks. 
Implement a queue with two stacks 
so that each queue operations takes 
a constant amortized number of stack operations.*/

import java.util.*;

public class Queue2Stacks<What> {

	private Stack<What> inner = new Stack<What>();
	private Stack<What> outer = new Stack<What>();

	public void queue(What thing) {
		inner.push(thing);
	}
	
	public What dequeue() {
		if (outer.isEmpty()) {
		while (!inner.isEmpty()) {
			outer.push(inner.pop());
			}
		}
	return outer.pop();
	}

	public Stack<What> hey(Stack<What> stack) {
		return stack;
	}

public static void main(String[] args) {
	Queue2Stacks<String> burp = new Queue2Stacks<String>();

	burp.queue("hello");
	burp.queue("what");
	burp.queue("you");
	burp.queue("do..");

	System.out.println(burp.dequeue());
	System.out.println(burp.dequeue());

	System.out.println(burp.dequeue());

	System.out.println(burp);

}

}