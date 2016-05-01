import java.lang.Iterable;
import java.util.Iterator;
import edu.princeton.cs.algs4.StdIn;
import myclasses.*;

public class Subset {
	public static void main(String[] args) {
		RandomizedQueue<String> rand = new RandomizedQueue<String>();

		while (!StdIn.isEmpty()) {
		
		String s = StdIn.readString();

		rand.enqueue(s);

		}

		int k = Integer.parseInt(args[0]);

		Iterator<String> iter = rand.iterator();

		for (int i = 0; i < k; i++) {
				System.out.println(rand.dequeue());
			}
		}
}