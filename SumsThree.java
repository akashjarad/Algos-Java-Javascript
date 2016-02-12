import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.In;
import java.util.*;

public class SumsThree {

	public static int count(int[] a) {

	int N = a.length;

	int count = 0;

	for (int i = 0; i < N; i++)
		for (int j = i + 1; j < N; j++)
			for (int k = j + 1; k < N; k++)
				if (a[i] + a[j] + a[k] == 0)
					StdOut.println(a[i] + " " + a[j] + " " + a[k]);
					count++;
	return count;

	}

	public static void main(String[] args) {

		int[] a = In.readInts(args[0]);
		StdOut.println(count(a));

	}
}