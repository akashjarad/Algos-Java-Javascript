import java.lang.NullPointerException;
import java.lang.UnsupportedOperationException;
import java.util.NoSuchElementException;
import java.lang.Iterable;
import java.util.Iterator;

import edu.princeton.cs.algs4.StdRandom;

public class RandomizedQueue<Item> implements Iterable<Item> {

	private Node first;
	private Node last;
	//private Node current;


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
		if (isEmpty()) {
			return 0;
		}

		Node temp = first.next;
		int count = 1;

		while(temp != last) { // or last
			temp = temp.next;
			count++;
		}

		return count;
	}

	public void enqueue(Item item) {
		if (item == null) {
			throw new NullPointerException();
			}

		Node n = new Node();

		n.item = item;

		if (first != null) {
		n.prev = last;
		n.next = first;
		last.next = n;
		last = n;
		}
		else {
			first = n;
			last = n;
			n.next = null;
			n.prev = null;
		}
	}

	public Item dequeue() {
		Item randItem = sample();
		Node temp = first;
		Item tempItem = first.item;
		for (int i = 0; i <= size(); i++) {
			temp = temp.next;

			if (randItem == temp.item) {
				tempItem = temp.item;
				temp.item = null;
			}
		}
		return tempItem;
	}

	public Item sample() {
		int r = StdRandom.uniform(0, size()+1);
		System.out.println(r);
		Node temp = first;

		for (int i = 0; i <= r; i++) {
			temp = temp.next;
		}
		return temp.item;
	}

	public Iterator<Item> iterator() {
		return new ListIterator();
	}

	private class ListIterator implements Iterator<Item> {
		private Node current = first;

		public boolean hasNext() {
			return (current.next != null);
		}

		public Item next() {
			if (current == null) {
				throw new NoSuchElementException();
			}

			Item item = current.item;
			current = current.next;
			return item;
			}

		public void remove() {
			throw new UnsupportedOperationException();
		}
	}

	public static void main(String[] args) {
		RandomizedQueue<String> randomQ = new RandomizedQueue<String>();

		randomQ.enqueue("yo");
		randomQ.enqueue("whats");
		randomQ.enqueue("up");
		randomQ.enqueue("how you");
		randomQ.enqueue("is burv");

		System.out.println(randomQ.sample());

		System.out.println(randomQ.iterator().next());

		System.out.println(randomQ.dequeue());
		System.out.println(randomQ.dequeue());

		while (randomQ.iterator().hasNext()) {
			System.out.println(randomQ.iterator().next());
		}
	}
}