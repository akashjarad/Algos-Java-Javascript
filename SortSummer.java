import myclasses.*;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

public class SortSummer {
	private static void show(Comparable[] a) {
        for (int i = 0; i < a.length; i++) {
            StdOut.println(a[i]);
        }
    }
	public static void main(String[] args) {
		MergeSort MergeThis= new MergeSort();
		String[] a = StdIn.readAllStrings();
		
		MergeThis.sort(a);
		show(a);
	}
}