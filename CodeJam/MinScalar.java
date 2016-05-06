import java.util.*;
import java.io.*;
import java.lang.*;

public class MinScalar {
	public static void main(String[] args) {
		Scanner in = new Scanner(new BufferedReader(new InputStreamReader(System.in)));
	    int t = in.nextInt();  // 3

	    for (int cases = 1; cases <= t; cases++) {
	    int items = in.nextInt(); // <800

	    Long[] vector1 = new Long[items];
	    Long[] vector2 = new Long[items];

	    for (int vi = 0; vi < items; vi++) {
	    	vector1[vi] = in.nextLong();
	    	}
		for (int vj = 0; vj < items; vj++) {
				vector2[vj] = in.nextLong();
			}

		Arrays.sort(vector1);
		Arrays.sort(vector2, Collections.reverseOrder());

		long min = 0;

		for (int i = 0; i < items; i++) {
			min += vector1[i]*vector2[i];
		}
		System.out.println("Case #" + cases + ": " + min);
	}
}

}