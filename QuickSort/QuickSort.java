import java.util.*;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class QuickSort {

	private QuickSort() { } //dont instantiate

	/* Rearrage array in natural order
	@param a the array to be sorted 
	*/

	public static void sort(Comparable[] a) {
		StdRandom.shuffle(a);
		sort(a, 0, a.length - 1);
		assert isSorted(a);
	}

	// quicksort the subarray from a[lo] to a[hi]
	private static void sort(Comparable[] a, int lo, int hi) {
		if (hi <= lo) return;

		int j = partition(a, lo, hi);
		sort(a, lo, j-1);
		sort(a, j+1, hi);
		assert isSorted(a, lo, hi);	
	}

	//partition for quicksort
	private static int partition(Comparable[] a, int lo, int hi) {
		int i = lo, j = hi + 1;
		while (true)
		{
			while (less(a[++i], a[lo]))
				if (i == hi) break;

			while (less (a[lo], a[--j]))
				if (j == lo) break;

		if (i >= j) break;
		exch(a, i, j);
		}

		exch(a, lo, j);
		return j;
	}

/* Rearrage array so a[k] contains the kth smallest key
a[0] through a[k-1] are less than a[k]; and
a[k+1] through a[N-1] are greater than a[k]
@param a the array
@param k find the kth smallest key
*/

public static Comparable select(Comparable[] a, int k) {
	if (k < 0 || k >= a.length) {
		throw new IndexOutOfBoundsException("Selected element out of bounds");
	}
	StdRandom.shuffle(a);
	int lo = 0, hi = a.length -1;
	while (hi > lo) {
		int i = partition(a, lo, hi);
		if (i > k) hi = i - 1;
		else if (i < k) lo = i + 1;
		else return a[i];
		}
	return a[lo];
	}
/* Helper sorting function */

// is v < w ?
public static boolean less(Comparable v, Comparable w) {
	return v.compareTo(w) < 0;
	}

//exchange a[i] and a[j]
public static void exch(Object[] a, int i, int j) {
	Object swap = a[i];

	a[i] = a[j];
	a[j] = swap;
	}

/* Check if array is sorted. Debugging purposes */

private static boolean isSorted(Comparable[] a) {
	return isSorted(a, 0, a.length-1);
}

private static boolean isSorted(Comparable[] a, int lo, int hi) {
	for (int i = lo + 1; i <= hi; i++)
		if (less(a[i], a[i-1])) return false;
	return true;
}

private static void show(Comparable[] a) {
	for (int i = 0; i < a.length - 1; i++) {
		StdOut.println(a[i]);
	}
}

/* Now...
main reads in sequence of strings from stdin and
quicksorts them
prints them to stdout in ascending order
shuffles the array and prints the strings again
to stdout, but using the select method
*/

public static void main(String[] args) {
	String[] a = StdIn.readAllStrings();
	QuickSort.sort(a);
	show(a);

	//shuffle
	StdRandom.shuffle(a);

	// display results again using select
	StdOut.println();
	for (int i = 0; i < a.length; i++) {
		String ith = (String) QuickSort.select(a, i);
		StdOut.println(ith);
	}
}

}