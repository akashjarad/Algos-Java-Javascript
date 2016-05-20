public class QuickSelect {

	private static int partition(Comparable[] a, int lo, int hi) {
		int i = lo, j = hi+1;
		while (true) {
			while (less(a[++i], a[lo])) //find item on left to swap
				if (i == hi) break;
			while (less(a[lo], a[--j])) //find item on right to swap
				if (j == lo) break;

		if (i >= j) break;
		exch(a, i, j);
		}
		exch(a, lo, j) //swap with partition item
		return j; //return index of item that is now in place
	}

	public static Comparable select(Comparable[] a, int k) {
		StdRandom.shuffle(a);
		int lo = 0, hi = a.length - 1;

		while (hi > lo)
		{
			int j = partition(a, lo, hi);
			if (j < k) lo = j + 1;
			else if (j > k) hi = j - 1;
			else return a[k];
		}
		return a[k];
	}
}