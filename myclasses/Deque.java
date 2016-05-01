/*Programming Assignment 2: Randomized Queues and Deques

Write a generic data type for a deque and a randomized queue.
The goal of this assignment is to implement elementary data structures
using arrays and linked lists, and to introduce you to generics and iterators. 
*/

import java.util.*;
import java.lang.*;

public class Deque<Item> implements Iterable<Item> {

	//java.lang.NullPointerException
	//java.lang.UnsupportedOperationException
	//java.util.NoSuchElementException
	private Node first;
	private Node last;

	private class Node {
		Item item;
		Node next;
		Node prev;
	}

	public Deque() {
		first = null;
		last = null;
	}

	public boolean isEmpty() {
		return (first == null);
	}

	public int size() {
		// return the number of items on the deque
        if (isEmpty()) return 0;
        int count = 1;
        Node n = first;
        while (n != last) {
            count++;
            n = n.next;
        }
        return count;
	}

	public void addFirst(Item item) {
		if (item == null) {
			throw new NullPointerException();
			}
		Node n = new Node();
		n.item = item;
		if (first != null) {
			first.prev = n;
			n.next = first;
			n.prev = null;
			first = n;
		}
		else {
			first = n;
			last = n;
			n.next = null;
			n.prev = null;
		}
	}

	public void addLast(Item item) {
		if (item == null) {
			throw new NullPointerException();
		}
		Node n = new Node();
		n.item = item;
		if (last != null) {
			n.prev = last;
			last.next = n;
			n.next = null;
			last = n;
		}
		else {
			first = n;
			last = n;
			n.prev = null; //first.next = n; //if last is null, first might not be null
			n.next = null;
		}
	}

	public Item removeFirst() {
		if (first == null) {
			throw new NoSuchElementException();
			}
		Item n = first.item;

		first = first.next;

		if (first != null) {
			first.prev = null;
		}
		else {
			last = null;
		}

		return n;
	}

	public Item removeLast() {
		if (last == null) {
			throw new NoSuchElementException();
		}

		Item n = last.item;

		last = last.prev;
		last.next = null;

		return n;

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

		Deque<String> deck = new Deque<String>();

		deck.addFirst("what");
		deck.addFirst("asd");
		deck.addFirst("454");
		deck.addFirst("ghh");
		deck.addFirst("wahh");

		//deck.addLast(45);

		Iterator<String> deck2 = deck.iterator();

		System.out.println(deck.size());

		while (deck2.hasNext()) {
			System.out.println(deck2.next());
		};

	}
}



