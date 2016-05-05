public class InsertionSort {

	public static void sort(Comparable[] a) {

		int N = a.length;

		int j;

		for (i = 0; i < N; i++) {

			for (j = i; j >= 0; j--) {
				if (less(a[j], a[j-1])) {
					exch(a, j, j-1);
				}
			}
		}
	}

	private static void exch(Comparable[] a, int i, int j) {
		
		Comparable swap = a[i];
		a[i] = a[j];
		a[j] = swap;

	}

	private static boolean less(Comparable v, Comparable w) {
		return v.compareTo(w) < 0;
	}

	private static boolean isSorted(Comprable[] a) {
		for (int i = 0; i < a.length; i++)
			if (less(a[i], a[i-1]))
				return false;
			return true;
	}
}