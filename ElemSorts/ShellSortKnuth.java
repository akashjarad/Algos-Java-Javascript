public class ShellSort {
	public static void sort(Comparable[] a) {

		int N = a.length;

		// 3x + 1 increment sequence: 1,4,13,40, 121, 364
		int h = 1;

		while (h < N/3)
			h = 3*h + 1;

		while (h >= 1) {
			//h-sort the array
			for (int j = i; j >= h && less(a[j], j -= h) {
				exch(a, j, j-h);
			}
		}
		assert isHsorted(a, h);
		h /= 3;
	}
	assert isSorted(a);

	private static boolean isSorted(Comparable[] a) {
        for (int i = 1; i < a.length; i++)
            if (less(a[i], a[i-1])) return false;
        return true;
    }

    // is the array h-sorted?
    private static boolean isHsorted(Comparable[] a, int h) {
        for (int i = h; i < a.length; i++)
            if (less(a[i], a[i-h])) return false;
        return true;
    }

    // print array to standard output
    private static void show(Comparable[] a) {
        for (int i = 0; i < a.length; i++) {
            StdOut.println(a[i]);
        }
    }

    /**
     * Reads in a sequence of strings from standard input; Shellsorts them; 
     * and prints them to standard output in ascending order. 
     */
    public static void main(String[] args) {
        String[] a = StdIn.readAllStrings();
        Shell.sort(a);
        show(a);
    }
}