import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.In;
import java.util.*;

public static int binarySearch(int[] a, int key) {
	int lo = 0; int hi = a.length-1;

	while (lo <= hi) {
		int mid = lo + (hi - lo)/2;
		if (key < a[mid]) hi = mid-1;
		else if (key > a[mid]) hi = lo = mid+1;
		else return mid;
	}
	return -1;
}
