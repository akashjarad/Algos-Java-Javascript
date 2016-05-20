public class MergeSortBU {

	private static Comparable[] aux;

	private static void merge(Comparable[] a, int lo, int mid, int hi) {
		assert isSorted(a, lo, mid); //precondition: a[lo...mid] sorted
		assert isSorted(a, mid+1, hi); //precondition a[mid+1...hi] sorted
	
		for (int k = lo; k <= hi; k++) {
			aux[k] = a[k];
			}

		int i = lo, j = mid+1;

		for (int k = lo; k <= hi; k++) {
			if (i < mid)
				a[k] = aux[j++];
			else if (j > hi)
				a[k] = aux[i++];
			else if (less(aux[j], aux[i]))
				a[k] = aux[j++];
			else
				a[k] = aux[i++];
			}
		assert isSorted(a, lo, hi);
	}

	private static sort(Comparable[] a) {
		int N = a.length;

		aux = new Comparable[N];

		for (int size = 1; size < N; size=size+size) {
			for (int lo = 0; lo < N-size; lo+= size+size) {
				merge(a, lo, lo+size-1, Math.min(lo+size+size-1, N-1));
			}
		}
	}

	public static void sort(Comparable[] a) {
		aux = new Comparable[a.length];
		sort(a, aux, 0, a.length - 1);
	}

	private static boolean less(Comparable v1, Comparable v2) {
		return v1.compareTo(v2) < 0;
	}
}