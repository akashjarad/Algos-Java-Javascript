import java.lang.*;
import java.util.*;

public class MyDate implements Comparable<MyDate> {
	private final int month,day, year;

	public MyDate(int m, int d, int y) {
		month = m;
		day = d;
		year = y;
	}

	public int compareTo(MyDate that) {

		if (this.year < that.year) return -1;
		if (this.year > that.year) return +1;
		if (this.month < that.month) return -1;
		if (this.month > that.month) return +1;
		if (this.day < that.day) return -1;
		if (this.day > that.day) return +1;
		return 0;
	}

	public static void main(String[] args) {

		MyDate test = new MyDate(3, 11, 1990);

		MyDate test2 = new MyDate(2, 23, 1989);

		System.out.println(test.compareTo(test2));
	}
}