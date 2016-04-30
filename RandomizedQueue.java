public class RandomizedQueue<Item> implements Iterable<Item> {

	private Node first;
	private Node last;

	private class Node {
		Item item;
		Node next;
		Node prev;
	}

	public RandomizedQueue() {
		first = null;
		last = null;

	}
	public boolean isEmpty() {
		return (first == null);

	}

	public int size() {

	}

	public void enqueue(Item item) {

	}

	public Item dequeue() {

	}

	public Item sample() {

	}

	public Iterator<Item> iterator() {

	}

	public static void main(String[] args) {
		
	}
}