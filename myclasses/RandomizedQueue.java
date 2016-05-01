import java.lang.NullPointerException;
import java.lang.UnsupportedOperationException;
import java.util.NoSuchElementException;
import java.lang.Iterable;
import java.util.Iterator;

import edu.princeton.cs.algs4.StdRandom;

public class RandomizedQueue<Item> implements Iterable<Item> {

	private int n;
	private Item[] items;
	private int max = 1;

	public RandomizedQueue() {
		n = 0;
		items = (Item[]) new Object[max];
	}
	public boolean isEmpty() {
		return (n == 0);
	}

	public int size() {
		return n;
	}

	public void enqueue(Item item) {
		if (item == null) {
			throw new NullPointerException("Object is Null");
		}
		if (n + 1 > max) {
			resizeMore();
		}
		items[n++] = item;
	}

	public Item dequeue() {
		if (isEmpty()) {
			throw new NoSuchElementException();
		}
		//remove a random item and return it
		int r = StdRandom.uniform(n);

		Item randItem = items[r];

		items[r] = items[--n]; // set random item to last item
		items[n] = null; // null that last item

		if (n > 0 && n == items.length / 4 ) {
			resizeLess();
		}

		return randItem;
	}

	public void resizeMore() {
		max *= 2;
		Item[] copyArr = (Item[]) new Object[max];
		int i = 0;
		for (Item j : items) {
			copyArr[i++] = j;
			}
		items = copyArr;
	}

	public void resizeLess() {
		max /= 2;
		Item[] copyArr = (Item[]) new Object[max];
			for (int i = 0; i < max; i++) {
				copyArr[i] = items[i];
			}
		items = copyArr;
	}

	public Item sample() {
		int r = StdRandom.uniform(n);

		Item randItem = items[r];

		return randItem;
	}

	public Iterator<Item> iterator() {
		return new ListIterator();
	}

	private class ListIterator implements Iterator<Item> {
		int iter = 0;

		public boolean hasNext() {
			return (iter <= n);
		}

		public Item next() {
			if (!hasNext()) {
				throw new NoSuchElementException();
			}
			return items[++iter];
		}
		public void remove() {
			throw new UnsupportedOperationException();
		}
	}

	public static void main(String[] args) {

		RandomizedQueue<String> rando = new RandomizedQueue<String>();

		rando.enqueue("it");
		rando.enqueue("was");
		rando.enqueue("the");
		rando.enqueue("memest");
		rando.enqueue("of");
		rando.enqueue("times");

		System.out.println(rando.dequeue());
		System.out.println(rando.dequeue());
		System.out.println(rando.dequeue());

		System.out.println(rando.sample());

		Iterator<String> iterate = rando.iterator();

		while (iterate.hasNext()) {
			System.out.println(iterate.next());
		}
		
	}
}